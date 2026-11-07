// @ts-nocheck
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";

import Loading from "./pages/loading";

import NotFound from "./pages/not-found";


import "./index.css";

const pages = import.meta.glob("./pages/**/*.{js,jsx,ts,tsx}");

function normalizeRoute(filePath: string) {
  return filePath
    .replace("./pages", "")
    .replace(/\.(js|jsx|ts|tsx)$/, "")
    .replace(/\/index$/, "")
    .replace(/\[([^\]]+)\]/g, ":$1")
    .toLowerCase();
}

function getDir(filePath: string) {
  return filePath.substring(0, filePath.lastIndexOf("/"));
}

type RouteNode = {
  path: string;
  layout: React.LazyExoticComponent<any> | null;
  page: React.LazyExoticComponent<any> | null;
  children: RouteNode[];
  parent: RouteNode | null;
};

const protectedPrefixes = ["/home", "/dashboard"];
const isProtected = (path: string) =>
  protectedPrefixes.some(
    (prefix) => path === prefix || path.startsWith(prefix + "/")
  );

function buildRouteTree(pages: Record<string, () => Promise<any>>) {
  const root: RouteNode = { path: "/", layout: null, page: null, children: [], parent: null };
  const map = new Map<string, RouteNode>();
  map.set("/", root);

  for (const filePath of Object.keys(pages)) {
    const dir = normalizeRoute(getDir(filePath)) || "/";
    if (!map.has(dir)) {
      map.set(dir, { path: dir, layout: null, page: null, children: [], parent: null });
    }
  }

  for (const [path, node] of map.entries()) {
    if (path === "/") continue;
    const parentPath = path.substring(0, path.lastIndexOf("/")) || "/";
    const parentNode = map.get(parentPath);

    if (parentNode) {
      node.parent = parentNode;
      parentNode.children.push(node);
    }
  }

  for (const [filePath, importer] of Object.entries(pages)) {
    const dir = normalizeRoute(getDir(filePath)) || "/";
    const node = map.get(dir)!;

    const isLayout = /layout\.(js|jsx|ts|tsx)$/.test(filePath);

    if (isLayout) {
      node.layout = React.lazy(importer);
      continue;
    }

    if (filePath.includes("loading") || filePath.includes("not-found")) continue;

    const routePath = normalizeRoute(filePath);

    if (routePath === dir) {
      node.page = React.lazy(importer);
    } else {
      const relativePath = routePath.replace(dir, "").replace(/^\/+/, "");
      node.children.push({
        path: relativePath || "/",
        page: React.lazy(importer),
        layout: null,
        children: [],
        parent: node,
      });
    }
  }

  return root;
}

function renderRoutes(node: RouteNode) {
  const Element = node.layout
    ? () => (
        
        <node.layout>         
          <Outlet />
        </node.layout>
      )
    : Outlet;

  return (
    <Route key={node.path} path={node.path} element={<Element />}>
      {node.page && (
        <Route
          index
          element={
            isProtected(node.path) ? (
              
                <node.page />
             
            ) : (
              <node.page />
            )
          }
        />
      )}
      {node.children.map(renderRoutes)}
    </Route>
  );
}

const tree = buildRouteTree(pages);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            {renderRoutes(tree)}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HeroUIProvider>
  </React.StrictMode>
);

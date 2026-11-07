// src/pages/layout.jsx
import { Outlet } from "react-router-dom";
import { CMain, CContainer, CViewRounded, CViewCenter, CView } from "../ui";

export default function Layout() {
  return (
    <CMain>
      <Outlet />
    </CMain>
  );
}

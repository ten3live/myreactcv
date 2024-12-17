import React from "react";
import { NavLink } from "react-router";

export default function Home() {
  return (
    <div>
      {/* <!-- start team --> */}
      <div id="team">
        <div className="container">
          <div className="row">
            <div id="service">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2
                      className="wow bounceIn"
                      data-wow-offset="50"
                      data-wow-delay="0.3s"
                    >
                      <span>Courses</span>
                    </h2>
                  </div>

                  <NavLink
                    newid={"PLiGrFSAT1J7JAjZV8vOUuG6_zXtR15peP"}
                    to={"/course/?id=PLiGrFSAT1J7JAjZV8vOUuG6_zXtR15peP"}
                    className="col-md-3 wow fadeIn"
                    data-wow-offset="50"
                    data-wow-delay="0.6s"
                  >
                    <i className="fa fa-html5" style={{ color: "#E34F26" }}></i>
                    <h4>HTML In Sindhi</h4>
                    <p>
                      HTML Course || Learn Complete HTML in Sindhi Language.
                    </p>
                  </NavLink>
                  <NavLink
                    newid={"PLiGrFSAT1J7JNoA2amXl3BIyCsZnVwY1I"}
                    to={"/course/?id=PLiGrFSAT1J7JNoA2amXl3BIyCsZnVwY1I"}
                    className="col-md-3 wow fadeIn"
                    data-wow-offset="50"
                    data-wow-delay="0.6s"
                  >
                    <i className="fa fa-css3" style={{ color: "#1572B6" }}></i>
                    <h4>CSS In Sindhi</h4>
                    <p>CSS Course || Learn Complete CSS in Sindhi Language.</p>
                  </NavLink>
                  <NavLink
                    newid={"PLiGrFSAT1J7JNrovfmXZnPXvfB-wwc7yz"}
                    to={"/course/?id=PLiGrFSAT1J7JNrovfmXZnPXvfB-wwc7yz"}
                    className="col-md-3 wow fadeIn"
                    data-wow-offset="50"
                    data-wow-delay="0.6s"
                  >
                    <i
                      className="fa fa-wordpress"
                      style={{ color: "#21759B" }}
                    ></i>
                    <h4>WordPress</h4>
                    <p>
                      Wordpress Course || Learn Complete Wordpress in Urdu
                      Language.
                    </p>
                  </NavLink>
                  <NavLink
                    newid={"PLiGrFSAT1J7KLwW0cz4eD4UHDe0Ko7C7L"}
                    to={"/course/?id=PLiGrFSAT1J7KLwW0cz4eD4UHDe0Ko7C7L"}
                    className="col-md-3 wow fadeIn"
                    data-wow-offset="50"
                    data-wow-delay="0.6s"
                  >
                    <i
                      className="fa fa-laptop"
                      style={{ color: "#4CAF50" }}
                    ></i>
                    <h4>PC and Laptop Tricks</h4>
                    <p>
                      HTML Course || Learn Complete HTML in Sindhi Language.
                    </p>
                  </NavLink>

                  <h1 className="text-center">Coming Soon</h1>

                  <NavLink
                    newid={"PLiGrFSAT1J7KLwW0cz4eD4UHDe0Ko7C7L"}
                    to={"/course/?id=PLiGrFSAT1J7KLwW0cz4eD4UHDe0Ko7C7L"}
                    className="col-md-3 wow fadeIn"
                    data-wow-offset="50"
                    data-wow-delay="0.6s"
                  >
                    <i className="fa fa-globe" style={{ color: "#4CAF50" }}></i>
                    <h4>Website</h4>
                    <p>
                      HTML Course || Learn Complete HTML in Sindhi Language.
                    </p>
                  </NavLink>
                  <NavLink
                    newid={"PLiGrFSAT1J7JAjZV8vOUuG6_zXtR15peP"}
                    to={"/course/?id=PLiGrFSAT1J7JAjZV8vOUuG6_zXtR15peP"}
                    className="col-md-3 wow fadeIn"
                    data-wow-offset="50"
                    data-wow-delay="0.6s"
                  >
                    <i
                      className="fa fa-pencil"
                      style={{ color: "#1877F2" }}
                    ></i>
                    <h4>Graphics Design</h4>
                    <p>
                      We design beautiful Logos and Brouchers for your Brand &
                      Company.
                    </p>
                  </NavLink>

                  <div
                    className="col-md-3 wow fadeIn"
                    data-wow-offset="50"
                    data-wow-delay="0.6s"
                  >
                    <i className="fa fa-cog" style={{ color: "#1877F2" }}></i>
                    <h4>SEO</h4>
                    <p>
                      Give our 100% to make your site into Google's top 10 sites
                      using Keywords that are relevent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

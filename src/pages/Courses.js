import React from "react";
import { NavLink } from "react-router";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaSnapchat,
  FaPinterest,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaLaravel,
  FaPhp,
  FaJs,
  FaWordpress,
  FaSearch,
  FaPaintBrush,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiReact,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
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
                    newid={"PLiGrFSAT1J7LNseSeZg5SpelXEiyQE0N8"}
                    to={"/course/?id=PLiGrFSAT1J7LNseSeZg5SpelXEiyQE0N8"}
                    className="col-md-3 wow fadeIn"
                    data-wow-offset="50"
                    data-wow-delay="0.6s"
                  >
                    <i className="fa fa-html5" style={{ color: "#E34F26" }}></i>
                    <h4>HTML </h4>
                    <p>HTML Course || Learn Complete HTML Language.</p>
                  </NavLink>
                  <NavLink
                    newid={"PLiGrFSAT1J7IidpRAXTCOmrg5bpDXAfTK"}
                    to={"/course/?id=PLiGrFSAT1J7IidpRAXTCOmrg5bpDXAfTK"}
                    className="col-md-3 wow fadeIn"
                    data-wow-offset="50"
                    data-wow-delay="0.6s"
                  >
                    <i className="fa fa-css3" style={{ color: "#1572B6" }}></i>
                    <h4>CSS</h4>
                    <p>CSS Course || Learn Complete CSS Language.</p>
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
                  <div
                    style={{ display: "flex", gap: "10px", fontSize: "2rem" }}
                  >
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#4267B2" }}
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1DA1F2" }}
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#C13584" }}
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#0077B5" }}
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#FF0000" }}
                    >
                      <FaYoutube />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#333" }}
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://snapchat.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#FFFC00" }}
                    >
                      <FaSnapchat />
                    </a>
                    <a
                      href="https://pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#E60023" }}
                    >
                      <FaPinterest />
                    </a>
                  </div>
                  <div className="flex flex-wrap justify-center gap-6 text-4xl">
                    {/* HTML */}
                    <div className="text-orange-500">
                      <FaHtml5 title="HTML5" />
                    </div>

                    {/* CSS */}
                    <div className="text-blue-500">
                      <FaCss3Alt title="CSS3" />
                    </div>

                    {/* Tailwind CSS */}
                    <div className="text-teal-500">
                      <SiTailwindcss title="Tailwind CSS" />
                    </div>

                    {/* Bootstrap */}
                    <div className="text-purple-600">
                      <FaBootstrap title="Bootstrap" />
                    </div>

                    {/* ReactJS */}
                    <div className="text-blue-400">
                      <FaReact title="ReactJS" />
                    </div>

                    {/* React Native */}
                    <div className="text-blue-400">
                      <SiReact title="React Native" />
                    </div>

                    {/* Laravel */}
                    <div className="text-red-600">
                      <FaLaravel title="Laravel" />
                    </div>

                    {/* PHP */}
                    <div className="text-indigo-600">
                      <FaPhp title="PHP" />
                    </div>

                    {/* JavaScript */}
                    <div className="text-yellow-500">
                      <FaJs title="JavaScript" />
                    </div>

                    {/* WordPress */}
                    <div className="text-blue-600">
                      <FaWordpress title="WordPress" />
                    </div>

                    {/* SEO */}
                    <div className="text-green-500">
                      <FaSearch title="SEO" />
                    </div>

                    {/* Graphics Design (Adobe Photoshop and Illustrator) */}
                    <div className="text-gray-800">
                      <SiAdobephotoshop title="Adobe Photoshop" />
                    </div>
                    <div className="text-orange-500">
                      <SiAdobeillustrator title="Adobe Illustrator" />
                    </div>
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

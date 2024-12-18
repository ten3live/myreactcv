import React from "react";
import WALogo from "../assets/wp-logo.png";
export default function Navbar() {
  return (
    <div>
      <a
        href="https://wa.me/+923058452372?text=Hello%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        className="whatsapp-button"
        style={{
          position: "fixed",
          bottom: 60,
          right: 20,
          zIndex: 1000,
          borderRadius: 50,
          padding: 10,
        }}
        title="Chat with us on WhatsApp"
      >
        <img
          src={WALogo}
          style={{ display: "block", height: 60, width: 60 }}
          alt="WhatsApp"
        />
      </a>

      {/* <!-- start header --> */}
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-4 col-xs-12">
              <p>
                <i className="fa fa-phone"></i>
                <span> Phone</span>+923058452372
              </p>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-12">
              <p>
                <i className="fa fa-envelope-o"></i>
                <span> Email</span>
                <a href="#">ten3live@gmail.com</a>
              </p>
            </div>
            <div className="col-md-5 col-sm-4 col-xs-12">
              <ul className="social-icon">
                <li>
                  <span>Meet us on</span>
                </li>
                <li>
                  <a
                    href="https://facebook.com/7sajjadali"
                    className="fa fa-facebook"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/ten1live"
                    className="fa fa-twitter"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/7sajjadali"
                    className="fa fa-instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/ten3live"
                    className="fa fa-linkedin"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- end header --> */}
      {/* <!-- start navigation --> */}
      <nav className="navbar navbar-default templatemo-nav" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>
            <a
              href="/#top"
              className="navbar-brand"
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  style={{
                    objectFit: "contain",
                    paddingBottom: "10px",
                    height: "60px",
                    width: "60px",
                  }}
                  src="../images/logo.png"
                />
              </div>
              <div>
                <p>Tahiri Services</p>
              </div>
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/#top">Home</a>
              </li>

              <li>
                <a href="/#service">Services</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/#team">Team</a>
              </li>
              <li>
                <a href="/#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- end navigation --> */}
    </div>
  );
}

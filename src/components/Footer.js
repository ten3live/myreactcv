import React from "react";

export default function Footer() {
  return (
    <div>
      {" "}
      {/* <!-- start contact --> */}
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="wow bounceIn"
                data-wow-offset="50"
                data-wow-delay="0.3s"
              >
                CONTACT <span>US</span>
              </h2>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeInRight"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div className="text-center">
                <img
                  style={{
                    objectFit: "contain",
                    height: "auto",
                    width: 120,
                    borderRadius: 100,
                  }}
                  src="../images/topiwhite.png"
                />
                <h1>Tahiri Services</h1>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeInRight"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            ></div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeInRight"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            ></div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 wow fadeInRight"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <address>
                <p className="address-title">CONTACTS</p>
                <span>Feel free to Contact us.</span>
                <p>
                  <i className="fa fa-phone"></i> +923058452372
                </p>
                <p>
                  <i className="fa fa-envelope-o"></i> ten3live@gmail.com
                </p>
                <p>
                  <i className="fa fa-map-marker"></i> Kandiaro Sindh Pakistan
                  67050
                </p>
              </address>
              <ul className="social-icon">
                <li>
                  <h4>WE ARE SOCIAL</h4>
                </li>
                <br></br>
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
      </div>
      {/* <!-- end contact --> */}
      {/* <!-- start copyright --> */}
      <footer id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p
                className="wow bounceIn"
                data-wow-offset="50"
                data-wow-delay="0.3s"
              >
                Copyright &copy; 2024 Tahiri Services
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- end copyright --> */}
    </div>
  );
}

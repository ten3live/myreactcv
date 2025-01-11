import React, { useEffect, useRef,useState } from "react";
import { NavLink } from "react-router";
import Typed from "typed.js";

const MyComponent = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "We Develop Websites and Web Apps",
        "Android and IOS Apps",
        "SEO Search Engine Optimization",
        "Logo Design and Branding",
      ],
      typeSpeed: 30,
      backSpeed: 20,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el}></span>;
};

export default function Home() {
  return (
    <>
      {/* <!-- start home --> */}
      <div id="home" className="bg-opacity-75 bg-dark">
        <div className="background-blur"></div>
        <div className="background-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8">
              <h1
                className="wow fadeIn"
                data-wow-offset="50"
                data-wow-delay="0.9s"
              >
                Welcome to <br />
                <span>Tahiri Services</span>
              </h1>
              <div className="element">
                <MyComponent />
              </div>

              <div className="flex justify-start gap-6">
                <a
                  data-scroll
                  href="#contact"
                  className="btn btn-default wow fadeInUp"
                  data-wow-offset="50"
                  data-wow-delay="0.6s"
                >
                  Contact Us
                </a>
                <NavLink
                  data-scroll
                  to="/courses"
                  className="btn btn-default wow fadeInUp"
                  data-wow-offset="50"
                  data-wow-delay="0.6s"
                >
                  Courses
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end home --> */}

      {/* <!-- start service --> */}
      <div id="service">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="wow bounceIn"
                data-wow-offset="50"
                data-wow-delay="0.3s"
              >
                <span>SERVICES</span>
              </h2>
            </div>
            <div
              className="col-md-3 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <i className="fa fa-laptop"></i>
              <h4>Web Development</h4>
              <p>
                We develop Websites using PHP , WordPress , ReactJS , NextJS ,
                Laravel etc...
              </p>
            </div>
            <div
              className="col-md-3 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.9s"
            >
              <i className="fa fa-mobile"></i>
              <h4>Mobile Apps</h4>
              <p>Apps for Android and IOS using React Native.</p>
            </div>
            <div
              className="col-md-3 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <i className="fa fa-cog"></i>
              <h4>SEO</h4>
              <p>
                Give our 100% to make your site into Google's top 10 sites using
                Keywords that are relevent.
              </p>
            </div>
            <div
              className="col-md-3 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <i className="fa fa-pencil"></i>
              <h4>Graphics Design</h4>
              <p>
                We design beautiful Logos and Brouchers for your Brand &
                Company.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end servie --> */}

      {/* <!-- start team --> */}
      <div id="team">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="wow bounceIn"
                data-wow-offset="50"
                data-wow-delay="0.3s"
              >
                TEAM
              </h2>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-8 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="1.3s"
            >
              <div className="team-wrapper">
                <img
                  src="images/team-img1.jpg"
                  className="img-responsive"
                  alt="team img 1"
                />
                <div className="team-des">
                  <h4>Sajjad Ali</h4>
                  <span>Software Engineer</span>
                  <p>
                    Full Stack Developer from Pakistan with a strong background
                    in PHP, JavaScript, React, React Native, Node.js, Laravel,
                    SEO, WordPress Development, and Graphics Design. with 2
                    Years of Experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- start portfolio --> */}
      <div id="portfolio" className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="wow bounceIn"
                data-wow-offset="50"
                data-wow-delay="0.3s"
              >
                PORTFOLIO
              </h2>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div className="portfolio-thumb">
                <img
                  src="images/alavish.png"
                  className="img-responsive portimg"
                  style={{objectFit:'contain'}}
                  alt="portfolio img 1"
                />
                <div className="portfolio-overlay">
                  <h4>Alavish Choice</h4>
                  <p>Ecommerce project developed in WordPress.</p>
                  <a
                    href="https://alavishchoice.com"
                    className="btn btn-default"
                  >
                    DETAIL
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div className="portfolio-thumb">
                <img
                  src="images/better.png"
                  className="img-responsive portimg"
                  style={{objectFit:'contain'}}
                  alt="portfolio img 2"
                />
                <div className="portfolio-overlay">
                  <h4>Better Half</h4>
                  <p>Matrimonial Project using WordPress.</p>
                  <a href="https://better-half.pk" className="btn btn-default">
                    DETAIL
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div className="portfolio-thumb">
                <img
                  src="images/aash.png"
                  className="img-responsive portimg"
                  style={{objectFit:'contain'}}
                  alt="portfolio img 3"
                />
                <div className="portfolio-overlay">
                  <h4>Aashiyanaa</h4>
                  <p>Matrimonial Project using WordPress.</p>
                  <a href="https://aashiyanaa.pk" className="btn btn-default">
                    DETAIL
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div className="portfolio-thumb">
                <img
                  src="images/skwe.png"
                  className="img-responsive portimg"
                  style={{objectFit:'contain'}}
                  alt="portfolio img 4"
                />
                <div className="portfolio-overlay">
                  <h4>SK Welfare</h4>
                  Charity Project using WordPress.
                  <a href="https://skwelfare.pk" className="btn btn-default">
                    DETAIL
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div className="portfolio-thumb">
                <img
                  src="images/mahtab.png"
                  className="img-responsive portimg"
                  style={{objectFit:'contain'}}
                  alt="portfolio img 3"
                />
                <div className="portfolio-overlay">
                  <h4>Mahtab Engineering</h4>
                  Portfolio Project using PHP.
                  <a
                    href="https://mahtabengineering.com"
                    className="btn btn-default"
                  >
                    DETAIL
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div className="portfolio-thumb">
                <img
                  src="images/sk.png"
                  className="img-responsive portimg"
                  style={{objectFit:'contain'}}
                  alt="portfolio img 4"
                />
                <div className="portfolio-overlay">
                  <h4>SK Matrimonial Android App</h4>
                  <p>Android Project using React Native.</p>
                  <a
                    href="https://skmatrimonial.com"
                    className="btn btn-default"
                  >
                    DETAIL
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div className="portfolio-thumb">
                <img
                  src="images/hmcc.jpg"
                  className="img-responsive portimg"
                  style={{objectFit:'contain'}}
                  alt="portfolio img 1"
                />
                <div className="portfolio-overlay">
                  <h4>HMCC Consulting</h4>
                  <p>Compnay Project using React JS.</p>
                  <a
                    href="https://hmccconsulting.org"
                    className="btn btn-default"
                  >
                    DETAIL
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn"
              data-wow-offset="50"
              data-wow-delay="0.6s"
            >
              <div className="portfolio-thumb">
                <img
                  src="images/hunza.png"
                  className="img-responsive portimg"
                  style={{objectFit:'contain'}}
                  alt="portfolio img 2"
                />
                <div className="portfolio-overlay">
                  <h4>Hunza Exports</h4>
                  <p>Company project using HTML and JavaScript.</p>
                  <a
                    href="https://hunzaexports.com"
                    className="btn btn-default"
                  >
                    DETAIL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end portfolio --> */}
    </>
  );
}

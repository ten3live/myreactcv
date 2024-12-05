import React from 'react'
import img1 from './assets/wp-logo.png'
export default function App() {
  return (<div id="top">
<a href="https://wa.me/+923058452372?text=Hello%20I%20am%20interested%20in%20your%20services" target="_blank" class="whatsapp-button" style={{position: 'fixed',bottom: 60,
   right: 20,
  zIndex:1000,
   borderRadius: 50,
   padding: 10}} title="Chat with us on WhatsApp">
    <img src={img1} style={{display:'block',height:40, width:40}} alt="WhatsApp" />
</a>
		{/* <!-- start preloader --> */}
		<div className="preloader">
			<div className="sk-spinner sk-spinner-wave">
     	 		<div className="sk-rect1"></div>
       			<div className="sk-rect2"></div>
       			<div className="sk-rect3"></div>
      	 		<div className="sk-rect4"></div>
      			<div className="sk-rect5"></div>
     		</div>
    	</div>
    	{/* <!-- end preloader --> */}

        {/* <!-- start header --> */}
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <p><i className="fa fa-phone"></i><span> Phone</span>+923058452372</p>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <p><i className="fa fa-envelope-o"></i><span> Email</span><a href="#">ten3live@gmail.com</a></p>
                    </div>
                    <div className="col-md-5 col-sm-4 col-xs-12">
                        <ul className="social-icon">
                            <li><span>Meet us on</span></li>
                            <li><a href="https://facebook.com/7sajjadali" className="fa fa-facebook"></a></li>
                            <li><a href="https://twitter.com/ten1live" className="fa fa-twitter"></a></li>
                            <li><a href="https://instagram.com/7sajjadali" className="fa fa-instagram"></a></li>
                            <li><a href="https://linkedin.com/in/ten3live" className="fa fa-linkedin"></a></li>
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
					<button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span className="icon icon-bar"></span>
						<span className="icon icon-bar"></span>
						<span className="icon icon-bar"></span>
					</button>
					<div className="navbar-brand" style={{textAlign: 'center',display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
						<div><img  style={{objectFit: 'contain',paddingBottom: '10px',height:'60px',width:'60px'}}  src="./images/logo.png"/></div>
						<div><p>Tahiri Services</p></div>
	
					</div>
				</div>
				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li><a href="#top">HOME</a></li>
					
						<li><a href="#service">SERVICES</a></li>
						<li><a href="#team">TEAM</a></li>
						<li><a href="#portfolio">PORTFOLIO</a></li>
						<li><a href="#contact">CONTACT</a></li>
					</ul>
				</div>
			</div>
		</nav>
		{/* <!-- end navigation --> */}

    	{/* <!-- start home --> */}
    	<div id="home" className="bg-opacity-75 bg-dark">
   <div className="background-blur"></div> 
<div className="background-overlay"></div>
    <div className="container">
    			<div className="row">
    				<div className="col-md-offset-2 col-md-8">
    					<h1 className="wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">Welcome to <br/><span>Tahiri Services</span></h1>
    					<div className="element">
                            <div className="sub-element">We Develop Websites and Web Apps</div>
                            <div className="sub-element">Android and IOS Apps</div>
                            <div className="sub-element">SEO Search Engine Optimization</div>
                            <div className="sub-element">Logo Design and Branding</div>
                        </div>
    					<a data-scroll href="#contact" className="btn btn-default wow fadeInUp" data-wow-offset="50" data-wow-delay="0.6s">Contact Us</a>
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
    					<h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s"><span>SERVICES</span></h2>
    				</div>
    				<div className="col-md-3 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
    					<i className="fa fa-laptop"></i>
    					<h4>Web Development</h4>
    					<p>We develop Websites using PHP , WordPress , ReactJS , NextJS , Laravel etc...</p>
    				</div>
    				<div className="col-md-3 wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">
    					<i className="fa fa-mobile"></i>
    					<h4>Mobile Apps</h4>
    					<p>Apps for Android and IOS using React Native.</p>
    				</div>
    				<div className="col-md-3 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
    					<i className="fa fa-cog"></i>
    					<h4>SEO</h4>
    					<p>Give our 100% to make your site into Google's top 10 sites using Keywords that are relevent.</p>
    				</div>
    				<div className="col-md-3 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
    					<i className="fa fa-pencil"></i>
    					<h4>Graphics Design</h4>
    					<p>We design beautiful Logos and Brouchers for your Brand & Company.</p>
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
    					<h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">TEAM</h2>
    				</div>
    				<div className="col-md-3 col-sm-6 col-xs-8 wow fadeIn" data-wow-offset="50" data-wow-delay="1.3s">
    					<div className="team-wrapper">
    						<img src="images/team-img1.jpg" className="img-responsive" alt="team img 1"/>
    							<div className="team-des">
    								<h4>Sajjad Ali</h4>
    								<span>Software Engineer</span>
    								<p>Full Stack Developer from Pakistan with a strong background in PHP, JavaScript, React, React Native, Node.js, Laravel, SEO, WordPress Development, and Graphics Design.
  										with 2 Years of Experience.
								</p>
    							</div>
    					</div>
    				</div>
    				</div>
          </div>
          </div>
    
    	{/* <!-- start portfolio --> */}
    	<div id="portfolio">
    		<div className="container">
    			<div className="row">
    				<div className="col-md-12">
    					<h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">PORTFOLIO</h2>
    				</div>
    				<div className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
    					   <img src="images/alavish.png" className="img-responsive portimg" alt="portfolio img 1"/>
                                <div className="portfolio-overlay">
                                    <h4>Alavish Choice</h4>
                                    <p>Ecommerce project developed in WordPress.</p>
                                    <a href="https://alavishchoice.com" className="btn btn-default">DETAIL</a>
                                </div>
                        </div>
    				</div>
    				<div className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                           <img src="images/better.png" className="img-responsive portimg" alt="portfolio img 2"/>
                                <div className="portfolio-overlay">
                                    <h4>Better Half</h4>
                                    <p>Matrimonial Project using WordPress.</p>
                                    <a href="https://better-half.pk" className="btn btn-default">DETAIL</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                           <img src="images/aash.png" className="img-responsive portimg" alt="portfolio img 3"/>
                                <div className="portfolio-overlay">
                                    <h4>Aashiyanaa</h4>
                                    <p>Matrimonial Project using WordPress.</p>
                                    <a href="https://aashiyanaa.pk" className="btn btn-default">DETAIL</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                           <img src="images/skwe.png" className="img-responsive portimg" alt="portfolio img 4"/>
                                <div className="portfolio-overlay">
                                    <h4>SK Welfare</h4>
                                    Charity Project using WordPress.
                                    <a href="https://skwelfare.pk" className="btn btn-default">DETAIL</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                           <img src="images/mahtab.png" className="img-responsive portimg" alt="portfolio img 3"/>
                                <div className="portfolio-overlay">
                                    <h4>Mahtab Engineering</h4>
                                    Portfolio Project using PHP.
                                    <a href="https://mahtabengineering.com" className="btn btn-default">DETAIL</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                           <img src="images/sk.png" className="img-responsive portimg" alt="portfolio img 4"/>
                                <div className="portfolio-overlay">
                                    <h4>SK Matrimonial Android App</h4>
                                    <p>Android Project using React Native.</p>
                                    <a href="https://skmatrimonial.com" className="btn btn-default">DETAIL</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                           <img src="images/hmcc.jpg" className="img-responsive portimg" alt="portfolio img 1"/>
                                <div className="portfolio-overlay">
                                    <h4>HMCC Consulting</h4>
                                    <p>Compnay Project using React JS.</p>
                                    <a href="https://hmccconsulting.org" className="btn btn-default">DETAIL</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                           <img src="images/hunza.png" className="img-responsive portimg" alt="portfolio img 2"/>
                                <div className="portfolio-overlay">
                                    <h4>Hunza Exports</h4>
                                    <p>Company project using HTML and JavaScript.</p>
                                    <a href="https://hunzaexports.com" className="btn btn-default">DETAIL</a>
                                </div>
                        </div>
                    </div>
    			</div>
    		</div>
    	</div>
    	{/* <!-- end portfolio --> */}

    	{/* <!-- start contact --> */}
    	<div id="contact">
    		<div className="container">
    			<div className="row">
    				<div className="col-md-12">
    					<h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">CONTACT <span>US</span></h2>
    				</div>
    				
    				<div className="col-md-6 col-sm-6 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
    					<address>
    						<p className="address-title">CONTACTS</p>
    						<span>Feel free to Contact us.</span>
    						<p><i className="fa fa-phone"></i> +923058452372</p>
    						<p><i className="fa fa-envelope-o"></i> ten3live@gmail.com</p>
    						<p><i className="fa fa-map-marker"></i> Kandiaro Sindh Pakistan 67050</p>
    					</address>
    					<ul className="social-icon">
    						<li><h4>WE ARE SOCIAL</h4></li>
    						<li><a href="facebook.com/7sajjadali" className="fa fa-facebook"></a></li>
    						<li><a href="twitter.com/ten1live" className="fa fa-twitter"></a></li>
    						<li><a href="instagram.com/7sajjadali" className="fa fa-instagram"></a></li>
    						<li><a href="linkedin.com/in/ten3live" className="fa fa-linkedin"></a></li>
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
                        <p className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">
                       	Copyright &copy; 2024 Tahiri Services</p>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- end copyright --> */}

	</div>
  )
}

import React from 'react'

export default function App() {
  return (<div id="top">

		{/* <!-- start preloader --> */}
		<div class="preloader">
			<div class="sk-spinner sk-spinner-wave">
     	 		<div class="sk-rect1"></div>
       			<div class="sk-rect2"></div>
       			<div class="sk-rect3"></div>
      	 		<div class="sk-rect4"></div>
      			<div class="sk-rect5"></div>
     		</div>
    	</div>
    	{/* <!-- end preloader --> */}

        {/* <!-- start header --> */}
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-4 col-xs-12">
                        <p><i class="fa fa-phone"></i><span> Phone</span>+923058452372</p>
                    </div>
                    <div class="col-md-3 col-sm-4 col-xs-12">
                        <p><i class="fa fa-envelope-o"></i><span> Email</span><a href="#">ten3live@gmail.com</a></p>
                    </div>
                    <div class="col-md-5 col-sm-4 col-xs-12">
                        <ul class="social-icon">
                            <li><span>Meet us on</span></li>
                            <li><a href="https://facebook.com/7sajjadali" class="fa fa-facebook"></a></li>
                            <li><a href="https://twitter.com/ten1live" class="fa fa-twitter"></a></li>
                            <li><a href="https://instagram.com/7sajjadali" class="fa fa-instagram"></a></li>
                            <li><a href="https://linkedin.com/in/ten3live" class="fa fa-linkedin"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- end header --> */}

    	{/* <!-- start navigation --> */}
		<nav class="navbar navbar-default templatemo-nav" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
					</button>
					<div class="navbar-brand" style={{textAlign: 'center',display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
						<div><img  style={{objectFit: 'contain',paddingBottom: '10px',height:'60px',width:'60px'}}  src="./images/logo.png"/></div>
						<div><p>Tahiri Services</p></div>
	
					</div>
				</div>
				<div class="collapse navbar-collapse">
					<ul class="nav navbar-nav navbar-right">
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
    	<div id="home" class="bg-opacity-75 bg-dark">
   <div class="background-blur"></div> 
<div class="background-overlay"></div>
    <div class="container">
    			<div class="row">
    				<div class="col-md-offset-2 col-md-8">
    					<h1 class="wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">Welcome to <br/><span>Tahiri Services</span></h1>
    					<div class="element">
                            <div class="sub-element">We Develop Websites and Web Apps</div>
                            <div class="sub-element">Android and IOS Apps</div>
                            <div class="sub-element">SEO Search Engine Optimization</div>
                            <div class="sub-element">Logo Design and Branding</div>
                        </div>
    					<a data-scroll href="#contact" class="btn btn-default wow fadeInUp" data-wow-offset="50" data-wow-delay="0.6s">Contact Us</a>
    				</div>
    			</div>
    		</div>
    	</div>
    	{/* <!-- end home --> */}

    
	
		{/* <!-- start service --> */}
    	<div id="service">
    		<div class="container">
    			<div class="row">
    				<div class="col-md-12">
    					<h2 class="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s"><span>SERVICES</span></h2>
    				</div>
    				<div class="col-md-3 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
    					<i class="fa fa-laptop"></i>
    					<h4>Web Development</h4>
    					<p>We develop Websites using PHP , WordPress , ReactJS , NextJS , Laravel etc...</p>
    				</div>
    				<div class="col-md-3 wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">
    					<i class="fa fa-mobile"></i>
    					<h4>Mobile Apps</h4>
    					<p>Apps for Android and IOS using React Native.</p>
    				</div>
    				<div class="col-md-3 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
    					<i class="fa fa-cog"></i>
    					<h4>SEO</h4>
    					<p>Give our 100% to make your site into Google's top 10 sites using Keywords that are relevent.</p>
    				</div>
    				<div class="col-md-3 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
    					<i class="fa fa-pencil"></i>
    					<h4>Graphics Design</h4>
    					<p>We design beautiful Logos and Brouchers for your Brand & Company.</p>
    				</div>
    			</div>
    		</div>
    	</div>
    	{/* <!-- end servie --> */}

	

    	{/* <!-- start team --> */}
    	<div id="team">
    		<div class="container">
    			<div class="row">
    				<div class="col-md-12">
    					<h2 class="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">TEAM</h2>
    				</div>
    				<div class="col-md-3 col-sm-6 col-xs-8 wow fadeIn" data-wow-offset="50" data-wow-delay="1.3s">
    					<div class="team-wrapper">
    						<img src="images/team-img1.jpg" class="img-responsive" alt="team img 1"/>
    							<div class="team-des">
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
    		<div class="container">
    			<div class="row">
    				<div class="col-md-12">
    					<h2 class="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">PORTFOLIO</h2>
    				</div>
    				<div class="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div class="portfolio-thumb">
    					   <img src="images/alavish.png" class="img-responsive portimg" alt="portfolio img 1"/>
                                <div class="portfolio-overlay">
                                    <h4>Alavish Choice</h4>
                                    <p>Ecommerce project developed in WordPress.</p>
                                    <a href="https://alavishchoice.com" class="btn btn-default">DETAIL</a>
                                </div>
                        </div>
    				</div>
    				<div class="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div class="portfolio-thumb">
                           <img src="images/better.png" class="img-responsive portimg" alt="portfolio img 2"/>
                                <div class="portfolio-overlay">
                                    <h4>Better Half</h4>
                                    <p>Matrimonial Project using WordPress.</p>
                                    <a href="https://better-half.pk" class="btn btn-default">DETAIL</a>
                                </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div class="portfolio-thumb">
                           <img src="images/aash.png" class="img-responsive portimg" alt="portfolio img 3"/>
                                <div class="portfolio-overlay">
                                    <h4>Aashiyanaa</h4>
                                    <p>Matrimonial Project using WordPress.</p>
                                    <a href="https://aashiyanaa.pk" class="btn btn-default">DETAIL</a>
                                </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div class="portfolio-thumb">
                           <img src="images/skwe.png" class="img-responsive portimg" alt="portfolio img 4"/>
                                <div class="portfolio-overlay">
                                    <h4>SK Welfare</h4>
                                    Charity Project using WordPress.
                                    <a href="https://skwelfare.pk" class="btn btn-default">DETAIL</a>
                                </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div class="portfolio-thumb">
                           <img src="images/mahtab.png" class="img-responsive portimg" alt="portfolio img 3"/>
                                <div class="portfolio-overlay">
                                    <h4>Mahtab Engineering</h4>
                                    Portfolio Project using PHP.
                                    <a href="https://mahtabengineering.com" class="btn btn-default">DETAIL</a>
                                </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div class="portfolio-thumb">
                           <img src="images/sk.png" class="img-responsive portimg" alt="portfolio img 4"/>
                                <div class="portfolio-overlay">
                                    <h4>SK Matrimonial Android App</h4>
                                    <p>Android Project using React Native.</p>
                                    <a href="https://skmatrimonial.com" class="btn btn-default">DETAIL</a>
                                </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div class="portfolio-thumb">
                           <img src="images/hmcc.jpg" class="img-responsive portimg" alt="portfolio img 1"/>
                                <div class="portfolio-overlay">
                                    <h4>HMCC Consulting</h4>
                                    <p>Compnay Project using React JS.</p>
                                    <a href="https://hmccconsulting.org" class="btn btn-default">DETAIL</a>
                                </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12 m-5 p-5 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div class="portfolio-thumb">
                           <img src="images/hunza.png" class="img-responsive portimg" alt="portfolio img 2"/>
                                <div class="portfolio-overlay">
                                    <h4>Hunza Exports</h4>
                                    <p>Company project using HTML and JavaScript.</p>
                                    <a href="https://hunzaexports.com" class="btn btn-default">DETAIL</a>
                                </div>
                        </div>
                    </div>
    			</div>
    		</div>
    	</div>
    	{/* <!-- end portfolio --> */}

    	{/* <!-- start contact --> */}
    	<div id="contact">
    		<div class="container">
    			<div class="row">
    				<div class="col-md-12">
    					<h2 class="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">CONTACT <span>US</span></h2>
    				</div>
    				
    				<div class="col-md-6 col-sm-6 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
    					<address>
    						<p class="address-title">CONTACTS</p>
    						<span>Feel free to Contact us.</span>
    						<p><i class="fa fa-phone"></i> +923058452372</p>
    						<p><i class="fa fa-envelope-o"></i> ten3live@gmail.com</p>
    						<p><i class="fa fa-map-marker"></i> Kandiaro Sindh Pakistan 67050</p>
    					</address>
    					<ul class="social-icon">
    						<li><h4>WE ARE SOCIAL</h4></li>
    						<li><a href="facebook.com/7sajjadali" class="fa fa-facebook"></a></li>
    						<li><a href="twitter.com/ten1live" class="fa fa-twitter"></a></li>
    						<li><a href="instagram.com/7sajjadali" class="fa fa-instagram"></a></li>
    						<li><a href="linkedin.com/in/ten3live" class="fa fa-linkedin"></a></li>
    					</ul>
    				</div>
    			</div>
    		</div>
    	</div>
    	{/* <!-- end contact --> */}

        {/* <!-- start copyright --> */}
        <footer id="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p class="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">
                       	Copyright &copy; 2024 Tahiri Services</p>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- end copyright --> */}

	</div>
  )
}

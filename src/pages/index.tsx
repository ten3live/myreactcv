import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiSearch, FiServer, FiGlobe, FiPenTool, FiMail, FiArrowRight, FiCheckCircle, FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png'
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = '0A4AVLKUKt6CzbM1G';
const EMAILJS_SERVICE_ID = 'service_ydhg8qq';
const EMAILJS_TEMPLATE_ID = 'template_4bxakgh';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export default function Portfolio() {
  const services = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: 'Web Development',
      description: 'ReactJS, NextJS, Laravel, NodeJS - Modern web applications built with cutting-edge technologies',
      items: ['ReactJS', 'NextJS', 'Laravel', 'NodeJS']
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'React Native - Cross-platform mobile applications for iOS and Android',
      items: ['React Native', 'iOS', 'Android']
    },
    {
      icon: <FiSearch className="w-8 h-8" />,
      title: 'SEO Services',
      description: 'Boost your online visibility and rank higher in search engines',
      items: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO']
    },
    {
      icon: <FiServer className="w-8 h-8" />,
      title: 'Web Hosting',
      description: 'Reliable and secure hosting solutions for your websites and applications',
      items: ['Shared Hosting', 'VPS', 'Dedicated Servers']
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: 'Domain Services',
      description: 'Register and manage your domain names with ease',
      items: ['Domain Registration', 'Domain Transfer', 'DNS Management']
    },
    {
      icon: <FiPenTool className="w-8 h-8" />,
      title: 'Graphics Design',
      description: 'Creative design solutions to elevate your brand identity',
      items: ['Logo Design', 'Brochures', 'Brand Identity']
    }
  ];

  const features = [
    'Expert Team of Developers',
    'Modern Technologies',
    'Custom Solutions',
    '24/7 Support',
    'Affordable Pricing',
    'Fast Delivery'
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Video autoplay failed:', error);
        setVideoError(true);
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          service: formData.service,
          message: formData.message,
          to_email: 'ten3live@gmail.com'
        }
      );

      console.log('Email sent successfully:', response);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', service: '', message: '' });
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again or contact us directly at ten3live@gmail.com');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
           <div className='flex'><img src={logo} height={40} width={40}/><motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold tracking-tight"
            >
              Tahiri Services
            </motion.div></div>
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-black transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Get Started
              </button>
            </div>
            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-700 hover:text-black transition-colors font-medium py-2"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        {/* Video Background */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute mt-15 top-0 left-0 w-full h-full object-cover "
            onError={() => {
              console.error('Video error occurred');
              setVideoError(true);
            }}
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Fallback background if video fails */}
        {videoError && (
          <div className="absolute top-0 left-0 w-full h-full bg-black -z-10" />
        )}

        {/* Overlay to ensure text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block"
              >
                Transform Your Digital
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block text-gray-200"
              >
                Presence
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            >
              We build modern websites, mobile apps, and provide comprehensive digital services to help your business grow
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => scrollToSection('services')}
                className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:scale-105"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-black mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We are a team of passionate developers and designers dedicated to delivering exceptional digital solutions. With years of experience, we bring your ideas to life.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-3xl p-12"
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">30+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to start your project? Contact us today!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-lg"
          >
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <FiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-2">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="SEO Services">SEO Services</option>
                    <option value="Web Hosting">Web Hosting</option>
                    <option value="Domain Services">Domain Services</option>
                    <option value="Graphics Design">Graphics Design</option>
                  </select>
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 rounded-xl font-medium text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <FiArrowRight className="w-5 h-5" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className='flex items-center'><img src={logo} height={80} width={80}/><h3 className="text-2xl font-bold mb-4">Tahiri Services</h3></div>
              <p className="text-gray-400">
                Your trusted partner for digital solutions. We build modern websites, mobile apps, and provide comprehensive services.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>SEO Services</li>
                <li>Web Hosting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <FiMail className="w-4 h-4" />
                  ten3live@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <FiMail className="w-4 h-4" />
                  +923058452372
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Tahiri Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/923058452372"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </motion.a>
    </div>
  );
}

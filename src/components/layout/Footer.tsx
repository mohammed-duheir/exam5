import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo light />
              <div className="ml-3">
                <h3 className="text-lg font-bold">Al-Muhammadin</h3>
                <p className="text-xs text-secondary-400">Import & Export</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for international trade services in the UAE and beyond.
              With decades of experience, we provide reliable import and export solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/request-quote" className="text-gray-300 hover:text-white transition-colors">Request a Quote</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-400">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#import" className="text-gray-300 hover:text-white transition-colors">Import Services</Link>
              </li>
              <li>
                <Link to="/services#export" className="text-gray-300 hover:text-white transition-colors">Export Services</Link>
              </li>
              <li>
                <Link to="/services#logistics" className="text-gray-300 hover:text-white transition-colors">Logistics Solutions</Link>
              </li>
              <li>
                <Link to="/services#customs" className="text-gray-300 hover:text-white transition-colors">Customs Clearance</Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-gray-300 hover:text-white transition-colors">Trade Consulting</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-secondary-400 mr-3 mt-1 flex-shrink-0" />
                <span>Business Bay, Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-secondary-400 mr-3 flex-shrink-0" />
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-secondary-400 mr-3 flex-shrink-0" />
                <span>info@almuhammadin.ae</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Al-Muhammadin Import & Export LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
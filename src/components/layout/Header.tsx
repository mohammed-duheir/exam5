import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('en');
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    // In a full implementation, this would change the app's language
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Request Quote', path: '/request-quote' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
          <div className="ml-3">
            <h1 className="text-xl font-bold text-primary-800">Al-Muhammadin</h1>
            <p className="text-xs text-secondary-700">Import & Export</p>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`font-medium transition-colors ${
                location.pathname === link.path 
                  ? 'text-primary-700' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
          >
            <Globe size={18} className="mr-1" />
            <span>{language.toUpperCase()}</span>
            <ChevronDown size={16} className="ml-1" />
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`font-medium py-2 transition-colors ${
                  location.pathname === link.path 
                    ? 'text-primary-700' 
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 py-2"
            >
              <Globe size={18} className="mr-2" />
              <span>{language === 'en' ? 'English' : 'العربية'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
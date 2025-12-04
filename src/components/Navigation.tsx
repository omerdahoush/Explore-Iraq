import { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/', type: 'route' },
    { label: 'About', href: '/#about', type: 'route' },
    { label: 'Destinations', href: '/#destinations', type: 'route' },
    { label: 'Culture', href: '/#culture', type: 'route' },
    { label: 'Travel Info', href: '/#travel', type: 'route' },
    { label: 'Contact', href: '/#contact', type: 'route' },
    { label: 'Flights', href: '/flights', type: 'route' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className={`flex items-center gap-2 transition-colors ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}>
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'bg-teal-50' : 'bg-white/10'
            }`}>
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
            </div>
            <span className="text-lg sm:text-2xl font-bold">Explore Iraq</span>
          </Link>

          <div className={`hidden md:flex items-center gap-1 ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-3 lg:px-4 py-2 rounded-lg font-medium transition-all ${
                  isScrolled 
                    ? 'hover:bg-teal-50 hover:text-teal-600' 
                    : 'hover:bg-white/20'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className={`md:hidden pb-4 space-y-1 animate-in fade-in slide-in-from-top-2 ${
            isScrolled ? 'bg-white' : 'bg-gray-900/95'
          }`}>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkClasses = (path) => {
    return `font-medium text-lg px-3 py-2 rounded-lg transition-colors ${
      currentPath === path
        ? 'text-blue-600 bg-blue-50'
        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
    }`;
  };

  const getMobileLinkClasses = (path) => {
    return `block w-full text-left font-medium text-lg px-3 py-3 rounded-lg transition-colors ${
      currentPath === path
        ? 'text-blue-600 bg-blue-50'
        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
    }`;
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Home className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Southeast Georgia</h1>
              <p className="text-sm text-gray-600 hidden sm:block">Home Services Directory</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={getLinkClasses('/')}>
              Home
            </Link>
            <Link to="/" className={getLinkClasses('/categories')}> {/* Assuming /categories will be a future route */}
              Categories
            </Link>
            <Link to="/add-business" className={getLinkClasses('/add-business')}>
              Add Business
            </Link>
            <Link to="/about" className={getLinkClasses('/about')}>
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="space-y-2">
              <Link to="/" className={getMobileLinkClasses('/')} onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/" className={getMobileLinkClasses('/categories')} onClick={() => setMobileMenuOpen(false)}> {/* Assuming /categories will be a future route */}
                Categories
              </Link>
              <Link to="/add-business" className={getMobileLinkClasses('/add-business')} onClick={() => setMobileMenuOpen(false)}>
                Add Business
              </Link>
              <Link to="/about" className={getMobileLinkClasses('/about')} onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

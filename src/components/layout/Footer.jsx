import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Footer = () => { // Removed setCurrentPage from props
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Home className="h-8 w-8 text-blue-400 mr-3" />
              <div>
                <h3 className="text-lg font-bold">Southeast Georgia</h3>
                <p className="text-sm text-gray-300">Directory</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Connecting Southeast Georgia residents with trusted local home service providers.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Waycross</li>
              <li>Brunswick</li>
              <li>Hoboken</li>
              <li>Blackshear</li>
              <li>Folkston</li>
              <li>Jesup</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Plumbing</li>
              <li>Electrical</li>
              <li>HVAC</li>
              <li>Pest Control</li>
              <li>General Contractors</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Businesses</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/add-business"
                  className="hover:text-blue-400 transition-colors"
                >
                  Add Your Business
                </Link>
              </li>
              <li>Advertise With Us</li>
              <li>Business Resources</li>
              <li>Contact Us</li> {/* This could be a link to the About page or a mailto link */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-lg">
            © 2025 Southeast Georgia Home Services Directory. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2 text-lg">
            Serving the Okefenokee region and Golden Isles with pride.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

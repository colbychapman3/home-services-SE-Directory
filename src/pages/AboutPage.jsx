import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Mail, Phone, Building } from 'lucide-react';

const AboutPage = () => { // setCurrentPage removed from props
  const navigate = useNavigate();

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 drop-shadow-sm">
              Best Local Home Services Near Me | Southeast Georgia Directory
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted source for top-rated emergency services, 24/7 contractors, and verified local businesses in Waycross, Brunswick, Hoboken & surrounding areas since 2025
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-sm">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe every homeowner and business owner in Southeast Georgia deserves access to reliable,
                trustworthy emergency home service professionals near them. Our comprehensive directory connects you with verified local contractors,
                licensed technicians, and top-rated service providers who understand the unique needs of the Okefenokee region and Golden Isles area.
                From 24/7 emergency plumbing to HVAC repair, electrical services, and pest control, we help you find the best local services when you need them most.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-sm">Why Choose Our Directory?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Verified Businesses</h3>
                  <p className="text-blue-800">All our featured businesses are verified for licensing, insurance, and quality of service.</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Local Focus</h3>
                  <p className="text-green-800">We exclusively feature businesses that serve Southeast Georgia communities.</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Real Reviews</h3>
                  <p className="text-purple-800">Authentic customer reviews help you make informed decisions about service providers.</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">Easy to Use</h3>
                  <p className="text-orange-800">Our mobile-friendly platform makes finding the right service provider quick and simple.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-sm">Service Areas</h2>
              <p className="text-lg text-gray-700 mb-4">
                We proudly serve the following Southeast Georgia communities:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Waycross', 'Brunswick', 'Hoboken', 'Blackshear', 'Folkston', 'Jesup', 'Nahunta', 'Baxley'].map(city => (
                  <div key={city} className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-center">
                    <span className="text-lg font-semibold text-gray-900">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-sm">For Business Owners</h2>
              <p className="text-lg text-gray-700 mb-4">
                Are you a home service provider in Southeast Georgia? Join our directory to:
              </p>
              <ul className="text-lg text-gray-700 space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Reach more local customers in your service area
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Build trust with verified business badges
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Showcase your services and customer reviews
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  Get direct customer inquiries and phone calls
                </li>
              </ul>
              <button
                onClick={() => navigate('/add-business')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Add Your Business
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 drop-shadow-sm">Contact Us</h2>
              <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
                <p className="text-lg text-gray-700 mb-4">
                  Have questions or need assistance? We're here to help!
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-lg text-gray-700">
                    <Mail className="h-5 w-5 mr-3" />
                    info@southeastgadirectory.com
                  </div>
                  <div className="flex items-center text-lg text-gray-700">
                    <Phone className="h-5 w-5 mr-3" />
                    (912) 555-HELP (4357)
                  </div>
                  <div className="flex items-center text-lg text-gray-700">
                    <Building className="h-5 w-5 mr-3" />
                    Serving all of Southeast Georgia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

import React from 'react';
import { MapPin, Star, CheckCircle, Clock, Phone, Building, X } from 'lucide-react';

const DetailsModal = ({ selectedProvider, closeDetailsModal, handleCallNow }) => {
  if (!selectedProvider) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-t-xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">{selectedProvider.name}</h2>
              <div className="flex items-center text-blue-100">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{selectedProvider.city} • {selectedProvider.distance}</span>
              </div>
            </div>
            <button
              onClick={closeDetailsModal}
              className="text-white hover:text-blue-200 transition-colors p-2 rounded-full hover:bg-white hover:bg-opacity-20"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Rating and Verification */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="flex items-center text-yellow-400 mr-3">
                <Star className="h-5 w-5 fill-current" />
                <span className="ml-1 text-lg font-semibold text-gray-900">{selectedProvider.rating}</span>
              </div>
              <span className="text-gray-600">({selectedProvider.reviews} reviews)</span>
            </div>
            {selectedProvider.verified && (
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-1" />
                <span className="font-semibold">Verified</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
            <p className="text-gray-700 leading-relaxed">{selectedProvider.description}</p>
          </div>

          {/* Services */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Services Offered</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedProvider.services.map((service, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
            <div className="flex items-center text-gray-700">
              <Clock className="h-5 w-5 mr-2 text-blue-500" />
              <span>{selectedProvider.hours}</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <Phone className="h-5 w-5 mr-2 text-green-500" />
                <span className="font-medium">{selectedProvider.phone}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="h-5 w-5 mr-2 text-red-500" />
                <span>{selectedProvider.city}, Georgia</span>
              </div>

              {/* Website Link */}
              {selectedProvider.website && (
                <div className="flex items-center text-gray-700">
                  <Building className="h-5 w-5 mr-2 text-blue-500" />
                  <a
                    href={selectedProvider.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                  >
                    Visit Business Website
                  </a>
                </div>
              )}

              {/* Social Media Links */}
              {selectedProvider.socialMedia && (
                <div className="pt-2">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Follow Us:</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProvider.socialMedia.facebook && (
                      <a
                        href={selectedProvider.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <span className="mr-1">📘</span>
                        Facebook
                      </a>
                    )}
                    {selectedProvider.socialMedia.instagram && (
                      <a
                        href={selectedProvider.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-pink-600 text-white text-sm rounded-lg hover:bg-pink-700 transition-colors"
                      >
                        <span className="mr-1">📷</span>
                        Instagram
                      </a>
                    )}
                    {selectedProvider.socialMedia.google && (
                      <a
                        href={selectedProvider.socialMedia.google}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <span className="mr-1">🔍</span>
                        Google Maps
                      </a>
                    )}
                    {selectedProvider.socialMedia.linkedin && (
                      <a
                        href={selectedProvider.socialMedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-900 transition-colors"
                      >
                        <span className="mr-1">💼</span>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={() => handleCallNow(selectedProvider.phone)}
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {selectedProvider.phone}
            </button>
            <button
              onClick={closeDetailsModal}
              className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;

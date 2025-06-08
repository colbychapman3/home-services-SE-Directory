import React from 'react';
import { Search, Phone, MapPin, Star, Clock, CheckCircle, User } from 'lucide-react';
import { CITIES } from '../config/locations.js';

const HomePage = ({
  serviceCategories,
  searchTerm,
  setSearchTerm,
  selectedCity,
  setSelectedCity,
  selectedCategory,
  setSelectedCategory,
  clearFilters,
  handleViewDetails,
  handleCallNow,
  filteredProviders
}) => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Best Home Services Near Me
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 drop-shadow-md max-w-3xl mx-auto">
              Top-rated local contractors in Waycross, Brunswick, Hoboken & all Southeast Georgia
            </p>

            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for services near me (e.g., emergency plumber, HVAC repair, electrician)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg text-gray-900 bg-white border-2 border-white rounded-xl shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-300 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">44+</div>
                <div className="text-blue-100 text-lg">Local Businesses</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">8</div>
                <div className="text-blue-100 text-lg">Cities Covered</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">24/7</div>
                <div className="text-blue-100 text-lg">Emergency Services</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">4.8★</div>
                <div className="text-blue-100 text-lg">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 drop-shadow-sm">
            Top-Rated Local Services Near You
          </h2>
          <p className="text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            Find trusted 24/7 emergency services and highly-rated local contractors in Waycross, Brunswick, and surrounding areas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {serviceCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${category.color} p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-center group`}
                >
                  <Icon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm sm:text-base block">{category.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="">All Cities</option>
                {CITIES.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="">All Services</option>
                {serviceCategories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>

              <button
                onClick={clearFilters}
                className="px-6 py-3 text-lg bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors border-2 border-gray-300"
              >
                Clear Filters
              </button>
            </div>

            <div className="text-lg font-medium text-gray-600">
              {filteredProviders.length} results found
            </div>
          </div>
        </div>
      </div>

      {/* Service Providers */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProviders.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-500 text-xl mb-4">No services found matching your criteria</div>
              <button
                onClick={clearFilters}
                className="px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProviders.map((provider) => {
                const categoryInfo = serviceCategories.find(cat => cat.id === provider.category)
                const Icon = categoryInfo?.icon || User // Fallback to User icon if not found

                return (
                  <div key={provider.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
                    <div className="p-6 sm:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{provider.name}</h3>
                            {provider.verified && (
                              <CheckCircle className="h-6 w-6 text-green-500" />
                            )}
                          </div>
                          <div className="flex items-center text-gray-600 mb-2 text-lg">
                            <MapPin className="h-5 w-5 mr-2" />
                            {provider.city} • {provider.distance}
                          </div>
                          <div className="flex items-center mb-4">
                            <div className="flex items-center">
                              <Star className="h-5 w-5 text-yellow-400 fill-current" />
                              <span className="ml-1 text-lg font-semibold text-gray-900">{provider.rating}</span>
                              <span className="ml-1 text-gray-600 text-lg">({provider.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">{provider.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {provider.services.map((service, index) => (
                          <span key={index} className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200">
                            {service}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-gray-600 mb-6 text-lg">
                        <Clock className="h-5 w-5 mr-2" />
                        {provider.hours}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => handleViewDetails(provider)}
                          className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleCallNow(provider.phone)}
                          className="flex-1 bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold flex items-center justify-center"
                        >
                          <Phone className="h-5 w-5 mr-2" />
                          Call Now
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;

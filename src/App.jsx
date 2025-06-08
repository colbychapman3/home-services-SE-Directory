import React, { useState, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom';
// Icons used directly in App.jsx or passed to components not receiving them via serviceCategories
import { Home, Search, Phone, MapPin, Star, Clock, CheckCircle, Menu, X, Filter, User, Mail, Building, MessageSquare, ChevronDown } from 'lucide-react'
import './App.css'
import Chatbot from './components/Chatbot'
import serviceProviders from './serviceProvidersData.js';
import serviceCategories from './config/serviceCategoriesData.js';
import { CITIES } from './config/locations.js';
import HomePage from './pages/HomePage';
import AddBusinessPage from './pages/AddBusinessPage';
import AboutPage from './pages/AboutPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import DetailsModal from './components/DetailsModal';

// serviceCategories is now imported from './config/serviceCategoriesData.js'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    city: '',
    phone: '',
    email: '',
    description: '',
    services: '',
    hours: '',
    website: ''
  })

  // Handler functions for buttons
  const handleViewDetails = (provider) => {
    setSelectedProvider(provider)
    setShowDetailsModal(true)
  }

  const handleCallNow = (phoneNumber) => {
    // Remove any formatting and create tel: link
    const cleanPhone = phoneNumber.replace(/[^\d]/g, '')
    window.location.href = `tel:${cleanPhone}`
  }

  const closeDetailsModal = () => {
    setShowDetailsModal(false)
    setSelectedProvider(null)
  }

  const filteredProviders = useMemo(() => {
    return serviceProviders.filter(provider => {
      const categoryName = serviceCategories.find(cat => cat.id === provider.category)?.name || ''
      
      const matchesSearch = searchTerm === '' || 
        provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase())) ||
        categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.category.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === '' || provider.category === selectedCategory
      const matchesCity = selectedCity === '' || provider.city === selectedCity
      
      return matchesSearch && matchesCategory && matchesCity
    })
  }, [searchTerm, selectedCategory, selectedCity])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('')
    setSelectedCity('')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your submission! We will review your business information and contact you within 2-3 business days.')
    setFormData({
      businessName: '',
      category: '',
      city: '',
      phone: '',
      email: '',
      description: '',
      services: '',
      hours: '',
      website: ''
    })
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <Routes>
        <Route path="/" element={
          <HomePage
            serviceCategories={serviceCategories}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            clearFilters={clearFilters}
            handleViewDetails={handleViewDetails}
            handleCallNow={handleCallNow}
            filteredProviders={filteredProviders}
          />
        } />
        <Route path="/add-business" element={
          <AddBusinessPage
            serviceCategories={serviceCategories}
            formData={formData}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
        } />
        <Route path="/about" element={
          <AboutPage />
        } />
      </Routes>

      <Footer />

      <Chatbot
        serviceProviders={serviceProviders}
        serviceCategories={serviceCategories}
        cities={CITIES}
      />

      {showDetailsModal && selectedProvider && (
        <DetailsModal
          selectedProvider={selectedProvider}
          closeDetailsModal={closeDetailsModal}
          handleCallNow={handleCallNow}
        />
      )}
    </div>
  )
}

export default App


import { Wrench, Zap, Thermometer, Bug, Hammer, Paintbrush, Trees, Shield, Settings, User } from 'lucide-react';

const serviceCategories = [
  { id: 'plumbing', name: 'Plumbing', icon: Wrench, color: 'bg-pink-100 border-pink-300 text-pink-700' },
  { id: 'electrical', name: 'Electrical', icon: Zap, color: 'bg-purple-100 border-purple-300 text-purple-700' },
  { id: 'hvac', name: 'HVAC', icon: Thermometer, color: 'bg-orange-100 border-orange-300 text-orange-700' },
  { id: 'pest', name: 'Pest Control', icon: Bug, color: 'bg-green-100 border-green-300 text-green-700' },
  { id: 'contractors', name: 'General Contractors', icon: Hammer, color: 'bg-red-100 border-red-300 text-red-700' },
  { id: 'painting', name: 'Painting', icon: Paintbrush, color: 'bg-blue-100 border-blue-300 text-blue-700' },
  { id: 'landscaping', name: 'Landscaping', icon: Trees, color: 'bg-pink-100 border-pink-300 text-pink-700' },
  { id: 'roofing', name: 'Roofing', icon: Shield, color: 'bg-green-100 border-green-300 text-green-700' },
  { id: 'septic', name: 'Septic Services', icon: Settings, color: 'bg-blue-100 border-blue-300 text-blue-700' },
  { id: 'handyman', name: 'Handyman', icon: User, color: 'bg-gray-100 border-gray-300 text-gray-700' }
];

export default serviceCategories;

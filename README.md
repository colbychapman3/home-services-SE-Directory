# Southeast Georgia Home Services Directory

A comprehensive, mobile-first directory website for home service providers in Southeast Georgia, including Waycross, Brunswick, Hoboken, Blackshear, Folkston, and Jesup.

## 🏠 Features

### **Core Functionality**
- **44+ Local Businesses** across 10 service categories
- **Mobile-First Design** optimized for 57% mobile users
- **Advanced Search & Filtering** by service type and city
- **Interactive Chatbot** for user assistance
- **SEO Optimized** for "near me" searches
- **Responsive Design** works on all devices

### **Service Categories**
- 🔧 Plumbing (5 businesses)
- ⚡ Electrical (5 businesses)
- 🌡️ HVAC (5 businesses)
- 🐛 Pest Control (4 businesses)
- 🏗️ General Contractors (5 businesses)
- 🎨 Painting (4 businesses)
- 🌿 Landscaping (4 businesses)
- 🏠 Roofing (4 businesses)
- 🚽 Septic Services (4 businesses)
- 🔨 Handyman (4 businesses)

### **Business Profiles Include**
- ✅ Contact information (phone, location)
- ✅ Business hours and availability
- ✅ Service descriptions and specialties
- ✅ Customer ratings and review counts
- ✅ Verification badges for trusted providers
- ✅ Website and social media links
- ✅ Distance calculations from user location

### **User Experience**
- **Intelligent Search** with real-time filtering
- **Detailed Business Modals** with comprehensive information
- **One-Click Calling** for immediate contact
- **Chatbot Assistant** for navigation help
- **Professional Design** builds trust and credibility

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Extract the project files**
   ```bash
   unzip southeast-georgia-directory-complete.zip
   cd southeast-georgia-directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📁 Project Structure

```
southeast-georgia-directory/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── Chatbot.jsx   # Intelligent chatbot component
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.jsx           # Main application component
│   ├── App.css           # Application styles
│   └── main.jsx          # Application entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🎯 Key Components

### **App.jsx**
- Main application logic
- Business data management
- Search and filtering functionality
- Modal management for business details

### **Chatbot.jsx**
- Intelligent assistant for user queries
- Context-aware responses
- Service category recommendations
- Location-based suggestions

### **Business Data**
All business information is stored in the `App.jsx` file in the `serviceProviders` array. Each business includes:
- Basic information (name, category, city, phone)
- Ratings and reviews
- Services offered
- Business hours
- Website and social media links

## 🔧 Customization

### **Adding New Businesses**
1. Open `src/App.jsx`
2. Add new business object to the `serviceProviders` array
3. Follow the existing data structure

### **Modifying Service Categories**
1. Update the `serviceCategories` array in `src/App.jsx`
2. Add corresponding icon from Lucide React
3. Update filtering logic if needed

### **Styling Changes**
- Main styles: `src/App.css`
- Tailwind CSS classes used throughout components
- Responsive design with mobile-first approach

### **SEO Optimization**
The site is optimized for local search with:
- Meta tags targeting "near me" searches
- Local business schema markup ready
- Mobile-friendly design
- Fast loading times

## 🌐 Deployment

### **Static Hosting (Recommended)**
1. Build the project: `npm run build`
2. Upload `dist/` folder to any static hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Any web hosting provider

### **Environment Variables**
No environment variables required for basic functionality.

## 📱 Mobile Optimization

The directory is specifically optimized for mobile users:
- **Touch-friendly buttons** (minimum 44px touch targets)
- **Large text** (18px+ for older users)
- **High contrast design** for better visibility
- **Fast loading** optimized for mobile networks
- **Responsive images** and layouts

## 🤖 Chatbot Features

The integrated chatbot can help users with:
- Finding specific service categories
- Location-based recommendations
- Business information queries
- Directory navigation assistance
- Emergency service finder

## 📊 Analytics Ready

The site structure supports easy integration with:
- Google Analytics
- Google Search Console
- Facebook Pixel
- Other tracking services

## 🔍 SEO Features

- **Optimized title tags** targeting local searches
- **Meta descriptions** with local keywords
- **Structured data** ready for local business markup
- **Mobile-first indexing** compatible
- **Fast loading speeds** for better rankings

## 🛠️ Technical Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Responsive Design** - Mobile-first approach

## 📞 Support

For technical support or customization requests, the codebase is well-documented and follows React best practices.

## 📄 License

This project is provided as-is for the Southeast Georgia Home Services Directory.

## 🎉 Features Summary

✅ **44+ Local Businesses** across 10 service categories  
✅ **Mobile-First Design** optimized for local users  
✅ **Intelligent Chatbot** for user assistance  
✅ **Advanced Search & Filtering** by service and location  
✅ **SEO Optimized** for local search rankings  
✅ **Professional Design** that builds trust  
✅ **Working Contact Links** for seamless user experience  
✅ **Responsive Layout** works on all devices  
✅ **Fast Loading** optimized for performance  
✅ **Easy Customization** for future updates  

---

**Built for Southeast Georgia communities in Waycross, Brunswick, Hoboken, Blackshear, Folkston, and Jesup.**


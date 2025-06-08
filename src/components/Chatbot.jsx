import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, ChevronDown, ChevronUp } from 'lucide-react';

const Chatbot = ({ serviceProviders, serviceCategories, cities }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "👋 Hi there! I'm your Southeast Georgia Directory Assistant. How can I help you find local services today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue, serviceProviders, serviceCategories, cities);
      setMessages(prev => [...prev, {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userInput, serviceProviders, serviceCategories, cities) => {
    const input = userInput.toLowerCase();
    
    // Check for greetings
    if (input.match(/^(hi|hello|hey|howdy)/i)) {
      return "Hello! How can I help you find local services in Southeast Georgia today?";
    }
    
    // Check for service category questions
    for (const category of serviceCategories) {
      if (input.includes(category.id) || input.includes(category.name.toLowerCase())) {
        const providers = serviceProviders.filter(p => p.category === category.id);
        if (providers.length > 0) {
          const topProviders = providers.slice(0, 3).map(p => `• ${p.name} (${p.city}) - ${p.rating}★`).join('\\n');
          return `I found ${providers.length} ${category.name} services in our directory. Here are the top rated options:\\n\\n${topProviders}\\n\\nWould you like more information about any of these providers?`;
        }
      }
    }
    
    // Check for city-specific questions
    for (const city of cities) {
      if (input.includes(city.toLowerCase())) {
        const providers = serviceProviders.filter(p => p.city.toLowerCase() === city.toLowerCase());
        if (providers.length > 0) {
          return `We have ${providers.length} service providers in ${city}. What type of service are you looking for? (e.g., plumbing, electrical, HVAC)`;
        }
      }
    }
    
    // Check for emergency service questions
    if (input.includes('emergency') || input.includes('24/7') || input.includes('urgent')) {
      const emergencyProviders = serviceProviders.filter(p => 
        p.hours.toLowerCase().includes('emergency') || 
        p.hours.includes('24/7') || 
        p.services.some(s => s.toLowerCase().includes('emergency'))
      );
      
      if (emergencyProviders.length > 0) {
        const topEmergency = emergencyProviders.slice(0, 3).map(p => `• ${p.name} (${p.category}) - ${p.phone}`).join('\\n');
        return `Here are emergency service providers available in Southeast Georgia:\\n\\n${topEmergency}\\n\\nWould you like me to help you contact any of these providers?`;
      }
    }
    
    // Check for specific business questions
    for (const provider of serviceProviders) {
      if (input.includes(provider.name.toLowerCase())) {
        const services = provider.services.join(', ');
        return `${provider.name} is located in ${provider.city} with a rating of ${provider.rating}★ from ${provider.reviews} reviews. They offer: ${services}. Their hours are: ${provider.hours}. You can contact them at ${provider.phone}.`;
      }
    }
    
    // Check for help with finding services
    if (input.includes('find') || input.includes('looking for') || input.includes('need') || input.includes('search')) {
      return "I can help you find services! Please tell me what type of service you're looking for (plumbing, electrical, etc.) and which city in Southeast Georgia.";
    }
    
    // Check for questions about the directory
    if (input.includes('directory') || input.includes('website') || input.includes('site')) {
      return "The Southeast Georgia Home Services Directory connects residents with trusted local service providers across Waycross, Brunswick, Hoboken, Blackshear, Folkston, Jesup, and surrounding areas. We feature verified businesses with real customer reviews.";
    }
    
    // Default response
    return "I'm here to help you find local home services in Southeast Georgia. You can ask me about specific services like plumbing or HVAC, search by city, or get information about emergency services. How can I assist you today?";
  };

  return (
    <>
      {/* Enhanced Chat button with bubble face and "Chat Here" text */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
        
        {/* Main chat button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 group"
          aria-label="Chat with our assistant"
        >
          {/* Button content container */}
          <div className="flex items-center px-6 py-4 space-x-3">
            {/* Friendly bubble face */}
            <div className="relative">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                {/* Face */}
                <div className="relative">
                  {/* Eyes */}
                  <div className="flex space-x-2 mb-1">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  {/* Smile */}
                  <div className="w-3 h-1.5 border-b-2 border-blue-600 rounded-full"></div>
                </div>
              </div>
              {/* Speech bubble indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
            </div>
            
            {/* "Chat Here" text */}
            <div className="text-left">
              <div className="font-bold text-lg leading-tight">Chat Here!</div>
              <div className="text-xs opacity-90 leading-tight">Ask me anything</div>
            </div>
          </div>
          
          {/* Hover effect glow */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
        </button>
        
        {/* Floating help text that appears periodically */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 animate-pulse">
          <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
            💬 Need help finding services?
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-32 right-6 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col z-50 max-h-[70vh] animate-in slide-in-from-bottom-4 duration-300">
          {/* Chat header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center">
              {/* Animated bot avatar */}
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <div className="relative">
                  <div className="flex space-x-1 mb-0.5">
                    <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                  <div className="w-2 h-1 border-b border-blue-600 rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Directory Assistant</h3>
                <div className="text-xs opacity-90">Online now</div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-blue-100 transition-colors p-1 rounded-full hover:bg-white hover:bg-opacity-20"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[50vh] bg-gradient-to-b from-blue-50 to-white">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className={`max-w-[80%] rounded-lg px-4 py-2 shadow-sm ${
                    message.sender === 'user' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                  <span className="text-xs opacity-70 block mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
                <div className="bg-white text-gray-800 rounded-lg rounded-bl-none px-4 py-2 border border-gray-100 shadow-sm">
                  <div className="flex space-x-1 items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    <span className="text-xs text-gray-500 ml-2">Assistant is typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 flex bg-gray-50">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about plumbers, electricians, or any service..."
              className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <button 
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-r-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!inputValue.trim()}
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: animate-in 0.3s ease-out forwards;
        }
        
        .slide-in-from-bottom-2 {
          animation: slide-in-from-bottom-2 0.3s ease-out forwards;
        }
        
        .slide-in-from-bottom-4 {
          animation: slide-in-from-bottom-4 0.3s ease-out forwards;
        }
        
        @keyframes slide-in-from-bottom-2 {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-from-bottom-4 {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Chatbot;


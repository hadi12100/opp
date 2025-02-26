import React from 'react';
import { Monitor, ShoppingCart, Menu, Search, Heart, Laptop, Cpu, Headphones, Mouse, Keyboard } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CategoryCard from './components/CategoryCard';

function App() {
  const featuredProducts = [
    {
      id: 1,
      name: "Ultra-Wide Gaming Monitor",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1000",
      description: "34-inch curved gaming monitor with 144Hz refresh rate"
    },
    {
      id: 2,
      name: "Mechanical Gaming Keyboard",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1000",
      description: "RGB mechanical keyboard with Cherry MX switches"
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1000",
      description: "15.6\" gaming laptop with RTX 4060"
    },
    {
      id: 4,
      name: "Wireless Gaming Mouse",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&q=80&w=1000",
      description: "Ultra-lightweight wireless gaming mouse"
    }
  ];

  const categories = [
    { name: "Laptops", icon: <Laptop className="w-6 h-6" /> },
    { name: "Processors", icon: <Cpu className="w-6 h-6" /> },
    { name: "Monitors", icon: <Monitor className="w-6 h-6" /> },
    { name: "Headphones", icon: <Headphones className="w-6 h-6" /> },
    { name: "Mice", icon: <Mouse className="w-6 h-6" /> },
    { name: "Keyboards", icon: <Keyboard className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <img 
          src="https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-[500px] object-cover opacity-50"
          alt="Hero background"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Next-Gen Tech Gear</h1>
            <p className="text-xl mb-8">Elevate your setup with premium hardware</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for the latest tech deals and updates</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
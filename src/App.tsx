import React, { useState } from 'react';
import { ShoppingCart } from './models/ShoppingCart';
import { products } from './data/products';
import { ShoppingBag, Trash2, Plus, Minus, CreditCard } from 'lucide-react';

function App() {
  const [cart] = useState(new ShoppingCart());
  const [, setRefresh] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const forceUpdate = () => setRefresh(prev => prev + 1);

  const addToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.addItem(product);
      forceUpdate();
    }
  };

  const removeFromCart = (productId: number) => {
    cart.removeItem(productId);
    forceUpdate();
  };

  const updateQuantity = (productId: number, quantity: number) => {
    cart.updateQuantity(productId, quantity);
    forceUpdate();
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      cart.clear();
      setIsCheckingOut(false);
      forceUpdate();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Shopping Cart OOP</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <ShoppingBag className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">{cart.getTotalItems()} items</span>
              <span className="font-bold text-blue-600">${cart.getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {products.map(product => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-blue-600 font-bold text-xl mb-3">${product.price.toFixed(2)}</p>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Shopping Cart
              </h2>
              
              {cart.isEmpty() ? (
                <div className="text-center py-8">
                  <ShoppingBag className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.getItems().map(item => (
                    <div key={item.product.id} className="flex gap-4 pb-4 border-b">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.product.name}</h3>
                        <p className="text-blue-600 font-bold">
                          ${item.product.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="ml-auto p-1 text-red-600 hover:bg-red-50 rounded"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="space-y-3 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${cart.getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                      <span>Total</span>
                      <span>${cart.getTotalPrice().toFixed(2)}</span>
                    </div>
                    
                    <button
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                      className={`w-full py-3 px-4 rounded-lg text-white font-semibold flex items-center justify-center gap-2 transition
                        ${isCheckingOut 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-green-600 hover:bg-green-700'}`}
                    >
                      <CreditCard className="w-5 h-5" />
                      {isCheckingOut ? 'Processing...' : 'Checkout'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
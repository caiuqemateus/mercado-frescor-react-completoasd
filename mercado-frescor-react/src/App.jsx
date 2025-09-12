import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ProductsProvider } from './context/ProductsContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CartModal from './components/common/CartModal';
import ToastNotification from './components/common/ToastNotification';
import Login from './pages/Login';
import Admin from './pages/Admin';
import HeroSection from './components/sections/HeroSection';
import ProductsSection from './components/sections/ProductsSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import './App.css';

function App() {
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const openCart = () => {
    setCartModalOpen(true);
  };

  const closeCart = () => {
    setCartModalOpen(false);
  };

  const openLogin = () => {
    setLoginModalOpen(true);
  };

  const closeLogin = () => {
    setLoginModalOpen(false);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-50">
            <Header onOpenCart={openCart} onOpenLogin={openLogin} />
            <main>
              <HeroSection />
              <ProductsSection onShowToast={showToast} />
              <AboutSection />
              <ContactSection onShowToast={showToast} />
              <Admin onShowToast={showToast} />
            </main>
            <Footer />
            
            <CartModal 
              isOpen={cartModalOpen} 
              onClose={closeCart} 
              onShowToast={showToast}
            />

            {loginModalOpen && (
              <Login 
                onClose={closeLogin} 
                onShowToast={showToast}
              />
            )}
            
            <ToastNotification
              message={toastMessage}
              isVisible={toastVisible}
              onClose={closeToast}
            />
          </div>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;


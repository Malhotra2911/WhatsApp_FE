import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import MainSection1 from './Components/MainSection1';
import Footer from './Components/Footer';
import PricingSection from './Components/PricingSection';
function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <MainSection1/>
      <PricingSection/>
      <Footer />
    </div>
  );
}

export default App;

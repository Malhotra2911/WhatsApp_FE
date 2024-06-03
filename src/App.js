import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import MainSection1 from "./Components/MainSection1";
import Footer from "./Components/Footer";
import PricingSection from "./Components/PricingSection";
import LoginPage from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Broadcast from "./Components/Broadcast";
// import HomePage from './Components/HomePage'; // Uncomment if you have a HomePage component
import Template from "./Components/Template";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Add your routes here */}
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/broadcast" element={<Broadcast />} />
          <Route path="/template" element={<Template />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <MainSection />
                <MainSection1 />
                <PricingSection />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

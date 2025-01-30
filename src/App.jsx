import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"; // Import Navbar
import Sidebar from "./components/layout/Sidebar"; // Import Sidebar
import Footer from "./components/layout/Footer"; // Import Footer
import Home from "./pages/Home"; // Import Home Page
import Contact from "./pages/Contact"; // Import Contact Page
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Import Privacy Policy Page
import AboutTheArtist from "./pages/AboutTheArtist"; // Import About Page
import Signup from "./pages/Signup"; // Import Signup Page
import Login from "./pages/Login"; // Import Signup Page
import WhatOurClientsSay from "./pages/WhatOurClientsSay"; // Import Signup Page
import RequestACustomIcon from "./pages/RequestACustomIcon"; // Import Signup Page

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Sidebar />
                <Home />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/signup"
            element={
              <>
                <Sidebar />
                <Signup />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Sidebar />
                <Login />
              </>
            }
          />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route
            path="/about-the-artist"
            element={
              <>
                <Navbar />
                <Sidebar />
                <AboutTheArtist />
              </>
            }
          />

          <Route
            path="/what-our-clients-say"
            element={
              <>
                <Navbar />
                <Sidebar />
                <WhatOurClientsSay />
              </>
            }
          />

          <Route
            path="/request-a-custom-icon"
            element={
              <>
                <Navbar />
                <Sidebar />
                <RequestACustomIcon />
              </>
            }
          />
        </Routes>

        {/* Footer for all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutTheArtist from "./pages/AboutTheArtist";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import WhatOurClientsSay from "./pages/WhatOurClientsSay";
import RequestACustomIcon from "./pages/RequestACustomIcon";

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
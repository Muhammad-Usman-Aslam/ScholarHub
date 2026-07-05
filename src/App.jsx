import { useEffect, useState } from "react";
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import BlogDetails from "./componets/BlogDetails";
import SearchResult from "./componets/SearchResult";
import CountryBlogs from "./componets/CountryBlog";
import CategoryBlogs from "./componets/CategoryBlog";
import BlogAll from "./componets/Blog-All";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import About from "./componets/About";
import PrivacyPolicy from "./pages/Privacy";
import TermsConditions from "./pages/TermsConditions";
import JobsPage from "./pages/JobsPage";
import ScholarshipPage from "./pages/ScholarshipPage";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    const storedChoice = localStorage.getItem("cookieConsent");
    if (storedChoice === "accepted" || storedChoice === "declined") {
      setCookieConsent(storedChoice);
    }
  }, []);

  const handleCookieChoice = (choice) => {
    setCookieConsent(choice);
    localStorage.setItem("cookieConsent", choice);

    document.cookie = `scholarhub_cookie_consent=${choice}; max-age=31536000; path=/; SameSite=Lax`;
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/search/:keyword" element={<SearchResult />} />
        <Route path="/country/:country" element={<CountryBlogs />} />
        <Route path="/category/:category" element={<CategoryBlogs />} />
        <Route path="/blogs" element={<BlogAll />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/scholarships" element={<ScholarshipPage />} />
      </Routes>

      {cookieConsent === null && (
        <div className="cookie-banner">
          <div className="cookie-banner__content">
            <strong>We use cookies</strong>
            <p>
              This website uses cookies to improve your experience and provide
              relevant content. You can accept or decline them.
            </p>
          </div>
          <div className="cookie-banner__actions">
            <button className="cookie-btn cookie-btn--decline" onClick={() => handleCookieChoice("declined")}>
              Decline
            </button>
            <button className="cookie-btn cookie-btn--accept" onClick={() => handleCookieChoice("accepted")}>
              Accept
            </button>
          </div>
        </div>
      )}

      <Footer />
    </BrowserRouter>
  );
};

export default App;
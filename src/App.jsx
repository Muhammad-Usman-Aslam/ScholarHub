import useState from "react";
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import BlogDetails from "./componets/BlogDetails";
import SearchResult from "./componets/SearchResult";
import CountryBlogs from "./componets/CountryBlog";
import CategoryBlogs from "./componets/CategoryBlog";
import BlogAll from "./componets/Blog-All";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer"
import About from './componets/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
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
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
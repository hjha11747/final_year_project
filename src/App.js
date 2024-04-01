import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./pages/Home";
import Contact from './pages/Contact';
import About from './pages/About';
import OurStore from './pages/OurStore';
import Login from './pages/Login';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermAndConditions from './pages/TermAndConditions';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='store' element={<OurStore />} />
            <Route path='blogs' element={<Blog />} />
            <Route path='compare-product' element={<CompareProduct />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='/blog/:id' element={<SingleBlog />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot-password' element={<Forgotpassword />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/reset-password' element={<Resetpassword />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/term-coditions' element={<TermAndConditions />} />
            <Route path='/shipping-policy' element={<ShippingPolicy />} />
            <Route path='/refund-policy' element={<RefundPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

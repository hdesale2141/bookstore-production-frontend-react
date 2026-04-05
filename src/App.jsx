import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";  
import Register from "./pages/Register"
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Sample from "./pages/Sample";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App(){


  return(
  <Routes>
    <Route 
    path="/"
    element={
      <Layout>
        <Home />
      </Layout>
    }
    />
    <Route path="/dashboard" element={
      <ProtectedRoute>
        <Layout>
          <Dashboard />
        </Layout>
        
      </ProtectedRoute>
    } />
    
  
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register/>}/>
    <Route path="/sample" element={<Sample />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout/>}/>
    {/* <Route path="/dashboard" element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    } />
    {/* <Route path="/dashboard" element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    } /> */}
    <Route />
  </Routes>


  );
}

export default App;
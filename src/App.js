import logo from './logo.svg';
import Home from './Home';
import './App.css';
import React, { useState, useEffect } from "react";
import { Outlet } from 'react-router';
import "./style.css";
import "./App.css";
import About from './About';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Header />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
     <Footer />
    </div>
  </Router>
  );
}

export default App;

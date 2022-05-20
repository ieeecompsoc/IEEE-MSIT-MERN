import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Events from './pages/events/Events'
import About from './pages/about/About'
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        {/* <Route path='/blogs' element={<Blogs />} />
        <Route path='/execom' element={<Execom />} /> */}
        <Route path='/' element={<Home />} excat />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
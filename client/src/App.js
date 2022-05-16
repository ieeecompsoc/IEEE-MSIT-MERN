import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/execom' element={<Execom />} /> */}
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Events from './pages/events/Events'
import About from './pages/about/About'
import Footer from './Components/Footer/Footer';
import RAS from './pages/chapters-affinityGroups/ras/RAS';
import PES from './pages/chapters-affinityGroups/pes/PES';
import CS from './pages/chapters-affinityGroups/cs/CS';
import WIE from './pages/chapters-affinityGroups/wie/WIE';

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
        {/* <Route path='/chapters' /> */}
        <Route path='chapters/ras' element={<RAS />} />
        <Route path='chapters/pes' element={<PES />} />
        <Route path='chapters/cs' element={<CS />} />
        <Route path='/affinityGroup/wie' element={<WIE />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
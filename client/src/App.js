import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Events from './Pages/Events/Events';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';
import RAS from './Pages/Chapters-AffinityGroups/RAS/RAS';
import PES from './Pages/Chapters-AffinityGroups/PES/PES';
import CS from './Pages/Chapters-AffinityGroups/CS/CS';
import WIE from './Pages/Chapters-AffinityGroups/WIE/WIE';
import ExeCom from './Pages/ExeCom/ExeCom';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import AddEvent from './Components/Forms/AddEvent';
import AddExecom from './Components/Forms/AddExecom';
import Gallery from './Pages/Gallery/Gallery';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          {/* <Route path='/events' element={<Events />} /> */}
          {/* <Route path='/blogs' element={<Blogs />} />  */}
          <Route path='/execom' element={<ExeCom />} />
          {/* <Route path='/chapters' /> */}
          <Route path='chapters/ras' element={<RAS />} />
          <Route path='chapters/pes' element={<PES />} />
          <Route path='chapters/cs' element={<CS />} />
          <Route path='/affinityGroup/wie' element={<WIE />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/events/add' element={<AddEvent />} />
          <Route path='/execom/add' element={<AddExecom />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
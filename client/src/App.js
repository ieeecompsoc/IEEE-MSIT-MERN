import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Events from "./pages/events/Events";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path='/' element={</Home>} exact /> */}
          <Route path='Events' element={<Events />} />
          <Route path='About' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
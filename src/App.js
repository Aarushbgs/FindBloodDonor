import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Pages/Navbar/Navbar';
import Home from './Home';
import About from './Pages/About/About';
import Form from './Pages/Form/Form';
import MyForm from './Pages/Form/MyForm';
import Tips from './Pages/Tips/Tips';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
        
          <Routes>
          <Route path="/donor" element={<Form />} />
            <Route path="/reciever" element={<MyForm />} />
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/tips" element={<Tips/>}/>
             
          </Routes>
         
            
        </div>
      </Router>
    </div>
  );
};

export default App;
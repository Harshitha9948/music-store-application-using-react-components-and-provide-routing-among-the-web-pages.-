import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; import Home from './Home'; import Store from './Store'; import Contact from './Contact'; import './App.css'; 
 
function App() {     return ( 
        <Router> 
            <div className="music-store"> 
                <h2>  Music Store  </h2> 
                <nav> 
                    <Link to="/">Home</Link> 
                    <Link to="/store">Store</Link> 
                    <Link to="/contact">Contact</Link> 
                </nav> 
 
                <Routes> 
                    <Route path="/" element={<Home />} /> 
                    <Route path="/store" element={<Store />} /> 
                    <Route path="/contact" element={<Contact />} /> 
                </Routes> 
            </div> 
        </Router> 
    ); 
} 
 
export default App; 

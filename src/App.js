
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './Pages/Home';
import Product from "./Pages/Product";
import About from './Pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./Pages/Contact";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Product" exact element={<Product/>} />
          <Route path="/Aboutus" exact element={<About/>} />
          <Route path="/Contact" exact element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

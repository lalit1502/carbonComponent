import React, { useState , useContext }  from 'react';
import './App.css';
import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Single from "./pages/singleproduct";
import SingleCategory from "./pages/singleCategory";
import Shop from "./pages/shop"
import { ProductProvider } from './data/contextapi'

function App() {
  //const [data, setData] = useState([]);
  //const value = { data , setData };

  return (
    <ProductProvider >
      <div className="App">
      <BrowserRouter>
       <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop /> } />
            <Route path="/single/:id" element={<Single />} />
            <Route path="/category/:id" element= {<SingleCategory  />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
    </ProductProvider>
  );
}

export default App;

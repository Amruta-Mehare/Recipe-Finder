import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './Component/Search';
import FoodList from './Component/FoodList';
import About from './Component/About'
import Nav from "./Component/Nav";
import Container from './Component/Container';
import InnerContainer from './Component/InnerContainer';
import FoodDetails from './Component/FoodDetails';
import RecipePage from './Component/RecipePage';
import "./App.css";
import Footer from './Component/Footer';
import ContactUs from './Component/ContactUs';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Search foodData={foodData} setFoodData={setFoodData} />
                <Container>
                  <InnerContainer>
                    <FoodList setFoodId={setFoodId} foodData={foodData} />
                  </InnerContainer>
                  <InnerContainer>
                    <FoodDetails foodId={foodId} />
                  </InnerContainer>
                </Container>
              </>
            } 
          />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<ContactUs />} />
          <Route path="/recipe/:foodId" element={<RecipePage />} />
          </Routes>    
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

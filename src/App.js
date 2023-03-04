import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
        <BrowserRouter>
            <NavBar />

            <Routes>

              <Route 
                  path="/" 
                  element={<ItemListContainer />} 
              />

              <Route
                  path="/category/:idCategory"
                  element={<ItemListContainer />}
              />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

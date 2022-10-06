import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import { BaseLayout, GlobalStyle } from './App.style';
import Home from './pages/Home';
import Join from './pages/Join';
import Login from './pages/Login';
import {SubmitButton} from './components/common/Button'
import PALETTE from './constants/palette';
import Header from './components/layout/Header';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;

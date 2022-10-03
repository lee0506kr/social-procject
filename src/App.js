import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import { BaseLayout, GlobalStyle } from './App.style';
import Home from './pages/Home';
import Join from './pages/Join';
import Login from './pages/Login';
import {SubmitButton} from './components/common/Button'
import PALETTE from './constants/palette';

function App() {
  return (
    <>
      추후 헤더 부분
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

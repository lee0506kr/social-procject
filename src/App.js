import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import { BaseLayout, GlobalStyle } from './App.style';
import Home from './pages/Home';
import Join from './pages/Join';
import {SubmitButton} from './components/common/Button'
import PALETTE from './constants/palette';

function App() {
  return (
    <>
      추후 헤더 부분
        <SubmitButton size="lg" color={PALETTE.BLUE[1]} backcolor="white">
          로그인 
        </SubmitButton>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

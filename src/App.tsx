import React, { useEffect, useState } from 'react';
import './App.css';
import { useTheme } from './app/hook/useTheme';
import Routers from './component/Routers';
import Footer from './component/UI/Footer';
import Header from './component/UI/Header';
import Main from './section/Main';

function App() {
  const {theme, setTheme} = useTheme()

  return (
    <div className="App flex flex-col justify-center items-center lg:pt-[80px] md:pt-[80px] sm:pt-[70px] pt-[70px]">
      <Header/>
      <Routers/>
      <Footer/>
    </div>
  );
}

export default App;

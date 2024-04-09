import '../styles/App.css';
import { Header } from '../components/Header'
import { MainInfo } from '../components/MainInfo'
import { Places } from '../components/Places'
import { Achievement } from '../components/Achievement'
import { News } from '../components/News'
import { Staff } from '../components/Staff'
import { Footer } from '../components/Footer'
import { Preloader } from '../components/Preloader';
import React, { useState, useEffect } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1200);
  }, []);

  return (
    <>
      {isLoading ? <div className="App">
        <Header />
        <div>
          <div id='mainInfo'>
            <MainInfo />
          </div>
          <div id='places'>
            <Places />
          </div>
          <div id='achievement'>
            <Achievement />
          </div>
          <div id="_news">
            <News />
          </div>
          <div id='staff'>
            <Staff />
          </div>
        </div>
        <Footer />
      </div>
  : <Preloader/>}
    </>
  );
}
export default App;

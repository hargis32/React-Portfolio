import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  return (
    <div className="portfolio-app">
      <header>
        <PortfolioContainer />
        <Footer />
      </header>
    </div>
  );
}

export default App;

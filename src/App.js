import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavTabs from './components/NavTabs';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  return (
    <div className="portfolio-app">
      <Header>
        <PortfolioContainer></PortfolioContainer>
        <Footer></Footer>
        </Header>
    </div>
  );
}

export default App;

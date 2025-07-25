import React, { Component } from 'react';
import Home from './components/home';
import GamesPortfolio from './components/gamesPortfolio';
import WebsitesPortfolio from './components/websitesPortfolio';
import Thesis from './components/thesis';
import './styles/css/main.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App container-fluid">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/games-portfolio" element={<GamesPortfolio />} />
                        <Route path="/websites-portfolio" element={<WebsitesPortfolio />} />
                        <Route path="/thesis" element={<Thesis />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

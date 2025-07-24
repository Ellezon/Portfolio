import React, { Component } from 'react';
import Home from './components/home';
import Portfolio from './components/portfolio';
import './styles/css/main.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App container-fluid">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

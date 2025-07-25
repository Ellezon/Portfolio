import React from 'react';
import Intro from './intro';
import Menu from './menu';
import Contact from './contact';

const GamesPortfolio = () => {
    return (
            <>
                <Intro />
                <Menu />
                <div id="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 id="portfolio" className="section-title">Website Portfolio</h1>

                            </div>
                        </div>
                    </div>
                </div>
            <Contact />
        </>
    );
};

export default GamesPortfolio;

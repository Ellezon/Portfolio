import React from 'react';
import Intro from './intro';
import Menu from './menu';
import Contact from './contact';

const Thesis = () => {
    return (
            <>
                <Intro />
                <Menu />
                <div id="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 id="portfolio" className="section-title">Thesis</h1>
                                <h2>Bachelors Thesis (UoM)</h2>
                                <h3>
                                    Convolutional Neural Networks and the Bag-of-Visual-Words
                                    Approach: A comparative analysis based on variation of training set size.
                                </h3>
                                <p>
                                    Image classification has a large variety of practical applications in computing,
                                    most notably medicinal, industrial and security. Despite their growing popularity,
                                    little research has been carried out on the comparison between two of the most common
                                    image classification algorithms: the Bag-of-Visual-Words approach (BoVW) and
                                    Convolutional Neural Networks (CNN), in terms of the size of the training set required.
                                </p>
                                <p>
                                    The tendency towards using the current top performing algorithm, without regard for its
                                    best uses, has led many to use CNNs despite other methods being possibly more suitable
                                    for the task at hand. This work aimed at implementing and studying the aforementioned
                                    algorithms to determine their performance when presented with varied sized training sets.
                                </p>
                                <p>
                                    From the results, one can conclude that using transfer learning on pre-trained CNNs
                                    is more suitable for large and complex data sets, while the BoVW approach performs best
                                    on simpler and smaller data sets.
                                </p>
                                <p>
                                    <a
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.um.edu.mt/library/oar/handle/123456789/29525"
                                    >
                                        Link to Thesis Paper
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            <Contact />
        </>
    );
};

export default Thesis;

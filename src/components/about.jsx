import React from 'react';
import Flip from 'react-reveal/Flip';

class About extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="container" id="about">
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-9 float-left">
                            <h1 className="section-title"> About</h1>
                            <p>Hello! I am an artificial intelligence graduate from the University of Malta.
                                I am a hard working individual who always strives to improve my skills.
                                I have worked in the iGaming industry for almost two years.</p>
                            <p>Throughout my time at Raketech, I learnt to adapt quickly, think creatively and
                                manage a team. Within a few months in the company, I was leading a small team with various skills and backgrounds.
                                Our aim was to improve a small network of sites by making them engaging to our target audience,
                                fast, responsive and increase their overall SEO performance.</p>
                            <p>The rest of my experience, though unrelated to my line of work,
                                helped me understand the qualities needed to be a good leader and team player.
                                I have also tried my hand at voluntary work which was incredibly rewarding.
                                It was through this type of work that I learned proper time management and
                                coping with new challenges.</p>
                            <p>In my free time I enjoy fencing, basketball, taking part in theatrical performances,
                                as well as, reading and gardening.</p>
                            <p>I believe that teamwork, organization, having a willingness to learn and good
                                time management are the keys to success!</p>
                        </div>
                        <Flip left delay={300}>
                            <div className="col-12 col-md-4 col-lg-3 float-right img-wrapper">
                                <img alt="headshot" src="/img/headshot.jpg" />
                            </div>
                        </Flip>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default About;
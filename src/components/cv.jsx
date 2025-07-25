import React from 'react';
import Collapsible from 'react-collapsible';
import CvSection from './cvSection';

class Cv extends React.Component {
    render() {
        return (
            <div id="cv-wrapper">
                <div className="container" id="cv">
                    <div className="row">
                        <div className="d-flex flex-column col-12">
                            <h1 className="section-title">Curriculum Vitae<a target="_blank" className="float-right btn btn-primary align-self-center" href="/docs/CV_2021.pdf">Download CV</a></h1>
                            <Collapsible triggerWhenOpen={<h4>Work Experience<i className="arrow up"></i></h4>} open trigger={<h4>Work Experience<i className="arrow down"></i></h4>}>
                                <CvSection
                                    time="03/2020 - Present"
                                    company="Dorado Games"
                                    title="Tech Team Lead"
                                    list={[
                                        "Working as a full-stack developer on the development of games, bug fixing, and implementing new features.",
                                        "Managing and training a team",
                                        "Writing, enhancing and maintaining fast code, adhering to international standards",
                                        "Writing and maintaining detailed technical design and software documentation",
                                        "Collaborating closely with all departments and key members to create and deliver an exceptional and involving online gameplay experience",
                                        "Working on the technical aspect of project planning alongside producers",
                                        "Representing and promoting the company/game at multi-international conferences",
                                        "Tech: Java, Typescript, PHP, SCSS, VueJS, SQL, Jenkins, Github Actions, Jira"
                                    ]}
                                />
                                <CvSection
                                    time="05/2020 - Present"
                                    company="Freelancing (self-employed)"
                                    title="Web Developer"
                                    list={[
                                        "Freelancing Web Developer with Raketech as well as projects with other individuals/companies.",
                                    ]}
                                />
                                <CvSection
                                    time="11/2019 - 03/2020"
                                    company="Authentic Gaming"
                                    title="React Front End Developer"
                                    list={[
                                        "Languages used: React JS, Redux, Jest, Enzyme, Webpack, Web Sockets and Typescript",
                                        "Developing the UI for live casino games",
                                    ]}
                                />
                                <CvSection
                                time="09/2017 - 10/2019"
                                    company="Raketech"
                                    title="Web Developer and Team Performance Coordinator"
                                    list={[
                                        "Languages used: React, Vanilla Javascript with jQuery, SQL, PHP, HTML and CSS",
                                        "Developing an internal tool for simplifying the visualization of site metrics and Search Engine Optimization (SEO) health and recommending websites from which purchased links would improve the site's overall rank metrics. This involved the use of third party APIs, React libraries, messaging queues (RabbitMQ), database design and management.",
                                        "Maintaining, designing and developing new features for loan affiliation websites with a focus on SEO",
                                        "Overseeing team performance and coordinating tasks (both in-house and with freelancers)",
                                        "Managing the acquisition of affiliation links for each site",
                                        "Maintaining the overall SEO health of the sites by abiding to the guidelines set by Google",
                                        "Working with third parties to optimize products and sales",
                                        "Minor server side jobs such as creating CRON jobs and service files ",
                                        "Winner of the Ownership and Teamwork Raketech Awards",
                                        "Winner of the Innovation Day Award"
                                    ]}
                                />
                            </Collapsible>
                            <Collapsible triggerWhenOpen={<h4>Education and Training<i className="arrow up"></i></h4>} trigger={<h4>Education and Training<i className="arrow down"></i></h4>}>
                                <CvSection
                                        time="2019"
                                        company="Arun Nagarathana (Udemy)"
                                        title="SEO 2019: Complete SEO Training"
                                        list={[]}
                                />
                                <CvSection
                                    time="2019"
                                    company="Colt Steele (Udemy)"
                                    title="The Web Developer Bootcamp"
                                    list={[]}
                                    twoColumns={true}
                                />
                                 <CvSection
                                    time="2018"
                                    company="StreetHR (Malta)"
                                    title="Informal Leadership Training"
                                    list={[]}
                                />
                                <CvSection
                                    time="2014 - 2017"
                                    company="University of Malta"
                                    title="BSC ICT (Artificial Intelligence - Honours) EQF level 6"
                                    list={[
                                        "Programming in Java, C, C++, HTML + CSS, Javascript, PHP, SQL, PROLOG, MATLAB",
                                        "Web Development", 
                                        "Signal Processing",
                                        "Data Structures and Algorithms",
                                        "Mathematics for Engineers",
                                        "Discrete Mathematics",
                                        "Databases",
                                        "Natural Language Processing",
                                        "Intelligent Agents",
                                        "Web Intelligence",
                                        "Advanced Game AI",
                                        "Entrepreneurship",
                                        "Object Oriented Programming ",
                                        "Business Intelligence",
                                        "Machine Learning",
                                        "Content Based Image Retrieval and Categorization"
                                    ]}
                                />
                            </Collapsible>
                            <Collapsible triggerWhenOpen={<h4>Hobbies<i className="arrow up"></i></h4>}  trigger={<h4>Hobbies<i className="arrow down"></i></h4>}>
                                <CvSection
                                    time="2012 - Present"
                                    company=""
                                    title="Drama and Theatrical Productions"
                                    list={[]}
                                />
                                <CvSection
                                    time="2022 - Present"
                                    company=""
                                    title="Pottery and Ceramics"
                                    list={[]}
                                />
                                <CvSection
                                    time="Other"
                                    company=""
                                    title="Reading, Gardening, Baking, Gaming, Art, Volunteering"
                                    list={[]}
                                />
                            </Collapsible>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cv;

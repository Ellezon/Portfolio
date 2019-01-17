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
                            <h1 className="section-title">Curriculum Vitae<a className="float-right btn btn-primary align-self-center" href="/docs/cv 2018.docx">Download CV</a></h1>
                            <Collapsible triggerWhenOpen={<h4>Work Experience<i className="arrow up"></i></h4>} open trigger={<h4>Work Experience<i className="arrow down"></i></h4>}>
                                <CvSection
                                    time="09/2017 - Present"
                                    company="Raketech"
                                    title="Web Developer and Team Performance Coordinator"
                                    list={[
                                        "Languages used: React, Vanilla Javascript with jQuery, SQL, PHP, HTML and CSS",
                                        "Developing an internal tool for simplifying the visualization of site metrics and SEO health and recommending websites from which purchased links would improve the sites overall rank metrics. This involved the use of third party APIs, React libraries, messaging queues (RabbitMQ), database design and management.",
                                        "Maintaining, designing and developing new features for websites with a focus on Search Engine Optimization",
                                        "Overseeing team performance and coordinating tasks (both in-house and with freelancers)",
                                        "Managing the acquisition of links for each site",
                                        "Maintaining the overall SEO health of the sites by abiding to the guidelines set by Google",
                                        "Working with third parties to optimize products and sales",
                                        "Minor server side jobs such as creating CRON jobs and service files ",
                                        "Winner of the Ownership and Teamwork Raketech Awards",
                                        "Winner of the Innovation Day Award"
                                    ]}
                                />
                                <CvSection
                                    time="07/2016 - 09/2016"
                                    company="Betsson Group"
                                    title="Intern Front End Developer"
                                    list={[
                                        "Bug fixing",
                                        "Minor testing",
                                        "Styling of new features"
                                    ]}
                                />
                                <CvSection
                                    time="10/2015 - 12/2017"
                                    company="University of Malta"
                                    title="Attendant I.T. Services"
                                    list={[
                                        "Supervising computer labs",
                                        "Troubleshooting",
                                    ]}
                                />
                                <CvSection
                                    time="09/2015 - 03/2016"
                                    company="HLB Falzon & Falzon <br/> (Family Business)"
                                    title="Junior Clerk"
                                    list={[]}
                                />
                                <CvSection
                                    time="06/2015 - 08/2015"
                                    company="BELS"
                                    title="Teen Group Leader"
                                    list={[
                                        "Supervising foreign students ages 12 to 17 on activities"
                                    ]}
                                />
                                <CvSection
                                    time="03/2015 - 06/2015"
                                    company="After Glow Events"
                                    title="Childrens’ Animator"
                                    list={[
                                        "Taking care of children between the ages of 3 and 10 years old"
                                    ]}
                                />
                                <CvSection
                                    time="04/2014 - 03/2015"
                                    company="PartyTrap"
                                    title="Childrens’ Animator"
                                    list={[]}
                                />
                                <CvSection
                                    time="07/2013 - 09/2013"
                                    company="HLB Falzon & Falzon <br/> (Family Business)"
                                    title="Assistant"
                                    list={[
                                        "Filing and updating archives"
                                    ]}
                                />
                            </Collapsible>
                            <Collapsible triggerWhenOpen={<h4>Education and Training<i className="arrow up"></i></h4>} trigger={<h4>Education and Training<i className="arrow down"></i></h4>}>
                                <CvSection
                                    time="2018"
                                    company="StreetHR (Malta)"
                                    title="Informal Leadership Training"
                                    list={[]}
                                />
                                <CvSection
                                    time="2018"
                                    company="Colt Steele (Udemy)"
                                    title="The Web Developer Bootcamp"
                                    list={[
                                        "HTML5",
                                        "CSS3", 
                                        "JavaScript",
                                        "Bootstrap", 
                                        "SemanticUI", 
                                        "jQuery", 
                                        "NodeJS",
                                        "NPM",
                                        "ExpressJS", 
                                        "REST",
                                        "MongoDB", 
                                        "Database Associations",
                                        "Authentication",
                                        "PassportJS", 
                                        "Authorization"
                                    ]}
                                    twoColumns={true}
                                />
                                 <CvSection
                                    time="2018"
                                    company="Maximilian Schwarzmüller (Udemy)"
                                    title="Vue JS 2 - The Complete Guide"
                                    list={[
                                        "Vue JS 2",
                                        "Vue Router", 
                                        "Vuex"
                                    ]}
                                />
                                <CvSection
                                    time="2014 - 2017"
                                    company="University of Malta"
                                    title="BSC ICT (Artificial Intelligence - Honours) EQF level 6"
                                    list={[
                                        "Programming in Java, C, C++, HTML, CSS, SQL, PROLOG, MATLAB",
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
                                <CvSection
                                    time="2015"
                                    company="Harvard University"
                                    title="CS50 - Computer Science Introduction Course"
                                    list={[
                                        "C programming",
                                        "Web Development - HTML, CSS , PHP, JS", 
                                    ]}
                                />
                                <CvSection
                                    time="2012"
                                    company="STC"
                                    title="Web Design Summer Course"
                                    list={[]}
                                />
                                <CvSection
                                    time="2012 - 2014"
                                    company="De La Salle College Sixth Form"
                                    title="EQF level 4"
                                    list={[
                                        "Advanced level: Computing and Pure Mathematics",
                                        "Intermediate level: English, Physics and Systems of Knowledge", 
                                    ]}
                                />
                                <CvSection
                                    time="2001 - 2012"
                                    company="St. Joseph School"
                                    title="School Leaving Certificate Level 3"
                                    list={[
                                        "English",
                                        "Maltese",
                                        "Maths",
                                        "Religion",
                                        "Chemistry",
                                        "Physics",
                                        "French",
                                        "Computer Studies"  
                                    ]}
                                />
                            </Collapsible>
                            <Collapsible triggerWhenOpen={<h4>Hobbies<i className="arrow up"></i></h4>}  trigger={<h4>Hobbies<i className="arrow down"></i></h4>}>
                                <CvSection
                                        time="2008 - 2017"
                                        company=""
                                        title="St. Paul Fencing Club - Olympic Fencing"
                                        list={[]}
                                />
                                <CvSection
                                    time="2012 - 2018"
                                    company=""
                                    title="DLS Productions/ KSU Students’ Fest - Drama and Theatrical Productions"
                                    list={[]}
                                />
                                <CvSection
                                    time="2017 - 2018"
                                    company=""
                                    title="Malta Historical Fencing Association - Historical Fencing"
                                    list={[]}
                                />
                                <CvSection
                                    time="Other"
                                    company=""
                                    title="Reading, Gardening, Tennis, Gaming, Art"
                                    list={[]}
                                />
                            </Collapsible>
                            <Collapsible triggerWhenOpen={<h4>Voluntary Work<i className="arrow up"></i></h4>} trigger={<h4>Voluntary Work<i className="arrow down"></i></h4>}>
                                <CvSection
                                    time="07/2013 – 09/2013"
                                    company="Nature Trust Malta (Malta)"
                                    title="Volunteer"
                                    list={[
                                        "Taking care of the injured turtles at Fort Lucjan",
                                        "Taking care of children and collecting donations during the ‘Kids on the Coast’ events"
                                    ]}
                                />
                                <CvSection
                                    time="07/2013 – 11/2013"
                                    company="MSSP Oratory"
                                    title="Child-care worker"
                                    list={[]}
                                />
                                <CvSection
                                    time="Other"
                                    company=""
                                    title="Reading, Gardening, Tennis, Gaming, Art"
                                    list={[
                                        "Taking the young children during the homily and teaching them about the readings in a simple manner as well as planning games for them"
                                    ]}
                                />
                                <CvSection
                                    time="01/2014 – 10/2014"
                                    company=""
                                    title="Swieqi Youth Local Council - Deputy Mayor"
                                    list={[]}
                                />
                                <CvSection
                                    time="2015 - 2017"
                                    company=""
                                    title="ICTSA (ICT Students' Association) - Subcommittee"
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
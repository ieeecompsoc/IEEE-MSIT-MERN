import react from 'react';
import './about.css';
import IEEE_WHITE from '../../assets/IEEE_white 1logo.PNG';
import aboutMain from '../../assets/aboutMain.png';
import ieeeWhite from '../../assets/ieeeWhite.svg';

const About = () => {
    return (
        <div className="about__page">
            <nav>
                <div className="organisation">
                    <a className="navoptions">&nbsp; IEEE.org &nbsp; |</a>
                    <a>&nbsp; IEEE Xplore Digital Library &nbsp; |</a>
                    <a>&nbsp; IEEE Standards &nbsp; |</a>
                    <a>&nbsp; IEEE Spectrum</a>
                </div>
                <div className="navlogo">
                    <img src={IEEE_WHITE} />
                </div>
            </nav>

            <div className="section">
                <div className="expand">
                    <i className="fa fa-align-justify"></i>
                </div>

                <div className="hyplinks">
                    <div><a href="#"> Home</a></div>
                    <div><a href="#"> About Us</a></div>
                    <div><a href="#"> Events</a></div>
                    <div><a href="#"> Executive Board</a></div>
                </div>
            </div>

            <div className="imageContainer">
                <img src={aboutMain} className="mainImg" />
                <img src={ieeeWhite} className="ieeeLogoWhite" />
            </div>

            <main>

                <div className="container">
                    <b>
                        <h1>About the Student Branch</h1>
                    </b>
                    <hr/>
                    <div className="text-cont">
                        <p>
                            IEEE MSIT has a pivitol role to play in advancing technological pursuits and social
                            networking of
                            MSIT. Since it's inception in 2009, it has played a forward role in providing it's members a
                            platform to
                            interact, collaborate and work towards a building a technically sound ecosystem. IEEE MSIT
                            WIE, PES,
                            MTTS, CS chapters have worked in cohesion to explore and bring forth various engineering
                            avenues
                            and opportunities such as hackathons, seminars, hands-on workshops, industrial visits, women
                            empowerment seminars, technical project exhibitions, STEP programmes and a lot more.
                        </p>
                        <p>
                            The latest IEEE MSIT advent is it's AWP-PCB lab which is a project centric lab aiming at
                            finding
                            hardware solutions to real world glitches faced by the institution as a whole.
                        </p>
                        <p>
                            EEE MSIT plans to keep growing, directing, mentoring and spontaneously nurturing the budding
                            technologists of the institution.
                        </p>
                        <p>
                            With TPE as it's major project exhibitory event, IEEE MSIT focusses on hardware and software
                            solutions and provides a ready platform for the budding engineers across the country to
                            exhibit
                            their engineering prowess and put their skills to a judicious use. The exhibits are judged
                            by a panel
                            of experienced judges who serve as able mentors to the students.
                        </p>
                        <p>
                            With it's wide reach, IEEE MSIT serves as an ideal platform for the students to network,
                            co-learn and
                            develop.
                        </p>
                    </div>
                </div>
            </main>


            <footer>
                <p>Join IEEE | Contact us | Maharaja Surajmal Institute of Technology | Copyright &#169 2022, IEEE MSIT
                </p>
            </footer>
        </div>
    )
}

export default About;
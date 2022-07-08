// import react from 'react';
import './WIE.css';
import WIELogo from '../../../Assets/WIELogo.svg';
import Menubar from '../../../Components/Navbar/Menubar';

const WIE = () => {
    return (
        <div className="wie__affinityGroup">
            <Menubar backgroundClr="#971D96" />
            <div className="contents">
                <img className="WIE-img" src={WIELogo} alt="wie-logo"/>
                <h2 className="wie_heading">Women in Engineering</h2>
                <hr className="wie_line" />
                <p className="wie_main-content">IEEE MSIT has had a pivotal role to play in advancing technological pursuits and social networking of MSIT. Since it's inception in 2009, it has played a forward role in providing it's members a platform to interact, collaborate and work towards a building a technically sound ecosystem. IEEE MSIT WIE, PES, MTTS, CS chapters have worked in cohesion to explore and bring forth various engineering avenues and opportunities such as hackathons, seminars, hands-on workshops, industrial visits, women empowerment seminars, technical project exhibitions, STEP programmes and a lot more.
                    <br />
                    <br />
                    The latest IEEE MSIT advent is it's AWP-PCB lab which is a project centric lab aiming at finding hardware solutions to real world glitches faced by the institution as a whole.
                    <br />
                    <br />
                    IEEE MSIT plans to keep growing, directing, mentoring and spontaneously nurturing the budding technologists of the institution.
                    <br />
                    <br />
                    With TPE as it's major project exhibitory event, IEEE MSIT focusses on hardware and software solutions and provides a ready platform for the budding engineers across the country to exhibit their engineering prowess and put their skills to a judicious use. The exhibits are judged by a panel of experienced judges who serve as able mentors to the students.
                    <br />
                    <br />
                    With it's wide reach, IEEE MSIT serves as an ideal platform for the students to network, co-learn and develop.</p>
            </div>
        </div>
    )
}

export default WIE;
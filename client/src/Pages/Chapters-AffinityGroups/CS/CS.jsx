// import react from 'react';
import './CS.css';
import CSLogo from '../../../Assets/computerSocietyLogo.png';
import Menubar from '../../../Components/Navbar/Menubar';

const CS = () => {
    return (
        <div className="compsoc__chapter">
            <Menubar backgroundClr="#FFA300" />
            <div className="contents">
                <img className="CS-img" src={CSLogo} alt="cs-logo" />
                <h2 className="cs_heading">Computer Society</h2>
                <hr className="cs_line" />
                <p className="cs_main-content">IEEE Computer Society is a part of the world's leading membership organization dedicated to computer science and
                    technology. It is the trusted information, networking and career development source for a global community of
                    technology leaders which includes researchers, educators, software engineers, IT professionals, Employers and
                    students.
                    <br />
                    <br />
                    IEEE MSIT CS is a pragmatic society run by a young committee of extremely talented and diligent students of
                    Maharaja Surajmal Institute of Technology. It provides a platform to impart knowledge on computers and
                    technology through a variety of workshops, conferences and SIGs. It keeps you technically current and promotes
                    extensive in depth knowledge of the subject.
                    <br />
                    <br />
                    So if you are a tech-o-maniac and absolutely love the idea of learning more about it, we are here for you!
                </p>
            </div>
        </div>
    )
}

export default CS;
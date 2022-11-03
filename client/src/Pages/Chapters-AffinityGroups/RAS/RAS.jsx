// import react from 'react';
import './RAS.css';
import RASLogo from '../../../Assets/RASLogo.png';
import Menubar from '../../../Components/Navbar/Menubar';

const RAS = () => {
    return (
        <div className="ras__chapter">
            <Menubar backgroundClr="#BA0C2F" />
            <div className="contents">
                <img className="RAS-img" src={RASLogo} alt="ras-logo" />
                <h2 className="ras_heading">Robotics and Automation Society</h2>
                <hr className="ras_line" />
                <p className="ras_main-content">
                    The IEEE Robotics and Automation Society's objectives are scientific, literary and educational in
                    character. The Society strives for the advancement of the theory and practice of robotics and automation
                    engineering and science and of the allied arts and sciences, and for the maintenance of high
                    professional standards among its members, all in consonance with the Constitution and Bylaws of the IEEE
                    and with special attention to such aims within the Field of Interest of the Society.                    <br />
                </p>
            </div>
        </div>
    )
}

export default RAS;
// import react from 'react';
import './WIE.css';
import WIELogo from '../../../Assets/WIELogo.png';
import Menubar from '../../../Components/Navbar/Menubar';

const WIE = () => {
    return (
        <div className="wie__affinityGroup">
            <Menubar backgroundClr="#971D96" />
            <div className="contents">
                <img className="WIE-img" src={WIELogo} alt="wie-logo" />
                <h2 className="wie_heading">Women in Engineering</h2>
                <hr className="wie_line" />
                <p className="wie_main-content">IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated
                    to promoting women engineers and scientists, and inspiring girls around the world to follow their
                    academic interests in a career in engineering. IEEE WIE envisions a vibrant community of IEEE women and
                    men collectively using their diverse talents to innovate for the benefit of humanity.
                </p>
            </div>
        </div>
    )
}

export default WIE;
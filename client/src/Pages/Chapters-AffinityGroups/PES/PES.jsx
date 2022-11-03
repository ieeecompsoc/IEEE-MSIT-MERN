// import react from 'react';
import './PES.css';
import PESLogo from '../../../Assets/PESLogo.png';
import Menubar from '../../../Components/Navbar/Menubar';

const PES = () => {
    return (
        <div className="pes__chapter">
            <Menubar backgroundClr="#007536" />
            <div className="contents">
                <img className="PES-img" src={PESLogo} alt="pes-logo" />
                <h2 className="pes_heading">Power and Energy Society</h2>
                <hr className="pes_line" />
                <p className="pes_main-content">The Power & Energy Society (PES) provides the world's largest forum for sharing the latest in
                    technological developments in the electric power industry, for developing standards that guide the
                    development and construction of equipment and systems, and for educating members of the industry and the
                    general public. IEEE PES MSIT has been very much active globally, working closely with the world leaders
                    to create sustainable energy resources.
                </p>
            </div>
        </div>
    )
}

export default PES;
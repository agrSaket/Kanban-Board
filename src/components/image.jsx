import React from "react";
import { BsCircle, BsFillCheckCircleFill, BsThreeDots, BsFillExclamationCircleFill } from "react-icons/bs";
import { GiProgression, GiBackwardTime } from "react-icons/gi";
import { FaUserTie, FaUserGraduate, FaUserNurse, FaUserMd, FaUser } from "react-icons/fa";
import { PiCellSignalHighBold, PiCellSignalMediumBold, PiCellSignalLowBold } from "react-icons/pi";

// Image component to display individual images on the Kanban board
const Image = ({ title }) => {

    let imageSrc = "";
    switch (title) {
        case "Todo":
            imageSrc = <BsCircle style={{color:"rgb(5, 176, 62)", fontSize:'1.2rem'}}/>;
            break;
        case "In progress":
            imageSrc = <GiProgression style={{color:"rgb(248, 217, 2)", fontSize:'1.2rem'}}/>;
            break;
        case "Backlog":
            imageSrc = <GiBackwardTime style={{color:"rgb(104, 181, 254)", fontSize:'1.2rem'}}/>;
            break;
        case "Anoop sharma":
            imageSrc = <FaUserTie style={{color:"rgb(210, 105, 30)", fontSize:'1.2rem', border:'1px solid black', borderRadius:'50%', padding:'2px'}}/>;
            break;
        case "Yogesh":
            imageSrc = <FaUserGraduate style={{color:"rgb(70, 70, 70)", fontSize:'1.2rem', border:'1px solid rgb(1, 160, 2)', borderRadius:'50%', padding:'2px'}}/>;
            break;
        case "Shankar Kumar":
            imageSrc = <FaUserNurse style={{color:"rgb(25, 25, 112)", fontSize:'1.2rem', border:'1px solid rgb(1, 160, 2)', borderRadius:'50%', padding:'2px'}}/>;
            break;
        case "Ramesh":
            imageSrc = <FaUserMd style={{color:"rgb(34, 139, 34)", fontSize:'1.2rem', border:'1px solid rgb(1, 160, 2)', borderRadius:'50%', padding:'2px'}}/>;
            break;
        case "Suresh":
            imageSrc = <FaUser style={{color:"rgb(139, 0, 0)", fontSize:'1.2rem', border:'1px solid rgb(1, 160, 2)', borderRadius:'50%', padding:'2px'}}/>;
            break;
        case "No priority":
            imageSrc = <BsThreeDots style={{fontSize:'1.2rem'}}/>
            break;
        case "Urgent":
            imageSrc = <BsFillExclamationCircleFill style={{color:"orange", fontSize:'1.2rem'}}/>
            break;
        case "High":
            imageSrc = <PiCellSignalHighBold style={{color:"rgb(5, 176, 62)", fontSize:'1.2rem'}}/>
            break;
        case "Medium":
            imageSrc = <PiCellSignalMediumBold style={{color:"rgb(5, 176, 62)", fontSize:'1.2rem'}}/>
            break;
        case "Low":
            imageSrc = <PiCellSignalLowBold style={{color:"rgb(5, 176, 62)", fontSize:'1.2rem'}}/>
            break;
        case "usr-1":
            imageSrc = <FaUserTie style={{color:"rgb(210, 105, 30)", fontSize:'1.2rem', backgroundColor:'white', border:'1px solid black', borderRadius:'50%', padding:'2px'}}/>;
            break;
        case "usr-2":
            imageSrc = <FaUserGraduate style={{color:"rgb(70, 70, 70)", fontSize:'1.2rem', backgroundColor:'white', border:'1px solid black', borderRadius:'50%', padding:'2px'}}/>;
            break;
        case "usr-3":
            imageSrc = <FaUserNurse style={{color:"rgb(25, 25, 112)", fontSize:'1.2rem', backgroundColor:'white', border:'1px solid black', borderRadius:'50%', padding:'2px'}}/>;
            break;
        case "usr-4":
            imageSrc = <FaUserMd style={{color:"rgb(34, 139, 34)", fontSize:'1.2rem', backgroundColor:'white', border:'1px solid black', borderRadius:'50%', padding:'2px'}}/>;
            break;
        case "usr-5":
            imageSrc = <FaUser style={{color:"rgb(139, 0, 0)", fontSize:'1.2rem', backgroundColor:'white', border:'1px solid black', borderRadius:'50%', padding:'2px'}}/>;
            break;
        case "No priority1":
            imageSrc = <BsThreeDots style={{fontSize:'1rem', backgroundColor:'transparent'}}/>
            break;
        case "Urgent1":
            imageSrc = <BsFillExclamationCircleFill style={{color:"orange", fontSize:'1rem', backgroundColor:'transparent'}}/>
            break;
        case "High1":
            imageSrc = <PiCellSignalHighBold style={{color:"rgb(5, 176, 62)", fontSize:'1rem', backgroundColor:'transparent'}}/>
            break;
        case "Medium1":
            imageSrc = <PiCellSignalMediumBold style={{color:"rgb(5, 176, 62)", fontSize:'1rem', backgroundColor:'transparent'}}/>
            break;
        case "Low1":
            imageSrc = <PiCellSignalLowBold style={{color:"rgb(5, 176, 62)", fontSize:'1rem', backgroundColor:'transparent'}}/>
            break;
        case "Todo1":
            imageSrc = <BsCircle style={{color:"rgb(5, 176, 62)", fontSize:'0.7rem', backgroundColor:'transparent'}}/>;
            break;
        case "In progress1":
            imageSrc = <GiProgression style={{color:"rgb(248, 217, 2)", fontSize:'0.7rem', backgroundColor:'transparent'}}/>;
            break;
        case "Backlog1":
            imageSrc = <GiBackwardTime style={{color:"rgb(104, 181, 254)", fontSize:'0.7rem', backgroundColor:'transparent'}}/>;
            break;
        default:
            imageSrc = <BsFillCheckCircleFill/>;
    }

    return (
        <div className="cardContainer">
            {imageSrc}
        </div>
    );
};

export default Image;
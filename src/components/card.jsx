import React from "react";
import "../style/card.css";
import Image from "../components/image";
import { useSelector } from "react-redux";

// Card component to display individual cards on the Kanban board
const Card = ({ id, title, tags, userId, status, priority}) => {
    // const randomNum = Math.floor(Math.random() * 3) + 1;    // random number between 1 to 3
    // const randomNumString = randomNum.toString();
    const { users } = useSelector((state) => state.dataSlice);
    let availablearr = {};
    users.forEach((avuser) => {
        availablearr[avuser.id] = avuser.available;
    });

    return (
        <div className="cardContainer">
            <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
                <span className="HeaderElem1">{id}</span>
                {!status ?
                <div className="image">
                    <Image title={userId}/>
                    <div className="status" 
                    style={{backgroundColor:availablearr[userId]?'rgb(1, 160, 2)':'silver'}}
                    >
                    </div>
                </div>
                :
                <div></div>
                }
            </div>

            <div className="title">
                <p>{title}</p>
            </div>

            <div className="tags">
                <div className="tag tagimage">
                    <Image title={priority}/>
                </div>
                {tags?.map((element, index) => {
                return (
                    <div key={index} className="tag">
                        <span>●</span> {element}
                    </div>
                );
                })}
            </div>
        </div>
    );
};

export default Card;
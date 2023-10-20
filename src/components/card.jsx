// import React library, necessary dependencies, components & hooks
import React from "react";
import "../style/card.css";
import Image from "../components/image";
import { useSelector } from "react-redux";

// Card component to display individual cards on the Kanban board
const Card = ({ id, title, tags, userId, status, priority}) => {
    const { dashColumn, userstatus, prioritystatus, statstatus} = useSelector((state) => state.dataSelectSlice);
    const { users } = useSelector((state) => state.dataSlice);
    let availablearr = {};
    users.forEach((avuser) => {
        availablearr[avuser.id] = avuser.available;
    });

    return (
        // container for single card
        <div className="cardContainer">
            {/* div for id and image */}
            <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
                <span className="HeaderElem1">{id}</span>
                {!userstatus ?
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

            {/* div for title */}
            <div className="title">
                {!statstatus ?
                <div className="titleimg">
                    <Image title={status+1}/>
                </div> 
                :''
                }
                <p>{title}</p>
            </div>

            {/* div for prioritystatus and tags */}
            <div className="tags">
                {!prioritystatus ?
                <div className="tag tagimage">
                    <Image title={priority}/>
                </div>
                :
                ''
                }
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
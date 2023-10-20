import React from "react";
import { useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai"
import "../style/dashboard.css";
import Card from "../components/card";
import Image from "../components/image";

// Dashboard component for displaying the Kanban board
const Dashboard = () => {
    const { dashColumn} = useSelector((state) => state.dataSelectSlice);
    const priorityList = ["No priority", "Urgent", "High", "Medium", "Low"];
    const { users } = useSelector((state) => state.dataSlice);
    let availablearr = {};
    users.forEach((avuser) => {
        availablearr[avuser.id] = avuser.available;
    });
    
    return (
        dashColumn && (
        <div className="dashContainer">
            {dashColumn.map((element, index) => {
            return (
                <>
                <div key={index} className="dashboard">
                    <div className="cardHeading1 flexelem">
                        <div className="sideView1 flexelem">
                            <Image title={element[index]?.title}/>
                            <span>{element[index]?.title}</span>
                            <span className="lightcolor number">({element[index]?.value?.length})</span>
                        </div>
                        <div className="sideView2 lightcolor flexelem">
                            <AiOutlinePlus/>
                            <BsThreeDots/>
                        </div>
                    </div>
                    <div className="selectList">
                    {element[index]?.value?.map((element, ind) => {
                        return (
                            <div className="cardList">
                                <Card
                                    id={element.id}
                                    title={element.title}
                                    tags={element.tag}
                                    userId = {element.userId}
                                    status = {element.status}
                                    priority = {priorityList[element.priority]+"1"}
                                />
                            </div>
                        );
                    })}
                    </div>
                </div>
                </>
            );
            })}
        </div>
        )
    );
};

export default Dashboard;
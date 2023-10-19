import React, { useEffect, useState } from "react";
import { BsSliders2 } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { dataSelect } from "../components/api";
import "../style/navbar.css";

// Function to retrieve the group setting from local storage
const getGroup = () => {
    if (localStorage.getItem("group")) {
        return localStorage.getItem("group");
    } else {
        return "status";
    }
};

// Function to retrieve the order setting from local storage
const getOrder = () => {
    if (localStorage.getItem("order")) {
        return localStorage.getItem("order");
    } else {
        return "priority";
    }
};

// Navbar component for controlling display and sorting options
const Navbar = () => {
    const [slider, setSlider] = useState(false);
    const dispatch = useDispatch();
    const { tickets, users } = useSelector((state) => state.dataSlice);
    const [groups, setGroups] = useState(getGroup());
    const [order, setOrder] = useState(getOrder());

    // Handle changes in grouping or ordering options
    const handleGroups = (e, value) => {
        if (value) {
            setGroups(e.target.value);
            setSlider(!setSlider);
            localStorage.setItem("group", e.target.value);
        } else {
            setOrder(e.target.value);
            setSlider(!setSlider);
            localStorage.setItem("order", e.target.value);
        }
    };

    // Fetch data based on grouping and ordering options
    useEffect(() => {
        if (groups === "user") {
        dispatch(
            dataSelect(
            groups,
            {
                tickets,
                users,
            },
            order
            )
        );
        } else {
            dispatch(dataSelect(groups, tickets, order));
        }
    }, [tickets, dispatch, groups, users, order]);

    return (
        <div className="navbar">
            <div className="navbarButton">
                <button className="groupButton" onClick={() => setSlider(!slider)}>
                    <BsSliders2/>
                    Display 
                    <AiOutlineDown />
                </button>

                {slider && (
                <>
                    <div className="dropDown">
                        <div className="group">
                            <span style={{ color: "grey" }}>Grouping</span>
                            <select
                                value={groups}
                                onChange={(e) => handleGroups(e, true)}
                                name="group"
                                id="group"
                            >
                                <option value="status">Status</option>
                                <option value="user">User</option>
                                <option value="priority">Priority</option>
                            </select>
                        </div>

                        <div className="group">
                            <span style={{ color: "grey" }}>Ordering</span>
                            <select
                                value={order}
                                onChange={(e) => handleGroups(e, false)}
                                name="order"
                                id="order"
                            >
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </div>
                </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
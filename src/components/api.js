import axios from "axios";

// Action to fetch data from the API
export const fetchData = () => async (dispatch) => {
    try {
        /* inform the application that a data request is being made. */
        dispatch({ type: "dataRequest" });

        // Fetch data from the API
        const { data } = await axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment/"
        );

        dispatch({ type: "dataSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "dataFailure" });
    }
};

// Action to select and organize data based on group, cards, and order
export const dataSelect = (group, cards, order) => async (dispatch) => {
    try {
        dispatch({ type: "dataSelectRequest" });

        let userstatus = false;
        let prioritystatus = false;
        let statstatus = false;
        let tempset = new Set();
        // Define an array to store unique values
        let array = [], dashColumn = [];

        if (order === "title") {
            // Sort the dashColumn by the title property
            dashColumn.forEach((element, index) => {
                element[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
            });
        }

        if (group === "status") {
            statstatus = true;
            // Group data by status
            cards.forEach((element) => {
                tempset.add(element.status);
            });
            array = [...tempset];

            array.forEach((element, index) => {
                // Filter and organize data by status
                let array = cards.filter((filterElement) => {
                    return element === filterElement.status;
                });
                dashColumn.push({
                    [index]: {
                        title: element,
                        value: array,
                    },
                });
            });
        } else if (group === "user") {
            userstatus = true;
            // Group data by user
            cards?.users?.forEach((element, index) => {
                /* filter the `cards` array */
                array = cards?.tickets?.filter((filterElement) => {
                    return element.id === filterElement.userId;
                });

                /* add an object to the `dashColumn` array. */
                dashColumn.push({
                    [index]: {
                        title: element.name,
                        value: array,
                    },
                });
            });
            console.log(dashColumn);
        } else {
            // Group data by priority
            prioritystatus = true;
            let priorityList = ["No priority", "Urgent", "High", "Medium", "Low"];

            priorityList.forEach((element, index) => {
                    array = cards.filter((filterElement) => {
                        return index === filterElement.priority;
                    });

                dashColumn.push({
                    [index]: {
                        title: element,
                        value: array,
                    },
                });
            });
        }

        // Sort the dashColumn by priority in ascending order
        if (order === "priority") {
            dashColumn.forEach((element, index) => {
                element[index]?.value?.sort((a, b) => a.priority - b.priority);
            });
        }

        dispatch({ type: "dataSelectSuccess", payload: { dashColumn, userstatus, prioritystatus, statstatus } });
    } catch (error) {
        dispatch({ type: "dataSelectFailure", payload: error.message });
    }
};
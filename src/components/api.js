import axios from "axios";

// Action to fetch data from the API
export const fetchData = () => async (dispatch) => {
    try {
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

// Action to select and organize data based on group, tickets, and order
export const dataSelect = (group, tickets, order) => async (dispatch) => {
    try {
        console.log(group, tickets, order);
        dispatch({ type: "dataSelectRequest" });

        let user = false;
        let prioritystatus = false;
        let set = new Set();
        // Define an array to store unique values
        let array = [],
        dataSelected = [];

        if (order === "title") {
            // Sort the dataSelected by the title property
            dataSelected.forEach((element, index) => {
                element[index]?.value?.sort((a, b) => a.title.localeCompare(b.title));
            });
        }

        if (group === "status") {
            // Group data by status
            tickets.forEach((element) => {
                set.add(element.status);
            });

            array = [...set];

            array.forEach((element, index) => {
                // Filter and organize data by status
                let array = tickets.filter((filterElement) => {
                return element === filterElement.status;
                });
                dataSelected.push({
                    [index]: {
                        title: element,
                        value: array,
                    },
                });
            });
        } else if (group === "user") {
            user = true;
            // Group data by user
            tickets?.users?.forEach((element, index) => {
                    array = tickets?.tickets?.filter((filterElement) => {
                        return element.id === filterElement.userId;
                });

                dataSelected.push({
                    [index]: {
                        title: element.name,
                        value: array,
                    },
                });
            });
            console.log(dataSelected);
        } else {
            // Group data by priority
            prioritystatus = true;
            let priorityList = ["No priority", "Urgent", "High", "Medium", "Low"];

            priorityList.forEach((element, index) => {
                    array = tickets.filter((filterElement) => {
                        return index === filterElement.priority;
                    });

                dataSelected.push({
                    [index]: {
                        title: element,
                        value: array,
                    },
                });
            });
        }

        // Sort the dataSelected by priority
        if (order === "priority") {
            dataSelected.forEach((element, index) => {
                element[index]?.value?.sort((a, b) => b.priority - a.priority);
            });
        }

        console.log(dataSelected);
        dispatch({ type: "dataSelectSuccess", payload: { dataSelected, user, prioritystatus } });
    } catch (error) {
        dispatch({ type: "dataSelectFailure", payload: error.message });
    }
};
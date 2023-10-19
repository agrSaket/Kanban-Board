import './App.css';
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./components/api";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.dataSlice);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return tickets ? (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  ) : (
    console.error("Something went wrong")
  );
}

export default App;

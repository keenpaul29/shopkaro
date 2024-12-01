import React, { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '$'

const App = () => {

   const navigate = useNavigate();
  let inactivityTimer;

  const logout = () => {
      // Clear user session and redirect to the login page
      localStorage.removeItem("token"); // Clear auth token or session data
      navigate("/login"); // Redirect to the login page
  };

  const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(logout, 60 * 60 * 1000); // Set timeout to 1 hour (60 * 60 * 1000 ms)
  };

  useEffect(() => {
      // Reset timer on activity
      window.addEventListener("mousemove", resetTimer);
      window.addEventListener("keypress", resetTimer);

      // Start timer on component mount
      resetTimer();

      // Clean up event listeners on unmount
      return () => {
          clearTimeout(inactivityTimer);
          window.removeEventListener("mousemove", resetTimer);
          window.removeEventListener("keypress", resetTimer);
      };
  }, []);





  const [token, setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token'): '');

  useEffect(()=> {
    localStorage.setItem('token', token)
  },[token])

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken}/>
      ) : (
        <>
          <Navbar setToken={setToken}/>
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/add" element={<Add token={token}/>} />
                <Route path="/list" element={<List token={token}/>} />
                <Route path="/orders" element={<Orders token={token}/>} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;

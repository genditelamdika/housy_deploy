import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbars from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Pay from "./components/Pay";
import Detail from "./pages/Detail"
import Addhouse from "./pages/Addhouse"
import Editprofile from "./pages/Editprofile"
import Transaction from "./pages/Transaction"
import History from "./pages/History"
import Historyuser from "./pages/Historyuser"

import { PrivateRouteAdmin, PrivateRouteLogin, PrivateRouteUser } from "./components/PrivateRoute";
// import Props from "./components/Props";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import "./style.css"


import { useContext, useEffect, useState } from "react";
import { API, setAuthToken } from "./config/api";
import { UserContext } from "./context/userContext";




function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Redirect Auth but just when isLoading is false
    if (!isLoading) {
      if (state.isLogin === false) {
        // window.location('/Film')
        navigate('/');
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      checkUser();
    } else {
      setIsLoading(false)
    }
  }, []);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');
      console.log("check user success : ", response)
      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;
      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
      setIsLoading(false)
    } catch (error) {
      console.log("check user failed : ", error);
      dispatch({
        type: 'AUTH_ERROR',
      });
      setIsLoading(false)
    }
  };
 
  return (
    <div>
      {/* <Router> */}
      {/* <Navbars/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addhouse" element={<Addhouse />} />
        <Route path="/History" element={<History />} />
        <Route path="/Historyuser" element={<Historyuser />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Editprofile/:id" element={<Editprofile />} />
        <Route path="/Pay/:id" element={<Pay />} />

 
        
      </Routes>
      {/* <Footer/> */}
    {/* </Router> */}
    </div>
  )
}

export default App;

// import React, { useContext } from 'react';
// import AuthProvider from './components/AuthProvider';
// import Login from './components/Login';
// import AuthContext from './components/AuthContext';

// function App() {
//   const { user, password, logout } = useContext(AuthContext);
  
//   return (
//     <div>
//       {user ? (
//         <>
//           <p>Welcome, {user.email}!</p>
//           {password.password}
//           <button onClick={logout}>Logout</button>
//         </>
//       ) : (
//         <Login />
//       )}
//     </div>
//   );
// }

// export default function() {
//   return (
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   );
// }

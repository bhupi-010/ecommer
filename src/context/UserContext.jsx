import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null); 
  const [authenticated, setAuthenticated] = useState(false); 

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    const userName = localStorage.getItem("userName");
    const userAddress = localStorage.getItem("userAddress");
    const isAuthenticated = localStorage.getItem("authenticated");

    if (userEmail && userName && userAddress && isAuthenticated) {
      setUserDetails({ email: userEmail, name: userName, address: userAddress });
      setAuthenticated(isAuthenticated === "true");
      <Navigate to="/"  replace />
    }
    
  }, []);

  const login = (details) => {
    const { email, name, address } = details;
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", name);
    localStorage.setItem("userAddress", address);
    localStorage.setItem("authenticated", true);
    setUserDetails({ email, name, address });
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.clear(); // Clear all localStorage data
    setUserDetails(null);
    setAuthenticated(false);
  };

  return (
    <UserContext.Provider value={{ userDetails, authenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

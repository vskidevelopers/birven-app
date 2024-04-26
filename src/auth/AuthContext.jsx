import React, { createContext, useContext, useEffect, useState } from "react";

import { auth } from "@/firebase/firbase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const useUserAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Listen for auth state changes.
  //   Todo : add riderUser

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user exists!");
        console.log("user Details >>", user);
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = { user };
  console.log("User data > ", user);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

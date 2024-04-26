/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Outlet, useNavigate, useLocation } from "react-router-dom";
import { auth } from "@/firebase/firbase";
import { useState } from "react";
import { useEffect } from "react";

export default function PrivateRoutes() {
  const [authUser, setAuthUser] = useState();
  const [loginState, setLoginState] = useState(false);
  //   const { user } = useAuth();
  const user = true;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUser = () => {
      if (user) {
        console.log("User exists >>", user);
        setAuthUser(user);
        navigate("/admin");
      } else {
        alert("access denied!");
      }
    };

    fetchUser();
  }, []);

  return authUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

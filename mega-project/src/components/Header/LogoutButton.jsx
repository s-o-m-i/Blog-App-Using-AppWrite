import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout);
      })
      .catch((error) => {
        console.error("Error while logging out", error);
      });
  };

  return (
    <button
      onClick={logoutHandler}
      className="inline-block px-4 py-2 duration-200 hover:bg-blue-100 rounded-full"
    >
      Logout
    </button>
  );
};

export default LogoutButton;

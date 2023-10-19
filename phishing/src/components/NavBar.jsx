import { useEffect, useState } from "react";
import logo from "../assets/icons/logo.svg";
import profile from "../assets/icons/profile.png";
import Register from "../views/Register";
import { useAuthContext } from "../context/AuthContext";
import Login from "../views/Login";

export default function NavBar() {
  const { user, setLoginModalOpen, loginModalOpen, setUser, logout } = useAuthContext();
  return (
    <nav className="flex items-center justify-between px-[50px] py-[15px] border-b-2 bg-white border-black shadow-xl sticky top-0">
      <div className="flex items-center">
        <img className="w-[50px]" src={logo} />

        <h1 className="text-4xl font-semibold italic ml-5">My CV Resume</h1>
      </div>
      <div className="flex items-center font-semibold">
        {user?.username ? (
          <div className="flex items-center gap-4">
            <div>{user?.username}</div>
            <button
              className="hover:bg-black hover:text-white
            border border-black rounded-md px-4 py-2 m-4 transition duration-200"
              onClick={(event) => {
                event.stopPropagation();
                logout()
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={(event) => {
                event.stopPropagation();
                setLoginModalOpen(true);
              }}
              className="hover:bg-black hover:text-white
            border border-black rounded-md px-4 py-2 m-4 transition duration-200"
            >
              LOGIN
            </button>
            <Login
              modalOpen={loginModalOpen}
              setModalOpen={setLoginModalOpen}
            />
            <img className="w-[50px]" src={profile} />
          </>
        )}
      </div>
    </nav>
  );
}

import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./user/HomePage";

const Routing = () => {
  return (
        <>
            <Routes>
                    <Route path="/" element={<HomePage/>}/>
            </Routes>
    </>
  );
};

export default Routing;

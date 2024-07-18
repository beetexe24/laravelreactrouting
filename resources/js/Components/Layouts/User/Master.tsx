import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Side from "./Side";

export default function Master()
{
    return (
        <div>
            <Side />
            <Outlet />
            <Footer />
        </div>
    )
}
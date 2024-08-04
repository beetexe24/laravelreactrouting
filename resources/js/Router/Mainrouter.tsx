import React from "react";
import { Route, Routes } from "react-router-dom";
import Master from "../Components/Layouts/User/Master";
import Index from "../Components/Views/User/Main/Index";

export default function Mainrouter()
{
    {/* <Route element={<AuthMiddleware />}></Route> */}
    return (
        <Routes>
            <Route path="/" element={<Master />}>
                <Route path="/" element={<Index />} />
            </Route>
        </Routes>
    )
}
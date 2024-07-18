import React from "react";
import { Route, Routes } from "react-router";
import Master from "../Components/Layouts/User/Master";
import Index from "../Components/Views/User/ipcontent/Index";

export default function Mainrouter()
{
    return (
        <Routes>
            <Route path="/" element={<Master />}>
                <Route path="/" element={<Index />} />
            </Route>
        </Routes>
    )
}
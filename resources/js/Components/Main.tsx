import React, { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Mainrouter from "../Router/Mainrouter";

export default function Main(){
    useEffect(() => {
        initFlowbite();
    }, [])

    return (
        <div>
            <Mainrouter></Mainrouter>
        </div>
    )
}

const rootElement = document.querySelector("#app")!;
const root = createRoot(rootElement);

root.render(
    <Router>
        <Main />
    </Router>
)
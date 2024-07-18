import Axios from "axios";
import React from "react";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";


const APIrequest = Axios.create({
    baseURL: "/api",
    headers: { Authorization: `Bearer ${localStorage.getItem("auth-token")}`},
    withCredentials: true
});


APIrequest
    .get("/user")
    .then((response) => {
        
    })
    .catch((e) => {
        if(e.response.data.message === "Unauthenticated.")
        {
            localStorage.removeItem("auth-token");

            let currentLocation = window.location.href;
            let data = currentLocation.split("/");
            let tab = data[3];
            
            if(tab !== 'login' && tab !== 'create-account')
            {
                window.location.href = "/login";
            }
        }
    });

export default APIrequest;
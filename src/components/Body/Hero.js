import React from "react";
import {Contact} from "./Contact";
import {Form} from "./Form";
import {MainForm} from "./MainForm";

export const Hero = ({email, handleLogout}) => {
    return (
        <>
        <h1>Welcome {email}</h1>
        <button onClick={handleLogout}>Logout</button>
        <Form />
        <MainForm />
        <Contact/>
        </>
    );
};
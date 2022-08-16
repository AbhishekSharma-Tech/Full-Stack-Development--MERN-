import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Output } from "../components/Output";
import "../styles/Greet.css";

export const Greet = () => {

    // Taking Input First & Last Name
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    

    const getFName = event => {
        setFName(event.target.value);
    }
    const getLName = event => {
        setLName(event.target.value);
    }

    const properCase = (str) => {
        return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    }

    // Set Full Name
    const [fullName, setName] = useState("");

    const display = () => {
        // const properName = "Welcome " + properCase(fname) + " " + properCase(lname);
        setName(`Welcome! ${properCase(fname)} ${properCase(lname)}`);
        // setName(properName);
    }


    // Clear Values
    const clear = () => {
        setFName(" ");
        setLName(" ");
        setName(" ");
    }

    return (
        <div className="container mt-5">
            <div className="row g-3">
                <Output name="Greet App"/>
                <Input val={fname} funCall={getFName} label="First Name"/>
                <Input val={lname} funCall={getLName} label="Last Name"/>

                <div className="d-flex gap-2 d-md-flex">
                    <Button color="success" funCall={display} label="Submit"/>
                    <Button color="danger" funCall={clear} label="Clear"/>
                </div>

                <Output name={fullName}/>
            </div>
        </div>
    );
}
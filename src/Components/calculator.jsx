import React, { useState } from "react";
import "./styles.css"
export default function Calculator() {
    const [input, setInput] = useState("");
    const [num1, setnum1] = useState("")
    const [num2, setnum2] = useState("")
    const [operation, setOperation] = useState("");
    const handleClick = async (value) => {
        if ( value == "Clear" ) {
            setInput("")            
        } else if ( value == "=" ) {
            try {
                const response = await fetch("http://localhost:8080/calcDirectly", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        exp: input
                    })
                })
                const data = await response.json()
                if(response.ok) setInput(data)
                else setInput("Error")
            } catch {
                setInput("Error")
            }
        } else {
            setInput(input + value)
        }
    };
    const buttons = [
        "1", "2", "3", "+",
        "4", "5", "6", "-",
        "7", "8", "9", "*",
        "/","0" ,"Clear", "=", "."
    ]
    return <div className="Container pacifico-regular">
        <div className="Calc">
            <p className="title">Calculator</p>
            <div className="Display">
                <h1>
                    {input}
                </h1>
            </div>
            <div className="ButtonContainer">
                {
                    buttons.map((button) => {
                        return (
                            <div key={button} className={`button ${isNaN(button) ? "utiltity" : ""} `} onClick={() => handleClick(button)}>
                                <p>{button}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
};
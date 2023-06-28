import React from "react";
import Dice from "./Dice"
import "./style.css"

export default function App()
{
    return(
        <main>
            <div className="board" > 
                <Dice value="1"/>
                <Dice value="2"/>
                <Dice value="3"/>
                <Dice value="4"/>
                <Dice value="5"/>
                <Dice value="5"/>
                <Dice value="4"/>
                <Dice value="3"/>
                <Dice value="2"/>
                <Dice value="1"/>
            </div>
        </main>
    )
}
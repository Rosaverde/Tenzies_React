import React, { useState } from "react";
import Dice from "./Dice"
import "./style.css"


export default function App()
{
    function allNewDice()
    {
        const newDice = []
        for(let i = 0; i <10; i++)
        {
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
    }

    const [dices, setDices] = React.useState(allNewDice)
    console.log(dices)

    const diceElements = dices.map( dice => <Dice value={dice} /> )

    return(
        <main>
            <div className="board" >
                {diceElements}
            </div>
        </main>
    )
}
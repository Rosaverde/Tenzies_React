import React from "react";
import Dice from "./Dice"
import {nanoid} from "nanoid"
import "./style.css"


export default function App()
{
    function allNewDice()
    {
        const newDice = []
        for(let i = 0; i <10; i++)
        {
            newDice.push({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }

    function rollDice()
    {
        setDices(allNewDice)
    }
    
    const [dices, setDices] = React.useState(allNewDice)

    const diceElements = dices.map( dice => <Dice key={dice.id} value={dice.value} isHeld={dice.isHeld} /> )
    return(
        <main>
            <div className="board" >
                {diceElements}
            </div>
            <button className="roll-button"
            onClick={rollDice}>Roll Dice</button>
        </main>
    )
}
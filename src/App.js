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
        setDices(prevDices => 
            {return prevDices.map((dice) => {
            return dice.isHeld ? dice : {... dice, value: Math.ceil(Math.random() * 6)}
        })})
    }

    function toggle(id)
    {
        setDices(prevDices => {
            return prevDices.map((dice) => {
                return dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
            })
        })
    }
    
    const [dices, setDices] = React.useState(allNewDice)

    const diceElements = dices.map( dice => 
    <Dice 
    key={dice.id} 
    value={dice.value} 
    isHeld={dice.isHeld}
    toggle={() => toggle(dice.id)}
    /> )
    return(
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="board" >
                {diceElements}
            </div>
            <button className="roll-button"
            onClick={rollDice}>Roll Dice</button>
        </main>
    )
}
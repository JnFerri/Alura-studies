import React from "react";
import Button from "../button";

class Form extends React.Component{
    render(){
        return(
        <form>
            <div>
            <label>

            </label>
            <input 
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que voc"
             />
            </div>
            <div>
            <label>

            </label>
            <input type="time" />
            </div>

            <Button/>
        </form>
        )
    }
}
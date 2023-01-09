import { monitorEventLoopDelay } from "perf_hooks";
import React from "react";
import { getAllJSDocTagsOfKind } from "typescript";
import { ITasks } from "../../types/tasks";
import Button from "../Button";
import style from  './Form.module.scss';

class Form extends React.Component<{
    setTasks : React.Dispatch<React.SetStateAction<ITasks[]>>
}> {
    state = {
        task: "",
        time: "00:00"
    }

    addTask(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        this.props.setTasks(oldTasks=> [...oldTasks, {...this.state}])
        console.log('state:', this.state);
    }
    render(){
        return(
        <form className={style.novaTarefa} onSubmit = {this.addTask.bind(this)}>
            <div className={style.inputContainer}>
            <label htmlFor="tarefa">
            Adicione um novo estudo
            </label>
            <input 
            type="text"
            name="tarefa"
            value={this.state.task}
            onChange = {evento => this.setState({...this.state , task: evento.target.value})}
            id="tarefa"
            placeholder="O que você quer estudar"
            required
             />
            </div>
            <div className={style.inputContainer}>
            <label htmlFor="tempo">
            Tempo
            </label>
            <input type="time" 
            step= "1"
            name="tempo"
            value={this.state.time}
            onChange={evento => this.setState({...this.state, time: evento.target.value})}
            id="tempo"
            min="00:00"
            max="01:30:00"
            required
            />
            </div>

            <Button type='submit'>
                Adicionar
            </Button>
            
            
        </form>
        )
    }
}

export default Form
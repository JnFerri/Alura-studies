
import React from 'react';
import Item from './item'
import style from './List.module.scss';
import {useState} from 'react'
import { ITasks } from '../../types/tasks';

function List({tasks}: {tasks: ITasks[]} ){
    
    return(
        <aside className= {style.listaTarefa}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item,index) =>(
                    <Item
                    key={index}
                    {...item}
                    />
                    
                ))}
            </ul>
        </aside>
    )
}

export default List;
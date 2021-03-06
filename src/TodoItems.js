import React from 'react';

import {TodoItem} from './TodoItem'

export const TodoItems = (props) => {
    return(
        <section>
         {props.children}

        <table>
            <tbody>
            { props.items.map((item) => { 
            return ( 
            <TodoItem
            item = {item}
            handleCompleteClick={props.handleCompleteClick}
            handleDeleteClick={props.handleDeleteClick}
            />
            );     
         })}
         </tbody>
        </table>
        </section>
    );
};
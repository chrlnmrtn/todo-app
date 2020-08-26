import React, {useState} from "react";

import {AddtodoItem} from './AddtodoItems';
import {TodoItems} from './TodoItems';

export const App = () => {
    const [ description, setDescription ] = useState("");
    const [ items, setItems] = useState([]);


    const handleChange = (event) =>{
        console.log(event.target.value);
        setDescription(event.target.value);
        localStorage.setItem('description', event.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
    };


    const handleAdditem = () =>{
       const newItem = {
           id: items.length + 1,
           description: description,
           isComplete: false,
       };

    const updatedItem = [...items, newItem];
        setItems (updatedItem);
        setDescription("");
    };


    const handleCompleteClick = (id) => {
        const updatedItems = items.map((item) => {
            if(id === item.id){
                return{
                    ...item, isComplete: !item.isComplete
                };
            }
            return item;
        });
        setItems(updatedItems);
    };

    const handleDeleteClick = (id) => {
        const updatedItem = items.filter((item) => item.id !== id);
        setItems(updatedItem);

    }

    const activeItems = () => items.filter((item) => !item.isComplete);
    const completeItems = () => items.filter((item) => item.isComplete);

    return(

        <div>
            My App

            <AddtodoItem
            description = {description}
            handleChange={handleChange}
            handleClick={handleAdditem}
            handleSubmit={handleSubmit}/>

            <TodoItems
            items = {activeItems()}
            handleCompleteClick={handleCompleteClick}
            handleDeleteClick={handleDeleteClick}
            >

            <h2>Active Items</h2>
            </TodoItems>


            <TodoItems
            items = {completeItems()}
            handleCompleteClick={handleCompleteClick}
            handleDeleteClick={handleDeleteClick}
            >

            <h2>Completed Items</h2>
            </TodoItems>
            
        </div>
    );
};
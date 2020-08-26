import React from 'react';
import PropTypes from "prop-types";

export const TodoItem = ({item, handleCompleteClick, handleDeleteClick}) => {
    return(
    <tr>
        <td>{item.description}</td>
        <td>
            <input type="checkbox" checked={item.isComplete} 
            onChange={() => handleCompleteClick(item.id)}
            />
        
        </td>
        <td>
        <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
        </td>
        </tr>
    );
};


TodoItem.propType = {
    item: PropTypes.object,
    handleCompleteClick: PropTypes.func,
    handleDeleteClick: PropTypes.func,
};
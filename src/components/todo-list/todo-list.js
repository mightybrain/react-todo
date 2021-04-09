import React from "react";

import  TodoItem from "../todo-item";

import "./todo-list.styl";

const TodoList = ({todos, onDeleteItem, onToggleDone}) => {

    const elements = todos.map((item) => {
        const {key, ...itemProps} = item;
        return (
            <li className="todo-list__item" key={key}>
                <TodoItem 
                    {... itemProps} 
                    onDeleted = {() => onDeleteItem(key)}
                    onToggleDone = {() => onToggleDone(key)}
                />
            </li>
        )
    })

    return (
        <div className="todo-list">
            <ul className="todo-list__list">
                {elements}
            </ul>
        </div>
    )
}

export default TodoList;
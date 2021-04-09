import React, { Component } from "react";

import "./todo-item.styl";

export default class TodoItem extends Component {

    render() {

        const { label, onDeleted, onToggleDone, done } = this.props;
        let classNames = "todo-item";

        if(done) {
            classNames += " todo-item--done";
        }
    
        return (
            <div className={classNames}>
                <span
                    className="todo-item__title"
                    onClick={onToggleDone}>
                    {label}
                </span>
                <button
                    className="todo-item__button"
                    onClick={onDeleted}>
                </button>    
            </div>
        )
    }
}
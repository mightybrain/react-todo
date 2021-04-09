import React, { Component } from "react";

import Header from "../header";
import TodoList from "../todo-list";

import "./app.styl";

export default class App extends Component {

    constructor(){
        super();
        this.state = {
            todoData: [
                this.createItem("Drink Coffe"),
                this.createItem("Have a  lunch"),
                this.createItem("Be cool")
            ],
            searchingValue: "",  
            activeFilter: "All" // All, Undone
        }
    }

    onSearching = (value) => {
        this.setState({...this.state, searchingValue: value});
    }

    onToggleFilter = (label) => {
        this.setState({...this.state, activeFilter: label});
    }

    generateKey = () => {
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for(let i = 0; i < 3; i++){
            result = result + characters.charAt(Math.floor((Math.random() * characters.length)));
        }

        return result
    }

    createItem = (text) => {
        return {
            label: text,
            done: false,
            key: this.generateKey()
        };
    }

    toggleProperty = (arr, key, propName) => {

        const elemNumber = arr.findIndex((item) => item.key === key);
        const oldItem = arr[elemNumber];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        
        return [
            ...arr.slice(0, elemNumber),
            newItem,
            ...arr.slice(elemNumber + 1)
        ];
    }

    onToggleDone = (key) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, key, "done")
            };
        })
    }   

    onAddItem = (text) => {
        const newItem = this.createItem(text);

        this.setState(({ todoData }) => {
            return {
                todoData: [...todoData, newItem]
            };
        })
    }

    onDeleteItem = (key) => {
        this.setState(({ todoData }) => {
            const elemNumber = todoData.findIndex((item) => item.key === key);

            const newState = [
                ...todoData.slice(0, elemNumber),
                ...todoData.slice(elemNumber + 1)
            ];

            return {
                todoData: newState
            };
        })
    }

    filter = (arr) => {
        switch(this.state.activeFilter.toLowerCase()){
            case "all":
                return arr;
            case "undone":
                return arr.filter((item) => !item.done);
            default:
                return arr;
        }
    }

    search = (arr) => {
        return (
            arr.filter((item) => item.label.toLowerCase().includes(this.state.searchingValue.toLowerCase()))
        )
    }

    render(){

        const doneCount = this.state.todoData.filter((item) => item.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        const filteredData = this.filter(this.search(this.state.todoData));

        return (
            <div className="app">
                <div className="todo">
                    <Header
                        toDo={todoCount}
                        done={doneCount}
                        activeFilter={this.state.activeFilter}
                        onToggleFilter={this.onToggleFilter} 
                        searchingValue={this.state.searchingValue}
                        onSearching={this.onSearching}
                        onAddItem={this.onAddItem}/>
                    <TodoList 
                        todos={filteredData}
                        onDeleteItem={this.onDeleteItem}
                        onToggleDone={this.onToggleDone}/>
                </div>
            </div>
        )
    }
}

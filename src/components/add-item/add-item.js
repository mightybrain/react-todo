import React, { Component } from "react";

import "./add-item.styl";

export default class AddItem extends Component {
    constructor(){
        super();
        this.state = {
            itemText: "",
        }
    }

    onInputChange = (event) => {
        this.setState({
            itemText: event.target.value,
        })
    }

    onSubmit = (event) => {
        event.preventDefault();

        this.props.onAdd(this.state.itemText);
        this.setState({
            itemText: "",
        })
    }

    render(){
        return (
            <div className="add-item">
                <form 
                    className="add-item__form"
                    onSubmit={this.onSubmit}>
                    <input
                        placeholder="Type what need to do and press Enter"
                        className="add-item__input"
                        onChange={this.onInputChange}
                        value={this.state.itemText}>
                    </input>
                </form>
            </div>
        )
    }
}
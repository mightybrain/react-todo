import React from "react";

import Filter from "../filter";
import Search from "../search";
import AddItem from "../add-item";

import "./header.styl";

const Header = ({toDo, done, activeFilter, onToggleFilter, searchingValue, onSearching, onAddItem}) => {
    
    return (
        <div className="header">
            <h1 className="header__title">Todo</h1>
            <span className="header__hint">{toDo} more to do, {done} done</span>
            <div className="header__filter">
                <Filter 
                    activeFilter={activeFilter}
                    onToggleFilter={onToggleFilter}/>
            </div>
            <div className="header__search">
                <Search
                    searchingValue={searchingValue}
                    onSearching={onSearching}/>
            </div>
            <div className="header__add-item">
                <AddItem
                    onAdd={onAddItem}/>
            </div>
        </div>
    )

}

export default Header;
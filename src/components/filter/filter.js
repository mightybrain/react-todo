import React from "react";

import "./filter.styl"

const Filter = ({activeFilter, onToggleFilter}) => {

    const filterProps = [
        {label: "All"},
        {label: "Undone"}
    ]

    const filterItems = filterProps.map((item) => {
        let classNames = "filter__button ";
        if(item.label === activeFilter){
            classNames += "filter__button--active";
        }
        return (
            <li className="filter__item" key={item.label}>
                <button 
                    className={classNames}
                    onClick={() => onToggleFilter(item.label)}>
                    {item.label}
                </button>
            </li>
        )
    })

    return (
        <div className="filter">
            <ul className="filter__list">
                {filterItems}
            </ul>
        </div>
    )
    
}

export default Filter;

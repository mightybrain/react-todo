import React from "react";

import "./search.styl"

const Search = ({onSearching, searchingValue}) => {

    return (
        <div className="search">
            <input 
                placeholder="Type here to search"
                type="text"
                className="search__input"
                value={searchingValue}
                onChange={(event) => onSearching(event.target.value)}/>    
        </div>
    )
}

export default Search;
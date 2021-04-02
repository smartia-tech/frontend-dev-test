import React, { useState, useCallback, useRef } from 'react'
import debounce from 'lodash.debounce';
const SearchBar = (prop) => {
    const searchValue = useRef(null);
    const onChangeEvent = debounce(() => {
        console.log(searchValue)
        prop.filterOp(searchValue.current.value)
    }, 300) 
   
    return (
        <input className="searchBar"  type="text"
        placeholder="Search.." onChange={onChangeEvent} ref={searchValue}/>
    );
}
export default SearchBar;
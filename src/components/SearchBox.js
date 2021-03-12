//The search box
import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <input 
                className='pa3 ba b--dark-blue bg-lighest-blue'
                type='search'
                placeholder='Search Flights by Name'
                onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;
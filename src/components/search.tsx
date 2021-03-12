import React, { ChangeEvent } from 'react'
import debounce from 'lodash.debounce';
import TextField from '@material-ui/core/TextField';


const SearchBar = ({ searchAction }: SearchParam) => {
    //maybe pass this by props
    const waitUntil = 1000 //ms

    const doSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        searchAction(value)
    }

    return (
        <div>
            <TextField size="medium" placeholder="Search by name" onChange={debounce(doSearch, waitUntil)}  />
        </div>
    )

}

type SearchParam = {
    searchAction: (value: string) => void
}

export default SearchBar
import React from 'react'


const Search = (props) => {

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    return  (
        <form onSubmit={handleFormSubmit}>
            <div className="input-group mb-3">
                <input  type="text" 
                        className="form-control" 
                        placeholder="Enter Search Term.." 
                        onChange={props.searchLaunchesProp}
                />
            </div>
        </form>
    )

}

export default Search;


/* class Search extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {

        return  (
            <form onSubmit={this.handleFormSubmit}>
                <div className="input-group mb-3">
                    <input  type="text" 
                            className="form-control" 
                            placeholder="Search.." 
                            onChange={this.props.searchLaunchesProp}
                    />
                </div>
            </form>
        )

    }
}

export default Search; */

/* import { useEffect, useState } from "react";

const Search = ({onFormSubmit}) => {

    const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=> {
        onFormSubmit(searchTerm)
    }, [searchTerm])

    return (
                <div className="input-group mb-3">
                    <input  type="text" 
                            className="form-control" 
                            placeholder="Search.." 
                            value= {searchTerm}
                            onChange={ e => setSearchTerm(e.target.value)}
                    />
                </div>
    );

};

export default Search; */
/* 
import React from 'react'

class Search extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {

        return  (
            <form onSubmit={this.handleFormSubmit}>
                <div className="input-group mb-3">
                    <input  type="text" 
                            className="form-control" 
                            placeholder="Search.." 
                            onChange={this.props.searchLaunchesProp}
                    />
                </div>
            </form>
        )

    }
}

export default Search; */
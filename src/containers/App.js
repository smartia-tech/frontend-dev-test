import React,{Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            flights: [],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://api.spacexdata.com/v4/launches/past')
        .then(response => response.json())
        .then(spaceShips => [this.setState({flights:spaceShips})]);
        
    }
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});        
    }

    render(){
        const {flights, searchField} = this.state;
        const filteredFlights = flights.filter(flight => {
            return flight.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if (flights.length === 0){
            return <h1 className='tc'>Loading...</h1>
        }
        else{
            return(
                <div className='tc'>
                    <h1 className ='f1'>Space-X</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList flights={filteredFlights}/>
                        </ErrorBoundary>                        
                    </Scroll>                   
                </div>
            );
        }
        
    }
    
}

export default App;
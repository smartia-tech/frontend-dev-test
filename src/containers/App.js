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
    //Fetch the Space X past mission using the provided Api
    componentDidMount(){
        fetch('https://api.spacexdata.com/v4/launches/past')
        .then(response => response.json())
        .then(spaceShips => [this.setState({flights:spaceShips})]);
        
    }

    //On chaning the serach field set it to filter the names
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});        
    }

    //Render te page
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
import React, {Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state ={
            hasError: false
        }
    }   

    conponentDidCatch(error,info){
        this.setState({hasError : true});
    }

    render(){
        if (this.state.hasError){
            return <h1 className='tc'>Oops... Looks like some error has occured</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
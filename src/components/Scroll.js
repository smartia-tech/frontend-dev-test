//This class helps in adding an individual scroll for the cards that keeps search bar at its place while scrolling
import React from 'react'

const Scroll =(props) => {
    return (
        <div style={{overflowY:'scroll',border:'1px solid black', height:'800px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import LaunchList from './LaunchList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [launchListDefault, setLaunchListDefault] = useState();
  const [launchList, setLaunchList] = useState();

  const fetchData = async () => {
    return await fetch('https://api.spacexdata.com/v4/launches/')
      .then(response => response.json())
      .then(data => {
        setLaunchList(data) 
        setLaunchListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = launchListDefault.filter(launch => {
      return launch.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setLaunchList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <LaunchList launchList={launchList}/>
    </>
   );
}

export default SearchPage
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider, createMuiTheme, TextField } from "@material-ui/core";
import LaunchComponent from "./components/launch";

function App() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  useEffect(() => {
    axios
      .get("/launches/past")
      .then((response) => {
        setLaunches(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const launchesList = () => {
    return launches
      .filter((value) =>
        value.name.toLowerCase().match(search.toLocaleLowerCase())
      )
      .map((launch) => <LaunchComponent launch={launch} key={uuidv4()} />);
  };

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <h1 style={{ textAlign: "center", marginTop: "1em" }}>
          Space-X Launches Search
        </h1>
        <div className="text_field_wrapper">
          <TextField
            variant="outlined"
            value={search}
            label="Search for a launch..."
            onChange={changeHandler}
          />
        </div>

        <div className="past_launches">
          <h1 style={{ textAlign: "center" }}>Past launches: </h1>
          <div className="launches">{launches && launchesList()}</div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

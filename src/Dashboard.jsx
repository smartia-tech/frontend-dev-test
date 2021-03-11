/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    margin: "10px",
  },
  paper: {
    // padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    color: "#000",
    borderRadius: "10px",
    backgroundColor: "#eeeeee",
    boxShadow:
      "8px 8px 10px #00000040, -8px -8px 10px #ffffff80, 2px 2px 5px #00000040, -4px -4px 5px #ffffff80",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [data, setData] = useState();
  const [launches, setLaunches] = useState();
  const [search, setSearch] = useState(false);
  const [searchLaunches, setSearchLaunches] = useState();
  const [searchName, setSearchName] = useState();

  useEffect(() => {
    async function space() {
      axios
        .get("https://api.spacexdata.com/v4/launches/past")
        .then((response) => setData(response.data));
    }
    space();
  }, []);

  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }

  function getSingleLaunch(i) {
    return (
      <Grid item xs={12} sm={3} key={i}>
        <Card className={classes.paper}>
          <CardMedia
            component="img"
            image={data[i].links.patch.small}
            alt={data[i].name}
            title={data[i].name}
          />
          <CardContent style={{ textAlign: "left", padding: "10px" }}>
            <Typography gutterBottom variant="h6">
              {data[i].name}
            </Typography>
            <Typography gutterBottom variant="body1">
              Date : {formatDate(data[i].date_utc)}
            </Typography>
            <Typography gutterBottom variant="body1">
              Landing :
              {data[i].cores[0].landing_success === true ? "Success" : "Failed"}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  useEffect(() => {
    function component() {
      if (data !== undefined) {
        let length = data.length - 1;
        let spaceData = [];
        for (let i = length; i >= 0; i--) {
          spaceData.push(getSingleLaunch(i));
        }
        setLaunches(spaceData);
      }
    }
    component();
  }, [data]);

  const handleName = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearch = () => {
    setSearch(true);
    if (data !== undefined) {
      let length = data.length - 1;
      let searchData = [];
      for (let i = length; i >= 0; i--) {
        if (data[i].name.toLowerCase().includes(searchName.toLowerCase())) {
          console.log(data[i].name);
          searchData.push(getSingleLaunch(i));
        }
      }
      setSearchLaunches(searchData);
    }
  };

  const handleSearchClose = () => {
    setSearchName("");
    setSearch(false);
  };

  return (
    <div className={classes.root}>
      <div
        style={{
          textAlign: "-webkit-center",
          padding: "20px 10px",
          backgroundColor: "#eeeeee",
        }}
      >
        <Grid container spacing={2} style={{ width: "100%" }}>
          <Grid item xs={12}>
            <Card className={classes.paper}>
              <Typography variant="h5" className={classes.title}>
                SpaceX Launches
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Enter name"
                size="small"
                value={searchName}
                style={{ margin: "10px" }}
                onChange={handleName}
              />
              <div style={{ display: "flex" }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={handleSearchClose}
                  style={{ borderRadius: 0, textTransform: "capitalize" }}
                >
                  Cancel
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSearch}
                  style={{ borderRadius: 0, textTransform: "capitalize" }}
                >
                  Search
                </Button>
              </div>
            </Card>
          </Grid>
          {search === false && data !== undefined && launches}
          {search === true && searchLaunches}
        </Grid>
      </div>
    </div>
  );
}

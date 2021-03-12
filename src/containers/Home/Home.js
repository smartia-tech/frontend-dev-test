import React, { useState, useEffect } from "react";
import SearchInput from "components/SearchInput/SearchInput";
import LaunchCard from "components/LaunchCard/LaunchCard";
import { Grid, Welcome, Container, SearchBar, More, Tag } from "./Styles";
import { ReactComponent as SpaceXLogo } from "assets/space-x-logo.svg";
import { ReactComponent as ExternalLinkLogo } from "assets/external-link.svg";

const Home = () => {
  const [input, setInput] = useState("");
  const [launchListDefault, setLaunchListDefault] = useState([]);
  const [launchList, setLaunchList] = useState([]);

  const fetchData = async () => {
    return await fetch("https://api.spacexdata.com/v4/launches/past")
      .then((response) => response.json())
      .then((data) => {
        const reversedData = data.reverse();
        setLaunchList(reversedData);
        setLaunchListDefault(reversedData);
      });
  };

  const updateInput = async (input) => {
    const filtered = launchListDefault.filter((launch) => {
      return launch.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);

    setLaunchList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Welcome>
        <video
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100vh",
          }}
          autoPlay
          muted
          loop
        >
          <source
            src="https://www.spacex.com/media/SN10_Tracker-02_Landing-com.mp4"
            type="video/mp4"
          />
        </video>
        <Container style={{ position: "absolute" }}>
          <SpaceXLogo style={{ width: "50%" }} />
          <h1>Launch History</h1>
          <br />
          <div>
            <More href="#search">See More</More>
          </div>
          <br />
          <p>
            Made with ❤️ by{" "}
            <Tag
              href="https://www.haloss1.me/"
              rel="noreferrer"
              target="_blank"
            >
              Haloss1 <ExternalLinkLogo width="0.7rem" />
            </Tag>
          </p>
        </Container>
      </Welcome>
      <SearchBar id="search">
        <SearchInput input={input} onChange={updateInput} />
      </SearchBar>
      <div style={{ minHeight: "90vh" }}>
        <Grid>
          {launchList.map((item, index) => {
            console.log(item);
            return (
              <LaunchCard launch={item} url={item.links.webcast} key={index} />
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default Home;

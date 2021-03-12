import React from "react";
import moment from "moment";
import { Card, Image, Title, Subtitle, Content, Date } from "./Styles";

const LaunchCard = (props) => {
  return (
    <Card href={props.url} rel="noreferrer" target="_blank">
      <Image src={props.launch.links.patch.small} alt={props.launch.name} />
      <div>
        <Title>{props.launch.name}</Title>
        <br />
        <Subtitle>Core landing success: </Subtitle>
        <Content>
          {props.launch.cores.map(
            (core, index) => `${index}: ${core.landing_success ? "Yes" : "No"} `
          )}
        </Content>
        <br />
        <Subtitle>Launch date: </Subtitle>
        <Date>
          {moment(props.launch.date_utc).format("MMMM Do YYYY, h:mm:ss a")}
        </Date>
      </div>
    </Card>
  );
};

export default LaunchCard;

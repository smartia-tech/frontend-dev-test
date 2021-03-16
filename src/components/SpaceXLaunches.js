import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Card, Input } from "antd";
import styled from "styled-components";

const { Meta } = Card;
const { Search } = Input;

const Container = styled.div`
  .search_input {
    padding-top: 20px;
    display: block;
    margin: 0 auto;
    width: 700px;
  }
  .card_container {
    display: block;
    margin: 0 auto;
    margin-top: 40px;
  }
`;

export default function SpaceXLaunches() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/launches/past")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Container>
      <Search
        className="search_input"
        allowClear
        enterButton="Search"
        placeholder="Search"
        size="large"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {filteredData.map((item) => (
        <Card
          className="card_container"
          hoverable
          style={{ width: 400 }}
          cover={<img alt="example" src={item.links.patch.small} />}
        >
          <Meta title={item.name} />
          <h4>Launch Date: {item.date_local}</h4>
          {item.cores.map((d) => (
              <h4>Did it land? {d.landing_success === null
                ? "There is no information"
                : d.landing_success}
            </h4>
          ))}
        </Card>
      ))}
    </Container>
  );
}

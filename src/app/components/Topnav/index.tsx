import React from "react";

import { Nav } from "./styles";
import { ReactComponent as Icon } from "app/assets/img/icon.svg";
import { Link } from "react-router-dom";

const Topnav: React.FC = (props) => {
  return (
    <Nav>
      <Link to="" className="logo">
        <Icon />
        <span>Space Archive</span>
      </Link>
    </Nav>
  );
};

export default Topnav;

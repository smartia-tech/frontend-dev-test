import React from "react";

import "./index.scss";
const shipClass = "ship";

interface SpaceShipProp {
  name: string;
  date_local: string;
  links: Links;
  cores: CoreObject[];
}

interface Links {
  patch: Patch
}

interface Patch {
  small: string;
}

interface CoreObject {
  landing_success: boolean | null;
}

const Ship: React.FunctionComponent<SpaceShipProp> = ({
  links,
  name,
  date_local,
  cores
}) => {
 return  (
  <div className={shipClass}>
    <img src={links.patch.small} alt={"Space ship small"}/>
    <p className={`${shipClass}-name`}>Name: {name}</p>
    <p className={`${shipClass}-date`}>Launch Date: {date_local}</p>
    <div className={`${shipClass}-cores`}>
      {cores.map(({ landing_success }) => (
        <p>
          Landing Status:
          {landing_success === null
            ? "  Landing status not available"
            : landing_success
            ? "Successful landing"
            : "Failed landing"}
        </p>
      ))}
    </div>
  </div>
);

}

export default Ship;

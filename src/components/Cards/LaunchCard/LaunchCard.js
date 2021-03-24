import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as UI from "./UI";

const LaunchCard = ({ launch }) => {
  return (
    <S.Container>
      <UI.Image imageUrl={launch?.links?.patch?.small} />
      <UI.Name name={launch?.name} />
      <UI.ReleaseDate date={launch?.date_local} />
      <UI.LandingSuccess cores={launch?.cores} />
    </S.Container>
  );
};

LaunchCard.propTypes = {
  launch: PropTypes.object,
};

export default LaunchCard;

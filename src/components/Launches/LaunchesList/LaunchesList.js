import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import * as C from "components";

const LaunchesList = ({ launches }) => {
  return (
    <S.Container>
      <S.FlexContainer>
        {launches?.map((launch, index) => (
          <S.FlexItem
            lg={3}
            md={3}
            sm={4}
            xs={6}
            mb={12}
            margin='15px 15px 25px'
            key={launch?.id || index}
          >
            <C.Card.Launch launch={launch} />
          </S.FlexItem>
        ))}
      </S.FlexContainer>
    </S.Container>
  );
};

LaunchesList.propTypes = {
  launches: PropTypes.array,
};

export default LaunchesList;

import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as C from "components";

const LandingSuccess = ({ cores }) => {
  const { countdown } = useCountdownTimer();

  const coresWithLandingSuccess = (cores) => {
    const landingWithSuccess =
      cores?.filter(({ landing_success }) => landing_success === true) || [];

    return (landingWithSuccess.length * 100) / cores?.length;
  };

  return cores || countdown === 0 ? (
    <S.Container>{`Landing Success: ${coresWithLandingSuccess(
      cores
    )}%`}</S.Container>
  ) : (
    <C.UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

LandingSuccess.propTypes = {
  cores: PropTypes.array,
};

export default LandingSuccess;

import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as C from "components";

const Name = ({ name }) => {
  const { countdown } = useCountdownTimer();

  return name || countdown === 0 ? (
    <S.Container>{name || "Name unavailable"}</S.Container>
  ) : (
    <C.UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

Name.propTypes = {
  title: PropTypes.string,
};

export default Name;

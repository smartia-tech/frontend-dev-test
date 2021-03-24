import React from "react";
import PropTypes from "prop-types";
import { useCountdownTimer } from "hooks";
import * as S from "./styles";
import * as C from "components";

const ReleaseDate = ({ date }) => {
  const { countdown } = useCountdownTimer();

  return date || countdown === 0 ? (
    <S.Container>{new Date(date).toLocaleString() || "*"}</S.Container>
  ) : (
    <C.UI.Skeleton
      variant='text'
      animation='wave'
      SkeletonStyle={S.SkeletonStyle}
    />
  );
};

ReleaseDate.propTypes = {
  date: PropTypes.string,
};

export default ReleaseDate;

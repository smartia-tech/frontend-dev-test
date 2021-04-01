import React from "react";

import { Container, LoaderBox, ErrorContainer } from "./styles";
import Loader from "../Loader";
import Button from "app/styles/elements/Button";
import P from "app/styles/elements/P";

interface Props {
  className?: string;
  loading?: boolean;
  error?: boolean;
  errorMessage?: string;
  errorControlOnClick?: () => void;
  loaderContainerClassName?: string;
  overlay?: boolean;
}
const LoaderContainer: React.FC<Props> = (props) => {
  const {
    className,
    loading,
    error,
    errorMessage = "Network Error",
    loaderContainerClassName,
    errorControlOnClick,
    overlay = false,
  } = props;
  return (
    <Container className={className}>
      {loading && (
        <LoaderBox
          className={`${overlay ? "overlay " : ""}${
            loaderContainerClassName || ""
          }`}
        >
          <Loader
            role="status"
            aria-label="loader"
            className="loader"
            size="60"
            strokeWidth="2"
          />
        </LoaderBox>
      )}
      {!loading && error && (
        <ErrorContainer role="alert">
          <P medium semiBold className="error-message">
            {errorMessage}
          </P>
          <Button onClick={errorControlOnClick}>Try Again</Button>
        </ErrorContainer>
      )}
      {(!loading || overlay) && !error && <>{props.children}</>}
    </Container>
  );
};

export default LoaderContainer;

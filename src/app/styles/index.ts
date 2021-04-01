import { css } from "@emotion/react";

export default css`
  * {
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
    background-color: transparent;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  *::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE and Edge and Old Firefox */
  * {
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }

  html {
    font-size: 20px;
    color: #000000;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  body {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    font-family: "Comfortaa", cursive, -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  #root {
    min-height: 100vh;
    height: 100%;
    width: 100%;
  }

  .Toastify__toast-container.toast__container,
  .Toastify__toast.toast__toast,
  .Toastify__toast-body.toast__body {
    font-family: "Comfortaa";
    padding: 0px;
    margin: 0;
    border-radius: 4px;
    width: 100%;
  }

  .Toastify__toast-container.toast__container,
  .Toastify__toast-body.toast__body {
    width: 100%;
    max-width: 400px;
    right: 0;
  }
  .Toastify__toast.toast__toast {
    margin-bottom: 1rem;
    background-color: transparent;
  }

  .Toastify__toast.toast__toast {
    min-height: auto;
  }

  @media only screen and (max-width: 480px) {
    .Toastify__toast-container.toast__container {
      bottom: 0;
      margin: auto;
      left: 0;
      right: 0;
      padding: 20px;
    }
  }
`;

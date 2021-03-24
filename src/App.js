import { ThemeProvider } from "styled-components";
import { GlobalStyles, GlobalTheme } from "./assets/styles";
import Notifications from "react-notifications-component";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <ThemeProvider theme={GlobalTheme}>
        <GlobalStyles />
        <Notifications />

        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;

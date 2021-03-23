import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, GlobalTheme } from "./assets/styles";

const App = () => {
  return (
    <>
      <ThemeProvider theme={GlobalTheme}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;

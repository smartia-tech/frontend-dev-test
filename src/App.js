import { ThemeProvider } from "styled-components";
import { GlobalStyles, GlobalTheme } from "./assets/styles";
import Routes from "./routes";

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

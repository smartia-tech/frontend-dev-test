import { BrowserRouter as Router } from "react-router-dom";

import Routes from "app/routes";
import Providers from "./providers";

function App() {
  return (
    <Providers>
      <Router>
        <Routes />
      </Router>
    </Providers>
  );
}

export default App;

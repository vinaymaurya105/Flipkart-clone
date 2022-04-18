import Routes from "./routes";
import ContextProvider from "context";

const App = () => (
  <ContextProvider>
    <Routes />
  </ContextProvider>
);

export default App;

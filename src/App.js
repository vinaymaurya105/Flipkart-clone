import Routes from "./routes";
import Context from "context";

const App = () => (
  <Context.Provider value={{ user: "anil" }}>
    <Routes />;
  </Context.Provider>
);

export default App;

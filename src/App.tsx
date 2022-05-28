import { FunctionComponent } from "react";
import { render } from "react-dom";

const App: FunctionComponent = () => {
  return <h1>Hello world</h1>;
};

render(<App />, document.getElementById("root"));

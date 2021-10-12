import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import About from "./pages/About";
import Login from "./pages/Login";
import Project from "./pages/Project";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
        </Switch>
        <Switch>
          <Route exact path="/about" component={About}></Route>
        </Switch>
        <Switch>
          <Route exact path="/project" component={Project}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

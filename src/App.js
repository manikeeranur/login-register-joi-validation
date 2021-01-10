import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Register from "./component/Register";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

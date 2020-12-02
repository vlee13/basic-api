import "./App.css";
import { Switch, Route } from "react-router-dom";
import AllStudents from "./pages/AllStudents";
import RandomStudent from "./pages/RandomStudent";
import StudentDetails from "./pages/StudentDetails";
import Home from "./pages/Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Switch>
        <Route exact path="/student-list" component={() => <AllStudents />} />
        <Route exact path="/randomize" component={() => <RandomStudent />} />
        <Route
          exact
          path="/student/:id"
          component={(props) => <StudentDetails {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import { Home } from "./pages/Home";
import { AddTask } from "./pages/AddTask";
import { EditTask } from "./pages/EditTask";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <Router>
      <TaskProvider>
        <NavBar />
          <div className="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add-task" component={AddTask} />
              <Route path="/edit-task/:id" component={EditTask} />
            </Switch>
          </div>
      </TaskProvider>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Navigation from "../Navbar/Navigation";
import ExerciseList from "../Exercise/Exercise-list";
import EditExercise from "../Exercise/Edit-exercise";
import CreateExercise from "../Exercise/Create-exercise";
import CreateUser from "../User/Create-user";

function App() {
  return (
    <div className="container">
      <Router>
        <Navigation />
        <br/>
        <Route exact path="/" component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </Router>
    </div>
  );
}

export default App;

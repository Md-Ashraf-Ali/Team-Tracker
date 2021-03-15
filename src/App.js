import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import League from './components/League/League';
import TeamDetails from './components/TeamDetails/TeamDetails';
import Header from './components/Header/Header';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home">
        <Home></Home>
        </Route>
        <Route path="/Header">
         <Header></Header>
        </Route>
        <Route path = "/League/:idTeam">
          <TeamDetails></TeamDetails>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path= "*">
          <NoMatch/>
        </Route>
        <Route path ="/League">
          <League></League>
        </Route>
      </Switch>
    </Router>
      
  );
}

export default App;

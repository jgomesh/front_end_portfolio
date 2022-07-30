import { Route, Switch } from 'react-router-dom';
import './App.css';
import ContactMe from './pages/ContactMe';
import Landpage from './pages/Landpage';
import Project from './pages/Projects';

function App() {
  return (
    <Switch>
      <Route exact path="/front_end_portfolio" component={ Landpage }/>
      <Route exact path="/work" component={ Project }/>
      <Route exact path="/contact" component={ ContactMe }/>
    </Switch>
  );
}

export default App;

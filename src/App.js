import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landpage from './pages/Landpage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Landpage }/>
    </Switch>
  );
}

export default App;

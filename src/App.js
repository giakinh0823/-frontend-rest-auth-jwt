import { Route, Switch } from 'react-router-dom';
import './App.css';
import AuthFeature from './feature/Auth';
import HomeFeature from './feature/Home';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/auth">
            <AuthFeature />
          </Route>
          <Route path="/" exact>
            <HomeFeature />
          </Route>
        </Switch>
    </div>
  );
}

export default App;

import { FC } from 'react';
import Home from '../pages/Home';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
 } from 'react-router-dom';

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route component={ Home } exact />
      </Switch>
    </Router>
  );
}

export default Routes;

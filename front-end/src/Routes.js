import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LogInPage } from './pages/LoginPage';
import { SingUpPage } from './pages/SignUpPage';
import { UserInfoPage } from './pages/UserInfoPage';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <UserInfoPage />
        </Route>
        <Route path='/login'>
          <LogInPage />
        </Route>
        <Route path='/singup'>
          <SingUpPage />
        </Route>
      </Switch>
    </Router>
  );
};

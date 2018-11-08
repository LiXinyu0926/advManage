import React, {Component} from 'react';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom'
import Login from './login'
import Admin from './admin'


class Routers extends Component {
    render() {
        console.log(this)
        return (
            <Router>
                    <Switch>
                    <Route exact path="/:name" component={Admin} />
                    <Route path="/"  component={Login} />
                    </Switch>
            </Router>
        );
    }
}

export default Routers;
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import (OnePlusLoadable, MiLoadable, AsusLoadable)

const Main = () => {
    <Router>
        <Switch>
            <Route path='/oneplus' component={OnePlusLoadable} />
            <Route path='/mi' component={MiLoadable} />
            <Route path='/asus' component={AsusLoadable} />
        </Switch>
    </Router>
}
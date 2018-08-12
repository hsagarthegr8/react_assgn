import React, { Component } from 'react';
import { AppContext } from '../App'

import Screen from './screen'

class Theatre extends Component {
    render() {
        return (
            <div>
                Theatre Name: &nbsp;
                    <AppContext.Consumer>
                        {(context) => context.theatre}
                    </AppContext.Consumer>
                    <br/><br/>
                <Screen />
            </div>
        );

    }
}

export default Theatre;
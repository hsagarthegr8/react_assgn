import React, { Component } from 'react';

const createReactClass = require('create-react-class');

const Welcome = createReactClass({
    render: function () {
        return (
            <div>
                <h1>Welcome to Capgemini!</h1>
            </div>
        );
    }
});

export default Welcome;

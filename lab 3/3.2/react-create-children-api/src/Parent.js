import React, { Component } from 'react';

class Parent extends Component {

    restrictChild() {
        try {
            React.Children.only(this.props.children)();
        } catch (error) {
            alert("There are 4 children.. so this throws error..");
        }
    }

    render() {
        var cnt = React.Children.count(this.props.children);
        const children = (this.props.children)
        console.log("Number of Children is : ");
        console.log(cnt);
        console.log("The Children are : ");
        console.log(this.props.children);
        return (
            <div>
                {React.Children.map(children, (child, i) => {
                    // Ignore the first child
                    if (i === 1) return
                    return child
                })}
                <br /><br /><br /><br />
                {this.props.children}
                <br /><br /><br /><br />
                <button onClick={this.restrictChild.bind(this)}>Restrict to one</button>
            </div>
        );
    }
}

export default Parent;
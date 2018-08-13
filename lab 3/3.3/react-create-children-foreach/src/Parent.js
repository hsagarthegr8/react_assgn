import React, { Component } from 'react';

class Parent extends Component {

    render() {
        const childArr = ["Dip","Bizz","AriK"];
        var length=0;
        React.Children.forEach(childArr,
        child=>(
            length+=1
        ));
        React.Children.forEach(this.props.children,
        child=>(
            console.log(child)
        ));

        return(
            <div>
                {this.props.children}
                {childArr.map((child,index)=>(<h3>String: {child}<br/> Index: {index}<br/> Length: {child.length}</h3>))}
                <br/><hr/><h3>The number of strings : {length}</h3>
            </div>
        );
    }
}

export default Parent;
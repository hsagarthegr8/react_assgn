import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: '',
      listItems: []
    }
  }

  itemChange = (event) => {
    this.setState({
      item: event.target.value
    })
  }

  addItem = (event) => {
    this.setState((prevState)=>({
      listItems:[...prevState.listItems, prevState.item],
      item: ''
    }))
    event.preventDefault()
  }

  render() {
    let listItems = this.state.listItems.map((item, index)=>{
      return <option key={index}>{item}</option>
    })
    return (
      <div className="App">
        <form onSubmit={this.addItem}>
        name: &nbsp;
        <input type="text"
        placeholder="Enter Item to add"
        value={this.state.item} 
        onChange={this.itemChange}
        required />
        <input className="btn" type="submit" value="add" />
        </form>

        <select>
          {listItems}  
        </select>
      </div>
    );
  }
}

export default App;

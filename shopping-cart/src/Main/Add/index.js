import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import './style.css';

const API_PATH = "/item/add";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: '',
      amount: '',
      error: null
    }
  }

  handleFormSubmit = e => {
  e.preventDefault();
  axios({
    method: "post",
    url: `${API_PATH}`,
    headers: { "content-type": "application/json" },
    data: this.state
  })
    .catch(error => this.setState({ error: error.message }));
};

  render() {

    return (
      <div className="App">
      <h3>Add Item</h3>
      <div>
      <form>

        <label>Name</label>
        <input type="text" id="name" name="name" placeholder="Item name"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />

        <label>Description</label>
        <input type="text" id="description" name="description" placeholder="Describe the item"
          value={this.state.description}
          onChange={e => this.setState({ description: e.target.value })}
        />

        <label>Price</label>
        <input type="text" id="price" name="price" placeholder="$0.00"
          value={this.state.price}
          onChange={e => this.setState({ price: e.target.value })}
        />

        <label>Amount</label>
        <input type="text" id="amount" name="amount" placeholder="Enter the amount"
          value={this.state.amount}
          onChange={e => this.setState({ amount: e.target.value })}
        />

        <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Add Item" />

      </form>
      </div>
      </div>
    );
  }
}

export default Add;

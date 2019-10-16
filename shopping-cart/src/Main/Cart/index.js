import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Cart extends Component {
  constructor(props){
      super(props);
      this.state = {
        list: []
      }
    }

    componentDidMount() {
      this.getList()
    }

    getList = () => {
      fetch("/list")
      .then(res => res.json())
      .then(item => {
        this.setState({ list: item });
        console.log(this.state.list);
      })
      .catch(console.log);
    }

    render() {
      const { list } = this.state;

      return (
        <div>
          {this.state.list.map(item => (
            <Card>
            <Card.Body>
            <Card.Title>Name:</Card.Title>
            {<Card.Text>{item.name}</Card.Text> }
            <Card.Title>Description:</Card.Title>
            {<Card.Text>{item.description}</Card.Text> }
            <Card.Title>Price:</Card.Title>
            {<Card.Text>{item.price}</Card.Text> }
            <Card.Title>Amount:</Card.Title>
            {<Card.Text>{item.amount}</Card.Text> }
            </Card.Body>
            </Card>
          ))}
        </div>
      );
    }
}

export default Cart;

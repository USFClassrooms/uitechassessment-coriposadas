import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
         <h1>Home</h1>
         <Link to={'./cart'}>
           <button variant="raised">
               Cart List
           </button>
         </Link>
         <Link to={'./add'}>
           <button variant="raised">
               Add Item
           </button>
         </Link>
       </div>
    );
  }
}

export default Home;

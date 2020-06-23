import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor() {
    // We need to define super() at the beginning of the 
    // constructor to have access to 'this'
    super();

    // Here we initialize our local state as an object
    this.state = {
      name: 'Carlos'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Cristina'
      });
    }, 1000);
  }

  render() {
    console.log('Name:', this.state.name);

    return (
      <div className="Home">
        <h1>Welcome to Codejobs</h1>

        <p>
          In this recipe you will learn how to add styles to
          components. If you want to learn more you can visit
          our Youtube Channel at
          <a href="http://youtube.com/codejobs">Codejobs</a>.
        </p>
        <p>
          <button className="btn btn-primary m-1">
            Click me!
          </button>
        </p>
      </div>
    );
  }
}

export default Home;

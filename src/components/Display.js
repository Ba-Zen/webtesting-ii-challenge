import React, { Component } from 'react';
import Dashboard from './Dashboard';

class Display extends Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0
  };

  render() {
    const { strikes, balls } = this.state;
    return (
      <div>
        <h1 className='display'>Display</h1>
        <h2>Strikes:{strikes}</h2>
        <h2>Balls:{balls}</h2>
        <Dashboard
          strikeCount={this.strikeCount}
          ballCount={this.ballCount}
          hit={this.hit}
          foul={this.foul}
        />
      </div>
    );
  }

  strikeCount = () => {
    const { strikes } = this.state;
    if (strikes < 2) {
      return this.setState({ strikes: strikes + 1 });
    } else {
      return (
        this.setState({ strikes: 0, balls: 0, fouls: 0 }) + alert('Strike Out')
      );
    }
  };

  ballCount = () => {
    const { balls } = this.state;
    if (balls < 3) {
      return this.setState({ balls: balls + 1 });
    } else {
      return this.setState({ balls: 0, strikes: 0, fouls: 0 }) + alert('Walk');
    }
  };

  hit = () => {
    return this.setState({ balls: 0, strikes: 0, fouls: 0 }) + alert('Hit');
  };

  foul = () => {
    const { fouls, strikes } = this.state;
    if (fouls < 2 && strikes < 2) {
      return this.setState({
        fouls: fouls + 1,
        strikes: strikes + 1
      });
    } else {
      return fouls;
    }
  };
}

export default Display;

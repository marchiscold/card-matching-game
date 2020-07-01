import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: [true , true, true, false]
    };
  }
  
  handleClick(cardNum) {
    let newCards = this.state.cards.slice();
    newCards[cardNum] = !newCards[cardNum];
    this.setState({
      cards: newCards
    });
  }

  render() {

    return (
      <div className='board'>
        <Card open={this.state.cards[0]} onClick={() => this.handleClick(0)}/>
        <Card open={this.state.cards[1]} onClick={() => this.handleClick(1)}/>
        <Card open={this.state.cards[2]} onClick={() => this.handleClick(2)}/>
        <Card open={this.state.cards[3]} onClick={() => this.handleClick(3)}/>
      </div>
    );
  }
}

export default App;

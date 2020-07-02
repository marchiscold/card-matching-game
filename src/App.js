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
    let cardList = this.state.cards.map((isOpen, index) => {
      return <Card id={index} open={isOpen} onClick={(id) => this.handleClick(id)}/>;
    });

    return (
      <div className='board'>
        {cardList}
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'

class App extends React.Component {
  constructor (props) {
    super(props)
    const CARDS_AMOUNT = 4;
    const cards = this.shuffle(this.generateCards(CARDS_AMOUNT));
    this.state = {
      cards: cards
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  generateCards (num) {
    let cards = [];
    let colors = ['rebeccapurple', 'goldenrod', 'palegreen', 'lightcoral'];
    for (let i = 0; i < num; i++) {
      let card = {
        isOpen: false,
        color: colors[i],
        id: colors[i],
      };
      cards.push(card);
      cards.push({...card});
    }
    
    return cards;
  }

  shuffle(list) {
    return list;
  } 
  
  handleClick(cardNum) {
    let newCards = [...this.state.cards];
    newCards[cardNum].isOpen = !newCards[cardNum].isOpen;
    this.setState({
      cards: newCards
    });
  }

  render() {
    let cardList = this.state.cards.map((card, index) => {
      return <Card key={index} 
                   id={index} 
                   open={card.isOpen} 
                   color={card.color}
                   onClick={this.handleClick}/>;
    });

    return (
      <div className='board'>
        {cardList}
      </div>
    );
  }
}

export default App;

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
      cards: cards,
      openCards: [],
      matched: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  generateCards (cardAmount) {
    let cards = [];
    let colors = ['', 'rebeccapurple', 'goldenrod', 'palegreen', 'lightcoral'];
    for (let i = 1; i < cardAmount + 1; i++) {
      let card = {
        isOpen: false,
        isMatched: false,
        color: colors[i],
        id: i,
      };
      cards.push(card);
      cards.push({...card, ...{id: -i}});
    }
    
    return cards;
  }

  shuffle(list) {
    return list;
  } 
  
  handleClick(cardNum) {
    let newCards = [...this.state.cards];
    let openCards = this.state.openCards;

    if (!newCards[cardNum].isOpen) {
      newCards[cardNum].isOpen = true;
      openCards.push(newCards[cardNum]);
    }

    if (openCards.length == 2 && openCards[0].color == openCards[1].color) {
      newCards.map(card => {
        if (card.color == openCards[0].color) {
          card.isMatched = true;
        }
      });
    }

    if (openCards.length > 2) {
      let firstTwoIds = openCards.slice(0, 2).map(card => card.id);
      newCards = newCards.map(card => {
        if (firstTwoIds.includes(card.id) && !card.isMatched) {
          card.isOpen = false;
          return card;
        }
        return card;
      });
      openCards = openCards.slice(2);
    }

    this.setState({
      cards: newCards,
      openCards: openCards,
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

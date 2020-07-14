import React from 'react';
import './App.css';
import Card from './Card'
import MatchedCards from './MatchedCards';
import Timer from './Timer';
import GameBoard from './GameBoard';

class App extends React.Component {
  constructor (props) {
    super(props)
    const CARDS_AMOUNT = 4;
    const cards = this.shuffle(this.generateCards(CARDS_AMOUNT));
    this.state = {
      cards: cards,
      openCards: [],
      matched: 0,
      timer: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => ({timer: state.timer + 1}))
    }, 1000);
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
    let cards = [...this.state.cards];
    let openCards = this.state.openCards;
    let matchedCards = this.state.matched;

    if (!cards[cardNum].isOpen) {
      cards[cardNum].isOpen = true;
      openCards.push(cards[cardNum]);
    }

    if (openCards.length == 2 && openCards[0].color == openCards[1].color) {
      cards.map(card => {
        if (card.color == openCards[0].color) {
          card.isMatched = true;
        }
      });
      matchedCards += 2;
      openCards = [];
    }

    if (openCards.length > 2) {
      let firstTwoIds = openCards.slice(0, 2).map(card => card.id);
      cards = cards.map(card => {
        if (firstTwoIds.includes(card.id) && !card.isMatched) {
          card.isOpen = false;
          return card;
        }
        return card;
      });
      openCards = openCards.slice(2);
    }

    this.setState({
      cards: cards,
      openCards: openCards,
      matched: matchedCards,
    });
  }

  render() {
    return (
      <GameBoard
        cards={this.state.cards}
        matched={this.state.matched}
        timer={this.state.timer}
        onCardClick={this.handleClick}
      />
    );
  }
}

export default App;

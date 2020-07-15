import React from 'react';
import './App.css';
import GameBoard from './GameBoard';
import GameStart from './GameStart';
import GameEnd from './GameEnd';

class App extends React.Component {
  constructor (props) {
    super(props)
    const CARDS_AMOUNT = 4;
    const cards = this.shuffle(this.generateCards(CARDS_AMOUNT));
    this.state = {
      gameState: 'START_SCREEN',
      cards: cards,
      openCards: [],
      timer: 0,
    };
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleGameStart = this.handleGameStart.bind(this);
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
  
  handleCardClick(cardNum) {
    let cards = [...this.state.cards];
    let openCards = this.state.openCards;

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
    });
  }

  handleGameStart () {
    this.setState({
      gameState: 'GAME_SCREEN'
    });
  }

  render() {
    let screen;
    switch(this.state.gameState) {
      case 'START_SCREEN':
        screen = <GameStart startGame={this.handleGameStart}/>;
        break;
      case 'GAME_SCREEN':
        screen = (
          <GameBoard
            cards={this.state.cards}
            timer={this.state.timer}
            onCardClick={this.handleCardClick}
          />
        );
        break;
      case 'GAME_OVER_SCREEN':
        screen = <GameEnd />;
        break;
      default: 
        screen = <div>error screen</div>
    }

    return (
      <div className="wrapper">
        {screen}
      </div>
    );
  }
}

export default App;

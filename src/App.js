import React from 'react';
import './App.css';
import GameBoard from './GameBoard';
import GameStart from './GameStart';
import GameEnd from './GameEnd';

const CARDS_AMOUNT = 4;

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleStartOver = this.handleStartOver.bind(this);
    const cards = this.shuffle(this.generateCards(CARDS_AMOUNT));
    this.state = {
      gameState: 'START_SCREEN',
      cards: cards,
      timer: 0,
      isBlocked: false,
    };
  }

  resetGameState() {
    const cards = this.shuffle(this.generateCards(CARDS_AMOUNT));
    this.setState({
      gameState: 'START_SCREEN',
      cards: cards,
      timer: 0,
      isBlocked: false,
    });
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
    let tempList = [...list];
    //TODO for testing
    return tempList;

    for (let i = tempList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempList[i], tempList[j]] = [tempList[j], tempList[i]];
    }

    // return tempList;
  } 
  
  handleCardClick(cardNum) {
    if (this.state.isBlocked) {
      return;
    }

    let cards = JSON.parse(JSON.stringify(this.state.cards));
    cards[cardNum].isOpen = true;
    let openCards = cards.filter(card => card.isOpen);

    if (openCards.length == 2 && openCards[0].color == openCards[1].color) {
      openCards.forEach((card) => {
        card.isMatched = true;
        card.isOpen = false;
      })
    } else if (openCards.length == 2) {
      setTimeout(() => {
        this.closeOpenCards();
        this.setState({
          isBlocked: false
        });
      }, 700);

      this.setState({
        isBlocked: true,
        cards: cards,
      });
      return;
    } 

    let matchedCardsAmount = cards.reduce((matched, card) => {
      return card.isMatched ? matched + 1 : matched;
    }, 0);
    if (matchedCardsAmount == cards.length) {
      this.setState({
        gameState: 'GAME_OVER_SCREEN',
        cards: cards,
      });
      clearInterval(this.timerId);
      return;
    }

    this.setState({
      cards: cards,
    });
  }

  closeOpenCards() {
    let cards = [...this.state.cards];
    cards = cards.map((card) => {
      card.isOpen = false;
      return card;
    })
  }

  handleGameStart() {
    this.setState({
      gameState: 'GAME_SCREEN'
    });

    this.timerId = setInterval(() => {
      this.setState((state) => ({timer: state.timer + 1}))
    }, 1000);
  }

  handleStartOver() {
    this.resetGameState();
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
            rows={2}
            timer={this.state.timer}
            onCardClick={this.handleCardClick}
          />
        );
        break;
      case 'GAME_OVER_SCREEN':
        screen = <GameEnd onStartOver={this.handleStartOver} />;
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

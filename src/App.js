import React from 'react';
import './App.css';
import GameBoard from './GameBoard';
import GameStart from './GameStart';
import GameEnd from './GameEnd';
import {MODE, GRID, SCREEN} from './constants';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleStartOver = this.handleStartOver.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.handleGridChange = this.handleGridChange.bind(this);

    const [rows, cols] = GRID['2X4'];
    const cards = this.shuffle(this.generateCards(rows*cols/2, MODE.BUGS));
    this.state = {
      gameState: SCREEN.START,
      cards: cards,
      timer: 0,
      isBlocked: false,
      mode: MODE.BUGS,
      grid: GRID['2X4'],
      tries: 0,
      startScreenFadeOut: false,
      startScreenFadeIn: false,
      gameScreenFadeOut: false,
      endScreenFadeOut: false,
    };
  }

  componentDidMount() {
    const img = require('./images/bugs/1.jpg');
    const img2 = require('./images/bugs/1.jpg');
    console.log(img);
    console.log(img2);
  }
  

  resetGameState() {
    const [rows, cols] = this.state.grid;
    const cards = this.shuffle(this.generateCards(rows*cols/2, this.state.mode));
    this.setState({
      gameState: SCREEN.START,
      cards: cards,
      timer: 0,
      tries: 0,
      isBlocked: false,
    });
  }
  
  generateCards (cardAmount, mode) {
    const cards = [];
    const colors = [
      "",
      "rebeccapurple",
      "goldenrod",
      "palegreen",
      "lightcoral",
      "aquamarine",
      "darkorange",
      "limegreen",
      "fuchsia",
      "olivedrab"
    ];

    console.log(`./images/${mode}/${1}.jpg`);

    for (let i = 1; i < cardAmount + 1; i++) {
      let card = {
        isOpen: false,
        isMatched: false,
        color: colors[i],
        img: require(`./images/${mode}/${i}.jpg`),
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

    return tempList;
  } 
  
  handleCardClick(cardNum) {
    if (this.state.isBlocked) {
      return;
    }

    let cards = JSON.parse(JSON.stringify(this.state.cards));
    if (!cards[cardNum].isOpen) {
      this.setState((state) => ({
        tries: state.tries + 1
      }));
    }

    cards[cardNum].isOpen = true;
    let openCards = cards.filter(card => card.isOpen && !card.isMatched);

    if (openCards.length == 2 && openCards[0].id == -openCards[1].id) {
      openCards.forEach((card) => {
        card.isMatched = true;
      })
    } else if (openCards.length == 2) {
      setTimeout(() => {
        this.closeOpenCards();
        this.setState({
          isBlocked: false
        });
      }, 550);

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
      setTimeout(() => {
        this.setState({
          gameScreenFadeOut: true
        });
      }, 800);
      setTimeout(() => {
        this.setState({
          gameState: SCREEN.GAME_OVER,
          gameScreenFadeOut: false
        });
      }, 1000);
      this.setState({
        cards: cards
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
      startScreenFadeOut: true
    });
    setTimeout(() => {
      this.setState({
        gameState: SCREEN.GAME,
        startScreenFadeOut: false
      });
    }, 200)

    this.timerId = setInterval(() => {
      this.setState((state) => ({timer: state.timer + 1}))
    }, 1000);
  }

  handleStartOver() {
    this.setState({
      endScreenFadeOut: true
    });
    setTimeout(() => {
      this.resetGameState();
      this.setState({
        endScreenFadeOut: false,
        startScreenFadeIn: true
      });
    }, 200);
  }

  handleModeChange(mode) {
    const [rows, cols] = this.state.grid;
    const cards = this.shuffle(this.generateCards(rows*cols/2, mode));
    this.setState({
      mode: mode,
      cards: cards
    });
  }

  handleGridChange(gridType) {
    const [rows, cols] = gridType.split('x');
    const cards = this.shuffle(this.generateCards(rows*cols/2, this.state.mode));
    this.setState({
      grid: [rows, cols],
      cards: cards
    });
  }

  render() {
    let screen;
    switch(this.state.gameState) {
      case SCREEN.START:
        screen = (
          <GameStart
            onGameStart={this.handleGameStart}
            fadeout={this.state.startScreenFadeOut}
            fadein={this.state.startScreenFadeIn}
            mode={this.state.mode}
            onModeChange={this.handleModeChange}
            grid={this.state.grid}
            onGridChange={this.handleGridChange}
          />
        );
        break;
      case SCREEN.GAME:
        screen = (
          <GameBoard
            tries={this.state.tries}
            cards={this.state.cards}
            grid={this.state.grid}
            timer={this.state.timer}
            onCardClick={this.handleCardClick}
            fadeout={this.state.gameScreenFadeOut}
          />
        );
        break;
      case SCREEN.GAME_OVER:
        screen = (
          <GameEnd
            grid={this.state.grid}
            time={this.state.timer}
            tries={this.state.tries}
            onStartOver={this.handleStartOver}
            fadeout={this.state.endScreenFadeOut}
          />
        );
        break;
      default: 
        screen = <div>error screen</div>
    }

    // screen = (
    //   <GameEnd
    //     grid={this.state.grid}
    //     time={this.state.timer}
    //     tries={this.state.tries}
    //     onStartOver={this.handleStartOver}
    //     fadeout={this.state.endScreenFadeOut}
    //   />
    // );

    return (
      <div className="wrapper">
        {screen}
      </div>
    );
  }
}

export default App;

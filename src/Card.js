import React from 'react';

class Card extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    if (this.props.open) {
      return (
        <div className="card"
             style={{backgroundColor: 'rebeccapurple'}}
             onClick={() => this.props.onClick(this.props.id)}>
        open card
        </div>
      )
    }
  
    return (
      <div className="card"
           onClick={() => this.props.onClick(this.props.id)}>
        closed card
      </div>
    )
  }
}

export default Card;

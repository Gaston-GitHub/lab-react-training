import React from 'react';

class Dice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedImg: '/img/dice3.png',
            randomPic: true
         }

         this.clickDice = this.clickDice.bind(this);

    }

    render () {
        return (
            <div className="dice">
            <img onClick={this.clickDice} src={this.state.displayedImg} alt="" />
            </div>
        )
    }

    clickDice() {
        if(this.state.randomPic) {
            this.setState({randomPic: false});
            this.setState({displayedImg:'/img/dice-empty.png'})
        } else {
        setTimeout(() => {
            this.setState({randomPic: true})
            const randomInt = Math.floor(Math.random() * 6) + 1;
            this.setState({displayedImg: `img/dice${randomInt}.png`})
        }, 1000)
    }   
  }

}

export default Dice;
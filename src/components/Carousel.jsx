import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            imgs: this.props.imgs,
            displayedImg: this.props.imgs[0]
        }

        this.imgChange = this.imgChange.bind(this)
    }

    render () {
        return (
        <div className="carousel">
            <button onClick={() => this.imgChange(-1)}>Left</button>
                <img src={this.state.displayedImg} alt="" />
            <button onClick={() => this.imgChange(1)}>Right</button>
        </div>
        )
    }

    imgChange(num) {
        if(this.state.index + num ===-1) {
            this.setState({index:(this.state.imgs.length -1)})
        } else if (this.state.index + num === this.state.imgs.length) 
        { 
            this.setState({index: 0})
        } else this.setState({index: this.state.index + num})

        this.setState({displayedImg:this.state.imgs[this.state.index]})

    }


}

export default Carousel;
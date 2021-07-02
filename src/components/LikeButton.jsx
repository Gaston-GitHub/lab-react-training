import React from 'react';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: '0 likes', 
            likes: 0,
            color: ''
        }
    }

    handleClick = () => {
        this.like()
    }

    render() {
        return (
            <div className= 'likeButton'>
                <button onClick={(this.handleClick)}>{this.state.buttonText}</button>
            </div>
            )
        }

        like() {
            this.state.likes++;
            if(this.state.likes===1) {
                this.setState({buttonText:`${this.state.likes} Like`})
            } else {
                this.setState({buttonText:`${this.state.likes} Likes`})
            }
        }



    }


    export default LikeButton;
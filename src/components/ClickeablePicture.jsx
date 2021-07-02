import React from 'react';

class ClickablePicture extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            glasses: false,
            displayedImg: this.props.img
        }

        this.setGlasses = this.setGlasses.bind(this);
    }

    render () {
        return (
            <div className= "clickPicture">
                <img onClick={this.setGlasses} src={this.state.displayedImg} alt="" />
            </div>
        )
    }

    setGlasses() {
        if(this.state.glasses) {
            this.setState({glasses: false});
            this.setState({displayedImg: this.props.img})
        } else {
            this.setState({glasses:true});
            this.setState({displayedImg:this.props.imgClicked})
        }
    }


}

export default ClickablePicture;
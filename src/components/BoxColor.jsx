import React from 'react';

class BoxColor extends React.Component {
    render() {
        const {r, g, b} = this.props
        return (
            <div style={{
                backgroundColor: `rgb(${r}, ${g}, ${b})`,
                border: '1px solid black',
                margin: '1rem',
                padding: '1rem',
            
                            
            }} >
                <p>
                rgb({r}, {g}, {b})    
                </p>
                
            </div>

        )
    }
}

export default BoxColor
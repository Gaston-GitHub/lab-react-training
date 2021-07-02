import React from 'react';
import profiles from '../data/berlin.json';

class Facebook extends React.Component {
    state= {
        filters:"",
    }

    renderTable = () => {
        return (
            <div className="facebook">
                <div class="control">
                    <button onClick={() => {this.setState({filter:""})}} style={{backgroundColor: this.state.filter ==="" ? 'cyan' : 'white'}}>All</button>
                    <button onClick={() => {this.setState({filter:"England"})}} style={{backgroundColor: this.state.filter === "England" ? 'cyan' : 'white'}}>England</button>
                    <button onClick={() => {this.setState({filter:"Malaysa"})}} style={{backgroundColor: this.state.filter === "Malaysa" ? 'cyan' : 'white'}}>Malaysa</button>
                    <button onClick={() => {this.setState({filter:"Germany"})}} style={{backgroundColor: this.state.filter === "Germany" ? 'cyan' : 'white'}}>Germany</button>
                </div>
                {this.filterArr(this.state.filter).map((profile, index_cells) => (
                    <div className="profile">
                        <div className="picture"><img src={profile.img} alt="" /></div>
                            <div className="data">
                                <div><span style={{fontWeight:700}}>First Name:</span><span>{profile.firstName}</span></div>
                                <div><span style={{fontWeight:700}}>Last Name:</span><span>{profile.lastName}</span></div>
                                <div><span style={{fontWeight:700}}>Country:</span><span>{profile.country}</span></div>
                                <div><span style={{fontWeight:700}}>Type:</span><span>{profile.isStudent ? 'Student' : 'Teacher'}</span></div>

                            </div>
                       
                    </div>
                ))}

            </div>
        )
    }

    filterArr(newFilter) {
        const filterArr = profiles.filter((item) => {
            return item.country.includes(newFilter)
        })

        return filterArr

    }

    render () {
        return (
            this.renderTable()
        )
    }




}

export default Facebook;
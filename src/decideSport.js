import React, { Component } from 'react';

class decideSport extends Component {

    constructor(props) {
        super(props);

        this.state ={
            longitude: 0,
            error: ''
        }
    }

    
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    longitude: position.coords.longitude
                })
            },
            (err) =>{
                console.log(err);
                this.setState({
                    error: err.message
                })
            }
        );      
        
        const {longitude, error} = this.state;

        if (longitude !== 0 && !error){
            return(
                <div>
                    Longitude: {longitude}
                </div>
            )
        }
        else if (longitude === 0 && error){
            return(
                <div>
                    Error: {error}
                </div>
            )
        }
        return (
            <div>
                Loading...
            </div>
        );
    }
}

export default decideSport;
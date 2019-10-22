import React, { Component } from 'react';
import './decideSport.css'

class decideSport extends Component {

    constructor(props) {
        super(props);

        this.state ={
            latitude: null,
            error: ''
        }
    
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    latitude: position.coords.latitude
                })
            },
            (err) =>{
                console.log(err);
                this.setState({
                    error: err.message
                })
            }
        );  
    }

    componentDidMount(){
        console.log('did mount calisti');
    }

    componentDidUpdate(){
        console.log('did update calisti');
    }

    componentWillUnmount(){
        this.setState({
            latitude: 0
        });
    }
    
    decideSport(lat){
        const currentMonth = new Date().getMonth();
        const winter = {
            text: 'You can go to Snowboard',
            iconName: 'snowflake'
        }
        const summer = {
            text: 'Time to Swim',
            iconName: 'sun'
        }
        if (lat <0 ){
             //guney yarimkure
            return currentMonth > 3 && currentMonth < 8 ? winter : summer;            
        }
        else {
            // kuzey yarimkure
            return currentMonth > 8 || currentMonth < 3 ? winter : summer;
        }
    }
    render() {
        
        const {latitude, error} = this.state;

        if (latitude && !error){
            const sport = this.decideSport(latitude)
            return(
                <div className={`${sport.iconName}-wrapper decide-sport-container`}>
                    <h2 className="ui header">
                        <i className={`${sport.iconName} outline icon`}></i>
                        <div className="content">{sport.text}</div>
                    </h2>
                </div>
            )
        }
        else if (latitude && error){
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
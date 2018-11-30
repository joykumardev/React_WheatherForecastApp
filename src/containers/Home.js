import React, { Component } from 'react';
import { connect } from 'react-redux';
import { weatherNews } from '../actions'
import { bindActionCreators } from 'redux';

// COMPONENTS
import UpdateWeather from '../components/home/WeatherUpdate'


class Home extends Component {

    componentDidMount(){
        this.props.weatherNews();
    }

    render() {
        return (
            <div>
                <UpdateWeather update={this.props.weather.weather}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        weather:state.weather,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({weatherNews}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

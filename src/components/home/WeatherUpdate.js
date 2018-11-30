import React, {Component} from 'react'
import DayWise from './Daywise'

//Calculating Hours from API Data
const getHour = time => time ? new Date(time).getHours() : new Date().getHours();
//Calculating Date from API Data
const getDate = date => date ? new Date(date).getDate() : new Date().getDate();
//Calculating Month from API Data
const getMonth = date => date ? new Date(date).getMonth() : new Date().getMonth();
const getYear = date => date ? new Date(date).getFullYear() : new Date().getFullYear();
// Creating method to iterate over data
const showLatest = ({update},findDay,toggle) => {
    if(update){
       
        return update.map((item)=>{
            return (
                
                    <div className="d-inline-block p-2">
                        <div className="card ">
                            <div class="row">
                            <img className="card-img-top" src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt="weather"/>
                            <span className="topTemp">{item.temp.day}°C</span>
                            </div>
                            <div className="card-body">
                            <span className="max">{item.temp.max}</span>   /
                                      <span className="min">{item.temp.min}°C</span>
                                <h4 className="card-title">{item.weather[0].main}</h4>
                                <p className="card-text">
                                    <p className="day">{getDate(item.dt * 1000)}-{getMonth(item.dt * 1000)}-{getYear(item.dt * 1000)} </p>
                                    <p>{findDay(item)}</p>
                                    
                                    <p>Humidity: {item.humidity}%</p>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
            )
        })
    }
}

// Component to display Weather
class UpdateWeather extends React.Component{
    constructor () {
        super()
        this.state = {
          isHidden: false
        }
      }

      toggleHidden() {
        this.setState({ isHidden: !this.state.isHidden });
      }
    
    // Getting day name from data response
    getDay = data => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return daysOfWeek[new Date(data.dt * 1000).getDay()];
      };
    
    

    render(){
        console.log(this.props)
    
        return (
            <div className="container">
                <div className="row">
                    <div className="home-latest">
                        <h1 className="headingh1">Phoenix 5 Days Weather</h1>
                        {showLatest(this.props,this.getDay, this.toggleHidden)}

                    </div>
                </div>
            </div>
        );
    }
};

export default UpdateWeather;
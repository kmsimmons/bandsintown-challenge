import React, { Component } from 'react';
import axios from 'axios'
import './EventList.css'

const moment = require('moment')

export default class EventList extends Component {
  constructor(props){
    super(props)
    this.state = { 
      events: []
    }
  }


  componentDidMount() {
    axios.get("https://rest.bandsintown.com/artists/LukeCombs/events?app_id=test")
      .then(response => {
        this.setState({ 
            events: response.data,            
        })            
      })
      .catch(error => {
        console.log(error);
      });
    }


      render() {
        console.log(encodeURIComponent('Rosa Is the best'))
        return (
          <div className='no-events'>
            {this.state.events.length < 1 ? 'No upcoming events for this artist' : 
            <table className='table'>
              <thead>
                {this.state.events.map((event) => {
                  return (
                    <tr key={event.id}>
                    <td className='date'>{moment(event.datetime).format('MMM DD')}</td>
                    <td className='venue'>{event.venue.name}</td>
                    <td className='location'>{event.venue.country === 'United States'
                        ? `${event.venue.city}, ${event.venue.region}`
                        : `${event.venue.city}, ${event.venue.country}`}</td>
                    <td>{event.offers.length > 0 ? <a className='button' href={event.offers[0].url}>Tickets</a> : "unavailable"}</td>
                    </tr>
                  )
                })}
              </thead>
            </table>
            }
          </div>
        );
      }
    }

import React, { Component } from 'react';
import axios from 'axios'
import './Header.css'

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = { 
      name: '',
      imageURL: '',
    }

  }

  componentDidMount() {
    axios.get("https://rest.bandsintown.com/artists/LukeCombs?app_id=test")
      .then(response => {
        this.setState({ name: response.data.name, imageURL: response.data.thumb_url })
      })
      .catch(error => {
        console.log(error);
      });
    }

      render() {
        const { name, imageURL } = this.state
        return (
          <div>
            <img className='image' src={imageURL} />
            <h3 className='artist'>{name}</h3>
            <h3 className='upcoming-events'>Upcoming Events</h3>
          </div>
        );
      }
    }

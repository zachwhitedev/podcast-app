import React, { Component } from 'react';
import axios from 'axios';
import EpisodeList from '../EpisodeList/EpisodeList';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './Dropdown.module.css';
import podcastmock from '../../podcastmock';

export default class Question extends Component {

  state = {
    podcastmock: [],
    chosenGuest: '',
    celebs: ['David Goggins', 'Sam Harris', 'Jocko Willink', 'Chris D\'Elia', 'Bryan Callen']
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }); // maybe instead of setting state we send this data up to a new componenet... like an "Episodes" component
    // axios.get(`/listenAPIbullshit/search${chosenGuest}`){
    //   res => this.setState({ data: res.data })
    // }
  };

  componentDidMount () {
    // axios.get( `https://listen-api.listennotes.com/api/v2/search/${this.state.chosenGuest}` )
    //   .then( response => {
    //     this.setState({data: response.data});
    //   });
    
    this.setState({podcastmock: podcastmock});
  };

  componentDidUpdate () {
    console.log(this.state.podcastmock);
  }

  render() {
    const { celebs, chosenGuest } = this.state;

    const dropdownNames = this.state.celebs.map(celebName => {
      return (
        <MenuItem value={celebName}>{celebName}</MenuItem>
      );
    });

    return (
      <div className={styles.container}>
        <FormControl>
          <InputLabel id='demo-simple-select-helper-label'>
            Guest Name
          </InputLabel>
          <Select
            labelId='demo-simple-select-helper-label'
            id='demo-simple-select-helper'
            value={chosenGuest}
            onChange={this.handleChange}
            name='chosenGuest'
          >
            {dropdownNames}
          </Select>
          <FormHelperText>Choose the guest you're looking for.</FormHelperText>
        </FormControl>
        <EpisodeList episodes={this.state.podcastmock} />
      </div>
    )
  }
}

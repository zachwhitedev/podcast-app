import React, { Component } from 'react';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './Dropdown.module.css';

export default class Question extends Component {

  state = {
    data: [],
    chosenGuest: '',
    celebs: ['Neil Degrasse Tyson', 'Sam Harris', 'Jocko Willink']
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }); // maybe instead of setting state we send this data up to a new componenet... like an "Episodes" component
    // axios.get(`/listenAPIbullshit/search${chosenGuest}`){
    //   res => this.setState({ data: res.data })
    // }
  };

  render() {
    const { celebs, chosenGuest } = this.state;

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
            <MenuItem value={celebs[0]}>{celebs[0]}</MenuItem>
            <MenuItem value={celebs[1]}>{celebs[1]}</MenuItem>
            <MenuItem value={celebs[2]}>{celebs[2]}</MenuItem>
          </Select>
          <FormHelperText>Choose the guest you're looking for.</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

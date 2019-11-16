import React from 'react';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './Dropdown.module.css';

export default class Question extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        data: [],
        chosenGuest: '',
        celebs: ['Neil Degrasse Tyson', 'Sam Harris', 'Jocko Willink']
        
      }

      this.handleChange=this.handleChange.bind(this);
    }
  
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }


    // axios.get('/listenAPIbullshit', req, res){
    //     req.data = (
    //         data = res.data
    //         let celebs = data.sort();
    //         getCelebs(celebs);
    //     )
    
  render(){
  const { celebs, chosenGuest } = this.state;
  return (
      <div className={styles.container}>
      <FormControl>
        <InputLabel id='demo-simple-select-helper-label'>Guest Name</InputLabel>
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
    )
}
}

import React from 'react';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './Dropdown.module.css';

export default function Question(props) {
    const [data, getData] = useState([]);
    const [chosenGuest, setChosenGuest] = useState('');

  
    handleChange(event){
        this.setState({chosenGuest: event.target.value});
    };

    const handleChange = event => {
      setChosenGuest(event.target.value);
    };

    // axios.get('/listenAPIbullshit', req, res){
    //     req.data = (
    //         data = res.data
    //         let celebs = data.sort();
    //         getCelebs(celebs);
    //     )
    // }

    const celebs = ['Neil Degrasse Tyson', 'Sam Harris', 'Jocko Willink']
    let celebsSorted = celebs.sort();
    

  return (
      <div className={styles.container}>
      <FormControl>
        <InputLabel id='demo-simple-select-helper-label'>Guest Name</InputLabel>
        <Select
          labelId='demo-simple-select-helper-label'
          id='demo-simple-select-helper'
          value={chosenGuest}
          onChange={handleChange}
        >
          <MenuItem value={celebsSorted[0]}>{celebsSorted[0]}</MenuItem>
          <MenuItem value={celebsSorted[1]}>{celebsSorted[1]}</MenuItem>
          <MenuItem value={celebsSorted[2]}>{celebsSorted[2]}</MenuItem>
        </Select>
        <FormHelperText>Choose the guest you're looking for.</FormHelperText>
      </FormControl>
      </div>
    )
};


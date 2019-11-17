import React, { Component } from 'react';
import styles from './Episode.module.css';

export default class Episode extends Component {

  render() {

    return (
      <div className="Episode">
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
      </div>
    )
  }
}
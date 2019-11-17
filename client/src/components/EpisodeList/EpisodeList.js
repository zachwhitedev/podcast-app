import React, { Component } from 'react';
import styles from './EpisodeList.module.css';
import Episode from './Episode/Episode';

export default class EpisodeList extends Component {

  render() {

    return (
      <div className={styles.container}>
          {this.props.episodes.map( episode => 
            <Episode title={episode.podcast} description={episode.episodeTitle} />
          )}
      </div>
    )
  }
}
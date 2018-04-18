import React from 'react';
import ReactFitText from 'react-fittext';

import styles from './style.css';

const colors = ['Tomato', 'DodgerBlue', 'HotPink', 'MediumSeaGreen', 'SlateBlue', 'Violet', 'Gold', 'Coral', 'Aqua', 'Crimson', 'Wheat', 'Fuchsia']
const height = 30;

export default class Holding extends React.Component{
  render () {
    var shadows = [];
    var c = 0;
    for(var i = 1; i < height*2; i++) {
      shadows.push(`${(i)*10}px ${(i)*10}px 0px ${colors[i % colors.length]}`);
    }
    return (
      <div className={styles.this}>
        <div style={{'textShadow': shadows.join(', ')}}>
          <ReactFitText compressor={0.5}>
            <h1>Happy Stickers</h1>
          </ReactFitText>
        </div>
        <ReactFitText compressor={3}>
          <h2>Coming soon innit.</h2>
        </ReactFitText>
      </div>
    )
  }
}
import React from 'react';
import ReactFitText from 'react-fittext';

import Rainbowed from '../Rainbowed';

import styles from './style.css';

const HugeTitle = () => (
  <div className={styles.this}>
    <Rainbowed height={200}>
      <h1>Happy<br />Stickers</h1>
    </Rainbowed>
  </div>
)

export default HugeTitle;

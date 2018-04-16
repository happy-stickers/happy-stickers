import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';

import Rainbowed from '../Rainbowed';

export default class Header extends React.Component {
  render () {
    return (
      <div className={styles.this}>
        <div className={styles.left}>aa</div>
        <Rainbowed offset={2} height={10}>
          <h1>Happy<br />Stickers</h1>
        </Rainbowed>
        <div className={styles.right}>aa</div>
      </div>
    )
  }
}

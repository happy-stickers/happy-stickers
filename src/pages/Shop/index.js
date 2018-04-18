import React from 'react';

import ShopItem from '../../components/ShopItem';

import styles from './style.css';

export default class Shop extends React.Component {
  render () {
    return (
      <div className={styles.this}>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
    )
  }
}

import React from 'react';
import { hot } from 'react-hot-loader';

import Header from '../../components/Header';
import Full from '../../components/Full';
import HugeTitle from '../../components/HugeTitle';

import Shop from '../../pages/Shop';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import styles from './style.css';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className={styles.this}>
          <Full>
            <HugeTitle />
          </Full>
          <Header />
          <div className={styles.content}>
            <Route exact path="/" component={Shop} />
          </div>
        </div>
      </Router>
    )
  }
}

export default hot(module)(App);

import React from 'react';
import { hot } from 'react-hot-loader';

import Header from '../../components/Header';

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
          <Header />
          <div className={styles.content}>
            <Route exact path="/" component={Shop} />
          </div>
        </div>
      </Router>
    )
  }
}

export default hot(module)(App)

{/* <Rainbowed height={3}>
<ReactFitText compressor={0.5}>
  <h1>Happy Stickers</h1>
</ReactFitText>
</Rainbowed>
<ReactFitText compressor={3}>
<h2>Coming soon innit</h2>
</ReactFitText> */}

import React from 'react';
import { hot } from 'react-hot-loader';

import styles from './style.css';
import Holding from '../../pages/Holding';

class App extends React.Component {
  render () {
    return (
      <Holding />
    )
  }
}

export default hot(module)(App)

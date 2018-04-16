import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/Production';

const render = (Component) => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

render(App);

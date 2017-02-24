import React from 'react';
import ReactDOM from 'react-dom';

function render() {
  const App = require('containers/App').default;
  ReactDOM.render(<App />, document.getElementById('main'));
}

if (module && module.hot) {
  module.hot.accept('containers/App', render);
}

render();

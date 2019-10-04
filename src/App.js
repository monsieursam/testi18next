import React from 'react';
import logo from './logo.svg';
import i18next from 'i18next'

import './App.css';

function App() {
  i18next.init(
    {
      lng: 'en',
      resources: {
        en: {
          translation: {
            key: 'hello world'
          }
        }
      }
    },
    () => {
      // initialized and ready to go!
      console.log('key: ')
    }
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> {i18next.t('key')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

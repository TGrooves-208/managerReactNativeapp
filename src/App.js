import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDpaEhnSfk2jnFUkL60-LxTZvi0JYxMimQ',
      authDomain: 'manager-dbf80.firebaseapp.com',
      databaseURL: 'https://manager-dbf80.firebaseio.com',
      storageBucket: 'manager-dbf80.appspot.com',
      messagingSenderId: '1036748124546'
    };

  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import { StatusBar } from 'react-native';
import Routes from './routes';

import store from './store';

// import { Container } from './styles';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Routes />
    </Provider>
  );
};
export default App;

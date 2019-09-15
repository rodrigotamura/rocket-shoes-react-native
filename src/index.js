import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import { StatusBar } from 'react-native';
import Routes from './routes';

import store from './store';
import NavigationService from './services/navigation';

console.disableYellowBox = true;

// import { Container } from './styles';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
};
export default App;

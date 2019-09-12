import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        // setting some config for all pages
        headerStyle: {
          backgroundColor: '#191920',
        },
        // headerTintColor: '#FFF', // font color
      },
    }
  )
);

export default Routes;

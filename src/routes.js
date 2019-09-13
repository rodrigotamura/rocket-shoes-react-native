import React from 'react';
import { Easing, Animated } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';
import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
      cardStyle: {
        backgroundColor: '#191920',
      },
      transitionConfig: () => ({
        transitionSpec: {
          duration: 400, // how long the transition will take
          easing: Easing.ease, // easing function to use (https://facebook.github.io/react-native/docs/easing.html)
          timing: Animated.timing, // the type of animation to use (timing, spring, decay)
          useNativeDriver: true, // delegate all the animation related work to the native layer
        },
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
          const height = layout.initHeight;
          const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [height, 0, 0],
          });

          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });

          return { opacity, transform: [{ translateY }] };
        },
      }),
    }
  )
);

export default Routes;

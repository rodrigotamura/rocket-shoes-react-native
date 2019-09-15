import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure({ name: 'React Native Demo' })
    .use(reactotronRedux())
    .connect();

  console.tron = tron;

  tron.clear();
}

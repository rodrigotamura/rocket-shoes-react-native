import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  // only android needs polyfill
  require('intl'); // import intl object
  require('intl/locale-data/jsonp/en-US'); // load the required locale details
}

export const { format: formatPrice } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

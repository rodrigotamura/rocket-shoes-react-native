import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/rodrigotamura/rocket-shoes-react-native',
});

export default api;

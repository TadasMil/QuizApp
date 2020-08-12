import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://quizy-2e25b.firebaseio.com/'
});

export default instance;
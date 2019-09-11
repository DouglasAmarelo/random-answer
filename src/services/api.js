import axios from 'axios';

const api = axios.create({
	baseURL: `https://api.giphy.com/v1/gifs/search?q=`
});

export default api;
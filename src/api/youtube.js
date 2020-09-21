import axios from 'axios'

const API_KEY = 'AIzaSyCqx5Nrt2hQb0Lnq6Z8LIh0V0Q26CP_0HU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }
});

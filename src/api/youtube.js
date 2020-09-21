import axios from 'axios'
import data from './properties.json'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: data.api_key
    }
});

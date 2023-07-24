import axios from 'axios';

export const getNews = async () => {
    try {
        const responseData = await axios.get(`http://localhost:3000/response`);
        const res = responseData.data.results;
        return res;
    }
    catch (error) {
        return error;
    }
}

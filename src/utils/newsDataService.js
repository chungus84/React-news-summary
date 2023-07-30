import axios from 'axios';

const HOST = import.meta.env.VITE_HOST;
const PORT = import.meta.env.VITE_PORT;

// Guardian API
const GUARDIAN_HOST = import.meta.env.VITE_GUARDIAN_URI;
const API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY;

export const getNews = async () => {
    try {
        const responseData = await axios.get(`${GUARDIAN_HOST}${API_KEY}`);
        // const responseData = await axios.get(`http://${HOST}:${PORT}/response`);
        const res = formatResponse(responseData);
        return res;
    }
    catch (error) {
        return error;
    }
}

export const formatResponse = (resData) => {
    try {
        return resData.data.response.results
    }
    catch (e) {
        return resData.data.results
    }
}

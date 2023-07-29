import axios from 'axios';

const host = 'localhost';
const port = 3000;

console.log(import.meta.env.VITE_GUARDIAN_URI)


export const getNews = async () => {
    try {
        // const responseData = await axios.get(`${import.meta.env.VITE_GUARDIAN_URI}${import.meta.env.VITE_GUARDIAN_API_KEY}`);
        const responseData = await axios.get(`http://${host}:${port}/response`)
        const res = formatResponse(responseData);
        return res;
    }
    catch (error) {
        return error;
    }
}

const formatResponse = (resData) => {
    try {
        return resData.data.response.results
    }
    catch (e) {
        return resData.data.results
    }
}

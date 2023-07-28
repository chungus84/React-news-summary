import axios from 'axios';

export const getNews = async () => {
    try {
        // const responseData = await axios.get(`https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=0106c132-521f-4c0a-abf5-b027419eaa97`);
        const responseData = await axios.get(`http://localhost:3000/response`)
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

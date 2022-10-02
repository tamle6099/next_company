import axios  from "axios";
const API_KEY = process.env.cmsApiKey as string;
const API_URL = process.env.apiEndpoint as string;

const request = axios.create({
    baseURL: API_URL,
    // timeout: 5000,
    headers: {
        'X-MICROCMS-API-KEY': API_KEY
    }
})

export const get = async (path: string , options  = {} ) => {
    const response = await request.get(path, options);
    return response.data
}

export default request 

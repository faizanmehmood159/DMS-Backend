import axios from 'axios';
import { API_URL } from '../config';

export const signin = async (body) => {
    try {
        const response = await axios.post(`${API_URL}/auth/signn`, body);
        return response
    }
    catch (error) {
        throw (error);
    }
    
};
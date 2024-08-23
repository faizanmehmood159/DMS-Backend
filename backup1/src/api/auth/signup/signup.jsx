import axios from 'axios';
import { API_URL } from '../config';

export const SignUp = async (body) => {
    try {
        const response = await axios.post(`${API_URL}/auth/signup`, body);
        return response
    } 
     catch (error) {
        throw (error); 
    }
};
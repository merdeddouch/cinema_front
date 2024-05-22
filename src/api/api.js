
import axios from 'axios';

export const fetchCinemas = async () => {
    try {
        const response = await axios.get('http://localhost:8080/cinemas');
        return response.data; 
    } catch (error) {
        console.error('Error fetching cinemas:', error); 
        throw error; 
    }
};

export const fetchCities = async () => {
    try {
        const response = await axios.get('http://localhost:8080/cities');
        return response.data; 
    } catch (error) {
        console.error('Error fetching cities:', error); 
        throw error; 
    }
};


export const fetchCinemasByCity = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        console.error('Error fetching cinemas:', error); 
        throw error; 
    }
};
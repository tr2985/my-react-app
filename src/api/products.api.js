import axios from "axios";
const BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:4000/api' 
    : 'http://192.168.0.25:4000/api';


export const getAllProducts = (searchTerm) =>{

return axios.get(`${BASE_URL}/products?name=${searchTerm || ''}`);


};
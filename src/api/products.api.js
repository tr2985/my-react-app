import axios from "axios";
const BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:4000' 
    : 'http://192.168.0.25:4000';

const access_token = localStorage.getItem('token');


export const getAllProducts = (searchTerm) =>{

return axios.get(`${BASE_URL}/api/products?name=${searchTerm || ''}`);

};

// CREATE PRODUCT IN DATABASE
export const createProduct = (product) => {
    return axios.post(`${BASE_URL}/api/products`, product,

        {
           headers:{
            'Authorization': `${access_token}`
           } 
        }
    );
};

// UPDATE PRODUCT FROM DATABASE

export const updateProduct = (id,product) => {
    return axios.put(`${BASE_URL}/api/products/${id}`, product,

        {
           headers:{
            'Authorization': `${access_token}`
           } 
        }
    );
};

//  DELETE PRODUCT FROM DATABASE

export const removeProduct = (id) => {
    return axios.delete(`${BASE_URL}/api/products/${id}`,

        {
           headers:{
            'Authorization': `${access_token}`
           } 
        }
    );
};



//login to database
export const login = (loginData) => {
    return axios.post(`${BASE_URL}/auth/login`, loginData);
};


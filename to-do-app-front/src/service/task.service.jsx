import axios from 'axios';

const API_URL = 'http://localhost:3050/tasks';

export const getTasks = () => {
    return axios.get(API_URL);
};

export const getTask = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createTask = (task) => {
    return axios.post(API_URL, task);
};

export const updateTask = (id, task) => {
    return axios.patch(`${API_URL}/${id}`, task);
};

export const deleteTask = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
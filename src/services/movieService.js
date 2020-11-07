
import axios from 'axios';

const search = (searchTerm) => searchTerm ? 
  axios.get(`/api/movie?searchTerm=${searchTerm}`)
    .then(result => result.data) : Promise.resolve([]);

const getById = (id) => id ? 
  axios.get(`/api/movie/${id}`)
    .then(result => result.data) : Promise.resolve(undefined);

const getCredits = (id) => id ?
  axios.get(`/api/movie/${id}/credits`)
    .then(result => result.data) : Promise.resolve([]);

export { search, getById, getCredits };

import axios from 'axios';

const search = (searchTerm) =>
  axios.get(`/api/movie?searchTerm=${searchTerm}`)
    .then(result => result.data);

const getById = (id) =>
  axios.get(`/api/movie/${id}`)
    .then(result => result.data);

const getCredits = (id) => 
  axios.get(`/api/movie/${id}/credits`)
    .then(result => result.data);

export { search, getById, getCredits };
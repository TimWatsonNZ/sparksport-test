
import axios from 'axios';

const search = (searchTerm) => axios.get(`api/movie?searchTerm=${searchTerm}`);

export { search };
import  axios from 'axios';

const init = () => {
    axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;  
}
export default init;
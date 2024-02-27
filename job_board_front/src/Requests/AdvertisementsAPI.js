import axios from 'axios';


function findAllAdvertisements() {
    return axios.get('http://localhost:8000/api/advertisementss')
        .then(response => response.data['hydra:member'])
}


export default {
    findAllAdvertisements
};
import axios from 'axios';
import jwtDecode from 'jwt-decode';

let token;
const authenticate = (credentials) => {
    return axios.post('http://localhost:8000/api/login', credentials)
    .then(response => response.data.token)
    .then(token => {
        window.localStorage.setItem('authToken', token);
        axios.defaults.headers['Authoriwindow.localStorage.setItem(\'authToken\', token);\n' +
        '        axios.defaults.headers[\'Authorization\'] = \'Bearer \' + token;zation'] = 'Bearer ' + token;
        return true;
    });

}

const logout = () => {
    window.localStorage.removeItem('authToken');
    delete axios.defaults.headers['Authorization'];
}

function setup() {
    const token = window.localStorage.getItem('authToken');
    if(token) {
        const jwtData = jwtDecode(token);
        if(jwtData.exp * 1000 > new Date().getTime()) {
            axios.defaults.headers['Authorization'] = 'Bearer ' + token;
        } else {
            logout();
        }
        console.log(jwtData);
    } else {
        logout();
    }
    return false;
}

function isAuthenticated() {
    const token = window.localStorage.getItem('authToken');
    if(token) {
        const jwtData = jwtDecode(token);
        if(jwtData.exp * 1000 > new Date().getTime()) {
            return true;
        }
        return false;
    }
    return false;
}

export default {
    authenticate,
    logout,
    setup,
    isAuthenticated
}
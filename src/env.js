let API_URL = '';

switch(window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        API_URL = 'http://localhost:8080';
        break;
    case 'troute.herokuapp.com':
        API_URL = 'https://trail-reviews-server.herokuapp.com';
        break;

}

export default API_URL;
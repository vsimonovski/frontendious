const axios = require('axios');
import './css_modules';

axios.get('/api/hello-world').then(res => console.log(res.data));

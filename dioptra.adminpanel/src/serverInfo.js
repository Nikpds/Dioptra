import React from 'react';
import axios from 'axios';

const serverInfo = axios.create({
    baseURL: 'https://servers-4c6ba.firebaseio.com/',
})

export default serverInfo;
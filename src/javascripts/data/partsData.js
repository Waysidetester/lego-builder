import axios from 'axios';
import apiKeys from '../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const legoHeads = () => axios.get(`${baseUrl}/heads.json`);

const legoBodys = () => axios.get(`${baseUrl}/torsos.json`);

const legoLegs = () => axios.get(`${baseUrl}/legs.json`);

export default { legoHeads, legoBodys, legoLegs };

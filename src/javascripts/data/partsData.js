import axios from 'axios';

const legoHeads = () => axios.get('http://localhost:3003/heads');

const legoBodys = () => axios.get('http://localhost:3003/torsos');

const legoLegs = () => axios.get('http://localhost:3003/legs');

export default { legoHeads, legoBodys, legoLegs };

import partsData from '../../data/partsData';
import legoPrinter from './legoPrinter';

let headsArr = [];
let bodysArr = [];
let legsArr = [];


const displayHeads = () => {
  partsData.legoHeads()
    .then((heads) => {
      headsArr = heads.data;
      return headsArr;
    })
    .then((newArray) => {
      legoPrinter.partPrinter(newArray);
    })
    .catch((error) => {
      console.error(error);
    });
};

const displayBodys = () => {
  partsData.legoBodys()
    .then((bodys) => {
      bodysArr = bodys.data;
      return bodysArr;
    })
    .then((newArray) => {
      legoPrinter.partPrinter(newArray);
    })
    .catch((error) => {
      console.error(error);
    });
};

const displayLegs = () => {
  partsData.legoLegs()
    .then((legs) => {
      legsArr = legs.data;
      return legsArr;
    })
    .then((newArray) => {
      legoPrinter.partPrinter(newArray);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { displayHeads, displayBodys, displayLegs };

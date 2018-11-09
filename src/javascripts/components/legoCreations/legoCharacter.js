import $ from 'jquery';
import partsData from '../../data/partsData';
import legoPrinter from './legoPrinter';

const displayAll = () => {
  Promise.all([partsData.legoHeads(), partsData.legoBodys(), partsData.legoLegs()])
    .then((dataArray) => {
      legoPrinter.partPrinter(dataArray[0].data, 'current-head');
      legoPrinter.partPrinter(dataArray[1].data, 'current-body');
      legoPrinter.partPrinter(dataArray[2].data, 'current-legs');
    });
};

const legoNamer = () => {
  let newString = '';
  const bodyPartNames = $('.carousel-item.active');
  $.each(bodyPartNames, (i, partName) => {
    newString += partName.children[0].alt;
  });
  $('#name-container').html(`<span id="gross-name">${newString}</span>`);
};

const timedNamer = () => {
  setTimeout(legoNamer, 700);
};

export default { displayAll, timedNamer, legoNamer };

import $ from 'jquery';

const savedImages = [];

const objectChecker = (creationName) => {
  let validator = true;
  $.each(savedImages, (j, savedName) => {
    const currentName = savedName.name;
    if (creationName === currentName) {
      validator = false;
    }
  });
  return validator;
};

const printSaves = () => {
  let domString = '';
  $.each(savedImages, (index, savedLego) => {
    domString += `
    <p>${savedLego.name}</p>
    <img src='${savedLego.headUrl}'/>
    <img src='${savedLego.bodyUrl}'/>
    <img src='${savedLego.legsUrl}'/>
    `;
  });
  $('#saved-legos').html(domString);
};

const saveAction = () => {
  const creation = {};
  const newCreationParts = $('.carousel-item.active');
  $.each(newCreationParts, (i, partName) => {
    creation.name = $('#gross-name').text();
    if (i === 0) {
      creation.headUrl = partName.children[0].src;
    } else if (i === 1) {
      creation.bodyUrl = partName.children[0].src;
    } else if (i === 2) {
      creation.legsUrl = partName.children[0].src;
    }
  });
  if (objectChecker(creation.name)) {
    savedImages.push(creation);
    printSaves();
  }
};


export default { saveAction };

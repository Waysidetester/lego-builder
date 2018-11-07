import $ from 'jquery';

const partPrinter = (bodyPart) => {
  let newString = '';
  $.each(bodyPart, (i, object) => {
    newString += `<div>
      <img id="${object.id}" src="${object.imageUrl}" alt="head ${object.name}"/>
    </div>`;
  });
  $('#images').append(newString);
};

export default { partPrinter };

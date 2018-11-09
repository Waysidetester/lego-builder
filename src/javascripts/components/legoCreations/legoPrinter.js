import $ from 'jquery';
import rando from '../randomizer/rando';
import './legoCharacter.scss';

const partPrinter = (bodyPart, carouselId) => {
  let newString = `<div id="${carouselId}" class="carousel slide" data-interval="false"><div class="carousel-inner">`;
  let initPart = rando.randomNumGenerator(0, bodyPart.length);
  while (initPart >= bodyPart.length) {
    initPart = rando.randomNumGenerator(0, bodyPart.length);
  }
  $.each(bodyPart, (i, object) => {
    newString += `<div class="carousel-item ${(i === initPart) ? 'active' : ''}">
      <img class="d-block" id="${object.name}" src="${object.imageUrl}" alt="${object.name}" style="margin: 0 auto;"/>
      </div>`;
  });
  newString += `</div>
    <a class="carousel-control-prev" href="#${carouselId}" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#${carouselId}" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>`;
  $('#images').append(newString);
};

export default { partPrinter };

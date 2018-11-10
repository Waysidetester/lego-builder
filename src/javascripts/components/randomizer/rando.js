import $ from 'jquery';

const randomNumGenerator = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 0.9)) + min;
  return result;
};

const randomizeButton = () => {
  $('#randomize').on('click', () => {
    const imgSelector = $('.carousel-inner');
    $.each(imgSelector, (i, bodyParts) => {
      const partsArray = bodyParts.children;
      $(partsArray).removeClass('active');
      let newIndex = randomNumGenerator(0, partsArray.length);
      while (newIndex >= partsArray.length) {
        newIndex = randomNumGenerator(0, partsArray);
      }
      $(partsArray[newIndex]).addClass('active');
    });
  });
};

export default { randomNumGenerator, randomizeButton };

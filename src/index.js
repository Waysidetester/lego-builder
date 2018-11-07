import 'bootstrap';
import './index.scss';
import legoCharacters from './javascripts/components/legoCreations/legoCharacter';

const init = () => {
  legoCharacters.displayHeads();
  legoCharacters.displayBodys();
  legoCharacters.displayLegs();
};

init();

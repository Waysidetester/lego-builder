import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import legoCharacters from './javascripts/components/legoCreations/legoCharacter';

const init = () => {
  legoCharacters.displayAll();
  $('window').ready(legoCharacters.legoNamer);
  $('body').on('click', legoCharacters.timedNamer);
};


init();

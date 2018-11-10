import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import savedCharacters from './javascripts/components/savedCreations/savedCharacters';
import legoCharacters from './javascripts/components/legoCreations/legoCharacter';

const init = () => {
  legoCharacters.displayAll();
  $('document').ready(legoCharacters.timedNamer);
  $('body').on('click', legoCharacters.timedNamer);
  $('#save').on('click', savedCharacters.saveAction);
};


init();

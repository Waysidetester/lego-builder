import $ from 'jquery';
import firebase from 'firebase/app';
import 'bootstrap';
import './index.scss';
import savedCharacters from './javascripts/components/savedCreations/savedCharacters';
import legoCharacters from './javascripts/components/legoCreations/legoCharacter';
import rando from './javascripts/components/randomizer/rando';
import apiKeys from './db/apiKeys.json';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  legoCharacters.displayAll();
  $('document').ready(legoCharacters.timedNamer);
  $('body').on('click', legoCharacters.timedNamer);
  $('#save').on('click', savedCharacters.saveAction);
  rando.randomizeButton();
};


init();

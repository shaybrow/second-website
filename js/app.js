'use strict';

let userName = "Bob";
let correct = 0;

function askUserName() {
  userName = prompt('Hi there! Thanks for checking out my about me website. What is your name?');
  alert('Nice to meetcha ' + userName + '! Welcome.');
}

function askCad() {
  let ask1 = prompt('Am I a Canadian citizen?(yes or y or no or n)');
  ask1.toLowerCase();
  if (ask1 === 'y' || ask1 === 'yes') {

    correct++;
    alert('Nice! I\'ve never lived there but I hope to someday.');
  } else if (ask1 === 'n' || ask1 === 'no') {

    alert('Oof, That\'s not quite right. I\'m in fact a Canadian citizen.');
  } else {

    alert('Ooh ' + ask1 + ' is an invalid answer');
  }
}

function askUS() {
  let ask2 = prompt('Am I an American citizen?(yes or y or no or n)');
  ask2.toLowerCase();
  if (ask2 === 'y' || ask2 === 'yes') {
    alert('Nice! I was born in Kirkland, WA');
    correct++;

  } else if (ask2 === 'n' || ask2 === 'no') {

    alert('Oof, That is not quite right. I am an American');
  } else {

    alert('Ooh ' + ask2 + ' is an invalid answer');
  }
}

function askAge() {
  let ask3 = prompt('Am I 25?(yes or y or no or n)');
  ask3.toLowerCase();
  if (ask3 === 'y' || ask3 === 'yes') {
    alert('Nice! I am 25.');
    correct++;

  } else if (ask3 === 'n' || ask3 === 'no') {

    alert('Oof, That is not quite right. I am 25.');
  } else {

    alert('Ooh ' + ask3 + ' is an invalid answer');
  }
}

function askRead() {
  let ask4 = prompt('Do I hate to read?(yes or y or no or n)');
  ask4.toLowerCase();
  if (ask4 === 'n' || ask4 === 'no') {
    alert('Nice! I love to read.');
    correct++;

  } else if (ask4 === 'y' || ask4 === 'yes') {

    alert('Oof, That is not quite right. I love to read.');
  } else {

    alert('Ooh ' + ask4 + ' is an invalid answer');
  }
}

function askLive() {
  let ask5 = prompt('Do I live in Bellingham? (yes or y or no or n)');
  ask5.toLowerCase();
  if (ask5 === 'y' || ask5 === 'yes') {
    alert('Nice! I do live in Bellingham.');
    correct++;

  } else if (ask5 === 'n' || ask5 === 'n') {

    alert('Oof, That is not quite right.');
  } else {

    alert('Ooh ' + ask5 + ' is an invalid answer');
  }
}

function guessNumber() {
  let z = 4;
  let answer = Math.floor(Math.random() * 10 + 1);
  let ask8 = prompt('Guess a number between 1-10. You get 4 guesses');
  ask8 = Number(ask8);
  while (z !== 1 && ask8 !== answer) {
    ask8 = Number(ask8);
    if (ask8 > answer) {
      alert('Guess lower');
    }
    if (ask8 < answer) {
      alert('Guess higher');
    }
    if (ask8 === answer) {
      break;
    }
    z--;
    ask8 = prompt('Guess again. You\'ve got ' + z + ' guesses remaining');

  }
  if (Number(ask8) === answer) {
    alert('Very nice, you got it right!');
    correct++;
  } else {
    alert('Nice try, the correct answer was ' + answer);
  }
}

function guessBook() {
  let books = ['first law', 'malazan book of the fallen', 'tower of babel'];
  let ask7 = prompt('Guess one of my top 3 book series (no author)').toLowerCase();
  let j = 6;
  let bookRight = false;
  while (j !== 1) {
    ask7.toLowerCase();

    for (var q = 0; q < books.length; q++) {
      if (ask7 === books[q]) {
        alert(`Nice! I love ${books[q]}!`);
        bookRight = true;
        break;
      }
    }

    if (bookRight === true) {
      break;
    }
    j--;
    ask7 = prompt('Guess again. You\'ve got ' + j + ' guesses remaining').toLowerCase();
  }
  if (bookRight === true) {
    alert(`Very nice, you got it right! My favorite 3 series are ${books[0]}, ${books[1]} and ${books[2]}.`);
    correct++;
  } else {
    alert(`Nice try, my favorite 3 series are ${books[0]}, ${books[1]} and ${books[2]}.`);
  }
  for (var x = 0; x < books.length; x++) {
    alert(`I enjoy ${books[x]} quite a bit`);
  }
}

askUserName();
askCad();
askUS();
askLive();
askAge();
askRead();
guessNumber();
guessBook();



alert('Thanks for playing. You got ' + correct + ' questions correct!');

'use strict';
function customGreeting() {
  let name = prompt('Hi there! Thanks for checking out my about me website. What is your name?');
  alert('Nice to meetcha ' + name + '! Welcome.');

}
customGreeting();
function guessingGame() {
  let correct = 0;
  let ask1 = prompt('Am I a Canadian citizen?(yes or y or no or n)');
  ask1.toLowerCase();
  if (ask1 === 'y' || ask1 === 'yes') {
    // console.log('Nice!');
    correct++;
    alert('Nice! I\'ve never lived there but I hope to someday.');
  } else if (ask1 === 'n' || ask1 === 'no') {
    // console.log('Oof. That is not quite right.');
    alert('Oof, That\'s not quite right. I\'m in fact a Canadian citizen.');
  } else {
    // console.log('Ooh ' + ask1 + 'is an invalid answer');
    alert('Ooh ' + ask1 + ' is an invalid answer');
  }
  let ask2 = prompt('Am I an American citizen?(yes or y or no or n)');
  ask2.toLowerCase();
  if (ask2 === 'y' || ask2 === 'yes') {
    alert('Nice! I was born in Kirkland, WA');
    correct++;
    // console.log('Nice!');
  } else if (ask2 === 'n' || ask2 === 'no') {
    // console.log('Oof. That is not quite right.');
    alert('Oof, That is not quite right. I am an American');
  } else {
    // console.log('Ooh ' + ask2 + 'is an invalid answer');
    alert('Ooh ' + ask2 + ' is an invalid answer');
  }
  let ask3 = prompt('Am I 25?(yes or y or no or n)');
  ask3.toLowerCase();
  if (ask3 === 'y' || ask3 === 'yes') {
    alert('Nice! I am 25.');
    correct++;
    // console.log('Nice!');
  } else if (ask3 === 'n' || ask3 === 'no') {
    // console.log('Oof. That is not quite right.');
    alert('Oof, That is not quite right. I am 25.');
  } else {
    // console.log('Ooh ' + ask3 + 'is an invalid answer');
    alert('Ooh ' + ask3 + ' is an invalid answer');
  }
  let ask4 = prompt('Do I hate to read?(yes or y or no or n)');
  ask4.toLowerCase();
  if (ask4 === 'n' || ask4 === 'no') {
    alert('Nice! I love to read.');
    correct++;
    // console.log('Nice! I love to read!');
  } else if (ask4 === 'y' || ask4 === 'yes') {
    // console.log('Oof. That is not quite right.');
    alert('Oof, That is not quite right. I love to read.');
  } else {
    // console.log('Ooh ' + ask4 + 'is an invalid answer');
    alert('Ooh ' + ask4 + ' is an invalid answer');
  }
  let ask5 = prompt('Do I live in Bellingham?(yes or y or no or n)');
  ask5.toLowerCase();
  if (ask5 === 'y' || ask5 === 'yes') {
    alert('Nice! I do live in Bellingham.');
    correct++;
    // console.log('Nice!');
  } else if (ask5 === 'n' || ask5 === 'n') {
    // console.log('Oof. That is not quite right.');
    alert('Oof, That is not quite right.');
  } else {
    // console.log('Ooh ' + ask5 + 'is an invalid answer');
    alert('Ooh ' + ask5 + ' is an invalid answer');
  }
  alert('Thanks for playing. You got ' + correct + ' questions correct!');
}
guessingGame();

// 'use strict';

function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

var citizensConsumed = 0;
var hoursSpentInDowington = 0;
var hours = 0;
function Blob() {
}
var blob = new Blob();

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  hoursSpentInDowington = 0;
  citizensConsumed = 0;
  hours = 0;
  var total = 0;
  while (citizensConsumed < population) {
    hours++;
    total += peoplePerHour;
    citizensConsumed = total;
    hoursSpentInDowington = hours;
    peoplePerHour++;
  }
  console.log(hoursSpentInDowington);
  return hoursSpentInDowington;
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');
assert(blob.hoursToOoze(28, 1) === 7, 'hoursSpentInDowington should match hoursToOoze\'s result for 28');
assert(blob.hoursToOoze(1001, 1) === hoursSpentInDowington, 'hoursSpentInDowington should match hoursToOoze\'s result for 1001');
assert(blob.hoursToOoze(9, 2) === 3, 'hoursSpentInDowngton should match hoursToOoze\'s result for 9');

var hello = {
  klingon: 'nuqneH',
  romulan: 'Jolan\'tru',
  'federation standard': 'hello'
};

function SentientBeing(home, language) {
  this.home = home;
  this.language = language;
}

SentientBeing.prototype.sayHello = function(sb) {
  return hello[sb.language];
};

function Klingon() {
  SentientBeing.call(this, 'Qo\'nos', 'klingon');
}
function Romulan() {
  SentientBeing.call(this, 'Romulus', 'romulan');
}
function Human() {
  SentientBeing.call(this, 'Earth', 'federation standard');
}

Klingon.prototype = Object.create(SentientBeing.prototype);
Romulan.prototype = Object.create(SentientBeing.prototype);
Human.prototype = Object.create(SentientBeing.prototype);

assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
  'the klingon should hear nuqneH');
assert((new Klingon()).sayHello(new Human()) === 'hello', 'the human should hear hello');
assert((new Romulan()).sayHello(new Human()) === 'hello', 'the human should hear hello');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH', 'the klingon should hear nuqneH');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');

var strings = ['yes', 'no', 'maybe', 'kinda', 'ahynot'];

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    return (a.charCodeAt(a.length - 1)) - (b.charCodeAt(b.length - 1));
  }
  stringArray.sort(byLastLetter);
  console.log(stringArray);
}

assert(lastLetterSort(strings) == ['kinda', 'maybe', 'no', 'yes', 'ahynot'].stringify, 'this should have been sorted correctly');
assert(lastLetterSort(['b', 'da', 'ed', 'cz']) == ['da', 'b', 'ed', 'cz'].stringify, 'this should have been sorted correctly');

var numbers = [0, 1, 2, 3, 4];
function sumArray(numberArray) {
  var sum = 0;
  numberArray.forEach(function(element) {
    sum += element;
  });
  // console.log(sum);
  return sum;
}
sumArray(numbers);

assert(sumArray(numbers) === 10, 'this should have added up to 10');
assert(sumArray([4.2, 5.1, 6.5]) === 15.8, 'this should have added up to 15.8');

testArrayOfArrays = [[16, 1, 2], [4, 5, 2]];
function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(item1, item2){
    return sumArray(item1) - sumArray(item2);
  });
  console.log(arrayOfArrays);
}
assert((sumSort(testArrayOfArrays)) === [[4, 5, 2], [16, 1, 2]].stringify, 'these two arrays should have been ordered properly');
assert(sumSort([[0, 1.4, 333333], [4, 33, 33, 33]]) === [[0, 1.4, 333333], [4, 33, 33, 33]].stringify, 'these two arrays should have been ordered properly');

'use strict'

// let's get some random number going and put them in an array

const onMixItup = () => {
  let one = Math.floor(Math.random() * 101);
  let two = Math.floor(Math.random() * 101);
  let three = Math.floor(Math.random() * 101);
  let four = Math.floor(Math.random() * 101);
  let five = Math.floor(Math.random() * 101);
  let six = Math.floor(Math.random() * 101);
  let seven = Math.floor(Math.random() * 101);
  let eight = Math.floor(Math.random() * 101);
  let nine = Math.floor(Math.random() * 101);
  let ten = Math.floor(Math.random() * 101);

  let array = [];
  array.push(one, two, three, four, five, six, seve, eight, nine, ten)
  return array;
}

//we're going to keep track of where we are with swapping in the array step-by-step with this function.

let bubbleSort = (array) => {
  let swap;
  do {
    swap = 0;
    for (let i=0; i < arr.length -1; i++) {

      if (array[i] > array[i + 1]) {
        let x = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = x;
        swap = +1;
      }
    }
  } while (swap == 1);
  return bubbleSort(array);
};

$(document).ready(function() {
  $('.sort').on('click', function() {
    sortSuccess();
  })
});

$(document).ready(function() {
  $('.mix').on('click', function() {
    let array = onMixItup();
    shuffleSuccess(array);
    shuffleClassOne();
    shuffleClassTwo();
    shuffleClassThree();
    shuffleClassFour();
    shuffleClassFive();
    shuffleClassSix();
    shuffleClassSeven();
    shuffleClassEight();
    shuffleClassNine();
    shuffleClassTen();
  })
});

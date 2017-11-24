$(() => {
  const $first = $('.first');
  const $second = $('.second');
  const $third = $('.third');
  const $fourth = $('.fourth');
  const $fifth = $('.fifth');
  const $sixth = $('.sixth');
  const $r = $('.red');
  const $g = $('.green');
  const $b = $('.blue');
  const numberArray = [];
  const first = [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)];
  const second = [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)];
  const third = [Math.floor(Math.random() *  255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)];
  const fourth = [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)];
  const fifth = [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)];
  const sixth = [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)];
  numberArray.push(first);
  numberArray.push(second);
  numberArray.push(third);
  numberArray.push(fourth);
  numberArray.push(fifth);
  numberArray.push(sixth);
  console.log(numberArray);
  $first.css({'background-color': `rgb(${first[0]},${first[1]},${first[2]})`});
  $second.css({'background-color': `rgb(${second[0]},${second[1]},${second[2]})`});
  $third.css({'background-color': `rgb(${third[0]},${third[1]},${third[2]})`});
  $fourth.css({'background-color': `rgb(${fourth[0]},${fourth[1]},${fourth[2]})`});
  $fifth.css({'background-color': `rgb(${fifth[0]},${fifth[1]},${fifth[2]})`});
  $sixth.css({'background-color': `rgb(${sixth[0]},${sixth[1]},${sixth[2]})`});
  const chosenColor = numberArray[Math.floor(Math.random() * 6)];
  console.log(chosenColor);
  $r.text(chosenColor[0]);
  $g.text(chosenColor[1]);
  $b.text(chosenColor[2]);



  // ---------button clicks under here ------------
  $first.on('click', () => {
    console.log('first div');
    console.log($first[0].style.backgroundColor);
    console.log($('.test').text());
    if($('.test').text() === $first[0].style.backgroundColor){
      $first.text('WIN');
    } else {
      $first.text('LOSE');
    }
  });
  $second.on('click', () => {
    console.log('second div');
    console.log($second[0].style.backgroundColor);
    console.log($('.test').text());
    if($('.test').text() === $second[0].style.backgroundColor){
      $second.text('WIN');
    } else {
      $second.text('LOSE');
    }
  });
  $third.on('click', () => {
    console.log('third div');
    console.log($third[0].style.backgroundColor);
    console.log($('.test').text());
    if($('.test').text() === $third[0].style.backgroundColor){
      $third.text('WIN');
    } else {
      $third.text('LOSE');
    }
  });
  $fourth.on('click', () => {
    console.log('fourth div');
    console.log($fourth[0].style.backgroundColor);
    console.log($('.test').text());
    if($('.test').text() === $fourth[0].style.backgroundColor){
      $fourth.text('WIN');
    } else {
      $fourth.text('LOSE');
    }
  });
  $fifth.on('click', () => {
    console.log('fifth div');
    console.log($fifth[0].style.backgroundColor);
    console.log($('.test').text());
    if($('.test').text() === $fifth[0].style.backgroundColor){
      $fifth.text('WIN');
    } else {
      $fifth.text('LOSE');
    }
  });
  $sixth.on('click', () => {
    console.log('sixth div');
    console.log($sixth[0].style.backgroundColor);
    console.log($('.test').text());
    if($('.test').text() === $sixth[0].style.backgroundColor){
      $sixth.text('WIN');
    } else {
      $sixth.text('LOSE');
    }
  });


  //=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=
});

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
  const $resetButton = $('.newColour');
  const chooseColours = () => {
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
    $first.css({'background-color': `rgb(${first[0]},${first[1]},${first[2]})`});
    $second.css({'background-color': `rgb(${second[0]},${second[1]},${second[2]})`});
    $third.css({'background-color': `rgb(${third[0]},${third[1]},${third[2]})`});
    $fourth.css({'background-color': `rgb(${fourth[0]},${fourth[1]},${fourth[2]})`});
    $fifth.css({'background-color': `rgb(${fifth[0]},${fifth[1]},${fifth[2]})`});
    $sixth.css({'background-color': `rgb(${sixth[0]},${sixth[1]},${sixth[2]})`});
    const chosenColor = numberArray[Math.floor(Math.random() * 6)];
    $r.text(chosenColor[0]);
    $g.text(chosenColor[1]);
    $b.text(chosenColor[2]);
  };
  chooseColours();
  // ---------button clicks under here ------------
  $first.on('click', () => {
    if($('.test').text() === $first[0].style.backgroundColor){
      $first.text('WIN');
      $second.css({'visibility': 'hidden'});
      $third.css({'visibility': 'hidden'});
      $fourth.css({'visibility': 'hidden'});
      $fifth.css({'visibility': 'hidden'});
      $sixth.css({'visibility': 'hidden'});
    } else {
      $first.text('LOSE');
    }
  });
  $second.on('click', () => {
    if($('.test').text() === $second[0].style.backgroundColor){
      $second.text('WIN');
      $first.css({'visibility': 'hidden'});
      $third.css({'visibility': 'hidden'});
      $fourth.css({'visibility': 'hidden'});
      $fifth.css({'visibility': 'hidden'});
      $sixth.css({'visibility': 'hidden'});
    } else {
      $second.text('LOSE');
    }
  });
  $third.on('click', () => {
    if($('.test').text() === $third[0].style.backgroundColor){
      $third.text('WIN');
      $first.css({'visibility': 'hidden'});
      $second.css({'visibility': 'hidden'});
      $fourth.css({'visibility': 'hidden'});
      $fifth.css({'visibility': 'hidden'});
      $sixth.css({'visibility': 'hidden'});
    } else {
      $third.text('LOSE');
    }
  });
  $fourth.on('click', () => {
    if($('.test').text() === $fourth[0].style.backgroundColor){
      $fourth.text('WIN');
      $second.css({'visibility': 'hidden'});
      $third.css({'visibility': 'hidden'});
      $first.css({'visibility': 'hidden'});
      $fifth.css({'visibility': 'hidden'});
      $sixth.css({'visibility': 'hidden'});
    } else {
      $fourth.text('LOSE');
    }
  });
  $fifth.on('click', () => {
    if($('.test').text() === $fifth[0].style.backgroundColor){
      $fifth.text('WIN');
      $second.css({'visibility': 'hidden'});
      $third.css({'visibility': 'hidden'});
      $fourth.css({'visibility': 'hidden'});
      $first.css({'visibility': 'hidden'});
      $sixth.css({'visibility': 'hidden'});
    } else {
      $fifth.text('LOSE');
    }
  });
  $sixth.on('click', () => {
    if($('.test').text() === $sixth[0].style.backgroundColor){
      $sixth.text('WIN');
      $second.css({'visibility': 'hidden'});
      $third.css({'visibility': 'hidden'});
      $fourth.css({'visibility': 'hidden'});
      $fifth.css({'visibility': 'hidden'});
      $first.css({'visibility': 'hidden'});
    } else {
      $sixth.text('LOSE');
    }
  });

  $resetButton.on('click', () => {
    chooseColours();
    $first.text('');
    $second.text('');
    $third.text('');
    $fourth.text('');
    $fifth.text('');
    $sixth.text('');
    $first.css({'visibility': 'visible'});
    $second.css({'visibility': 'visible'});
    $third.css({'visibility': 'visible'});
    $fourth.css({'visibility': 'visible'});
    $fifth.css({'visibility': 'visible'});
    $sixth.css({'visibility': 'visible'});
  });
  //=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=
});

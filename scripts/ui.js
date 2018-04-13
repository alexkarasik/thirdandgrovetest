var sortSuccess = (arr) => {
  console.log("sortSuccess");
  if ($('.one').text() > $('.two').text()) {
    $('.one').html($('.two').text())
  } else if ($('.two').text() > $('.three').text()) {
    $('.two').html($('.three').text())
  } else if ($('.three').text() > $('.four').text()) {
    $('.three').html($('.four').text())
  } else if ($('.four').text() > $('.five').text()) {
    $('.four').html($('.five').text())
  } else if ($('.five').text() > $('.six').text()) {
    $('.five').html($('.six').text())
  } else if ($('.six').text() > $('.seven').text()) {
    $('.six').html($('.seven').text())
  } else if ($('.seven').text() > $('.eight').text()) {
    $('.seven').html($('.eight').text())
  } else if ($('.eight').text() > $('.nine').text()) {
    $('.eight').html($('.nine').text())
  } else if ($('.nine').text() > $('.ten').text()) {
    $('.nine').html($('.ten').text())
  } else {
    alert("sorted!");
  }
};

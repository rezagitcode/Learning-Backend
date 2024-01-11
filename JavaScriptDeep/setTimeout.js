for (var i = 1; i <= 5; i++) {
  function z(i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  z(i)
}

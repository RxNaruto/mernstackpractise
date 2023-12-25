let p = new Promise(function (resolve) {
    resolve("hi i am promise");
  });
  p.then(function () {
    console.log(p);
  });
  
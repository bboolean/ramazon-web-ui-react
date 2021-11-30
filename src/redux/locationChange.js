window.onpopstate = function (event) {
  console.log(
    'location: ' + document.location + ', state: ' + JSON.stringify(event.state)
  );
};

history.listen((location, action) => {
  if ('POP' === action) {
    console.log(1);
  }
});

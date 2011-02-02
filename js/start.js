function numberOfAddresses(sub1, sub2) {
  return Math.pow(2, sub2 - sub1);
}

$().ready( function() {
  $('input').change( function(e) {
    if (isNaN(e.target.value)) {
      console.log('not a number in '+e.target.name);
    } else {
      console.log('something changed in '+e.target.name);
      $('#addresses1').html(numberOfAddresses(0,e.target.value));
    }
  });

  console.log('Logging...');
});


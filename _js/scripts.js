var yardageTrack = {
  'category' : 0,
  'ease' : 0,
  'length' : 0,
  'size' : 0,
  'sleeves' : 0,
  'skirt' : 0
};
var yardage, variant, choice;
var dimensions = {
  'category' : {
    'dress': 1.5,
    'top' : 1.25,
    'leggings' : 1.5,
    'pants' : 2,
    'shorts' : 1.25,
    'skirt' : 1.5,
    'jacket' : 1
  },
  'ease' : {
    'loose' : 0.5,
    'natural' : 0,
    'form-fitting' : -0.5
  },
  'length' : {
    'short' : -0.5,
    'medium' : 0,
    'long' : 0.5
  },
  'size' : {
    'infant' : -1,
    'child' : -0.5,
    'small' : -0.25,
    'medium' : 0,
    'large' : 0.25
  },
  'sleeves' : {
    'long sleeve' : 0.5,
    'short sleeve' : 0,
    'sleeveless' : -0.5
  },
  'skirt' : {
    'full skirt' : 0.5,
    'flared' : 0.25,
    'a-line' : 0
  }
};


$(document).ready(function() {

  setup();

  $('select').hide();
  $('#category').show();

  $('#category').on('change', function() {
    var category = $(this).val();
    $('#ease').show();
    $('#length').show();
    $('#size').show();

    if ((category === 'dress') || (category === 'skirt'))
      $('#skirt').show();
    else
      $('#skirt').hide();

    if ((category === 'dress') || (category === 'top') || (category === 'jacket'))
      $('#sleeves').show()
    else
      $('#sleeves').hide();
  });

  // change values when select is changed
  $('select').on('change', function() {
    var choice, category;
    choice = ($(this).val());
    category = ($(this).attr('id'));

    yardageTrack[category] = dimensions[category][choice]

    yardage = 0;
    for (var y in yardageTrack) {
      yardage += yardageTrack[y];
    }

    if (yardage < 0.5)
      yardage = 0.5;

    $('#number').text(yardage);
    if (yardage === 1)
      $('#plural').addClass('hidden')
    else
      $('#plural').removeClass('hidden');

  })

});

// populate selects
function setup() {
  var $selections = $('#selections');

  for (var d in dimensions) {
    // set up select
    $selections.append('<select name="' + d + '" id="' + d + '"></select>');
    var $sub = $('#' + d);

    // add category types
    $sub.append('<option value="0" disabled selected>' + d + '</option>');

    // add options
    for (var type in dimensions[d]) {
      $sub.append('<option value="' + type + '">' + type + '</option>');
    }

    // close select
    $selections.append('</select>');
  }
}

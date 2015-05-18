

$(document).ready(function() {

// change units and button colour for metric/imperial
  $('.unitSelect').on('click', function() {
    var units = $(this).val();
    var otherLabel = (units == 'metric' ? 'imperial' : 'metric');
    $('.lengthType').text(units == 'metric' ? 'm' : ' yards');
    $('.widthType').text(units == 'metric' ? 'cm' : '\"');
    $('#' + units + "Label").addClass('selected');
    $('#' + otherLabel + "Label").removeClass('selected');
  });

  // yardage selection

  $('.lengthSelect').on('click', function() {
    length = $(this).val();
    $('.lengthSelectLabel').removeClass('selected');
    var identifier = length.toString().replace('.', '');
    $('#length' + identifier + 'Label').addClass('selected');
  });

  $('.widthSelect').on('click', function() {
    width = $(this).val();
    $('.widthSelectLabel').removeClass('selected');
    $('#width' + width + 'Label').addClass('selected');
  });

  $('#gimmeProjects').on('click', function() {
    console.log(length + ', ' + width);

    displayIdeas();
  });

})

function displayIdeas() {
  // Math.floor(Math.random() * (max - min)) + min;
}

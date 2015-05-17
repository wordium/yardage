$(document).ready(function() {

// change units and button colour for metric/imperial
  $('.unitSelect').on('click', function() {
    var units = $(this).val();
    var otherLabel = (units == 'metric' ? 'imperial' : 'metric');
    $('#lengthType').text(units == 'metric' ? 'm' : 'yards');
    $('#widthType').text(units == 'metric' ? 'cm' : 'inches');
    $('#' + units + "Label").addClass('selected');
    $('#' + otherLabel + "Label").removeClass('selected');
  });

  // yardage selection

  $('.lengthSelect').on('click', function() {

  });

})

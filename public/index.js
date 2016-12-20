// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = google.visualization.arrayToDataTable([
  ['£3000', 'Paid', 'With this payment', 'Left to pay', { role: 'annotation' } ],
  ['£3000', 1700, 250, 1050, '']
]);

  // Set chart options
  var options = {
    width: 255,
    height: 70,

    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '75%' },
    isStacked: 'percent'
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

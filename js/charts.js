Chart.defaults.font.size = 18;
Chart.defaults.color = "black";
// Define the data for the chart
var chartData1 = {
    labels: ['December', 'January', 'February', 'March', 'April'],
    datasets: [{
      label: 'Minimum Price',
      data: [380.00, 380.00, 380.00, 395.00, 395.00],
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      fill: {
        target: 'origin',
        above: 'rgba(173, 216, 230, 0.5)',   // Area will be red above the origin
        below: 'rgb(0, 0, 255)'    // And blue below the origin
      },
      lineTension: 0.4
    },
    {
      label: 'Maximum Price',
      data: [480.00, 500.00, 500.00, 550.00, 550.00],
      backgroundColor: 'rgba(255, 192, 203, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      lineTension: 0.4,
      fill: {
        target: 'origin',
        above: 'rgba(255, 192, 203, 0.5)',   // Area will be red above the origin
        below: 'rgb(0, 0, 255)'    // And blue below the origin
      }
    }]
  };

var chartData2 = {
    labels: ['December', 'January', 'February', 'March', 'April'],
    datasets: [{
      label: 'Minimum Price',
      data: [350.00, 350.00, 350.00, 350.00, 350.00],
      backgroundColor: 'rgba(173, 216, 230, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      fill: {
        target: 'origin',
        above: 'rgba(173, 216, 230, 0.5)',   // Area will be red above the origin
        below: 'rgb(0, 0, 255)'    // And blue below the origin
      },
      lineTension: 0.4
    },
    {
      label: 'Maximum Price',
      data: [420.00, 450.00, 420.00, 500.00, 460.00],
      backgroundColor: 'rgba(255, 192, 203, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      fill: {
        target: 'origin',
        above: 'rgba(255, 192, 203, 0.5)',   // Area will be red above the origin
        below: 'rgb(0, 0, 255)'    // And blue below the origin
      },
      lineTension: 0.4
    }]
};

var chartData3 = {
labels: ['December', 'January', 'February', 'March', 'April'],
datasets: [{
    label: 'Minimum Price',
    data: [280.00, 270.00, 270.00, 290.00, 310.00],
    backgroundColor: 'rgba(173, 216, 230, 0.5)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 2,
    fill: {
        target: 'origin',
        above: 'rgba(173, 216, 230, 0.5)',   // Area will be red above the origin
        below: 'rgb(0, 0, 255)'    // And blue below the origin
      },
      lineTension: 0.4
},
{
    label: 'Maximum Price',
    data: [340.00, 380.00, 330.00, 350.00, 365.00],
    backgroundColor: 'rgba(255, 192, 203, 0.5)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 2,
    fill: {
        target: 'origin',
        above: 'rgba(255, 192, 203, 0.5)',   // Area will be red above the origin
        below: 'rgb(0, 0, 255)'    // And blue below the origin
      },
      lineTension: 0.4

}]
};

// Define the options for the charts
var chartOptions = {
    legend: {
        labels: {
            color: "white",
            font: {
                size: 30,
            }
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                color: "white",
                beginAtZero: true,
                ffont: {
                    size: 30,
                }
            }
        }],
        xAxes: [{
            ticks: {
                color: "white",
                beginAtZero: true,
                font: {
                    size: 30,
                }
            }
        }]
    },
    layout: {
      padding: {
        bottom: 25
      }
    }
  };
  
  // Create chart1
  var chart1 = new Chart('chart1', {
    type: 'line',
    data: chartData1,
    options: chartOptions
  });
  
  // Create chart2
  var chart2 = new Chart('chart2', {
    type: 'line',
    data: chartData2,
    options: chartOptions
  });

  // Create chart3
  var chart3 = new Chart('chart3', {
    type: 'line',
    data: chartData3,
    options: chartOptions
  });

// Get the chart containers and buttons
var chartContainer1 = document.getElementById('chart-container1');
var chartContainer2 = document.getElementById('chart-container2');
var chartContainer3 = document.getElementById('chart-container3');
var toggleChart1Button = document.getElementById('toggle-chart1');
var toggleChart2Button = document.getElementById('toggle-chart2');
var toggleChart3Button = document.getElementById('toggle-chart3');


// Add click event listeners to the buttons
toggleChart1Button.addEventListener('click', function() {
  chartContainer1.classList.remove('hidden');
  chartContainer2.classList.add('hidden');
  chartContainer3.classList.add('hidden');
});

toggleChart2Button.addEventListener('click', function() {
  chartContainer1.classList.add('hidden');
  chartContainer2.classList.remove('hidden');
  chartContainer3.classList.add('hidden');
});

toggleChart3Button.addEventListener('click', function() {
    chartContainer1.classList.add('hidden');
    chartContainer2.classList.add('hidden');
    chartContainer3.classList.remove('hidden');
});
  
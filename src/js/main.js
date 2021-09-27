var Chart = require('chart.js');

const dates = ["20 september", "21 september", "22 september"];
const feedback = [0, 1, 1];

generateChart(dates, feedback);

function generateChart(chartDate, chartFeedback) {
	var chart = new Chart(document.getElementById('feedpulse__canvas').getContext('2d'), {
        type: 'line',
        data: {
            labels: chartDate,
                datasets: [{
                    type: "line",
                        label: "Feedpulse feedback",
                        borderColor: '#fd4c4c',
                        data: chartFeedback,
                }]
        },
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Datums'
                    },
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        stepSize: 1,
                        suggestedMin: -1,
                        suggestedMax: 1
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Feedback'
                    }
                }]
            },
            elements: { point: { radius: 5 } }
        }
	});
}
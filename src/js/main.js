import Chart from 'chart.js';
const page = document.getElementsByClassName("page-title")[0].innerHTML;

let navigationOpen = false;
const navigation = document.getElementsByClassName("navigation")[0];

document.getElementsByClassName("navigation__close")[0].addEventListener("click", navigationToggle);
document.getElementsByClassName("header__hamburger-button")[0].addEventListener("click", navigationToggle);

function navigationToggle (event) {
    event.preventDefault();
    if (navigationOpen) navigation.style.transform = "translateX(-100%)";
    else navigation.style.transform = "translateX(0%)";
    navigationOpen = !navigationOpen;
}

if (page == "dashboard") {
    setTimeout(function () {
        document.getElementsByClassName("loader")[0].style.transform = "translateX(-100%)";
    }, 2500);
}

else if (page == "lesmateriaal") {
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
}
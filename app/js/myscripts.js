window.onload = () => {
    $(document).ready(function() {
        $(".btn-custom").click(function() {
          $(this).toggleClass("checked");
        });
      });
    var chrt = document.getElementById("Donut").getContext("2d");
    var chartId = new Chart(chrt, {
        type: 'doughnut',
        data: {
            labels: ["United states", "Poland", "Italy", "Germany", "Other"],
            datasets: [{
                label: "Analysis",
                data: [20, 40, 13, 35, 20],
                backgroundColor: ["#3993bb", "#65b5c2", "#2e7bad", "#23649e", "#63daed"],
                hoverOffset: 5
            }],
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            }    
        },
    });
    var ctx = document.getElementById('wavyChart').getContext('2d');
    var data = {
        labels: [25, 50, 75, 100, 125, 150, 175, 200, 225, 250],
        datasets: [
            {
                label: 'MinStatistics',
                borderColor: '#3993bb',
                backgroundColor: '#3993bb',
                data: [1,1.5,8.5,6,27.5,7.5,14,5,1.5,1],
                fill: true,
                lineTension: 0.4,
                pointRadius: 1
            },
            {
                label: 'MaxStatistics',
                borderColor: '#86d3ce',
                backgroundColor: '#86d3ce',
                data: [2, 3, 17, 12, 55, 15, 28, 10, 3, 2],
                fill: true,
                lineTension: 0.4,
                pointRadius: 1
            }
    ]
    };
    var options = {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            x: [{
                grid: {
                    display: true
                }
            }],
            y: [{
                grid: {
                    drawBorder: false,
                    color: function (context) {
                        return context.tick.value < 50 ? 'rgba(255, 0, 0, 0.5)' : null;
                    }
                }
            }]
        },
    };
    
    var wavyChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options,
    });
    var ctx = document.getElementById('myChart').getContext('2d');
    var data1 = [];
    for (let i = 0; i < 100; i++) {
        data1.push(Math.floor(Math.random()* (80 - 58 + 1)) + 58);
    }
    var data2 = [];
    for (let i = 0; i < 100; i++) {
        data2.push(Math.floor(Math.random()* (46 - 22 + 1)) + 22);
    }
    var data3 = [];
    for (let i = 0; i < 100; i++) {
        data3.push(Math.floor(Math.random()* 20));
    }
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data1.map((_, index) => `${index + 1}`),
            datasets: [
                {
                    label: 'Edgy Mountains1',
                    data: data3,
                    borderColor: "#8db987",
                    borderWidth: 2,
                    lineTension: 0.2,
                    pointRadius: 0,
                    fill: true,
                    backgroundColor: "#8db987",
                },
                {
                    label: 'Edgy Mountains2',
                    data: data2,
                    borderColor: "#90abe3",
                    borderWidth: 2,
                    lineTension: 0.2,
                    pointRadius: 0,
                    fill: true,
                    backgroundColor: "#90abe3",
                },
                {
                    label: 'Edgy Mountains3',
                    data: data1,
                    borderColor: "#dcc2f1",
                    lineTension: 0.2,
                    pointRadius: 0,
                    fill: true,
                    backgroundColor: "#dcc2f1",
                }
            ]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        drawBorder: false
                    }
                }
            }
        }
    });
};
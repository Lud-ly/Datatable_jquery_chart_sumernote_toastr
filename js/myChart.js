
function renderChart(data, labels) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [ 'Porsche', 'Renault', 'Peugeot', 'Ferrari', 'Chevrolet', 'Lancia', 'Mercedes', 'bugatti'],
            datasets: [{
                label: 'Power',
                data: [aOfCars[0]["cv"], aOfCars[1]["cv"], aOfCars[3]["cv"], aOfCars[4]["cv"], aOfCars[5]["cv"], aOfCars[6]["cv"], aOfCars[7]["cv"], aOfCars[8]["cv"], aOfCars[9]["cv"]],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(100, 159, 64, 0.2)',
                    'rgba(255, 58, 68, 0.2)',
                    'rgba(155, 59, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(100, 159, 64, 1)',
                    'rgba(255, 58, 68, 1)',
                    'rgba(155, 59, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

$("#renderBtn").click(
    function () {
        // data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
        // labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        renderChart();
    }
);
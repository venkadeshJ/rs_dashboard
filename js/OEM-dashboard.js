//claim notification
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Maruti', 'Honda'],
        datasets: [{
            label: '# of Votes',
            data: [8, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//request count
const ctx2 = document.getElementById('myChart2');
const myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Maruti', 'Honda'],
        datasets: [{
            label: '# of Votes',
            data: [4, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//response count
const ctx3 = document.getElementById('myChart3');
const myChart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Maruti', 'Honda'],
        datasets: [{
            label: '# of Votes',
            data: [3, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//last request time
const ctx4 = document.getElementById('myChart4');
const myChart4 = new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: ['Maruti', 'Honda'],
        datasets: [{
            label: '# of Votes',
            data: [7, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//last response time
const ctx5 = document.getElementById('myChart5');
const myChart5 = new Chart(ctx5, {
    type: 'pie',
    data: {
        labels: ['Maruti', 'Honda'],
        datasets: [{
            label: '# of Votes',
            data: [9, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//up or down
const ctx6 = document.getElementById('myChart6');
const myChart6 = new Chart(ctx6, {
    type: 'pie',
    data: {
        labels: ['Maruti', 'Honda'],
        datasets: [{
            label: '# of Votes',
            data: [4, 7],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//RAG(smile)
const ctx7 = document.getElementById('myChart7');
const myChart7 = new Chart(ctx7, {
    type: 'pie',
    data: {
        labels: ['Maruti', 'Honda'],
        datasets: [{
            label: '# of Votes',
            data: [3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
//web aggregators
const ctx8 = document.getElementById('mybarChart');
const myChart8 = new Chart(ctx8, {
    type: 'bar',
    data: {
        labels: ['Policy Bazaar', 'Policy Bazaar','Policy Bazaar','Policy Bazaar','Policy Bazaar'],
        datasets: [{
            label: '# of Votes',
            data: [3, 5,4,2,6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


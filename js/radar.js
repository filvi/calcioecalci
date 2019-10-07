// myChart1

var ctx1 = document.getElementById("myChart1").getContext('2d');
var myChart1 = new Chart(ctx1, {
  type: 'radar',    
    data: {
        labels: ["Tiro", "Passaggio", "Difesa", "Dribbling", "Velocità", "Fisico"],
        datasets: [{
            label: 'Abilità',
            data: [24, 55, 63, 74, 51, 15],
            backgroundColor:'rgba(252, 74, 42, 0.5)',
            borderColor: '#fc4a2a',
            borderWidth: 4
        }
                  ]
    },
    options: {
        scale: {
            pointLabels: {
                fontSize: 20,
                fontColor: '#414141',
                fontFamily: 'Bangers',
            },
            ticks: {
                display:false,
                beginAtZero:true,
                suggestedMax:100,
                stepSize: 25,
            }
        },
        legend: {
            display: false
        }
    }
});



// -----------------------------------------------------------------------------------------
// ---------------------------------      2      ------------------------------------------
// -----------------------------------------------------------------------------------------
// myChart2

var ctx2 = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'radar',    
    data: {
        labels: ["Tiro", "Passaggio", "Difesa", "Dribbling", "Velocità", "Fisico"],
        datasets: [{
            label: 'Abilità',
            data: [42, 15, 83, 54, 31, 85],
            backgroundColor:'rgba(252, 74, 42, 0.5)',
            borderColor: '#fc4a2a',
            borderWidth: 4
        }
                  ]
    },
    options: {
        scale: {
            pointLabels: {
                fontSize: 20,
                fontColor: '#414141',
                fontFamily: 'Bangers',
            },
            ticks: {
                display:false,
                beginAtZero:true,
                suggestedMax:100,
                stepSize: 25,
            }
        },
        legend: {
            display: false
        }
    }
});



// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// myChart3

var ctx3 = document.getElementById("myChart3").getContext('2d');
var myChart3 = new Chart(ctx3, {
   type: 'radar',    
    data: {
        labels: ["Tiro", "Passaggio", "Difesa", "Dribbling", "Velocità", "Fisico"],
        datasets: [{
            label: 'Abilità',
            data: [31, 99, 12, 43, 61, 48],
            backgroundColor:'rgba(252, 74, 42, 0.5)',
            borderColor: '#fc4a2a',
            borderWidth: 4
        }
                  ]
    },
    options: {
        scale: {
            pointLabels: {
                fontSize: 20,
                fontColor: '#414141',
                fontFamily: 'Bangers',
            },
            ticks: {
                display:false,
                beginAtZero:true,
                suggestedMax:100,
                stepSize: 25,
            }
        },
        legend: {
            display: false
        }
    }
});


// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// myChart4

var ctx4 = document.getElementById("myChart4").getContext('2d');
var myChart4 = new Chart(ctx4, {
   type: 'radar',    
    data: {
        labels: ["Tiro", "Passaggio", "Difesa", "Dribbling", "Velocità", "Fisico"],
        datasets: [{
            label: 'Abilità',
            data: [56, 45, 80, 54, 13, 98],
            backgroundColor:'rgba(252, 74, 42, 0.5)',
            borderColor: '#fc4a2a',
            borderWidth: 4
        }
                  ]
    },
    options: {
        scale: {
            pointLabels: {
                fontSize: 20,
                fontColor: '#414141',
                fontFamily: 'Bangers',
            },
            ticks: {
                display:false,
                beginAtZero:true,
                suggestedMax:100,
                stepSize: 25,
            }
        },
        legend: {
            display: false
        }
    }
});

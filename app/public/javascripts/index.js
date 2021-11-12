// import { postEmail } from '../javascripts/firebase.js';

$('#submit').on('click', function(req, res, next) {
  $('.form-content').removeClass('invalid');
  $('#loadingSpinner').removeClass('hide-by-default'); 
  $('#emailForm').addClass('hide-by-default'); 
  const email = $('#inputEmail').val();
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailValid = re.test(email);

  console.log("email received from input: ", email);
  console.log('email valid: ' + emailValid);
  setTimeout(() => {
    if(emailValid) {
      $.post('/submit/' + email).done((res) => {
        console.log("got back from post request", res);
        $('#successCard').removeClass('hide-by-default'); 
      })
    } else {
      console.log('else case');
      $('.form-content').addClass('invalid');
      void $('.form-content').clientWidth;
      $('#emailForm').removeClass('hide-by-default'); 
    }
    $('#loadingSpinner').addClass('hide-by-default'); 
    }, 200)
})
window.addEventListener('load', function () {
  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
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
  
})
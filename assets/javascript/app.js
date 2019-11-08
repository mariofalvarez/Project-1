$(document).ready(function () {
  var firebaseConfig = {
    apiKey: "AIzaSyATB51a2W2gJk5B0_xzLMPoH6yw2bV5WuI",
    authDomain: "project-1-76180.firebaseapp.com",
    databaseURL: "https://project-1-76180.firebaseio.com",
    projectId: "project-1-76180",
    storageBucket: "project-1-76180.appspot.com",
    messagingSenderId: "280561902099",
    appId: "1:280561902099:web:4c6157d4f389b12bd795e6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
});

$('.btn').on('click', function (e) {
  e.preventDefault();
  let city = $('.form-control').val();
  let newCity = $('.form-control').val();

  const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=c2e38863824c4fbaa3e29a7d10f11bbf`;
  const queryUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=SeGSW2oWcueAXwOb0zleD2J63hEIWBjY&city=${newCity}`;

  // Weather api
  $.ajax({
    method: "GET",
    url: weatherUrl
  }).then(response => {
    $('.weatherInfo').append(Math.floor((((response.data[0].temp) * 9) / 5) + 32));
    $('.weatherInfo').append(`<div><span>&#8457;</span></div>`);
  });


  // Ticketmaster api
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(data => {
    const results = data._embedded.events;
    console.log(results);

    for (var i = 0; i < results.length; i++) {
      let eventDiv = $("<div>");
      let eventName = results[i].name;
      let eventImg = $("<img>");
      let addBtn = $("<button>Add To Event List</button>");
      let eventDateTime = results[i].dates.start.dateTime;
      let convertedDT = moment(eventDateTime).format("LLLL");
      addBtn.addClass("addToEventList");
      addBtn.attr('data', eventName);
      eventImg.attr("src", results[i].images[i].url);
      eventImg.width("64px");
      eventImg.height("64px");
      eventImg.addClass('img'); //added a class to the img 
      eventDiv.addClass('addToEvent');  //created a class to the eventDiv with the class name addToEvent
      eventDiv.append(eventImg, eventName, convertedDT, addBtn);
      console.log(eventDiv);

      $('.event-container').prepend(eventDiv);
    }
  });
  document.getElementById('text').value = "";
});

//Function that holds all the data of the event
function eventList() {

}

var events = [];
$(".event-container").on("click", ".addToEventList", function () {
  //Create a var to hold the event name, location, and the time
  let eventName = $('.addToEvent');
  
  //Gtrab the event and append it to a new table cell

  //Create a new table cell which holds all the data.
  var newRow = $('<tr>').append(
    $('<td>').text(eventName),
    $('<td>').text(eventLocation),
    $('<td>').text(eventTime),
  );

  //Append the new row to the table
  $('#eventList > tbody').append(newRow);

});

$("#searchBtn").on("click", function (e) {
  e.preventDefault();
  //console.log("searchEvents");
  // if the word in the search bar is contained in the name of the event
  // show event.
});

// testing();

// function testing() {
//   var eventDateTime = results[i].dates.start.dateTime;

//   var newTime = moment(eventDateTime).format("LLLL");
// }
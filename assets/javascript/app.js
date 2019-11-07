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

  $.ajax({
    method: "GET",
    url: weatherUrl
  }).then(response => {
    $('.weatherInfo').append(Math.floor((((response.data[0].temp) * 9) / 5) + 32));
    $('.weatherInfo').append(`<div><span>&#8457;</span></div>`);
  });

  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(data => {
    const results = data._embedded.events;
    for (var i = 0; i < results.length; i++) {
      let eventDiv = $("<div>");
      let eventName = results[i].name;
      let eventImg = $("<img>");
      let eventDate = results[i].dates.start.localDate;
      let eventTime = results[i].dates.start.localTime;
      eventImg.attr("src", results[i].images[i].url);
      eventImg.width("64px");
      eventImg.height("64px");
      eventDiv.append(eventImg);
      eventDiv.append(eventName);
      eventDiv.append(eventDate);
      eventDiv.append(eventTime);
      $('.event-container').append(eventDiv);
    }
  });
  document.getElementById('text').value = "";
});

var events = [];
$(".event-container").on("click", ".addToCalendar", function () {
  console.log("Sports are lame");
});

$("#searchBtn").on("click", function (e) {
  e.preventDefault();
  console.log("searchEvents");
  // if the word in the search bar is contained in the name of the event
  // show event.
});

// testing();

// function testing() {
//   var eventDateTime = results[i].dates.start.dateTime;

//   var newTime = moment(eventDateTime).format("LLLL");
// }
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

  const db = firebase.initializeApp(firebaseConfig);
});

var events = [];

//Function to display events from the search 

var x = $(this).data('search');



let api_key = "SeGSW2oWcueAXwOb0zleD2J63hEIWBjY";

const queryUrl =
  "https://app.ticketmaster.com/discovery/v2/events.json?size=8&apikey=" + api_key;

//console.log(queryUrl);

$.ajax({
  method: "GET",
  url: queryUrl
}).then(response => {
  const results = response._embedded.events;
  //console.log(results);

  for (var i = 0; i < results.length; i++) {
    var eventDiv = $("<div>");
    var eventName = results[i].name;
    var eventImg = $("<img>");
    var addBtn = $("<button>Add To Calendar</button>");
    var eventDate = results[i].dates.start.localDate;
    var eventTime = results[i].dates.start.localTime;
    var eventDateTime = results[i].dates.start.dateTime;
    addBtn.addClass("addToCalendar");
    eventImg.attr("src", results[i].images[i].url);
    eventImg.width("64px");
    eventImg.height("64px");
    eventDiv.append(
      eventImg,
      eventName,
      eventDate,
      eventTime,
      addBtn,
      eventDateTime
    );

    //var eventTime = results[i].dates.start.localTime;
    eventImg.attr("src", results[i].images[i].url);
    eventImg.width("64px");
    eventImg.height("64px");
    eventDiv.append(eventImg);
    eventDiv.append(eventName);
    eventDiv.append(eventDate);
    //eventDiv.append(eventTime);

    $(".event_container").append(eventDiv);
  }


});

$(".event_container").on("click", ".addToCalendar", function() {
  console.log("Sports are lame");
});

$("#SearchBtn").on("click", function(e) {
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

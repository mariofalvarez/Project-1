$(document).ready(function() {
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

let api_key = "SeGSW2oWcueAXwOb0zleD2J63hEIWBjY";

const queryUrl =
  "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + api_key;

console.log(queryUrl);

$.ajax({
  method: "GET",
  url: queryUrl
}).then(response => {
  const results = response._embedded.events;
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
});

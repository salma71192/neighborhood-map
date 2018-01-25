import $ from 'jquery';
import Places from './places.json';


export default function sample(placeName) {

    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      placeName.replace(" ", "%20") +
      "&format=json&callback=?";
      console.log(url);
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      // jsonp: callback
      success: function(response) {
        var list = response[1];
        for (var i = 0; i < list.length; i++) {
          console.log(list[i]);
        } //for loop ends
      },
      error: function(error) {
        alert("error");
      }
    }); //ajax ends
  }; //click function ends

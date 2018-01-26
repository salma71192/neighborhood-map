import Places from './places.json';


export default function sample(placeName) {
    var adjustedPlaceName = placeName.replace(" ", "%20");
    var url = "https://www.mediawiki.org/w/api.php?action=query&titles=" +
       adjustedPlaceName +
      "&prop=revisions&rvprop=content&format=json&formatversion=2";
      console.log(url);

      // Using fetch
      fetch( url, {
          method: 'GET',
          headers: new Headers( {
              'Api-User-Agent': 'Example/1.0'
          } )
          // Other init settings such as 'credentials'
      } ).then( function ( response ) {
          if ( response.ok ) {
              return response.json();
          }
          throw new Error( 'Network response was not ok: ' + response.statusText );
      } ).then( function ( data ) {
          // do something with data
          console.log(data);
      });
  }; //click function ends

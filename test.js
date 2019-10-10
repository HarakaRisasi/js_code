var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let it Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Littele Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks":[ ]
  },
  "5439": {
    "album": "ABBA Gold"
//  "artist":
//  "tracks": [ ]    
  }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {

collection[id][prop] = value;
collection[id]["tracks"] = [];
collection[id].tracks.push(value);
delete collection[2548].artist;
delete collection[2548].tracks;
collection[2468].tracks.push(value);
//console.log(collection[1245]);
console.log(collection[2468].tracks);

}

updateRecords(5439, "artist", "ABBA");


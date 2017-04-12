var app = function(){
  var url = 'https://api.spotify.com/v1/search?q=cats&type=album';
  makeRequest(url, function(){
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var albums = JSON.parse(jsonString)
    console.log(albums)
    display(albums)
  })
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
}

var display = function(albums){
  
}

window.onload = app;
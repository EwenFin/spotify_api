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
  var ul = document.querySelector("#album-list");
  console.log(albums.albums.items[0].name)
  console.log(albums.albums.items[1].name)
  albums.albums.items.forEach(function(album){
      var li = document.createElement('li');
      var img = document.createElement('img');
      li.innerText = album.name + ": " + album.artists[0].name;
      img.src = album.images[0].url
      img.width = 300
      ul.appendChild(li);
      ul.appendChild(img);

      

      })
  }


  // for(var i = 0; i < albums.albums.items.length; i++){
  //   var li = document.createElement('li');
  //   li.innerText = albums.albums.items[i].name;
  //   ul.appendChild(li);

  



window.onload = app;
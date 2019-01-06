
window.onload = function() {
  
      document.getElementById('link').onclick = function(code) {
        var text = document.getElementById("outtxt").value;
var dltitle = document.getElementById("title").value;
document.getElementById("link").download= ""+ dltitle+".lrc"
        text = text.replace(/\n/g, "\r\n");
        this.href = 'data:txt/plain;charset=utf-8,'
          + encodeURIComponent(text);
      };
    };

inputfunction = function(){
  var title = document.getElementById("title").value;
  var artist = document.getElementById("artist").value;
  document.getElementById("outtxt").value = "[ti:"+title+"]\n"+"[ar:"+artist+"]\n\n"
}

startcounter = function(){
var counter = document.getElementsByTagName('h1')[1],
    start = document.getElementById('start'),
    seconds = 0, minutes = 0, deciseconds = 0, centiseconds = 0,
    t;

function add() {
    centiseconds++;
    if (centiseconds >= 10) {
        centiseconds = 0;
        deciseconds++;
        if (deciseconds >= 10) {
            deciseconds = 0;
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
        		}
        }
}
    
    
    counter.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (deciseconds)+(centiseconds);

    timer();
}
  
function timer() { 
t = setTimeout(add, 10);
}
timer();
  
reset = function(){
  clearTimeout(t);
  counter.textContent = "0";
  document.getElementById("outtxt").value = "";
}
stop = function(){
    clearTimeout(t);
  }
}

var i=0;
next = function(){
  var time = document.getElementById("counter").innerHTML;
  var lyric = document.getElementById("input")
  var lyriclist = lyric.value.split('\n');
  document.getElementById("outtxt").value += "["+(time)+"]\t"+(lyriclist[i])+"\n";
  i++;
}

countdown = function(){
var w = 3;  
var c = setInterval(function(){   document.getElementById("countdown").innerHTML=w;
w--;
if(w==(-1)){clearTimeout(c);document.getElementById("countdown").innerHTML="-";startcounter().timer();}
},1000);
}

displayvideo = function(){
var link = "https://www.youtube.com/embed/"+document.getElementById("ytvideo").value;

document.getElementById("ytframe").setAttribute("src",link);
}

   // main();
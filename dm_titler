var text = "{NAME OF CHANNEL}";
var chan = "{CHANNEL ID}";
var auth = "{AUTH TOKEN}"


setInterval(()=>{
var offset=0;
http.open('PATCH', `https://canary.discordapp.com/api/v6/channels/${chan}`, true);
http.setRequestHeader('Content-type', 'application/json');
http.setRequestHeader('authorization', auth);
http.onreadystatechange = function() {if(http.readyState==4){offset=offset+1;}}
http.send(JSON.stringify({name:(text)}));
},500);

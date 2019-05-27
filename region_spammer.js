var chan_id = "{DISCORD CHANNEL ID}";
var auth = "{DISCORD AUTH TOKEN}";



var offset=0;
setInterval(()=>{
http.open('PATCH', `https://canary.discordapp.com/api/v6/channels/${chan_id}/call`, true);
http.setRequestHeader('Content-type', 'application/json');
http.setRequestHeader('authorization', auth);
http.onreadystatechange = function() {if(http.readyState==4){offset=offset+1;}}
http.send(JSON.stringify({region: ['brazil', 'us-west', 'japan', 'singapore', 'eu-central', 'hongkong', 'us-south', 'southafrica', 'us-central', 'london', 'us-east', 'sydney', 'eu-west', 'amsterdam', 'india', 'frankfurt', 'russia'][offset]}));
},1000);

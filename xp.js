let channel_id = "";
let auth = "";

var http = new XMLHttpRequest();
var int = 0;
setInterval(()=>{
var url = 'https://discordapp.com/api/v6/channels/'+channel_id+'/messages';
var params = JSON.stringify({'content':"[ID:"+int+"]","tts":false});
http.open('POST', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/json');
http.setRequestHeader('authorization', auth);
http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        int=int+1;
        delMSG(JSON.parse(http.responseText)['id'],channel_id,auth);
    }
}
http.send(params);
},60000);

function delMSG (id, channel, auth){
var url = 'https://discordapp.com/api/v6/channels/'+channel+'/messages/'+id;
var params = JSON.stringify({'content':"GRINDING XP [ID:"+int+"] INTERVAL IS 25sec","tts":false});
http.open('DELETE', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/json');
http.setRequestHeader('authorization', auth);
http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
    }
}
http.send(params);
}

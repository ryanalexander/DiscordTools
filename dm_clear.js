/*
 * This Exploit will leave all group DM's that you have joined.
 */
 
 auth="";

http=new XMLHttpRequest,counter=0;http.open("GET","https://canary.discordapp.com/api/v6/users/@me/channels",!0),http.setRequestHeader("Content-type","application/json"),http.setRequestHeader("authorization",auth),http.onreadystatechange=function(){if(4===http.readyState){let e=JSON.parse(http.responseText);for(var t=0;t<e.length;t++){let a=e[t];3===a.type&&(setTimeout(()=>{http.open("DELETE",`https://canary.discordapp.com/api/v6/channels/${a.id}`,!0),http.setRequestHeader("Content-type","application/json"),http.setRequestHeader("authorization",auth),http.send(JSON.stringify({}))},counter),counter+=2e3)}}},http.send(JSON.stringify({}));

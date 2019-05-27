# Discord Exploits

Just an archive of random Discord exploits i've found

## Prerequisites

* Discord

### Installing

While the Discord client is opened hold `CTRL + ALT + L` to open the Discord developer tools

With this opened Click `Console` (You will be greated with a warning - Remember that you are entering this script at your own risk. Never enter anything into this Console without knowing what it does) paste the content of XP.js

Before clicking enter fill out the following fields 
let channel_id = "";
let auth = "";

The channel id can be retrieved by entering Discord Developer mode and right click the channel (Copy id)

And for auth; it requires more instruction which i will not go into with this tutorial.

## Post Installation Notes

The break down of this script is specified below

A web request is sent every 60s to the following url
: https://discordapp.com/api/v6/channels/{CHANNEL-ID}/messages
and following that request another request is made to
: https://discordapp.com/api/v6/channels/{CHANNEL-ID}/messages/{MESSAGE-ID}
this can be considered as a self bot which i must warn is against the Discord TOS

## Authors

* **Ryan W** - *Initial work* - [AspyTheAussie](https://github.com/AspyTheAussie)

See also the list of [contributors](https://github.com/AspyTheAussie/stelch-web-server/contributors) who participated in this project.

## Acknowledgments

* I do not endorse the use of this on servers that prohibit it. 
* If requested i will remove this from GitHUB.

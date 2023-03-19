# BunnyBot
A Discord bot that posts random images of bunnies on command. Written with Discord.js.

Here's the most basic URL for the bot to work functionally:
https://discord.com/api/oauth2/authorize?client_id=1086793990495543326&permissions=277025508352&scope=bot%20applications.commands

Simply use the /bunny command and it picks a random image of a bunny from the "Bunnies" folder (if forking this repo, you will have to add the Bunnies folder to the directory and supply your own images).

File formats supported are the same as the file formats Discord supports for images as this just uses embeds alongside it.

Additionally there's a ping command, I did this as a test since it was my first time using Discord.js and I figured it's probably a good idea.

If you intend to use a fork of this bot, on top of the Bunnies folder you will also need a config.json file in the main directory. It should look like this:
```
{
    "token": "[Discord Token Here]",
    "application_id": "[Discord Application ID Here]",
    "public_key": "[Discord Public Key Here]"
}
```

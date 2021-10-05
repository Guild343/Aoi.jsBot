const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
sharding: true,
shardAmount: 5,
mobile: true, 
token: "ODkxNjYyMjEzNzA0NzMyNjkz.YVBnJg.6TjbX76ON7XBBqpkANnTo1NUiJk",
prefix: ["$getServerVar[prefix]", "<@!$clientID>", "<@$clientID>"]
})

bot.onMessage() //Allows to execute Commands
bot.onBanAdd()
bot.onBanRemove()

bot.status({
    text: "Новая аниме тян :3",
    type: "PLAYING",
    status: "idle",
    time: 12
})

bot.status({
    text: "за $serverCount серверами",
    type: "PLAYING",
    status: "idle",
    time: 12
})

bot.status({
	text: "за $allmembersCount играками",
	type: "WATCHING",
    status: "idle",
	time: 12
})

bot.status({
	text: "за своим временем $uptime",
	type: "WATCHING",
    status: "idle",
	time: 12
})

bot.readyCommand({
    channel: "892448940094525453", //You can use this or not
    code: `$log[Ready on $userTag[$clientID]]` //Example Ready on Client
})

bot.command({
    name: "hyperlink", 
    code: `
    $description[[Package](https://www.npmjs.com/package/dbd.js)]` 
    })

bot.banRemoveCommand({ 
    channel: "891300945382760482",
    code: `$username был разбанен на $serverName`
    })
    /*    Разъяснение $username - Пользователь которого разбанили $serverName - Сервер на котором разбанен*/

bot.banAddCommand({
    channel: "891300945382760482",
    code: `$username забанен на $serverName`
})
/*    Объяснение $username - Пользователь который получил бан $serverName - Сервер на котором получен бан*/

bot.command({
    name: "lol",
    code: `$createSlashCommand[$guildID;inviteme;Invite Me]`
  });
  bot.interactionCommand({
    name: "inviteme",
    code: `$interactionReply[$getBotInvite]`
  });
  bot.onInteractionCreate();

bot.variables({
    prefix: "w!",
    Money: "0",
    Bank: "0",
    Phone: "0",
    Cookie: "0",
    Pizza: "0",
    Bronze: "0",
    Platinum: "0",
    Gold: "0",
    Silver: "0",
    SpaceCoin: "0",
    SpaceTro: "0",
    premium: "false",
    antilink: "false",
    Utm: "0",
    guess_the_number_channel: "0",
    winning_number: "0",
    muted: "",
    Rob: "false",
    ccmd: "",
    cdes: "",
  });

bot.loadCommands("./commands/");

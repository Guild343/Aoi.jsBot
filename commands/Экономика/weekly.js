module.exports = {
  name: "weekly",
  code: `
$title[Еженедельные Монеты]
$description[Вот ваши еженедельные монеты - **⏣10,000**]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];10000]]
$color[RANDOM]
$cooldown[7d;{title: Woah Dude Slow Down}{description: Вы сможете использовать эту команду снова через **%time%**.Время восстановления по умолчанию составляет **1 неделя**}}{color:RANDOM}]
$onlyIf[$getGlobalUserVar[premium;$authorID]==true;**:thinking:У вас нет премиум**]`
};

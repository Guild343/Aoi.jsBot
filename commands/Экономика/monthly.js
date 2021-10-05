module.exports = {
  name: "Monthly",
  code: `
$title[Ежемесячные Монеты]
$description[Вот ваши ежемесячные монеты- **⏣50,000**]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];50000]]
$color[RANDOM]
$cooldown[30d;{title: Уоу, Чувак, Притормози}{description: Вы сможете снова использовать эту команду через **%time%**. Время восстановления по умолчанию составляет **1 месяц**}{color:RANDOM}]
$onlyIf[$getGlobalUserVar[premium;$authorID]==true;**:thinking:У вас нет премиум**]`
};

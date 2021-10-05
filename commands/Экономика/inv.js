module.exports = {
  name: "инвентарь",
  aliases: "инв",
  code: `
  $title[$username Инвентарь]
  $description[$addField[**Полезные Предметы**;
  **Телефон: $getGlobalUserVar[Phone]
  Печеньки $getGlobalUserVar[Cookie]
  Пицца: $getGlobalUserVar[Pizza]**]
  $addField[**Коробки с награбленным**; **Бронзовая коробка: $getGlobalUserVar[Bronze]
  Серебряная коробка:: $getGlobalUserVar[Silver]
  Золотая коробка: $getGlobalUserVar[Gold]
  Платиновая коробка: $getGlobalUserVar[Platinum]
  Окончательная коробка: $getGlobalUserVar[Utm]**]
  
  $addField[**Редкие Предметы**; **Космические монеты: $getGlobalUserVar[SpaceCoin]
  Космический трофей: $getGlobalUserVar[SpaceTro]**]
  $color[RANDOM]`
}
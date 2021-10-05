module.exports = {
  name: "eval",
  aliases: ["e"],
  description: "Оценка кода/функции",
  usage: "оценка <код/функция>",
  category: "developer",
  code: `$eval[$message]
    $onlyIf[$message[1]!=;{description: Добавьте сообщение!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;{description: Пожалуйста, сделайте это в гильдии!}{color:RANDOM}]
    $onlyForIDs[$botOwnerID;{description:❌ Вы не мой разработчик}{color:RANDOM}]
    $deletecommand`
};

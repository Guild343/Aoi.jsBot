module.exports = ({
    name: "бот-инфо", 
    aliases: ['бот-статистика'],
    description: "Проверьте информацию/статистику бота",
    usage: "",
    category: "информация",
    code: `$title[Бот-Инфо ($username[$clientID])]
    $color[RANDOM]
    $thumbnail[$userAvatar[$clientID]]
    $addField[ОЗУ; $ramMB]
    $addField[Использование процессора; $cpu/100]
    $addField[Пинг; $pingms]
    $addField[Рабочее время;$uptime]
    $addField[Команды; $commandsCount]
    $addField[Пользователи;$allMembersCount]
    $addField[Каналы;$allChannelsCount]
    $addField[Серверы;$serverCount]
    $addField[Версия;1.0.0]
    $addField[Бета-версия;0.9.4]
    $addField[Созданный;$creationDate[$clientID]]
    $addField[Разработчик;$userTag[$botOwnerID]]
    $addTimestamp
    $cooldown[5s;{description:Здесь немного слишком быстро. Ждать **%time%**!}{color:RANDOM}]`
    })
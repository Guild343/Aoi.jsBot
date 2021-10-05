module.exports = ({
    name: "баланс", 
    aliases: "бал",
    description: "Проверьте свой или чей-то баланс",
    code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;У ботов раздора нет баланса]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $color[RANDOM]
    $title[$username[$mentioned[1;yes]] Баланс]
    $description[
    $addField[💰 Кошелек;
    **⏣$numberSeparator[$getGlobalUserVar[Money;$mentioned[1;yes]]]**
    ]
    $addField[🏦 Банк;
    **⏣$numberSeparator[$getGlobalUserVar[Bank;$mentioned[1;yes]]]**
    ]
    $addField[📊 Собственный капитал;
    **⏣$numberSeparator[$sum[$getGlobalUserVar[Money;$mentioned[1;yes]];$getGlobalUserVar[Bank;$mentioned[1;yes]]]]**
    ]]`
    })
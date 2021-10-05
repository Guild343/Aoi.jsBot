module.exports = ({
  name: "подарить-премиум",
  code: `
   $title[Премиум]
   $description[<:yes:892062716355809391> Успешно дал премиум <@$mentioned[1]>]
   $color[RANDOM]
   $setGlobalUserVar[premium;true;$mentioned[1]]`
})
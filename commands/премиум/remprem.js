module.exports = ({
  name: "убрать-премиум",
  code: `
   $title[Премиум]
   $description[<:yes:892062716355809391> Успешно удалена премиум с <@$mentioned[1]>]
   $color[RANDOM]
   $setGlobalUserVar[premium;false;$mentioned[1]]`
})
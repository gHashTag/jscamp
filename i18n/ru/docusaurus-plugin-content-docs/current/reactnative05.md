---
id: reactnative05
title: Справка по цвету
sidebar_label: Справка по цвету
---

Компоненты в React Native стилизованы с использованием JavaScript. Свойства цвета обычно соответствуют тому, как CSS работает в Интернете. Общие руководства по использованию цвета на каждой платформе можно найти ниже:

- [iOS](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/)
- [Android](https://material.io/design/color/color-usage.html#hierarchy)

## Цветовые представления

### Red Green Blue (RGB)

Красный, зелёный, синий или КЗС — аддитивная цветовая модель, описывающая способ кодирования цвета для цветовоспроизведения с помощью трёх цветов, которые принято называть основными. Выбор основных цветов обусловлен особенностями физиологии восприятия цвета сетчаткой человеческого глаза.
React Native поддерживает `rgb()` и `rgba()` как в шестнадцатеричной, так и в функциональной нотации:

- `'#f0f'` (#rgb)
- `'#ff00ff'` (#rrggbb)
- `'#f0ff'` (#rgba)
- `'#ff00ff00'` (#rrggbbaa)
- `'rgb(255, 0, 255)'`
- `'rgba(255, 0, 255, 1.0)'`

<!-- ### Hue Saturation Lightness (HSL)

Цветовая модель, в которой цветовыми координатами являются тон, насыщенность и светлота.
React Native поддерживает `hsl()` и `hsla()` в функциональной нотации:

- `'hsl(360, 100%, 100%)'`
- `'hsla(360, 100%, 100%, 1.0)'`

### Именованные цвета

В React Native вы также можете использовать строки с названиями цветов в качестве значений.

:::note Примечание
React Native поддерживает только имена цветов в нижнем регистре. Имена цветов в верхнем регистре не поддерживаются.
:::

`transparent`
Это ярлык для `rgba(0,0,0,0)`, такой же, как в [CSS3](https://www.w3.org/TR/css-color-3/#transparent).

Реализация именованных цветов соответствует спецификации [CSS3/SVG](https://www.w3.org/TR/css-color-3/#svg-color):

- <ins style={{background: '#f0f8ff'}} className="color-box" /> aliceblue (`#f0f8ff`)
- <ins style={{background: '#faebd7'}} className="color-box" /> antiquewhite (`#faebd7`)
- <ins style={{background: '#00ffff'}} className="color-box" /> aqua (`#00ffff`)
- <ins style={{background: '#7fffd4'}} className="color-box" /> aquamarine (`#7fffd4`)
- <ins style={{background: '#f0ffff'}} className="color-box" /> azure (`#f0ffff`)
- <ins style={{background: '#f5f5dc'}} className="color-box" /> beige (`#f5f5dc`)
- <ins style={{background: '#ffe4c4'}} className="color-box" /> bisque (`#ffe4c4`)
- <ins style={{background: '#000000'}} className="color-box" /> black (`#000000`)
- <ins style={{background: '#ffebcd'}} className="color-box" /> blanchedalmond (`#ffebcd`)
- <ins style={{background: '#0000ff'}} className="color-box" /> blue (`#0000ff`)
- <ins style={{background: '#8a2be2'}} className="color-box" /> blueviolet (`#8a2be2`)
- <ins style={{background: '#a52a2a'}} className="color-box" /> brown (`#a52a2a`)
- <ins style={{background: '#deb887'}} className="color-box" /> burlywood (`#deb887`)
- <ins style={{background: '#5f9ea0'}} className="color-box" /> cadetblue (`#5f9ea0`)
- <ins style={{background: '#7fff00'}} className="color-box" /> chartreuse (`#7fff00`)
- <ins style={{background: '#d2691e'}} className="color-box" /> chocolate (`#d2691e`)
- <ins style={{background: '#ff7f50'}} className="color-box" /> coral (`#ff7f50`)
- <ins style={{background: '#6495ed'}} className="color-box" /> cornflowerblue (`#6495ed`)
- <ins style={{background: '#fff8dc'}} className="color-box" /> cornsilk (`#fff8dc`)
- <ins style={{background: '#dc143c'}} className="color-box" /> crimson (`#dc143c`)
- <ins style={{background: '#00ffff'}} className="color-box" /> cyan (`#00ffff`)
- <ins style={{background: '#00008b'}} className="color-box" /> darkblue (`#00008b`)
- <ins style={{background: '#008b8b'}} className="color-box" /> darkcyan (`#008b8b`)
- <ins style={{background: '#b8860b'}} className="color-box" /> darkgoldenrod (`#b8860b`)
- <ins style={{background: '#a9a9a9'}} className="color-box" /> darkgray (`#a9a9a9`)
- <ins style={{background: '#006400'}} className="color-box" /> darkgreen (`#006400`)
- <ins style={{background: '#a9a9a9'}} className="color-box" /> darkgrey (`#a9a9a9`)
- <ins style={{background: '#bdb76b'}} className="color-box" /> darkkhaki (`#bdb76b`)
- <ins style={{background: '#8b008b'}} className="color-box" /> darkmagenta (`#8b008b`)
- <ins style={{background: '#556b2f'}} className="color-box" /> darkolivegreen (`#556b2f`)
- <ins style={{background: '#ff8c00'}} className="color-box" /> darkorange (`#ff8c00`)
- <ins style={{background: '#9932cc'}} className="color-box" /> darkorchid (`#9932cc`)
- <ins style={{background: '#8b0000'}} className="color-box" /> darkred (`#8b0000`)
- <ins style={{background: '#e9967a'}} className="color-box" /> darksalmon (`#e9967a`)
- <ins style={{background: '#8fbc8f'}} className="color-box" /> darkseagreen (`#8fbc8f`)
- <ins style={{background: '#483d8b'}} className="color-box" /> darkslateblue (`#483d8b`)
- <ins style={{background: '#2f4f4f'}} className="color-box" /> darkslategrey (`#2f4f4f`)
- <ins style={{background: '#00ced1'}} className="color-box" /> darkturquoise (`#00ced1`)
- <ins style={{background: '#9400d3'}} className="color-box" /> darkviolet (`#9400d3`)
- <ins style={{background: '#ff1493'}} className="color-box" /> deeppink (`#ff1493`)
- <ins style={{background: '#00bfff'}} className="color-box" /> deepskyblue (`#00bfff`)
- <ins style={{background: '#696969'}} className="color-box" /> dimgray (`#696969`)
- <ins style={{background: '#696969'}} className="color-box" /> dimgrey (`#696969`)
- <ins style={{background: '#1e90ff'}} className="color-box" /> dodgerblue (`#1e90ff`)
- <ins style={{background: '#b22222'}} className="color-box" /> firebrick (`#b22222`)
- <ins style={{background: '#fffaf0'}} className="color-box" /> floralwhite (`#fffaf0`)
- <ins style={{background: '#228b22'}} className="color-box" /> forestgreen (`#228b22`)
- <ins style={{background: '#ff00ff'}} className="color-box" /> fuchsia (`#ff00ff`)
- <ins style={{background: '#dcdcdc'}} className="color-box" /> gainsboro (`#dcdcdc`)
- <ins style={{background: '#f8f8ff'}} className="color-box" /> ghostwhite (`#f8f8ff`)
- <ins style={{background: '#ffd700'}} className="color-box" /> gold (`#ffd700`)
- <ins style={{background: '#daa520'}} className="color-box" /> goldenrod (`#daa520`)
- <ins style={{background: '#808080'}} className="color-box" /> gray (`#808080`)
- <ins style={{background: '#008000'}} className="color-box" /> green (`#008000`)
- <ins style={{background: '#adff2f'}} className="color-box" /> greenyellow (`#adff2f`)
- <ins style={{background: '#808080'}} className="color-box" /> grey (`#808080`)
- <ins style={{background: '#f0fff0'}} className="color-box" /> honeydew (`#f0fff0`)
- <ins style={{background: '#ff69b4'}} className="color-box" /> hotpink (`#ff69b4`)
- <ins style={{background: '#cd5c5c'}} className="color-box" /> indianred (`#cd5c5c`)
- <ins style={{background: '#4b0082'}} className="color-box" /> indigo (`#4b0082`)
- <ins style={{background: '#fffff0'}} className="color-box" /> ivory (`#fffff0`)
- <ins style={{background: '#f0e68c'}} className="color-box" /> khaki (`#f0e68c`)
- <ins style={{background: '#e6e6fa'}} className="color-box" /> lavender (`#e6e6fa`)
- <ins style={{background: '#fff0f5'}} className="color-box" /> lavenderblush (`#fff0f5`)
- <ins style={{background: '#7cfc00'}} className="color-box" /> lawngreen (`#7cfc00`)
- <ins style={{background: '#fffacd'}} className="color-box" /> lemonchiffon (`#fffacd`)
- <ins style={{background: '#add8e6'}} className="color-box" /> lightblue (`#add8e6`)
- <ins style={{background: '#f08080'}} className="color-box" /> lightcoral (`#f08080`)
- <ins style={{background: '#e0ffff'}} className="color-box" /> lightcyan (`#e0ffff`)
- <ins style={{background: '#fafad2'}} className="color-box" /> lightgoldenrodyellow (`#fafad2`)
- <ins style={{background: '#d3d3d3'}} className="color-box" /> lightgray (`#d3d3d3`)
- <ins style={{background: '#90ee90'}} className="color-box" /> lightgreen (`#90ee90`)
- <ins style={{background: '#d3d3d3'}} className="color-box" /> lightgrey (`#d3d3d3`)
- <ins style={{background: '#ffb6c1'}} className="color-box" /> lightpink (`#ffb6c1`)
- <ins style={{background: '#ffa07a'}} className="color-box" /> lightsalmon (`#ffa07a`)
- <ins style={{background: '#20b2aa'}} className="color-box" /> lightseagreen (`#20b2aa`)
- <ins style={{background: '#87cefa'}} className="color-box" /> lightskyblue (`#87cefa`)
- <ins style={{background: '#778899'}} className="color-box" /> lightslategrey (`#778899`)
- <ins style={{background: '#b0c4de'}} className="color-box" /> lightsteelblue (`#b0c4de`)
- <ins style={{background: '#ffffe0'}} className="color-box" /> lightyellow (`#ffffe0`)
- <ins style={{background: '#00ff00'}} className="color-box" /> lime (`#00ff00`)
- <ins style={{background: '#32cd32'}} className="color-box" /> limegreen (`#32cd32`)
- <ins style={{background: '#faf0e6'}} className="color-box" /> linen (`#faf0e6`)
- <ins style={{background: '#ff00ff'}} className="color-box" /> magenta (`#ff00ff`)
- <ins style={{background: '#800000'}} className="color-box" /> maroon (`#800000`)
- <ins style={{background: '#66cdaa'}} className="color-box" /> mediumaquamarine (`#66cdaa`)
- <ins style={{background: '#0000cd'}} className="color-box" /> mediumblue (`#0000cd`)
- <ins style={{background: '#ba55d3'}} className="color-box" /> mediumorchid (`#ba55d3`)
- <ins style={{background: '#9370db'}} className="color-box" /> mediumpurple (`#9370db`)
- <ins style={{background: '#3cb371'}} className="color-box" /> mediumseagreen (`#3cb371`)
- <ins style={{background: '#7b68ee'}} className="color-box" /> mediumslateblue (`#7b68ee`)
- <ins style={{background: '#00fa9a'}} className="color-box" /> mediumspringgreen (`#00fa9a`)
- <ins style={{background: '#48d1cc'}} className="color-box" /> mediumturquoise (`#48d1cc`)
- <ins style={{background: '#c71585'}} className="color-box" /> mediumvioletred (`#c71585`)
- <ins style={{background: '#191970'}} className="color-box" /> midnightblue (`#191970`)
- <ins style={{background: '#f5fffa'}} className="color-box" /> mintcream (`#f5fffa`)
- <ins style={{background: '#ffe4e1'}} className="color-box" /> mistyrose (`#ffe4e1`)
- <ins style={{background: '#ffe4b5'}} className="color-box" /> moccasin (`#ffe4b5`)
- <ins style={{background: '#ffdead'}} className="color-box" /> navajowhite (`#ffdead`)
- <ins style={{background: '#000080'}} className="color-box" /> navy (`#000080`)
- <ins style={{background: '#fdf5e6'}} className="color-box" /> oldlace (`#fdf5e6`)
- <ins style={{background: '#808000'}} className="color-box" /> olive (`#808000`)
- <ins style={{background: '#6b8e23'}} className="color-box" /> olivedrab (`#6b8e23`)
- <ins style={{background: '#ffa500'}} className="color-box" /> orange (`#ffa500`)
- <ins style={{background: '#ff4500'}} className="color-box" /> orangered (`#ff4500`)
- <ins style={{background: '#da70d6'}} className="color-box" /> orchid (`#da70d6`)
- <ins style={{background: '#eee8aa'}} className="color-box" /> palegoldenrod (`#eee8aa`)
- <ins style={{background: '#98fb98'}} className="color-box" /> palegreen (`#98fb98`)
- <ins style={{background: '#afeeee'}} className="color-box" /> paleturquoise (`#afeeee`)
- <ins style={{background: '#db7093'}} className="color-box" /> palevioletred (`#db7093`)
- <ins style={{background: '#ffefd5'}} className="color-box" /> papayawhip (`#ffefd5`)
- <ins style={{background: '#ffdab9'}} className="color-box" /> peachpuff (`#ffdab9`)
- <ins style={{background: '#cd853f'}} className="color-box" /> peru (`#cd853f`)
- <ins style={{background: '#ffc0cb'}} className="color-box" /> pink (`#ffc0cb`)
- <ins style={{background: '#dda0dd'}} className="color-box" /> plum (`#dda0dd`)
- <ins style={{background: '#b0e0e6'}} className="color-box" /> powderblue (`#b0e0e6`)
- <ins style={{background: '#800080'}} className="color-box" /> purple (`#800080`)
- <ins style={{background: '#663399'}} className="color-box" /> rebeccapurple (`#663399`)
- <ins style={{background: '#ff0000'}} className="color-box" /> red (`#ff0000`)
- <ins style={{background: '#bc8f8f'}} className="color-box" /> rosybrown (`#bc8f8f`)
- <ins style={{background: '#4169e1'}} className="color-box" /> royalblue (`#4169e1`)
- <ins style={{background: '#8b4513'}} className="color-box" /> saddlebrown (`#8b4513`)
- <ins style={{background: '#fa8072'}} className="color-box" /> salmon (`#fa8072`)
- <ins style={{background: '#f4a460'}} className="color-box" /> sandybrown (`#f4a460`)
- <ins style={{background: '#2e8b57'}} className="color-box" /> seagreen (`#2e8b57`)
- <ins style={{background: '#fff5ee'}} className="color-box" /> seashell (`#fff5ee`)
- <ins style={{background: '#a0522d'}} className="color-box" /> sienna (`#a0522d`)
- <ins style={{background: '#c0c0c0'}} className="color-box" /> silver (`#c0c0c0`)
- <ins style={{background: '#87ceeb'}} className="color-box" /> skyblue (`#87ceeb`)
- <ins style={{background: '#6a5acd'}} className="color-box" /> slateblue (`#6a5acd`)
- <ins style={{background: '#708090'}} className="color-box" /> slategray (`#708090`)
- <ins style={{background: '#fffafa'}} className="color-box" /> snow (`#fffafa`)
- <ins style={{background: '#00ff7f'}} className="color-box" /> springgreen (`#00ff7f`)
- <ins style={{background: '#4682b4'}} className="color-box" /> steelblue (`#4682b4`)
- <ins style={{background: '#d2b48c'}} className="color-box" /> tan (`#d2b48c`)
- <ins style={{background: '#008080'}} className="color-box" /> teal (`#008080`)
- <ins style={{background: '#d8bfd8'}} className="color-box" /> thistle (`#d8bfd8`)
- <ins style={{background: '#ff6347'}} className="color-box" /> tomato (`#ff6347`)
- <ins style={{background: '#40e0d0'}} className="color-box" /> turquoise (`#40e0d0`)
- <ins style={{background: '#ee82ee'}} className="color-box" /> violet (`#ee82ee`)
- <ins style={{background: '#f5deb3'}} className="color-box" /> wheat (`#f5deb3`)
- <ins style={{background: '#ffffff'}} className="color-box" /> white (`#ffffff`)
- <ins style={{background: '#f5f5f5'}} className="color-box" /> whitesmoke (`#f5f5f5`)
- <ins style={{background: '#ffff00'}} className="color-box" /> yellow (`#ffff00`)
- <ins style={{background: '#9acd32'}} className="color-box" /> yellowgreen (`#9acd32`)


## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

 

## Вопросы

С помощью какого языка стилизованы компоненты в React Native?

- `HTML`
- `CSS`
- `JavaScript`

Свойства цвета в React Native обычно соответствуют тому, как CSS работает в Интернете?

1. `true`
2. `false`

В какой нотации React Native не поддерживает `rgb()` и `rgba()`?

1. восьмеричной
2. шестнадцатеричной
3. функциональной

Поддерживает ли React Native `hsl()` и `hsla()`?

1. `true`
2. `false`

Можете ли вы в React Native использовать строки с названиями цветов в качестве значений?

1. `true`
2. `false`

## Done ✅

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Ссылки:

1. [React Native](https://reactnative.dev/docs/colors)

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291) -->

## Оплата

Сейчас ты находишся на урезанной версии сайта, после оформления подписки на [Patreon](https://www.patreon.com/javascriptcamp), ты получишь полный доступ к обучающему курсу, а также доступ к серетным каналам нашего сервера в [Discord](https://discord.gg/6GDAfXn).  

Качай наше [мобильное приложение](http://onelink.to/njhc95) или пройди тестирование в нашем [JavaScript телеграм боте](https://t.me/javascriptcamp_bot), а также подпишись на [наши новости](https://t.me/javascriptapp).

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):


<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">📖 💵</a></td>
  </tr>
</table>

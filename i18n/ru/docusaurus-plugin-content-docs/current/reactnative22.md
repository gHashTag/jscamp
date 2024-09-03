---
id: reactnative22
title:  Подключение кастомных шрифтов к проекту
sidebar_label: Подключение кастомных шрифтов к проекту
---

## Для чего это нужно?

Теперь, когда вы изучили всю теорию и углубились в практику вы уже готовы писать свои приложения. Но рано или поздно вы столкнетесь с проблемой кастомизации вашего приложения. Никто не будет пользоваться вашим приложением, если в нем не будет красивого стильного оформления. Шрифты как раз являются одной из важных состовляющих красивого софта. В этой статье вы узнаете, как загрузить собственные шрифты в ваше React Native приложение, как активировать их на экране и сделать ваше приложение чуточку лучше.

![Font](https://c.tenor.com/mO59qS0uXuUAAAAC/tenor.gif)

## Встроенные шрифты

Конечно же разработчики позаботились о том, чтобы ваш было проще украшать ваше приложение. На самых популярных платформах (iOS и Android) в React Native есть встроенные шрифты. 

### iOS

- `Academy Engraved LET`
- `AcademyEngravedLetPlain`
- `Al Nile`
- `AlNile-Bold`
- `American Typewriter`
- `AmericanTypewriter-Bold`
- `AmericanTypewriter-Condensed`
- `AmericanTypewriter-CondensedBold`
- `AmericanTypewriter-CondensedLight`
- `AmericanTypewriter-Light`
- `Apple Color Emoji`
- `Apple SD Gothic Neo`
- `AppleColorEmoji`
- `AppleSDGothicNeo-Bold`
- `AppleSDGothicNeo-Light`
- `AppleSDGothicNeo-Medium`
- `AppleSDGothicNeo-Regular`
- `AppleSDGothicNeo-SemiBold`
- `AppleSDGothicNeo-Thin`
- `AppleSDGothicNeo-UltraLight`
- `Arial`
- `Arial Hebrew`
- `Arial Rounded MT Bold`
- `Arial-BoldItalicMT`
- `Arial-BoldMT`
- `Arial-ItalicMT`
- `ArialHebrew`
- `ArialHebrew-Bold`
- `ArialHebrew-Light`
- `ArialMT`
- `ArialRoundedMTBold`
- `Avenir`
- `Avenir Next`
- `Avenir Next Condensed`
- `Avenir-Black`
- `Avenir-BlackOblique`
- `Avenir-Book`
- `Avenir-BookOblique`
- `Avenir-Heavy`
- `Avenir-HeavyOblique`
- `Avenir-Light`
- `Avenir-LightOblique`
- `Avenir-Medium`
- `Avenir-MediumOblique`
- `Avenir-Oblique`
- `Avenir-Roman`
- `AvenirNext-Bold`
- `AvenirNext-BoldItalic`
- `AvenirNext-DemiBold`
- `AvenirNext-DemiBoldItalic`
- `AvenirNext-Heavy`
- `AvenirNext-HeavyItalic`
- `AvenirNext-Italic`
- `AvenirNext-Medium`
- `AvenirNext-MediumItalic`
- `AvenirNext-Regular`
- `AvenirNext-UltraLight`
- `AvenirNext-UltraLightItalic`
- `AvenirNextCondensed-Bold`
- `AvenirNextCondensed-BoldItalic`
- `AvenirNextCondensed-DemiBold`
- `AvenirNextCondensed-DemiBoldItalic`
- `AvenirNextCondensed-Heavy`
- `AvenirNextCondensed-HeavyItalic`
- `AvenirNextCondensed-Italic`
- `AvenirNextCondensed-Medium`
- `AvenirNextCondensed-MediumItalic`
- `AvenirNextCondensed-Regular`
- `AvenirNextCondensed-UltraLight`
- `AvenirNextCondensed-UltraLightItalic`
- `Bangla Sangam MN`
- `Baskerville`
- `Baskerville-Bold`
- `Baskerville-BoldItalic`
- `Baskerville-Italic`
- `Baskerville-SemiBold`
- `Baskerville-SemiBoldItalic`
- `Bodoni 72`
- `Bodoni 72 Oldstyle`
- `Bodoni 72 Smallcaps`
- `Bodoni Ornaments`
- `BodoniOrnamentsITCTT`
- `BodoniSvtyTwoITCTT-Bold`
- `BodoniSvtyTwoITCTT-Book`
- `BodoniSvtyTwoITCTT-BookIta`
- `BodoniSvtyTwoOSITCTT-Bold`
- `BodoniSvtyTwoOSITCTT-Book`
- `BodoniSvtyTwoSCITCTT-Book`
- `Bradley Hand`
- `BradleyHandITCTT-Bold`
- `Chalkboard SE`
- `ChalkboardSE-Bold`
- `ChalkboardSE-Light`
- `ChalkboardSE-Regular`
- `Chalkduster`
- `Cochin`
- `Cochin-Bold`
- `Cochin-BoldItalic`
- `Cochin-Italic`
- `Copperplate`
- `Copperplate-Bold`
- `Copperplate-Light`
- `Courier`
- `Courier New`
- `Courier-Bold`
- `Courier-BoldOblique`
- `Courier-Oblique`
- `CourierNewPS-BoldItalicMT`
- `CourierNewPS-BoldMT`
- `CourierNewPS-ItalicMT`
- `CourierNewPSMT`
- `Damascus`
- `DamascusBold`
- `DamascusLight`
- `DamascusMedium`
- `DamascusSemiBold`
- `Devanagari Sangam MN`
- `DevanagariSangamMN`
- `DevanagariSangamMN-Bold`
- `Didot`
- `Didot-Bold`
- `Didot-Italic`
- `DiwanMishafi`
- `Euphemia UCAS`
- `EuphemiaUCAS-Bold`
- `EuphemiaUCAS-Italic`
- `Farah`
- `Futura`
- `Futura-CondensedExtraBold`
- `Futura-CondensedMedium`
- `Futura-Medium`
- `Futura-MediumItalic`
- `Geeza Pro`
- `GeezaPro-Bold`
- `Georgia`
- `Georgia-Bold`
- `Georgia-BoldItalic`
- `Georgia-Italic`
- `Gill Sans`
- `GillSans-Bold`
- `GillSans-BoldItalic`
- `GillSans-Italic`
- `GillSans-Light`
- `GillSans-LightItalic`
- `GillSans-SemiBold`
- `GillSans-SemiBoldItalic`
- `GillSans-UltraBold`
- `Gujarati Sangam MN`
- `GujaratiSangamMN`
- `GujaratiSangamMN-Bold`
- `Gurmukhi MN`
- `GurmukhiMN-Bold`
- `Heiti SC`
- `Heiti TC`
- `Helvetica`
- `Helvetica Neue`
- `Helvetica-Bold`
- `Helvetica-BoldOblique`
- `Helvetica-Light`
- `Helvetica-LightOblique`
- `Helvetica-Oblique`
- `HelveticaNeue-Bold`
- `HelveticaNeue-BoldItalic`
- `HelveticaNeue-CondensedBlack`
- `HelveticaNeue-CondensedBold`
- `HelveticaNeue-Italic`
- `HelveticaNeue-Light`
- `HelveticaNeue-LightItalic`
- `HelveticaNeue-Medium`
- `HelveticaNeue-MediumItalic`
- `HelveticaNeue-Thin`
- `HelveticaNeue-ThinItalic`
- `HelveticaNeue-UltraLight`
- `HelveticaNeue-UltraLightItalic`
- `Hiragino Mincho ProN`
- `Hiragino Sans`
- `HiraginoSans-W3`
- `HiraginoSans-W6`
- `HiraMinProN-W3`
- `HiraMinProN-W6`
- `Hoefler Text`
- `HoeflerText-Black`
- `HoeflerText-BlackItalic`
- `HoeflerText-Italic`
- `HoeflerText-Regular`
- `Iowan Old Style`
- `IowanOldStyle-Bold`
- `IowanOldStyle-BoldItalic`
- `IowanOldStyle-Italic`
- `IowanOldStyle-Roman`
- `Kailasa`
- `Kailasa-Bold`
- `Kannada Sangam MN`
- `KannadaSangamMN`
- `KannadaSangamMN-Bold`
- `Khmer Sangam MN`
- `Kohinoor Bangla`
- `Kohinoor Devanagari`
- `Kohinoor Telugu`
- `KohinoorBangla-Light`
- `KohinoorBangla-Regular`
- `KohinoorBangla-Semibold`
- `KohinoorDevanagari-Light`
- `KohinoorDevanagari-Regular`
- `KohinoorDevanagari-Semibold`
- `KohinoorTelugu-Light`
- `KohinoorTelugu-Medium`
- `KohinoorTelugu-Regular`
- `Lao Sangam MN`
- `Malayalam Sangam MN`
- `MalayalamSangamMN`
- `MalayalamSangamMN-Bold`
- `Marker Felt`
- `MarkerFelt-Thin`
- `MarkerFelt-Wide`
- `Menlo`
- `Menlo-Bold`
- `Menlo-BoldItalic`
- `Menlo-Italic`
- `Menlo-Regular`
- `Mishafi`
- `Noteworthy`
- `Noteworthy-Bold`
- `Noteworthy-Light`
- `Optima`
- `Optima-Bold`
- `Optima-BoldItalic`
- `Optima-ExtraBlack`
- `Optima-Italic`
- `Optima-Regular`
- `Oriya Sangam MN`
- `OriyaSangamMN`
- `OriyaSangamMN-Bold`
- `Palatino`
- `Palatino-Bold`
- `Palatino-BoldItalic`
- `Palatino-Italic`
- `Palatino-Roman`
- `Papyrus`
- `Papyrus-Condensed`
- `Party LET`
- `PartyLetPlain`
- `PingFang HK`
- `PingFang SC`
- `PingFang TC`
- `PingFangHK-Light`
- `PingFangHK-Medium`
- `PingFangHK-Regular`
- `PingFangHK-Semibold`
- `PingFangHK-Thin`
- `PingFangHK-Ultralight`
- `PingFangSC-Light`
- `PingFangSC-Medium`
- `PingFangSC-Regular`
- `PingFangSC-Semibold`
- `PingFangSC-Thin`
- `PingFangSC-Ultralight`
- `PingFangTC-Light`
- `PingFangTC-Medium`
- `PingFangTC-Regular`
- `PingFangTC-Semibold`
- `PingFangTC-Thin`
- `PingFangTC-Ultralight`
- `Savoye LET`
- `SavoyeLetPlain`
- `Sinhala Sangam MN`
- `SinhalaSangamMN`
- `SinhalaSangamMN-Bold`
- `Snell Roundhand`
- `SnellRoundhand-Black`
- `SnellRoundhand-Bold`
- `Symbol`
- `Tamil Sangam MN`
- `TamilSangamMN-Bold`
- `Telugu Sangam MN`
- `Thonburi`
- `Thonburi-Bold`
- `Thonburi-Light`
- `Times New Roman`
- `TimesNewRomanPS-BoldItalicMT`
- `TimesNewRomanPS-BoldMT`
- `TimesNewRomanPS-ItalicMT`
- `TimesNewRomanPSMT`
- `Trebuchet MS`
- `Trebuchet-BoldItalic`
- `TrebuchetMS-Bold`
- `TrebuchetMS-Italic`
- `Verdana`
- `Verdana-Bold`
- `Verdana-BoldItalic`
- `Verdana-Italic`
- `Zapf Dingbats`
- `ZapfDingbatsITC`
- `Zapfino`

### Android

- `normal`
- `notoserif`
- `sans-serif`
- `sans-serif-light`
- `sans-serif-thin`
- `sans-serif-condensed`
- `sans-serif-medium`
- `serif`
- `Roboto` (стандартный шрифт Android)
- `monospace`

Если вы планировали, что вашим приложением будут пользоваться только пользователи одной OS (что странно, ведь React Native это фреймворк для создания кроссплатформенного кода), то вы можете использовать один встроенный шрифт из этого большого списка, но учтите, на андроиде ваш красивейший шрифт станет блеклым, стандартным Roboto, который может поменять восприятие вашего приложения. Поэтому, мы все же рекомендуем вам поставить кастомные шрифты, которые корректно будут отображаться как на IOS так и на Android.

 ## Установка шрифтов

 Для начала вам нужно скачать на ваш компьютер нужные шрифты в формате `.ttf`. В интернете очень много бесплатных шрифтов для скачивания которых не нужна лицензия, один из популярнейших сайтов для скачивания таких шрифтов это [Google Fonts](https://fonts.google.com/). На нем много настроек, чтобы вы могли подобрать шрифт конкретно под ваши потребности. Так же плюсом данного сайта является готовый код для импорта шрифта в любой CSS файл и сайт в дальнейшем. Нам этот способ к сожалению не подойдет, хотя есть и фраймворки, помогающие вносить изменения в оформление сайтов и приложений, не покидая HTML-разметку, например [Tailwind](https://tailwindcss.com/). Такой способ нам пока не подходит, тем более, что сам React Native CLI позволяет ставить шрифты максимально быстро, буквально за 10 минут.

### Скачивание шрифтов на пк

Как уже было сказанно, вам нужно установить шрифты на ваш компьютер. Шрифты должны быть установленны в формате `.ttf`. Зайдите на сайт [Google Fonts](https://fonts.google.com/) и выберите шрифт, который вам понравился, в данной статье в качестве примера будет установлен шрифт [Lobster](https://fonts.google.com/specimen/Lobster?preview.text=%D0%BA%D1%83%D0%BA%D1%83&subset=cyrillic), он поддерживает русский язык. Загрузите этот шрифт к себе на компьютер, нажав на кнопку Get font.

![GF](https://i.imgur.com/bx8zlFd.png)
 
 Следом нажмите на кнопку Download All.

 ![GF1](https://i.imgur.com/ZT3bKNH.png)

После к вам на компьютер будет загружен .zip архив с набором шрифтов. Распакуйте его в папку на вашем компьютере. Шрифтов может быть несколько, если вы скачали семейство, например шрифты Roboto. В этом случае в папке будет несколько файлов, имена которых начинаются с `Roboto-`. В нашем же архиве всего один файл под названием `Lobster-Regular.ttf`, он нам и нужен. 

### Добавление шрифта в проект

Для того чтобы добавить шрифт в проект, вам нужно добавить его в папку `assets/fonts/` вашего проекта. По умолчанию таких папок нет, поэтому вам нужно их создать самим. А после уже в папку fonts скинуть ваш шрифт. В нашем случае это будет `assets/fonts/Lobster-Regular.ttf`. 

Выглядит это будет примерно так:

![addFont](https://i.imgur.com/MPBnRiG.png)

Теперь нужно создать в корне приложения файл `react-native.config.js`, в котором нужно вставить следующий код:

```jsx title=react-native.config.js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts'],
};
```

Этот код добавит папку `assets/fonts` в ваше приложение, так же он добавит в ваш проект шрифты, которые вы добавили в папку `assets/fonts`. Но к все так просто, для интеграции шрифтов в проект нужно еще так же ввести команду:

```jsx
npx react-native-asset
```

Эта команда добавит шрифты в ваш проект, и всё будет готово к использованию. При выводе вы должны увидеть:

![react-native-asset](https://i.imgur.com/sEPELxO.png)

### Использование шрифта в приложении

Для того чтобы использовать шрифт в вашем приложении, вам нужно импортировать его в ваш файл стилей. Вставьте код ниже в файл `App.tsx`. 

```jsx title=App.tsx
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Обычный текст</Text>
      <Text style={styles.textWithFont}>Текст с Lobster</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:"yellow", 
    justifyContent: "center", 
    alignItems: "center"
  },
  text: {
    fontSize: 50,
    color:"purple"
  },
  textWithFont: {
    fontFamily: "Lobster-Regular",
    fontSize: 50,
    color: "purple"
  }
})

export default App
```

На экране должно отобразиться следующее:

![result](https://i.imgur.com/NSP0vEo.png)

Как видно в примере, шрифт импортируется с помощью `fontFamily: "Lobster-Regular"`, это название шрифта, которое вы добавили в папку `assets/fonts`. 

:::note
Имя шрифта в `fontFamily` должно совпадать с именем файла шрифта без `.ttf`.
:::

На этом все! Вы научились добавлять шрифты в свое приложение, и использовать их в своем проекте. 

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Вопросы

Какие шаги необходимо выполнить для добавления кастомных шрифтов в проект на React Native?

1. Скачать шрифты в формате .ttf, добавить их в папку assets/fonts/ проекта, создать файл react-native.config.js и выполнить команду npx react-native-asset.
2. Просто скопировать шрифты в корневую папку проекта.
3. Загрузить шрифты на внешний сервер и ссылаться на них в коде проекта.

Какое имя следует использовать в свойстве fontFamily при применении кастомного шрифта в React Native?

1. Имя файла шрифта с расширением .ttf
2. Имя шрифта, указанное в его метаданных.
3. Имя файла шрифта без расширения .ttf.

Какие встроенные шрифты доступны в React Native для платформ iOS и Android?

1. Только Arial для iOS и Roboto для Android.
2. Для iOS доступен обширный список шрифтов, включая Arial, Helvetica Neue, Times New Roman и другие, а для Android доступны такие шрифты, как normal, notoserif, sans-serif, sans-serif-light, sans-serif-thin, sans-serif-condensed, sans-serif-medium, serif, Roboto, monospace.
3. В React Native нет встроенных шрифтов, все шрифты необходимо добавлять вручную.


## Done 

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Ссылки:

1. [How to add custom fonts in React Native](https://blog.logrocket.com/adding-custom-fonts-react-native/)
2. [React Native Font Family list](https://infinitbility.com/react-native-font-family-list/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>
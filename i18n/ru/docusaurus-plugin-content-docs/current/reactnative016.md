---
id: reactnative016
title: Настройка Expo 
sidebar_label: Настройка Expo
---

Есть два инструмента, которые вам нужны для разработки приложений с помощью Expo: приложение командной строки под названием Expo CLI для инициализации и обслуживания вашего проекта и мобильное клиентское приложение под названием Expo Go, чтобы открыть его на iOS и Android. Любой веб-браузер будет работать для открытия проекта в Интернете.

:::note
Вам не нужна macOS для создания приложения для iOS с Expo, вам нужно только устройство iOS для запуска приложения Expo Go. Поддерживаются Windows, Linux и macOS.
:::


## Expo CLI

Expo CLI - это приложение командной строки, которое является основным интерфейсом между разработчиком и инструментами Expo. Expo CLI также имеет веб-интерфейс, который появляется в вашем веб-браузере при запуске проекта - вы можете использовать графический интерфейс вместо интерфейса командной строки, если вам еще не комфортно использовать терминал или вы предпочитаете графические интерфейсы, оба имеют схожие возможности.

## Требования

* [Node.js LTS release](https://nodejs.org/ru/)
* [Git](https://git-scm.com)
* [Watchman для пользователей macOS](https://facebook.github.io/watchman/docs/install#buildinstall)

## Рекомендуемые инструменты

* [Редактор VSCode](https://code.visualstudio.com/download)
* [Расширение VSCode Expo для отладки и автозаполнения app.json.](https://marketplace.visualstudio.com/items?itemName=byCedric.vscode-expo)
* [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)
* Пользователи Windows: [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2), Bash через WSL или терминал VSCode.

## Установка Expo CLI

```javascript
npm install --global expo-cli
```

Убедитесь, что установка прошла успешно, запустив `expo whoami`. Вы еще не вошли в систему, поэтому увидите «Not logged in». Вы можете создать учетную запись, запустив `expo register`, если хотите, или если у вас уже есть аккаунт в expo впишите `expo login`, но вам также не нужна учетная запись для начала.

## Expo Go для iOS или Android

Самый быстрый способ начать работу - использовать приложение Expo Go на вашем устройстве iOS или Android. Expo Go позволяет открывать приложения, которые обслуживаются через Expo CLI.
Скачать можно в Play Маркет(Android) или AppStore(iOS)
Когда установка приложения Expo Go будет завершена, откройте его. Если вы создали учетную запись в `expo-cli`, вы можете войти здесь, на вкладке «Профиль». Это облегчит вам открытие проектов в клиенте, когда они будут открыты в разработке — они автоматически появятся на вкладке «Projects» клиентского приложения.

## Создание проекта на Expo

Сначала мы создадим сам проект:

```javascript
expo init test
```

Далее мы переходим в директорию проекта

```javascript
cd test
```

## Запуск сервера разработки

```javascript
expo start
```
Когда вы запускаете `expo start` (или `npm start`), Expo CLI запускает Metro Bundler, который представляет собой HTTP-сервер, который компилирует код JavaScript нашего приложения с помощью Babel и передает его приложению Expo. Он также открывает Expo Dev Tools, графический интерфейс для Expo CLI. 

>Вы можете закрыть окно Expo DEV Tools и отключить
он не запустится в будущем, нажав `shift + d` в вашем терминале, на котором запущен Expo CLI. Запустите его снова в любое время, нажав `d` в терминале, на котором запущен Expo CLI.


## Открытие приложения на вашем телефоне/планшете

>Вы можете открыть проект на нескольких устройствах одновременно. Попробуйте его на iPhone и Android одновременно, если у вас есть и то, и другое под рукой.

На iPhone или iPad откройте приложение Apple «Камера» по умолчанию и отсканируйте QR-код, который вы видите в терминале или в Expo Dev Tools.
На вашем устройстве Android нажмите «Сканировать QR-код» на вкладке «Проекты» приложения Expo Go и отсканируйте QR-код, который вы видите в терминале или в инструментах разработки Expo.

## Hello World

После того, как мы установили и запустили `VS Code` можно начать работу. Для этого открываем файл `App.js` в корне проекта. В этом файле описано, что будет видеть пользователь при запуске приложения. Мы можем изменить несколько строк и при сохранении картинка на симуляторе изменится. Замените весь код в файле `App.js` на представленный ниже и сохраните файл:

```jsx
import React from 'react'
import { StyleSheet, Text } from 'react-native'

const App = () => {
  return (
    <>
      <Text style={styles.h1}>Hello World</Text>
    </>
  )
}

const styles = StyleSheet.create({
  h1: {
    backgroundColor: '#BEFCE5',
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    padding: 20,
    textAlign: 'center'
  }
})

export default App
```

## Шрифты

И iOS, и Android, и большинство настольных операционных систем поставляются со своим собственным набором шрифтов платформы, но если вы хотите привнести в свое приложение еще немного индивидуальности бренда, хорошо подобранный шрифт может пройти долгий путь. И поскольку каждая операционная система имеет свой собственный набор шрифтов платформы, если вы хотите создать опыт, совместимый для всех пользователей, вы захотите использовать свои собственные шрифты в своем проекте. Это руководство покажет вам, как это сделать.

## Использование шрифта Google

Expo имеет первоклассную поддержку всех шрифтов, перечисленных в [Google Fonts](https://fonts.google.com) Чтобы использовать один из них, ознакомьтесь с проектом [Expo Google Fonts](https://github.com/expo/google-fonts). С помощью этих пакетов вы можете быстро интегрировать любые варианты шрифтов или шрифтов.
Чтобы использовать шрифт Inter, вы можете установить пакет `[@expo-google-fonts/inter](https://www.npmjs.com/package/@expo-google-fonts/inter)` с помощью приведенной ниже команды.

```jsx
 expo install expo-font @expo-google-fonts/inter
```

После этого вы можете интегрировать это в свой проект с помощью хука `useFonts` в корне вашего приложения.

```jsx
import React from 'react'
import { View, Text } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Inter_900Black', fontSize: 40 }}>Inter Black</Text>
      </View>
    )
  }
}
```

## Минимальный, но полный рабочий пример

Чтобы создать новый проект, включающий этот пример, запустите `npx create-react-native-app --template with-custom-font` в вашем терминале.

```jsx
import React from 'react'
import { Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

export default props => {
  let [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Inter-Black', fontSize: 40 }}>Inter Black</Text>
        <Text style={{ fontSize: 40 }}>Platform Default</Text>
      </View>
    )
  }
}
```

## Получение шрифта

Первое, что вам понадобится, это файл шрифта. В этом примере мы используем Inter Black из бесплатного [семейства шрифтов Inter](https://rsms.me/inter/) с открытым исходным кодом Расмуса Андерсона. Соглашение в приложениях Expo заключается в том, чтобы поместить шрифты в каталог `./assets/fonts`, но вы можете поместить их в любом месте.

## Поддерживаемые форматы шрифтов

Двумя официально поддерживаемыми форматами шрифтов для платформы Expo являются OTF и TTF. Вы должны использовать один из этих форматов, когда сможете. Если ваш шрифт имеет другой формат, попробуйте преобразовать его в один из этих форматов.
Это единственные форматы шрифтов, которые последовательно работают в Expo в Интернете, Android и iOS.
Если у вас есть версии шрифта OTF и TTF, предпочтите OTF. OTF - это более новый формат, а файлы .otf часто меньше, чем файлы .ttf, и иногда файлы OTF будут отображаться немного лучше в определенных контекстах. В целом, оба формата очень похожи и вполне приемлемы.

## За пределами OTF и TTF

Если вам нужно использовать другой формат, вам может потребоваться [настроить конфигурацию комплектации Metro](https://docs.expo.dev/guides/customizing-metro/), чтобы заставить работать что-либо, кроме TTF и OTF. В целом, просто не делайте этого, если вы действительно не уверены, что хотите. Попытка отобразить формат шрифта, который не поддерживает платформа, в некоторых случаях может привести к сбою вашего приложения.

## Встроенные шрифты платформы

Если вы не хотите использовать пользовательский шрифт, лучше всего просто использовать шрифт платформы по умолчанию, не указывая гарнитуру. Каждая платформа, поддерживаемая приложениями Expo, имеет различный набор шрифтов, доступных по умолчанию, поэтому нет хорошего способа указать тот, который будет работать везде, не предоставляя свой собственный пользовательский шрифт.
Если вам интересно, [Nader Dabit](https://twitter.com/dabit3) ведет список [шрифтов, всегда доступных на iOS и Android](https://github.com/react-native-training/react-native-fonts).
А в Интернете вы можете указать ряд общих семейств шрифтов. Разные пользователи, браузеры и операционные системы будут настроены на использование разных шрифтов для каждой из спецификаций этих семейств шрифтов. Например, Safari на iPhone будет использовать Сан-Франциско по умолчанию без засечек, в то время как Microsoft Edge в Windows будет использовать Arial, а Chrome на Android обычно будет использовать Roboto, хотя телефоны OnePlus часто будут использовать Slate, etc., etc..
* `sans-serif`
* `serif`
* `monospace`
* `fantasy`
* `cursive`
В целом, ваши самые безопасные ставки заключаются только в том, чтобы использовать системное значение по умолчанию, которое обычно будет легко читаемым шрифтом без засечек, с которым должен быть знаком пользователь любой системы; или использовать свой собственный пользовательский шрифт, чтобы у вас был точный контроль над тем, что увидит пользователь.

## Использование компонента `<AppLoading />`

Поскольку ваши шрифты не будут готовы сразу, как правило, рекомендуется ничего не отображать, пока шрифт не будет готов.

Отличный способ сделать это - использовать компонент [`<AppLoading />`](https://docs.expo.dev/versions/latest/sdk/app-loading/). В простейшей форме вы можете просто отобразить его, пока ждете загрузки вашего приложения.

Иногда - особенно в Интернете - люди предпочитают отображать свой контент шрифтом платформы по умолчанию во время загрузки их пользовательских шрифтов. Или, в качестве альтернативы, для визуализации остальной части их контента, это не зависит от пользовательского шрифта во время загрузки шрифта.
Эти подходы называются FOUT и FOIT, и вы можете прочитать о них гораздо больше в Интернете.
Как правило, эти стратегии не рекомендуются для приложений Expo. Если вы включите свои шрифты в свой проект, шрифты всегда будут доставлены пользователю к моменту выполнения вашего кода. Единственное исключение из этого правила заключается в том, что вы можете предпочесть делать это в Интернете.

## Дополнительная информация

Вам, вероятно, не нужно ничего знать за пределами этого в этом руководстве, чтобы эффективно использовать пользовательские шрифты в вашем приложении, но если вам интересно или ваш сценарий использования не был рассмотрен вышеуказанной информацией, пожалуйста, продолжайте читать.

## Загрузка удаленного шрифта прямо из Интернета

В целом, лучше и безопаснее всего загружать шрифты из ваших локальных активов. Если вы отправите в магазины приложений, они будут включены в комплект загрузки и сразу же доступны. И вам не нужно беспокоиться о CORS или других потенциальных проблемах.
Но если вы хотите это сделать, также можно загрузить удаленный файл шрифта непосредственно из Интернета, а не из активов вашего проекта.
Для этого просто замените `require ('./assets/fonts/MyFont.otf’)` URL-адресом вашего шрифта.
Вот минимальный, полный пример.

```jsx
import React from 'react'
import { Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

export default props => {
  let [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  })
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Inter-SemiBoldItalic' }}>Inter SemiBoldItalic</Text>
        <Text>Platform Default</Text>
      </View>
    )
  }
}
```
>При загрузке удаленных шрифтов убедитесь, что они обслуживаются из источника с правильно настроенным CORS. Если вы этого не сделаете, ваш удаленный шрифт может неправильно загрузиться на веб-платформе.

## Использование `Font.loadAsync` вместо хука `useFonts`

 Если вы не хотите использовать перехватчик `useFonts`(например, вы предпочитаете компоненты класса), вы можете использовать `Font.loadAsync` напрямую. Под капотом происходит то, что ваши шрифты загружаются с использованием `Font.loadAsync` из [библиотеки `expo-font`](https://docs.expo.dev/versions/latest/sdk/font/). Вы можете использовать это напрямую, если хотите, или если вы хотите иметь более детальный контроль над тем, когда ваши шрифты загружаются перед рендерингом.

```jsx
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

let customFonts = {
  'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
}

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Platform Default</Text>
          <Text style={{ fontFamily: 'Inter-Black' }}>Inter Black</Text>
          <Text style={{ fontFamily: 'Inter-SemiBoldItalic' }}>Inter SemiBoldItalic</Text>
        </View>
      )
    } else {
      return <AppLoading />
    }
  }
}
```

## Иконки

Как бы модно это ни было в наши дни, не каждое приложение должно использовать эмодзи для всех значков 😳 -- может быть, вы хотите втянуть популярный набор через шрифт значков, такой как FontAwesome, Glyphicons или Ionicons, или вы просто используете некоторые PNG, которые тщательно выбрали в The [Noun Project](https://thenounproject.com). Давайте посмотрим, как сделать оба этих подхода

## @expo/vector-icons

Эта библиотека устанавливается по умолчанию в проект-шаблон, который проходит через `expo init` - она является частью пакета `expo`. Он включает популярные наборы значков, и вы можете просматривать все значки с помощью [icons.expo.fyi](https://icons.expo.fyi).

```jsx
import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function App() {
  return (
    <View style={styles.container}>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
```
Этот компонент загружает шрифт `Ionicons`, если он еще не был загружен, и отображает значок галочки, который я нашел в каталоге векторных значков, упомянутом выше. `@expo/vector-icons` построен на основе [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) и использует аналогичный API. Единственная разница в том, что `@expo/vector-icons` использует более идиоматический стиль `import`:
`import { Ionicons } from '@expo/vector-icons’;` вместо `import Ionicons from 'react-native-vector-icons/Ionicons’;`.

>Примечание: Как и в случае с любым пользовательским шрифтом в Expo, вы можете предварительно загрузить шрифты значков перед рендерингом вашего приложения. Объект font доступен в виде статического свойства компонента font, поэтому в приведенном выше случае это `Ionicons.font`, который вычисляется как `{ionicons: require('path/to/ionicons.ttf’)}`.[Узнайте больше о предварительной загрузке активов](https://docs.expo.dev/guides/preloading-and-caching-assets/).

## Пользовательские шрифты значков

Во-первых, убедитесь, что вы импортировали собственный шрифт значка. [Узнайте больше о загрузке пользовательских шрифтов](https://docs.expo.dev/guides/using-custom-fonts/#using-custom-fonts). После загрузки шрифта вам необходимо создать набор значков. `@expo/vector-icons` предоставляет три метода, которые помогут вам создать набор значков.

## createIconSet

Возвращает ваш собственный шрифт на основе `glyphMap`, где ключ - это имя значка, а значение - либо символ UTF-8, либо его код символа. `fontFamily` - это имя шрифта, а НЕ имя файла. `ExpoAssetId` может быть любым, что вы можете передать в [Font.loadAsync](https://docs.expo.dev/versions/latest/sdk/font/#fontloadasyncobject). [Подробнее см. react-native-vector-icons](https://github.com/oblador/react-native-vector-icons/blob/master/README.md#custom-fonts).

```javascript
import * as React from 'react'
import * as Font from 'expo-font'
import { createIconSet } from '@expo/vector-icons'

const glyphMap = { 'icon-name': 1234, test: '∆' }
const CustomIcon = createIconSet(glyphMap, 'FontName', 'custom-icon-font.ttf')

export default class CustomIconExample extends React.Component {
  render() {
    return <CustomIcon name="icon-name" size={32} color="red" />
  }
}
```

## createIconSetFromFontello

Удобный метод для создания пользовательского шрифта на основе конфигурационного файла [Fontello](https://fontello.com). Не забудьте импортировать шрифт, как описано выше, и перебросить config.json в удобное место в вашем проекте, используя `Font.loadAsync`.

```javascript
// Как только ваш пользовательский шрифт будет загружен ...
import { createIconSetFromFontello } from '@expo/vector-icons'
import fontelloConfig from './config.json'
// И имя шрифта, и файлы, экспортированные из Fontello, скорее всего, называются "fontello".
const Icon = createIconSetFromFontello(fontelloConfig, 'fontello', 'fontello.ttf')
```

## createIconSetFromIcoMoon

Удобный метод для создания пользовательского шрифта на основе конфигурационного файла [IcoMoon](https://icomoon.io). Не забудьте импортировать шрифт, как описано выше, и перебросить config.json в удобное место в вашем проекте, используя `Font.loadAsync`.

```jsx
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { createIconSetFromIcoMoon } from '@expo/vector-icons'

const Icon = createIconSetFromIcoMoon(
  require('./assets/icomoon/selection.json'),
  'IcoMoon',
  'icomoon.ttf'
)

export default function App() {
  // Load the icon font before using it
  const [fontsLoaded] = useFonts({ IcoMoon: require('./assets/icomoon/icomoon.ttf') })
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Icon name="pacman" size={50} color="red" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
```

## Изображения значков

Если вы знаете, как использовать компонент react-native `<Image>`, это будет очень просто.
```jsx
import * as React from 'react'
import { Image, View, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/slack-icon.png')}
        fadeDuration={0}
        style={{ width: 50, height: 50 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
```
Предположим, что наш класс `SlackIcon` находится в `my-project/components/SlackIcon.js`, а наши изображения значков находятся в `my-project/assets/images`, чтобы ссылаться на изображение, которое мы используем, требовать и включать относительный путь. Вы можете предоставить версии своего значка с различной плотностью пикселей, и соответствующее изображение будет автоматически использовано для вас. В этом примере у нас на самом деле есть `slack-icon@2x.png` и `slack-icon@3x.png`, поэтому, если я просматриваю это на iPhone 6s, я увижу изображение `slack-icon@3x.png`. Подробнее об этом читайте в руководстве по изображениям в [документации по react-native](https://reactnative.dev/docs/images#static-image-resources).
Мы также устанавливаем `fadeDuration` (свойство Android) равным `0`, потому что обычно мы хотим, чтобы значок появлялся немедленно, а не исчезал в течение нескольких сотен миллисекунд.

## Компонент кнопки

Удобный компонент для создания кнопок со значком слева.

```jsx
import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function App() {
  const loginWithFacebook = () => {
    console.log('Button pressed')
  }
  
  return (
    <View style={styles.container}>
      <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={loginWithFacebook}>
        Login with Facebook
      </FontAwesome.Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
```

## Итог

На этом уроке мы научились устанавливать и установили Expo, шрифты и иконки.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Telegram](https://t.me/neuro_coder_group) или [ВКонтакте](https://vk.com/neurocoder), а также подписывайтесь на наши [новости](https://t.me/neuro_coder_ai)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Done 

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)


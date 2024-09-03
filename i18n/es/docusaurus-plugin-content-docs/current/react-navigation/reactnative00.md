---
id: reactnative00
title: Введение
sidebar_label: Введение
---

React Navigation — это популярная библиотека для организации маршрутизации и навигации в приложении React Native.

Эта библиотека помогает решить проблему навигации между различными экранами и использования общих данных различными экранами.

## Предварительные требования
Если вы уже знакомы с JavaScript, React и React Native, тогда вы сможете быстро приступить к работе с React Navigation! Если нет, мы настоятельно рекомендуем вам сначала получить базовые знания, а затем вернуться сюда, когда закончите.

Курсы, которые могут вам помочь:

- [JavaScript](https://www.jscamp.app/docs/javascript01)
- [React Native](https://www.jscamp.app/docs/reactnative01)

Это руководство является продолжением курса по [React Native](https://www.jscamp.app/docs/reactnative01)

## Минимальные требования
React Navigation 6 требует как минимум response-native@0.63.0. Если вы используете Expo, ваша версия SDK должна быть не ниже 41.

## Установка
Установите необходимые пакеты в свой проект React Native:

```bash npm2yarn
npm install @react-navigation/native@next
```

React Navigation состоит из некоторых основных утилит, которые затем используются навигаторами для создания структуры навигации в вашем приложении. Не беспокойтесь об этом сейчас, скоро все станет ясно! Для начала работы по установке давайте также установим и настроим зависимости, используемые большинством навигаторов, после чего мы можем двигаться дальше, начиная писать некоторый код.

Библиотеки, которые мы установим сейчас, - это  [`react-native-gesture-handler`](https://github.com/software-mansion/react-native-gesture-handler), [`react-native-reanimated`](https://github.com/software-mansion/react-native-reanimated), [`react-native-screens`](https://github.com/software-mansion/react-native-screens) and [`react-native-safe-area-context`](https://github.com/th3rdwave/react-native-safe-area-context). Если у вас уже установлены эти библиотеки и последняя версия, все готово! В противном случае читайте дальше.

### Установка зависимостей в управляемый Expo проект

В каталоге вашего проекта запустите:

```sh
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
```

Это установит версии этих библиотек, которые совместимы.

### Установка зависимостей в проект React Native

В каталоге вашего проекта запустите:

```bash npm2yarn
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context
```

:::info
После установки вы можете получить предупреждения, связанные с зависимостями одноранговых узлов. Обычно они вызваны неправильным диапазоном версий, указанным в некоторых пакетах. Вы можете спокойно игнорировать большинство предупреждений, пока ваше приложение строится.
:::

Если вы работаете на Mac и разрабатываете для iOS, вам необходимо установить модули (через Cocoapods), чтобы завершить связывание.

```sh
npx pod-install ios
```

Чтобы завершить установку `react-native-gesture-handler`, добавьте следующее вверху (убедитесь, что он находится вверху, и перед ним ничего нет) вашего входного файла, такого как `index.js` или `App.js`:

```jsx
import 'react-native-gesture-handler'
```
:::info
Примечание. Если вы разрабатываете для Android или iOS, не пропускайте этот шаг, иначе ваше приложение может вылететь из строя в производственной среде, даже если оно нормально работает в процессе разработки. Это не применимо к другим платформам.
:::

Теперь нам нужно обернуть все приложение в `NavigationContainer`. Обычно вы делаете это в своем входном файле, например `index.js` или `App.js`.

```jsx
import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

 const App = () => {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  )
}

export default
```

## Links

[React Navigation](https://reactnavigation.org/docs/6.x/getting-started)

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Done 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

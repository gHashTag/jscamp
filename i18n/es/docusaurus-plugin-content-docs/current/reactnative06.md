---
id: reactnative06
title: События нажатия - Кнопки
sidebar_label: События нажатия - Кнопки
---

import YouTube from 'react-youtube'

Поверхность на экране, нажатие на которую является событием, которое приводит к ответной реакции связанного с ней действия.

## Button

Базовый компонент кнопки, который должен хорошо отображаться на любой платформе. Поддерживает минимальный уровень настройки.

Если эта кнопка не подходит для вашего приложения, вы можете создать свою собственную кнопку с помощью [TouchableOpacity](https://reactnative.dev/docs/touchableopacity) или [TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback). Для вдохновения посмотрите исходный код этого компонента кнопки. Или взгляните на широкий спектр компонентов кнопок, [созданных сообществом](https://js.coach/?menu%5Bcollections%5D=React%20Native&page=1&query=button).

```SnackPlayer name=index.js
import React from 'react'
import { Button } from 'react-native'

const App = (props) => (
  <Button title="Press me" onPress={() => {}} />
)

export default App
```

## Props

### onPress

Обработчик, который будет вызываться, когда пользователь нажимает кнопку.

| Type                               |
| ---------------------------------- |
| function([PressEvent](pressevent)) |

### title

Текст для отображения внутри кнопки. На Android данный заголовок будет преобразован в верхний регистр.

| Type   |
| ------ |
| string |

Остальные не обязательные свойства смотри [здесь](https://reactnative.dev/docs/button#reference)

## Pressable

С версии React Native 0.63 представил новый компонент [Pressable](https://reactnative.dev/docs/pressable).
Основной компонент, который обнаруживает различные шаги взаимодействия пресса на любом из своих дочерних компонентов. Компонент, который реагирует на касание любого из своих дочерних компонентов.

```jsx
<Pressable onPress={onPressFunction}>
  <Text>I'm pressable!</Text>
</Pressable>
```

`Touchable` компоненты: [Button](https://reactnative.dev/docs/button),[TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback), [TouchableHighlight](https://reactnative.dev/docs/touchablehighlight), [TouchableOpacity](https://reactnative.dev/docs/touchableopacity),[TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback)

Компоненты `Pressable` и `Touchable` очень похожи. Их основные функции одинаковы для создания интерактивного текста / изображения и взаимодействия с пользователем. Давайте сравним их!

### Touchable компонент:

1. Он включает стили и эффекты, которые не соответствуют взаимодействиям платформы.
2. Он не поддерживает качественное взаимодействие на разных платформах.

### Pressable компонент:

1. Он обнаруживает различные типы взаимодействий.
2. Его API обеспечивает прямой доступ к текущему состоянию взаимодействия.
3. Его возможности могут быть расширены, включая hover, размытие, фокусировку и многое другое.

Pressable содержит много нового реквизита `props` и интересных функций, таких как:

1. `delayLongPress`: продолжительность в миллисекундах от `onPressIn` к моменту вызова `onLongPress`.
2. `Hitlop`: устанавливает дополнительное расстояние за пределами элемента, на котором может быть обнаружен пресс.
3. `onLongPress`: вызывается, если время после `onPressIn` длится более 370 миллисекунд.
4. `pressRetentionOffset`: Дополнительное расстояние за пределами области просмотра, на котором прикосновение считается нажатием, до срабатывания `onPressOut`.
5. `android_disableSound` (Android): если true, звук системы Android не воспроизводится при нажатии.
6. `android_ripple` (Android): включает эффект пульсации Android и настраивает его свойства.

Согласно официальной документации React Native, `Pressable` предпочтительнее компонентов `Touchable`. Pressable компонент предлагает более обширный и перспективный способ обработки сенсорного ввода.
Компонент Pressable предназначен для замены компонентов `Touchable`.
Пришло время начать использовать компонент `Pressable` для будущих приложений.

На элементе, обернутом `Pressable`:

- `onPressIn` вызывается при активации пресса.
- `onPressOut` вызывается, когда жест нажатия деактивирован.

После нажатия `onPressIn` произойдет одно из двух:

Человек уберет палец, запустив `onPressOut`, а затем `onPress`.
Если человек оставляет палец дольше 500 миллисекунд до его удаления, срабатывает `onLongPress`. `onPressOut` все равно сработает, когда они уберут палец.

![Pressable](https://reactnative.dev/docs/assets/d_pressable_pressing.svg)

Пальцы не самые точные инструменты, и пользователи часто случайно активируют не тот элемент или пропускают область активации. Чтобы помочь, у `Pressable` есть дополнительный `HitRect`, который вы можете использовать, чтобы определить, как далеко касание может регистрироваться от обернутого элемента. Прессы могут запускаться в любом месте `HitRect`.

`PressRect` позволяет нажатию перемещаться за пределы элемента и его `HitRect`, сохраняя при этом активацию и имея право на «нажатие» - представьте, как медленно отводите палец от кнопки, на которую вы нажимаете.

> Сенсорная область никогда не выходит за границы родительского представления, и Z-индекс родственных представлений всегда имеет приоритет, если касание касается двух перекрывающихся представлений.

![Pressable](https://reactnative.dev/docs/assets/d_pressable_anatomy.svg)

### Пример

```SnackPlayer name=index.js
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0)

  let textLog = ''
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress'
  } else if (timesPressed > 0) {
    textLog = 'onPress'
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1)
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
})

export default App
```

Согласно официальной документации React Native, `Pressable` предпочтительнее компонентов `Touchable`. Сжимаемый компонент предлагает более обширный и перспективный способ обработки сенсорного ввода.
Компонент Pressable предназначен для замены компонентов `Touchable`.
Пришло время начать использовать компонент `Pressable` для будущих приложений.


[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Вопросы

Как называется базовый компонент кнопки, который должен хорошо отображаться на любой платформе?

1. `Pressable`
2. `Touchable`
3. `Button`

Какой компонент предпочтительнее согласно официальной документации React Native?

1. `Pressable`
2. `Touchable`
3. `Button`

Как называется обработчик, который будет вызываться, когда пользователь нажимает кнопку?

1. `Touchable`
2. `onPress`
3. `press`

## Done ✅

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Ссылки

1. [React Native](https://reactnative.dev/docs/button)
2. [Pressable vs. Touchable in React Native](https://medium.com/@mahyarmohammadi/react-native-pressable-vs-touchable-5fec6b332f15)


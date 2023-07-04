---
id: reactnative18
title: Отладка - Debugging
sidebar_label: Отладка - Debugging
---

import YouTube from 'react-youtube'

## Доступ к меню разработчика в приложении

Вы можете получить доступ к меню разработчика, встряхнув устройство или выбрав «Shake Gesture» в меню «Оборудование» в симуляторе iOS. Вы также можете использовать сочетание клавиш `⌘D`, когда ваше приложение работает в симуляторе iOS, или `⌘M`, когда оно работает в эмуляторе Android в Mac OS, и `Ctrl + M` в Windows и Linux. В качестве альтернативы для Android вы можете запустить команду `adb shell input keyevent 82`, чтобы открыть меню разработчика (82 - это код клавиши меню).

![debug](https://reactnative.dev/assets/images/DeveloperMenu-f22b01f374248b3242dfb3a1017f98a8.png)

> Меню разработчика отключено в выпускных (производственных) сборках.

## Видео

<YouTube videoId="7tb8JE0-yb4" />

## Включение быстрого обновления - Fast Refresh

`Fast Refresh` - это функция React Native, которая позволяет вам почти мгновенно получать обратную связь об изменениях в ваших компонентах React. Во время отладки может быть полезно включить быстрое обновление. Быстрое обновление включено по умолчанию, и вы можете переключить `Enable Fast Refresh` в меню разработчика React Native. Если этот параметр включен, большинство ваших правок должны быть видны в течение секунды или двух.

## Включение сочетаний клавиш

React Native поддерживает несколько сочетаний клавиш в симуляторе iOS. Они описаны ниже. Чтобы включить их, откройте меню "Оборудование", выберите `Keyboard` и убедитесь, что установлен флажок `Connect Hardware Keyboard`.

## React Developer Tools

Вы можете использовать автономную версию React Developer Tools для отладки иерархии компонентов React. Чтобы использовать его, установите глобально пакет react-devtools:

```bash npm2yarn
npm install -g react-devtools
```

Теперь запустите `response-devtools` из терминала, чтобы запустить автономное приложение DevTools:

```bash
react-devtools
```

Он должен подключиться к вашему симулятору в течение нескольких секунд.

![react-devtools](https://reactnative.dev/assets/images/ReactDevTools-46f5369dca7c5f17b9e2390e76968d56.png)

## Интеграция с React Native Inspector

Откройте меню разработчика в приложении и выберите `Toggle Inspector`. Появится оверлей, который позволит вам нажать на любой элемент пользовательского интерфейса и просмотреть информацию о нем:

![React Native Inspector](https://reactnative.dev/assets/images/Inspector-4bd1342086bcd964bbd7f82e453743a7.gif)

Однако, когда работает react-devtools, Inspector перейдет в свернутый режим и вместо этого будет использовать DevTools в качестве основного пользовательского интерфейса. В этом режиме нажатие на что-либо в симуляторе вызовет соответствующие компоненты в DevTools:

![react-devtools](https://reactnative.dev/assets/images/ReactDevToolsInspector-fb13d6cdad3479437715a25e038cf6f6.gif)

Вы можете выбрать «Toggle Inspector» в том же меню, чтобы выйти из этого режима.

Подробней о режиме отладке вы можете всегда почитать [здесь](https://reactnative.dev/docs/debugging).

## React Native Debugger

Еще один вариант скачать [React Native Debugger](https://github.com/jhen0409/react-native-debugger), которым лично мне больше нравится.

![React Native Debugger](https://user-images.githubusercontent.com/3001525/29451479-6621bf1a-83c8-11e7-8ebb-b4e98b1af91c.png)

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Вопросы

Функция React Native, которая позволяет вам почти мгновенно получать обратную связь об изменениях в ваших компонентах React?

1. `Toggle Inspector`
2. `Fast Refresh`
3. `Fast fresh`

Как называется автономная версия инструмента для отладки компонентов React?

1. `Toggle Inspector`
2. `Tools Inspector`
3. `react-devtools`

## Done ✅

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Ссылки:

1. [React Native](https://reactnative.dev/docs/debugging)


---
id: reactnative16
title: Настройка рабочего окружения на Linux
sidebar_label: Настройка Linux
---

import YouTube from 'react-youtube'

<YouTube videoId="7mdCNp5lJsI"/>

Данная статья поможет настроить рабочее окружение `React Native` на операционной системе `Linux` под мобильную операционную систему `Android`. В данной статье будет использован популярный дистрибутив - `Ubuntu`.

![Step00](/img/steps/00.png)

## Установка пакетов Node.js, OpenJDK

Приступаем к установке пакета `Node.js` через терминал.
Для начала установки необходимо установить `Curl` для этого вставьте в терминал следующую команду:

```bash
sudo apt install curl
```

А затем, после окончания загрузки, вставьте следующую команду:

```bash
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

Теперь можно установить `Node.js` командой:

```bash
sudo apt-get install -y nodejs
```

Таким образом Вы установите `Node.js`, актуальную инструкцию по установке можно найти на [официальном сайте Node.js](https://nodejs.org/en/download/package-manager/).

Для установки `OpenJDK` вставьте в терминал следующую команду:

```bash
sudo apt install openjdk-11-jdk openjdk-11-jdk-headless
```

Проверить правильность установки `OpenJDK` можно вставив в терминал команду:

```bash
java -version
```

![Java_version](/img/rn/00_3/01.png)

![Step01](/img/steps/01.png)

## Установка Android Studio

Теперь вам потребуется установить `Android Studio`. В `Ubuntu` его можно установить используя `Snap Store`. Для этого в поиске `Snap Store` введите `Android Studio`.

![AndroidStudio01](/img/rn/00_3/02.png)

Выберите его и нажмите кнопку `Install`.

![AndroidStudio02](/img/rn/00_3/03.png)

После окончания загрузки запустите `Android Stuido` и следуйте инструкциям установки. Рекомендуется оставить все настройки по умолчанию.

![AndroidStudio03](/img/rn/00_3/06.png)

Когда `Android Studio` завершит установку он запуститься автоматически.

![AndroidStudio04](/img/rn/00_3/09.png)

![Step02](/img/steps/02.png)

## Установка Android SDK

Для начала работы с ОС `Android `нужно установить определенные компоненты `Android SDK`.
Для их установки откройте `Android Studio` и нажмите справа внизу кнопку `Configure`->`SDK Manager`. Если ее нет, перезапустите приложение.

![AndroidStudioSDK01](/img/rn/00_3/10.png)

В открывшемся `SDK Manager` в правом нижнем углу установите флажок `Show Package Details`.

![AndroidStudioSDK02](/img/rn/00_3/11.png)

Найдите и разверните список `Android 10 (Q)`, и убедитесь, что отмечены следующие элементы:

- `Android SDK Platform 29`
- `Intel x86 Atom_64 System Image` и/или `Google APIs Intel x86 Atom System Image`

![AndroidStudioSDK03](/img/rn/00_3/12.png)

Затем выберите вкладку `SDK Tools` и также установите флажок рядом с `Show Package Details`.

Найдите и разверните запись с пунктом `Android SDK Build-Tools`, убедитесь, что выбрана версия `29.0.2`.

![AndroidStudioSDK04](/img/rn/00_3/13.png)

Нажмите `Apply`, чтобы загрузить и установить `Android SDK` и соответствующие инструменты сборки.

Во время установки примите лицензионное соглашение.

![AndroidStudioSDK05](/img/rn/00_3/14.png)

![AndroidStudioSDK06](/img/rn/00_3/15.png)

![Step03](/img/steps/03.png)

## Настройка переменной сред ANDROID_HOME

Для настройки переменной `ANDROID_HOME` перейдите в папку `Home`

![AndroidHome01](/img/rn/00_3/16.png)

и включите отображение скрытых файлов.

![AndroidHome02](/img/rn/00_3/17.png)

Папка `Home` будет выглядеть примерно так:

![AndroidHome03](/img/rn/00_3/18.png)

Далее Вам нужно открыть файл `.bashrc`

![AndroidHome04](/img/rn/00_3/19.png)

и добавить в него следующие строки:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

![AndroidHome05](/img/rn/00_3/20.png)

Затем введите в терминал следующую команду:

```bash
source $HOME/.bashrc
```

Таким образом вы добавите переменную `ANDROID_HOME`. Вы можете убедиться в правильности установки введя команды:

```bash
echo $ANDROID_HOME
```

и

```bash
echo $PATH
```

![AndroidHome06](/img/rn/00_3/21.png)

![Step04](/img/steps/04.png)

## Настройка эмулятора Android

Для того что бы создать или настроить эмулятор нужно, находясь на главном окне `Android Studio`, выбрать пункт `Configure` -> `AVD Manager`.

Далее нажать кнопку `Create Virtual Device...`,

![Emulator01](/img/rn/00_3/Emulator01.png)

выбираем модель эмулируемого смартфона (Например, Pixel 2) и нажимаем кнопку `Next`.

![Emulator02](/img/rn/00_3/Emulator02.png)

В открывшемся окне в столбце Release Name выбрать `Q Download` (Download является ссылкой на скачивание выбранного образа эмулятора), скачивание и установка начнется автоматически.
На момент создания инструкции рекомендуемый `API Level 29`, при установке уточните актуальную версию.

![Emulator03](/img/rn/00_3/Emulator03.png)

Затем нажмите кнопку `Next`->`Finish`.

![Emulator04](/img/rn/00_3/Emulator04.png)

Можно проверить работу эмулятора нажав на зеленую кнопку в форме треугольника, должен появится интерфейс в виде смартфона.

![Emulator05](/img/rn/00_3/Emulator05.png)

:::note Подключение реального Андроид девайса

Если возникли проблемы с эмулятором, можно использовать реальный смартфон.
Для этого нужно стать разработчиком в своем смартфоне. Для этого переходим в настройки смартфона и выбираем пункт `Об устройстве` Далее нужно найти пункт `Версия...` и нажать 5-7 до того пока не появится надпись "Вы стали разработчиком".
Подключаем смартфон через USB кабель и в зависимости от прошивки включаем режим отладки по USB. Для каждой прошивки алгоритм включения отличается друг от друга. [Подробнее](https://reactnative.dev/docs/running-on-device).
:::

![Step05](/img/steps/05.png)

## Установка Watchman

`Watchman` - это инструмент от `Facebook` для просмотра изменений в файловой системе. Его установка не обязательна, но без него может возникнуть множество проблем.
Для установки `Watchman` потребуется установить `Homebrew`. Для этого вставьте в терминал следующую команду:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Рекомендуется установить `Homebrew` в папку `home`, для этого введите пароль от своей учетной записи и нажмите кнопку `Enter`.

![Watchman01](/img/rn/00_3/22.png)

Далее терминал запросит подтверждение, нажмите `Enter`.

![Watchman02](/img/rn/00_3/23.png)

После завершения установки нужно сделать следующие действия:

Выполнить в терминале команду:

```bash
sudo apt-get install build-essential
```

Далее поочередно выполнить следующие команды:

```bash
test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)
test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
test -r ~/.bash_profile && echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.bash_profile
echo "eval \$($(brew --prefix)/bin/brew shellenv)" >>~/.profile
```

и

```bash
brew install gcc
```

`Homebrew` готов к работе!

Теперь можно устанавливать `Watchman`. Для этого Вам необходимо вставить в терминал команду:

```bash
brew install watchman
```

После окончания загрузки `Watchman` будет готов к работе!

![Step06](/img/steps/06.png)

## Создание проекта React Native

`React Native` имеет встроенный интерфейс командной строки, который вы можете использовать для создания нового проекта. Вы можете получить к нему доступ командой `npx`, которое поставляется с `Node.js`.

Давайте создадим новый проект `React Native` под названием `MyProject`.

Для создания проекта на `React Native` нужно запустить терминал и ввести команду:

```bash
npx react-native init MyProject
```

Начнется инициализация проекта на `React Native`.

![React01](/img/rn/00_3/24.png)

![Step07](/img/steps/07.png)

## Запуск проекта React Native

Сперва Вам нужно запустить `Metro Bundler`, сборщик `JavaScript`, который поставляется с `React Native`. `Metro` «принимает входной файл и различные параметры и возвращает один файл `JavaScript`, который включает весь ваш код и его зависимости». - [Metro Docs](https://facebook.github.io/metro/docs/concepts).

Чтобы запустить `Metro Bundler`, выполните команду в терминале`npx react-native start` в папке c Вашим созданным проектом (например: `cd MyReact`):

```bash
cd MyReact
npx react-native start
```

![React02](/img/rn/00_3/26.png)

Данная команда запустит `Metro Bundler` и скомпилирует проект.
:::danger Внимание
В дальнейшем первое окно терминала c Metro Bundler `не закрываем`.
:::

Для запуска Вашего проекта `React Native` открываем второй терминал и переходим в папку с Вашим проектом выполняя команды:

```bash
cd MyReact
npx react-native run-android
```

:::info
Запустится Ваше приложение на эмуляторе Android или на подключенном смартфоне с включенным режимом отладки по USB.
:::

На экране эмулятора или смартфона должен появится экран приветствия `React Native`.

![React03](/img/rn/00_3/27.png)

![Step08](/img/steps/08.png)

## Редактирование кода в приложении - Hello World

Для редактирования кода открываем папку с проектом любым редактором кода (рекомендуем [Visual Studio Code](https://code.visualstudio.com/download)). Редактирование начинаем с файла `App.js`. При изменении и сохранении кода, `Ctrl + S`, происходит автоматическое обновление интерфейса нашего приложения на экране эмулятора.

Вставьте в файл `App.js` следующий код и нажмите `Ctrl + S`:

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

На экране со светлым фоном в вверху в центре появиться надпись «Hello World».

![HelloWorld](/img/rn/00_3/28.png)

Вот так просто!

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Telegram](https://t.me/neuro_coder_group) или [ВКонтакте](https://vk.com/neurocoder), а также подписывайтесь на наши [новости](https://t.me/neuro_coder_ai)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Done 

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)


## Ссылки:

1. [React Native, официальная документация](https://reactnative.dev/docs/environment-setup)
2. [Node.js, официальный сайт](https://nodejs.org/)
3. [Homebrew, официальный сайт](https://brew.sh/)
4. [Android Studio, официальный сайт](https://developer.android.com/studio)
5. [Visual Studio Code, официальный сайт](https://code.visualstudio.com/download)
6. [Metro, официальная документация](https://facebook.github.io/metro/docs/concepts)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
<tr>
<td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">  </a></td>
<td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
<td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">🏫</a></td>
</tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


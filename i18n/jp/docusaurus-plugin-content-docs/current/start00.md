---
id: start00
title: Настройка рабочего окружения на Windows 10
sidebar_label: Настройка Windows 10
---

import YouTube from 'react-youtube'

<YouTube videoId="Qe8q7mRXof8"/>

Данная статья поможет настроить рабочее окружение React Native на операционной системе Windows 10.
:::note
На всех этапах установки пользователь должен иметь права Администратора и подключен к сети Интернет.
:::
Инструкция зависит от Вашей операционной системы и от того, под какую мобильную ОС (Android или iOS) решите разрабатывать приложение. Данная статья ориентирована под ОС разработки Windows, среду разработки Android Studio и мобильную ОС Android.

![Step00](/img/steps/00.png)

## Установка Chocolatey

[Chocolatey](https://chocolatey.org/install) — менеджер пакетов в среде Windows по аналогии с apt-get в Linux, позволяющий установить Node, Python2 и др. Устанавливается менеджер пакетов Chocolatey через консольную оболочку `PowerShell`. Для запуска `PowerShell` на кнопке `Пуск` вызываем контекстное меню (нажатием правой клавиши мыши) и выбираем пункт `Windows PowerShell (администратор)`.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="en"
values={[
{label: 'En', value: 'en'},
{label: 'Ru', value: 'ru'},
]}>
<TabItem value="en">

![001](/img/rn/00/001_en.png)

  </TabItem>
  <TabItem value="ru">

![001](/img/rn/00/001.png)

  </TabItem>
</Tabs>

:::info Альтернативный вариант
Рядом с меню `Пуск` кнопка `Поиск` -> вводим `PowerShell` и через контекстное меню выбираем `Запуск от имени администратора`.
:::
Откроется оболочка `PowerShell` в консольном режиме. Для проверки возможности запуска скриптов от сторонних производителей вводим команду:

```bash
Get-ExecutionPolicy
```

![Chocolatey](/img/rn/00/01.png)

По умолчанию использование сторонних скриптов заблокировано (Restricted). Разрешим выполнение сторонних скриптов командой:

```bash
 Set-ExecutionPolicy Bypass -Scope Process
```

Выполнение команды потребует подтверждения, отвечаем символом Y (Yes).

![``PowerShell``](/img/rn/00/02.png)

Проверим разблокировку запуска скриптов из консоли предыдущей командой:

```bash
Get-ExecutionPolicy
```

При успешном выполнении ответом будет `Bypass`.

![Bypass](/img/rn/00/03.png)

Теперь можно использовать сторонние скрипты. Установим менеджер пакетов `Chocolatey` следующей командой:

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

После окончания загрузки `Chocolatey` можно проверить корректность установки данного пакета. Вводим в `PowerShell` команду:

```bash
choco
```

или точнее

```bash
choco -v
```

![choco](/img/rn/00/04.png)

На время написание данной статьи версия `Chocolatey v0.10.15`.

![Step01](/img/steps/01.png)

## Установка пакетов Node, Python2, JDK

Приступаем к установке пакетов Node, Python2 и JDK через PowerShell командой:

```bash
choco install -y nodejs.install python2 openjdk8
```

:::info Примечание
`choco` – менеджер

`Install` – ключ установки пакетов

`-y` - ключ (yes) автоматической установки пакетов

`nodejs.install, python2, openjdk8` - название устанавливаемых пакетов.
:::

![choco](/img/rn/00/05.png)

Начнется загрузка и установка пакетов. После установки каждого пакета будет соответствующая надпись о том, что он установлен успешно (successful).

![Step02](/img/steps/02.png)

## Установка Android Studio

Версия `Android Studio` на момент написания этой статьи `4.0.1`.
Загружаем и устанавливаем [Android Studio](https://developer.android.com/studio).
Во время установки убедитесь, что выбраны пункты:

- Android SDK
- Android SDK Platform
- Android Virtual Device

Рекомендуем использовать стандартные пути установки.

:::danger Внимание
Для установки требуется порядка 40 Гб свободного пространства диска C: Можно установить пакет на диск D:, но тогда потребуется изменить переменные окружения пользователя.
:::
Затем нажмите кнопку `Далее`, чтобы установить все эти компоненты.

## Установка Android SDK

`Android Studio` по умолчанию предлагает установить последнюю стабильную версию `Android SDK` для создания приложения `React Native` с использованием нативного кода (на момент написания статьи рекомендованная версия Android SDK Platform 29.0.2).

В начальном окне `Android Studio` открываем справа снизу раздел `Configure`.

![Android Studio](/img/rn/00/06.png)

Выбираем пункт `SDK Manager`.

![Android Studio](/img/rn/00/07.png)

В подразделе `Android SDK` на вкладке `SDK Platforms` в правом нижнем углу установите флажок `Show Package Details`. Найдите и разверните список `Android 10 (Q)`, и убедитесь, что отмечены следующие элементы:

- `Android SDK Platform 29`
- `Intel x86 Atom_64 System Image` и/или `Google APIs Intel x86 Atom System Image`

Затем выберите вкладку `SDK Tools` и также установите флажок рядом с `Show Package Details`.

![SDK Manager](/img/rn/00/08.png)

Найдите и разверните запись с пунктом `Android SDK Build-Tools`, убедитесь, что выбрана версия `29.0.2`.

![SDK Manager](/img/rn/00/09.png)

Наконец, нажмите `Apply`, чтобы загрузить и установить `Android SDK` и соответствующие инструменты сборки.

![Step03](/img/steps/03.png)

## Настройка переменных среды

Инструменты `React Native` требуют настройки некоторых переменных среды для создания приложений с использованием собственного кода.
Откройте `панель управления Windows`.

<Tabs
defaultValue="en"
values={[
{label: 'En', value: 'en'},
{label: 'Ru', value: 'ru'},
]}>
<TabItem value="en">

![Control panel](/img/rn/00/03_00_en.png)

  </TabItem>
  <TabItem value="ru">

![Control panel](/img/rn/00/03_00_ru.png)

  </TabItem>
</Tabs>

Нажмите `Учетные записи пользователей`, затем снова нажмите `Учетные записи пользователей`.

<Tabs
defaultValue="en"
values={[
{label: 'En', value: 'en'},
{label: 'Ru', value: 'ru'},
]}>
<TabItem value="en">

![User](/img/rn/00/10.png)

  </TabItem>
  <TabItem value="ru">

![UserRu](/img/rn/00/10_ru.png)

  </TabItem>
</Tabs>

Нажмите на `Изменить мои переменные среды`.

<Tabs
defaultValue="en"
values={[
{label: 'En', value: 'en'},
{label: 'Ru', value: 'ru'},
]}>
<TabItem value="en">

![Path](/img/rn/00/11.png)

  </TabItem>
  <TabItem value="ru">

![PathRu](/img/rn/00/11_ru.png)

  </TabItem>
</Tabs>

Нажмите кнопку `Создать ...` для добавления новой пользовательской переменной `ANDROID_HOME`, указывающую путь к Вашему `Android SDK`.
Далее нажимаем кнопку `Обзор каталога…` и выбираем каталог установки `Android SDK`, по умолчанию это `%LOCALAPPDATA%\Android\Sdk`.
:::info Примечание
Путь до `Android SDK` можно узнать в пункте настроек `SDK Manager`.
:::

<Tabs
defaultValue="en"
values={[
{label: 'En', value: 'en'},
{label: 'Ru', value: 'ru'},
]}>
<TabItem value="en">

![Path](/img/rn/00/12.png)

  </TabItem>
  <TabItem value="ru">

![PathRu](/img/rn/00/12_ru.png)

  </TabItem>
</Tabs>

Нажимаем `ОК`.

Там же в переменную `Path` добавьте пути к платформенным инструментам.

1. Выберите переменную `Path`.
2. Щелкните кнопку `Изменить…`.
3. Нажмите кнопку `Создать` и добавьте в список путь к установленным инструментам платформы. Расположение по умолчанию для этой папки `%LOCALAPPDATA%\Android\Sdk\platform-tools`.

<Tabs
defaultValue="en"
values={[
{label: 'En', value: 'en'},
{label: 'Ru', value: 'ru'},
{label: 'Path D: Ru', value: 'pth'},
]}>
<TabItem value="en">

![Path](/img/rn/00/13.png)

  </TabItem>
  <TabItem value="ru">

![PathRu](/img/rn/00/13_ru.png)

  </TabItem>
  <TabItem value="pth">

![PathRu](/img/rn/00/13_D_ru.png)

  </TabItem>
</Tabs>

Проверяем изменение параметров сред в `PowerShell` командой:

```bash
Get-ChildItem -Path Env:\
```

:::info Примечание
Если пути не обновились необходимо перезагрузить компьютер и проверить заново.
:::

![Step04](/img/steps/04.png)

## Настройка эмулятора

Для того что бы создать или настроить эмулятор нужно, находясь на главном окне `Android Studio`, выбрать пункт `Configure` -> `AVD Manager`.

![AVD Manager](/img/rn/00/14.png)

Далее нажать кнопку `Create Virtual Device...`,

![AVD Manager](/img/rn/00/15.png)

выбираем модель эмулируемого смартфона (Например, Pixel 2) и нажимаем кнопку `Next`.

![Pixel2](/img/rn/00/16.png)

В открывшемся окне в столбце Release Name выбрать `Q Download` (Download является ссылкой на скачивание выбранного образа эмулятора), скачивание и установка начнется автоматически.
На момент создания инструкции рекомендуемый `API Level 29`, при установке уточните актуальную версию.

![Q Downloader](/img/rn/00/17.png)

Затем нажмите кнопку `Next`->`Finish`.
Можно проверить работу эмулятора нажав на зеленую кнопку в форме треугольника, должен появится интерфейс в виде смартфона.

![Next](/img/rn/00/18.png)

:::note Подключение реального Андроид девайса

Если возникли проблемы с эмулятором, не отчаивайтесь, можно использовать реальный смартфон.
Для этого нужно стать разработчиком в своем смартфоне. Для этого переходим в настройки смартфона и выбираем пункт `Об устройстве` Далее нужно найти пункт `Версия...` и нажать 5-7 до того пока не появится надпись "Вы стали разработчиком".
Подключаем смартфон через USB кабель и в зависимости от прошивки включаем режим отладки по USB. Для каждой прошивки алгоритм включения отличается друг от друга. [Подробнее](https://reactnative.dev/docs/running-on-device).
:::
![Step05](/img/steps/05.png)

## Создание проекта React Native

`React Native` имеет встроенный интерфейс командной строки, который вы можете использовать для создания нового проекта. Вы можете получить к нему доступ командой `npx`, которое поставляется с `Node.js`.

Давайте создадим новый проект `React Native` под названием `MyProject`.

Для создания проекта на `React Native` нужно запустить `PowerShell` от имени администратора, затем в нём с помощью команды `cd` перейти в папку c Вашим будущим проектом (например: `cd D:\MyProjects`).
Далее вводим команду:

```bash
npx react-native init MyReact
```

![react-native init](/img/rn/00/19.png)

![Step06](/img/steps/06.png)

## Запуск React Native

Во-первых, вам нужно запустить `Metro Bundler`, сборщик `JavaScript`, который поставляется с `React Native`. `Metro` «принимает входной файл и различные параметры и возвращает один файл `JavaScript`, который включает весь ваш код и его зависимости». - [Metro Docs](https://facebook.github.io/metro/docs/concepts).

Чтобы запустить `Metro Bundler`, выполните команду в `PowerShell` `npx react-native start` в папке c Вашим созданным проектом (например: `cd D:\MyProjects\MyReact`) :

```bash
cd d:\MyProjects\MyReact
npx react-native start
```

![react-native start](/img/rn/00/20.png)

Данная команда запустит `Metro Bundler` и скомпилирует проект.
:::danger Внимание
В дальнейшем первое окно PowerShell c Metro Bundler `не закрываем`, но можно свернуть его в фоновый режим.
:::

## Запуск приложения

Для запуска Вашего проекта `React Native` открываем второе окно `PowerShell` и переходим в папку с Вашим проектом выполняя команды:

```bash
cd d:\MyProjects\MyReact
npx react-native run-android
```

:::info
Запустится Эмулятор или подключаем реальный смартфон с включенным режимом отладки по USB для просмотра результата.
:::

![react-native run-android](/img/rn/00/21.png)

На экране эмулятора или смартфона должен появится экран приветствия `React Native`.

![React Native](/img/rn/00/22.png)

![Step07](/img/steps/07.png)

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

![Hello World](/img/rn/00/23.png)

Вот так просто!

## Ссылки:

1. [React Native, официальная документация](https://reactnative.dev/docs/environment-setup)
2. [Установка Chocolatey, официальная документация](https://chocolatey.org/install)
3. [Android Studio, официальный сайт](https://developer.android.com/studio)
4. [Visual Studio Code, официальный сайт](https://code.visualstudio.com/download)
5. [Metro, официальная документация](https://facebook.github.io/metro/docs/concepts)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">  </a></td>
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars0.githubusercontent.com/u/72025062?s=400&v=4" width="200px;" alt=""/><br /><sub><b>Alexey Popovcev</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">🏫</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

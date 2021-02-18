---
id: typescript01
title: Установка TypeScript
sidebar_label: Установка
---

Для начала работы с TypeScript необходимо установить его инструментарий. Установить TypeScript можно через пакетный менеджер NPM.

## Установка Node.js

Для установки через NPM необходимо установить Node.js (если он ранее не был установлен). Если у вас Windows, то для дальнейших действий нужен установленный менеджер пакетов [Chocolatey](https://www.jscamp.app/ru/docs/start00/#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-chocolatey). С помощью него установим Node.js. Если у вас MacOS, то мы используем менеджер пакетов [Homebrew](https://www.jscamp.app/ru/docs/start00_2#homebrew).

Для начала процесса установки необходимо выполнить команду:

<Tabs
defaultValue="choco"
values={[ {label: 'Choco', value: 'choco'}, {label: 'Homebrew', value: 'brew'}]}>

<TabItem value="choco">

```bash
choco install -y nodejs.install
```

Послу завершения установки PowerShell выдаст такой результат:
![install_success](/img/typescript/01/install.png)
</TabItem>

<TabItem value="brew">

```bash
brew install node
```

</TabItem>
</Tabs>

## Установка TypeScript

Чтобы установить TypeScript необходимо выполнить в Powershell комманду:

```bash npm2yarn
npm install -g typescript
```

Вполне возможно, что ранее уже был установлен TS. В этом случае его можно обновить до последней версии с помощью команды

```bash
npm update -g typescript
```

Для проверки версии TypeScript необходимо ввести команду

```bash
tsc -v
```

![tsversion](/img/typescript/01/version.png)

## Инициализация TypeScript в проекте

Все что остается сделать так это подключить TypeScript к своему проекту. Для этого нужно создать файл с расширением `.ts` в папке с проектом, написать код и скомпилировать его.

Начнем с простого примера Hello World на Node.js. Создайте новую папку HelloWorld и запустите редактор кода.

### Создаем директорию `HelloWorld`

<Tabs
defaultValue="shell"
values={[ {label: 'PowerShell', value: 'shell'}, {label: 'Bash', value: 'bash'}]}>

<TabItem value="shell">

```bash
New-Item -ItemType "HelloWorld" -Path "c:\"
cd \HelloWorld
```

</TabItem>

<TabItem value="bash">

```bash
mkdir HelloWorld
cd HelloWorld
```

</TabItem>
</Tabs>

### Создаем файл `hello.ts`

<Tabs
defaultValue="shell"
values={[ {label: 'PowerShell', value: 'shell'}, {label: 'Bash', value: 'bash'}]}>

<TabItem value="shell">

```bash
New-Item -Name "hello.ts"
```

</TabItem>

<TabItem value="bash">

```bash
touch hello.ts
```

</TabItem>
</Tabs>

### `HelloWorld` код

В файл `hello.ts` вставляем следующий код:

```ts title="HelloWorld/hello.ts"
let message: string = 'Hello World'
console.log(message)
```

Здесь мы создаем переменную `message` и объявляем тип `string`.

### Компиляция кода

Чтобы скомпилировать код TypeScript в JavaScript, вы можете открыть интегрированный терминал и ввести `tsc hello.ts`. Это скомпилирует и создаст новый файл JavaScript `helloworld.js`.

:::note Примечание
Сперва необходимо переместиться в папку с проектом. Иначе файл не будет найден. В командной строке перемещение по папкам происходит при помощи команды `cd`.
:::

```bash
tsc hello.ts
```

Компилятор создаст файл с расширением `.js`.

Проверяем компиляцию:

```bash npm2yarn
node hello.js
```

:::note Примечание
После каждого изменения необходимо производить компиляцию или же воспользоваться инструментом [Nodemon](https://www.npmjs.com/package/nodemon)
:::

В результате мы видем строку `Hello World`.

## Ссылки:

1.  [TypeScript.org](https://www.typescriptlang.org/#installation)
2.  [Metanit](https://metanit.com/web/typescript/1.2.php)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

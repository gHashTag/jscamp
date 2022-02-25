---
id: typescript01
title: Установка TypeScript
sidebar_label: Установка
---

Для начала работы с TypeScript необходимо установить его инструментарий. Установить TypeScript можно через пакетный менеджер NPM.

## Установка Node.js

Для установки через NPM необходимо установить Node.js (если он ранее не был установлен). Для дальнейших действий нужен установленный менеджер пакетов [Chocolatey](https://jscamp.app/docs/start00#установка-chocolatey). С помощью него установим NPM.
Для начала процесса установки необходимо выполнить в Powershell комманду:

```bash
choco install -y nodejs.install
```

## Установка TypeScript

Чтобы установить TypeScript необходимо выполнить в Powershell комманду:

```bash
npm install -g typescript
```

Послу завершения установки PowerShell выдаст такой результат:
![install_success](/img/typescript/01/install.png)

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
Это можно сделать в PowerShell командой:

```bash
tsc
```

Например:

```bash
tsc app.ts
```

:::note Примечание
Сперва необходимо переместиться в папку с проектом. Иначе файл не будет найден. В командной строке перемещение по папкам происходит при помощи команды `cd`.
:::
Компилятор создаст файл с расширением `.js`. После каждого изменения необходимо производить компиляцию.

Вот так просто работать с TypeScript.

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

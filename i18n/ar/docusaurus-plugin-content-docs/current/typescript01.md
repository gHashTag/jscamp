---
id: typescript01
title: Installation TypeScript
sidebar_label: Installation
---

To get started with TypeScript, you need to install its toolkit. You can install TypeScript through the NPM package manager.

## Installing Node.js

To install via NPM, you need to have Node.js installed (if not already installed). For further actions, you need an installed package manager [Chocolatey](https://jscamp.app/docs/start00#установка-chocolatey). Install NPM with it.
To start the installation process, you need to run the command in Powershell:

```bash
choco install -y nodejs.install
```

## Installing TypeScript

To install TypeScript you need to execute the command in Powershell:

```bash
npm install -g typescript
```

After the installation is complete, PowerShell will give you this output:
![install_success](/img/typescript/01/install.png)

It is possible that TS has already been installed previously. In this case, it can be updated to the latest version using the command

```bash
npm update -g typescript
```

To check the TypeScript version, enter the command

```bash
tsc -v
```

![tsversion](/img/typescript/01/version.png)

## Initializing TypeScript in a project

All that remains to be done is to connect TypeScript to your project. To do this, you need to create a file with the extension `.ts` in the project folder, write the code and compile it.
This can be done in PowerShell with the command:

```bash
tsc
```

For example:

```bash
tsc app.ts
```

:::note Note
First you need to move to the project folder. Otherwise, the file will not be found. On the command line, moving through folders is done with the command `cd`.
:::
The compiler will create a file with the extension `.js`. Compilation is required after each change.

It's that easy to work with TypeScript.

## Links:

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

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

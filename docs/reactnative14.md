---
id: reactnative14
title: Setting up a working environment on Windows 10
sidebar_label: Windows 10 setup
---

import YouTube from 'react-youtube'

This article will help you set up a React Native working environment on the Windows 10 operating system.
::: note
At all stages of installation, the user must have Administrator rights and be connected to the Internet.
:::
The instructions depend on your operating system and on which mobile OS (Android or iOS) you decide to develop the application. This article is focused on Windows development OS, Android Studio development environment and Android mobile OS.

![Step00](/img/steps/00.png)

## Installing Chocolatey

[Chocolatey](https://chocolatey.org/install) — package manager in Windows, similar to apt-get in Linux, which allows you to install Node, Python2, etc. The Chocolatey package manager is installed via the `PowerShell` console shell. To launch `PowerShell` on the Start button, call the context menu (by pressing the right mouse button) and select the item` Windows PowerShell (administrator) `.

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

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

:::info Alternative option
Next to the `Start` menu, the` Search` button -> enter `PowerShell` and select` Run as administrator` through the context menu.
:::
This will open `PowerShell` in console mode. To check the possibility of running scripts from third-party manufacturers, enter the command:

```bash
Get-ExecutionPolicy
```

![Chocolatey](/img/rn/00/01.png)

By default, the use of third-party scripts is Restricted. Let's enable the execution of third-party scripts with the command:

```bash
 Set-ExecutionPolicy Bypass -Scope Process
```

Execution of the command will require confirmation, we answer with the symbol Y (Yes).

![``PowerShell``](/img/rn/00/02.png)

Let's check the unlocking of running scripts from the console with the previous command:

```bash
Get-ExecutionPolicy
```

If successful, the response will be `Bypass`.

![Bypass](/img/rn/00/03.png)

Now you can use third party scripts. Install the package manager `Chocolatey` with the following command:
```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

After the download of `Chocolatey` has finished, you can check that the package is installed correctly. Enter the command into `PowerShell`:

```bash
choco
```

or more precisely

```bash
choco -v
```

![choco](/img/rn/00/04.png)

At the time of this writing, version `Chocolatey v0.10.15`.

![Step01](/img/steps/01.png)

## Installing Node, Python2, JDK packages

Let's start installing Node, Python2 and JDK packages via PowerShell with the command:

```bash
choco install -y nodejs.install python2 openjdk8
```

:::info Note
`choco` - manager

`Install` - package installation key

`-y` - switch (yes) to automatically install packages

`nodejs.install, python2, openjdk8` - the name of the installed packages.
:::

![choco](/img/rn/00/05.png)

The download and installation of the packages will begin. After installing each package, there will be a corresponding message stating that it was installed successfully.

![Step02](/img/steps/02.png)

## Installing Android Studio

The version of `Android Studio` at the time of this writing is` 4.0.1`.
Download and install [Android Studio](https://developer.android.com/studio).
During installation, make sure the items are selected:

- Android SDK
- Android SDK Platform
- Android Virtual Device

We recommend using the standard installation paths.

::: danger Attention
Installation requires about 40 GB of free space on the C: drive. You can install the package on the D: drive, but then you need to change the user's environment variables.
:::
Then click the Next button to install all these components.

## Installing the Android SDK

`Android Studio` by default suggests installing the latest stable version of the` Android SDK` to create a `React Native` application using native code (at the time of this writing, the recommended version of Android SDK Platform is 29.0.2).

In the initial `Android Studio` window, open the` Configure` section at the bottom right.

![Android Studio](/img/rn/00/06.png)

Choose an item `SDK Manager`.

![Android Studio](/img/rn/00/07.png)

In the Android SDK subsection of the SDK Platforms tab in the lower right corner, check the Show Package Details checkbox. Find and expand the list for `Android 10 (Q)`, and make sure the following items are checked:

- `Android SDK Platform 29`
- `Intel x86 Atom_64 System Image` и/или `Google APIs Intel x86 Atom System Image`

Then select the `SDK Tools` tab and also check the box next to `Show Package Details`.

![SDK Manager](/img/rn/00/08.png)

Find and expand the entry for `Android SDK Build-Tools`, make sure the version is` 29.0.2`.

![SDK Manager](/img/rn/00/09.png)

Finally, click on Apply to download and install the Android SDK and related build tools.

![Step03](/img/steps/03.png)

## Setting environment variables

The `React Native` tools require setting some environment variables in order to create applications using native code.
Open `Windows Control Panel`.

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

Click on `User Accounts`, then click on` User Accounts` again.

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

Click on `Change my environment variables`.

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

Click the New ... button to add a new user variable, ANDROID_HOME, indicating the path to your Android SDK.
Then press the button `Browse directory ...` and select the installation directory `Android SDK`, by default it is`% LOCALAPPDATA% \ Android \ Sdk`.
::: info Note
The path to the `Android SDK` can be found in the settings item` SDK Manager`.
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

Click `OK`.

In the same place, add the paths to the platform tools to the variable `Path`.

1. Select the variable `Path`.
2. Click the `Change ...` button.
3. Click the New button and add the path to the installed platform tools to the list. The default location for this folder
`%LOCALAPPDATA%\Android\Sdk\platform-tools`.

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

We check the change in the parameters of the environments in `PowerShell` with the command:

```bash
Get-ChildItem -Path Env:\
```

:::info Note
If the paths have not been updated, you need to restart the computer and check again.
:::

![Step04](/img/steps/04.png)

## Setting up the emulator

In order to create or configure the emulator, while on the main window of `Android Studio`, select the item `Configure` -> `AVD Manager`.

![AVD Manager](/img/rn/00/14.png)

Then press the button `Create Virtual Device...`,

![AVD Manager](/img/rn/00/15.png)

select the model of the emulated smartphone (for example, Pixel 2) and press the button `Next`.

![Pixel2](/img/rn/00/16.png)

In the window that opens, in the Release Name column, select `Q Download` (Download is a link to download the selected emulator image), download and installation will start automatically.
At the time of creating the instructions, the recommended `API Level 29`, check the current version during installation.

![Q Downloader](/img/rn/00/17.png)

Then click the button `Next`->` Finish`.
You can check the operation of the emulator by clicking on the green button in the shape of a triangle, an interface in the form of a smartphone should appear.

![Next](/img/rn/00/18.png)

:::note Connecting a real Android device

If you have problems with the emulator, don't despair, you can use a real smartphone.
To do this, you need to become a developer in your smartphone. To do this, go to the smartphone settings and select the item `About the device` Next, you need to find the item` Version ... `and press 5-7 until the inscription" You have become a developer "appears.
We connect the smartphone via a USB cable and, depending on the firmware, turn on the USB debugging mode. For each firmware, the activation algorithm is different from each other. [More](https://reactnative.dev/docs/running-on-device).
:::
![Step05](/img/steps/05.png)

## Creating a React Native Project

`React Native` has a built-in command line interface that you can use to create a new project. You can access it with the `npx` command that ships with` Node.js`.

Let's create a new `React Native` project called` MyProject`.

To create a project on `React Native`, you need to run` PowerShell` as administrator, then in it using the `cd` command go to the folder with your future project (for example:` cd D: \ MyProjects`).
Next, enter the command:

```bash
npx react-native init MyReact
```

![react-native init](/img/rn/00/19.png)

![Step06](/img/steps/06.png)

## Launching React Native

First, you need to run Metro Bundler, the JavaScript builder that comes with React Native. `Metro`" takes an input file and various parameters and returns a single `JavaScript` file that includes all your code and its dependencies.". - [Metro Docs](https://facebook.github.io/metro/docs/concepts).

To start Metro Bundler, run the npx react-native start command in PowerShell in the folder with your created project (for example: `cd D:\MyProjects\MyReact`) :

```bash
cd d:\MyProjects\MyReact
npx react-native start
```

![react-native start](/img/rn/00/20.png)

This command will run the Metro Bundler and compile the project.
::: danger Attention
In the future, do not close the first PowerShell window with Metro Bundler, but you can minimize it to the background.
:::

## Launch application

To start your `React Native` project, open the second` PowerShell` window and go to the folder with your project by executing the commands:

```bash
cd d:\MyProjects\MyReact
npx react-native run-android
```

:::info
The Emulator will start or we connect a real smartphone with USB debugging enabled to view the result.
:::

![react-native run-android](/img/rn/00/21.png)

A welcome screen should appear on the emulator or smartphone screen `React Native`.

![React Native](/img/rn/00/22.png)

![Step07](/img/steps/07.png)

## Editing Code in an Application - Hello World

To edit the code, open the project folder with any code editor (we recommend [Visual Studio Code](https://code.visualstudio.com/download)). We start editing with the file `App.js`. When changing and saving the code, `Ctrl + S`, the interface of our application is automatically updated on the emulator screen.

Paste the following code into the `App.js` file and click `Ctrl + S`:

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

On a screen with a light background, an inscription appears in the top center «Hello World».

![Hello World](/img/rn/00/23.png)

It's that simple!

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

![JS Camp](/img/app.jpg)

## Links:

1. [React Native, official documentation](https://reactnative.dev/docs/environment-setup)
2. [Установка Chocolatey, official documentation](https://chocolatey.org/install)
3. [Android Studio, official site](https://developer.android.com/studio)
4. [Visual Studio Code, official site](https://code.visualstudio.com/download)
5. [Metro, official documentation](https://facebook.github.io/metro/docs/concepts)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars0.githubusercontent.com/u/72025062?s=400&v=4" width="200px;" alt=""/><br /><sub><b>Alexey Popovcev</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">🧑‍🏫</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)
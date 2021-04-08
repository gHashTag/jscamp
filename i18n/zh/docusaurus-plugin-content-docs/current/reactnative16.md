---
id: reactnative16
title: Setting up a working environment on Linux
sidebar_label: Linux setup
---

import YouTube from 'react-youtube'

This article will help you to configure the working environment `React Native` on the operating system` Linux` for the mobile operating system `Android`. This article will use the popular `Ubuntu` distribution.

![Step00](/img/steps/00.png)

## Installing Node.js, OpenJDK packages

Let's start installing the `Node.js` package via the terminal.
To start the installation, you need to install `Curl` for this, paste the following command into the terminal:

```bash
sudo apt install curl
```

And then, after the download is complete, paste the following command:

```bash
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

Now you can install `Node.js` with the command:

```bash
sudo apt-get install -y nodejs
```

Thus, you will install `Node.js`, the current installation instructions can be found on the [official site Node.js](https://nodejs.org/en/download/package-manager/).

To install `OpenJDK`, paste the following command into your terminal:

```bash
sudo apt install openjdk-11-jdk openjdk-11-jdk-headless
```

You can check the correct installation of `OpenJDK` by pasting the command in the terminal:

```bash
java -version
```

![Java_version](/img/rn/00_3/01.png)

![Step01](/img/steps/01.png)

## Installation Android Studio

Now you need to install `Android Studio`. On `Ubuntu` it can be installed using the` Snap Store`. To do this, in the `Snap Store` search, enter` Android Studio`.

![AndroidStudio01](/img/rn/00_3/02.png)

Select it and click the button `Install`.

![AndroidStudio02](/img/rn/00_3/03.png)

After the download finishes, launch `Android Stuido` and follow the installation instructions. It is recommended to leave all the default settings.

![AndroidStudio03](/img/rn/00_3/06.png)

When `Android Studio` finishes installing it will start automatically.

![AndroidStudio04](/img/rn/00_3/09.png)

![Step02](/img/steps/02.png)

## Installing the Android SDK

To get started with `Android` OS, you need to install certain` Android SDK` components.
To install them, open `Android Studio` and click on the bottom right button` Configure`-> `SDK Manager`. If not, restart the application.

![AndroidStudioSDK01](/img/rn/00_3/10.png)

In the opened `SDK Manager` in the lower right corner, check the box `Show Package Details`.

![AndroidStudioSDK02](/img/rn/00_3/11.png)

Find and expand the list for `Android 10 (Q)`, and make sure the following items are checked:

- `Android SDK Platform 29`
- `Intel x86 Atom_64 System Image` и/или `Google APIs Intel x86 Atom System Image`

![AndroidStudioSDK03](/img/rn/00_3/12.png)

Then select the `SDK Tools` tab and also check the box next to `Show Package Details`.

Find and expand the entry for `Android SDK Build-Tools`, make sure the version is` 29.0.2`.

![AndroidStudioSDK04](/img/rn/00_3/13.png)

Click on `Apply` to download and install the` Android SDK` and related build tools.

Accept the license agreement during installation.

![AndroidStudioSDK05](/img/rn/00_3/14.png)

![AndroidStudioSDK06](/img/rn/00_3/15.png)

![Step03](/img/steps/03.png)

## Setting the ANDROID_HOME environment variable

To set the variable `ANDROID_HOME` go to the folder` Home`

![AndroidHome01](/img/rn/00_3/16.png)

and enable the display of hidden files.

![AndroidHome02](/img/rn/00_3/17.png)

The `Home` folder will look something like this:

![AndroidHome03](/img/rn/00_3/18.png)

Next, you need to open the file `.bashrc`

![AndroidHome04](/img/rn/00_3/19.png)

and add the following lines to it:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

![AndroidHome05](/img/rn/00_3/20.png)

Then enter the following command into the terminal:

```bash
source $HOME/.bashrc
```

This will add the `ANDROID_HOME` variable. You can verify that the installation is correct by entering the commands:

```bash
echo $ANDROID_HOME
```

и

```bash
echo $PATH
```

![AndroidHome06](/img/rn/00_3/21.png)

![Step04](/img/steps/04.png)

## Setting up the Android emulator

In order to create or configure the emulator, while on the main window of `Android Studio`, select the item` Configure` -> `AVD Manager`.

Then press the button `Create Virtual Device...`,

![Emulator01](/img/rn/00_3/Emulator01.png)

select the model of the emulated smartphone (for example, Pixel 2) and press the button `Next`.

![Emulator02](/img/rn/00_3/Emulator02.png)

In the window that opens, in the Release Name column, select `Q Download` (Download is a link to download the selected emulator image), download and installation will start automatically.
At the time of creating the instructions, the recommended `API Level 29`, check the current version during installation.

![Emulator03](/img/rn/00_3/Emulator03.png)

Then press the button `Next`->`Finish`.

![Emulator04](/img/rn/00_3/Emulator04.png)

You can check the operation of the emulator by clicking on the green button in the shape of a triangle, an interface in the form of a smartphone should appear.

![Emulator05](/img/rn/00_3/Emulator05.png)

:::note Connecting a real Android device

If you have problems with the emulator, you can use a real smartphone.
To do this, you need to become a developer in your smartphone. To do this, go to the smartphone settings and select the item `About the device` Next, you need to find the item` Version ... `and press 5-7 until the inscription" You have become a developer "appears.
We connect the smartphone via a USB cable and, depending on the firmware, turn on the USB debugging mode. For each firmware, the activation algorithm is different from each other. [More](https://reactnative.dev/docs/running-on-device).
:::

![Step05](/img/steps/05.png)

## Installing Watchman

`Watchman` is a tool from` Facebook` for watching changes in the file system. Its installation is optional, but many problems can arise without it.
Installing `Watchman` requires installing` Homebrew`. To do this, paste the following command into the terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

It is recommended to install `Homebrew` in the` home` folder, to do this, enter the password for your account and press the button `Enter`.

![Watchman01](/img/rn/00_3/22.png)

Next, the terminal will ask for confirmation, press `Enter`.

![Watchman02](/img/rn/00_3/23.png)

After the installation is complete, you need to do the following:

Run the command in the terminal:

```bash
sudo apt-get install build-essential
```

Then, one by one, execute the following commands:

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

`Homebrew` ready for work!

Now you can install `Watchman`. To do this, you need to insert the command into the terminal:

```bash
brew install watchman
```

After the download is complete, `Watchman` will be ready to go!

![Step06](/img/steps/06.png)

## Creating a React Native Project

`React Native` has a built-in command line interface that you can use to create a new project. You can access it with the `npx` command that ships with` Node.js`.

Let's create a new `React Native` project called` MyProject`.

To create a project in `React Native`, you need to start the terminal and enter the command:

```bash
npx react-native init MyProject
```

Initialization of the project on `React Native`.

![React01](/img/rn/00_3/24.png)

![Step07](/img/steps/07.png)

## Launching a React Native Project

First you need to run Metro Bundler, the JavaScript builder that comes with React Native. Metro takes an input file and various parameters and returns a single JavaScript file that includes all your code and its dependencies. - [Metro Docs](https://facebook.github.io/metro/docs/concepts).

To start `Metro Bundler`, run the command in the terminal` npx react-native start` in the folder with your created project (for example: `cd MyReact`):

```bash
cd MyReact
npx react-native start
```

![React02](/img/rn/00_3/26.png)

This command will run the Metro Bundler and compile the project.
::: danger Attention
In the future, do not close the first terminal window with Metro Bundler.
:::

To start your project `React Native`, open the second terminal and go to the folder with your project by executing the commands:

```bash
cd MyReact
npx react-native run-android
```

:::info
Your application will run on an Android emulator or on a connected smartphone with USB debugging enabled.
:::

The `React Native` welcome screen should appear on the emulator or smartphone screen.

![React03](/img/rn/00_3/27.png)

![Step08](/img/steps/08.png)

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

![HelloWorld](/img/rn/00_3/28.png)

It's that simple!

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Links:

1. [React Native, official documentation](https://reactnative.dev/docs/environment-setup)
2. [Node.js, official documentation](https://nodejs.org/)
3. [Homebrew, official documentation](https://brew.sh/)
4. [Android Studio, official documentation](https://developer.android.com/studio)
5. [Visual Studio Code, official documentation](https://code.visualstudio.com/download)
6. [Metro, official documentation](https://facebook.github.io/metro/docs/concepts)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
<tr>
<td align="center"><a href="https://github.com/FELiX-RN"><img src="https://avatars0.githubusercontent.com/u/72006627?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Philipp Dvinyaninov</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=FELiX-RN" title="Documentation">📖</a></td>
<td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
<td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">🧑‍🏫</a></td>
</tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

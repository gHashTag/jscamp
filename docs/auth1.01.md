---
id: auth1-01
title: Authentication
sidebar_label: Part I
---

In this part, we will configure the AWS Amplify Authentication UI component, and in the next we will create it from scratch.

All the code for this part can be found at [GitHub](https://github.com/react-native-village/messaga/tree/Part1).

[![AWS Amplify](/img/auth/00.gif)](https://youtu.be/9uOGS7Pw1fo)

![Cognito](/img/auth/auth1-03.png)

![Step01](/img/steps/01.png)

## Create a new project ⚛️

```bash
react-native init auth
```

Launching the project 🚀

iOS

```bash
cd auth && react-native run-ios
```

Android

```bash
cd auth && react-native run-android
```

![Step02](/img/steps/02.png)

## Connecting icons 👾

Since the icons are used by the AWS Amplify framework, so we connect them according to [this](https://github.com/oblador/react-native-vector-icons#installation) instructions 📃.
Checking for errors.

Add to App.js

```jsx
import Icon from 'react-native-vector-icons/FontAwesome5'

const App = () => {
  return (
    <>
      <Icon name="comments" size={30} color="#900" />
    </>
  )
}
```

![Step03](/img/steps/03.png)

## Registering your AWS account

We register according to [this](https://aws-amplify.github.io/docs/) instructions 📃 and check all 5 steps using the video tutorial.

::: caution You need a bank card 💳 where there must be more than 1 \ $ 💵

:::

We look there and set Amplify Command Line Interface (CLI)

![Step04](/img/steps/04.png)

## Initializing AWS Amplify into a React Native Project

In the root directory of the React Native project, we initialize our AWS Amplify project

```bash
amplify init
```

We answer the questions:

![amplify init](/img/auth/auth02.png)

The project was initialized 🚀

![Step05](/img/steps/05.png)

## Connecting the authentication plugin

Now that the application is in the cloud, you can add some functionality, such as allowing users to register with our application and sign in.

Team

```bash
amplify add auth
```

we connect the authentication function. We select the default configuration. This adds auth resource configurations locally to your ampify / backend / auth directory

#### Select the profile we want to use. default. Enter and how users will log in. Email (Money is charged for SMS).

![amplify init](/img/auth/auth03.png)

Submitting changes to the cloud 💭

```bash
amplify push
```

✔ All resources are updated in the cloud

![Step06](/img/steps/06.png)

## Connecting AWS Amplify to a React Native project ⚛️

Details in [this](https://aws-amplify.github.io/docs/js/react) instructions 📃, but briefly and in a straight line like this:

```bash
yarn add aws-amplify @aws-amplify/core aws-amplify-react-native amazon-cognito-identity-js @react-native-community/netinfo
```

After installation, be sure to go to the ios folder and put the pods

```bash
cd ios && pod install && cd ..
```

![Step07](/img/steps/07.png)

## Editing the project structure

Create the / src directory and move the App.js file there, renaming it to index.js

Fix the import in /auth/index.js and hide future warnings.

```jsx
import { AppRegistry, YellowBox } from 'react-native'
import App from './src'
import { name as appName } from './app.json'

YellowBox.ignoreWarnings([
  'Warning: AsyncStorage',
  'Warning: componentWillReceiveProps',
  'RCTRootView cancelTouches',
  'not authenticated',
  'Sending `onAnimatedValueUpdate`'
])

//window.LOG_LEVEL = 'DEBUG'

AppRegistry.registerComponent(appName, () => App)
```

![Step08](/img/steps/08.png)

## Minimum project configuration and module Authenticator

Amplify.configure — project configuration

Authenticator — Module [AWS Amplify Authentication](https://aws-amplify.github.io/docs/js/authentication#using-components-in-react--react-native) provides authentication APIs and building blocks for developers who want to create user authentication capabilities.

```jsx
import React from 'react'
import { StatusBar } from 'react-native'
import Amplify from '@aws-amplify/core'
import { Authenticator } from 'aws-amplify-react-native'
import awsconfig from '../aws-exports'

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
})

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Authenticator usernameAttributes="email" />
    </>
  )
}

export default App
```

We launch the simulator, where we are greeted by the authentication UI component:

![Cognito](/img/auth/auth04.png)

![Step09](/img/steps/09.png)

## Editing inputs in App.js

To do this, add signUpConfig

```jsx
const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
  ],
}


<Authenticator
   usernameAttributes="email"
   signUpConfig={signUpConfig}
/>
```

![Step10](/img/steps/10.png)

## Меняем тему UI 🖌

Create an export point for our future components /src/components/index.js with content

```jsx
export * from './AmplifyTheme'
```

and accordingly create the file /src/components/AmplifyTheme/index.js of the theme with the content

```jsx
import { StyleSheet } from 'react-native'

export const deepSquidInk = '#152939'
export const linkUnderlayColor = '#FFF'
export const errorIconColor = '#30d0fe'

const AmplifyTheme = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    width: '100%',
    backgroundColor: '#FFF'
  },
  section: {
    flex: 1,
    width: '100%',
    padding: 30
  },
  sectionHeader: {
    width: '100%',
    marginBottom: 32
  },
  sectionHeaderText: {
    color: deepSquidInk,
    fontSize: 20,
    fontWeight: '500'
  },
  sectionFooter: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 20
  },
  sectionFooterLink: {
    fontSize: 14,
    color: '#30d0fe',
    alignItems: 'baseline',
    textAlign: 'center'
  },
  navBar: {
    marginTop: 35,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  navButton: {
    marginLeft: 12,
    borderRadius: 4
  },
  cell: {
    flex: 1,
    width: '50%'
  },
  errorRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  errorRowText: {
    marginLeft: 10
  },
  photo: {
    width: '100%'
  },
  album: {
    width: '100%'
  },
  button: {
    backgroundColor: '#30d0fe',
    alignItems: 'center',
    padding: 16
  },
  buttonDisabled: {
    backgroundColor: '#85E4FF',
    alignItems: 'center',
    padding: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600'
  },
  formField: {
    marginBottom: 22
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#C4C4C4'
  },
  inputLabel: {
    marginBottom: 8
  },
  phoneContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  phoneInput: {
    flex: 2,
    padding: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#C4C4C4'
  },
  picker: {
    flex: 1,
    height: 44
  },
  pickerItem: {
    height: 44
  }
})

export { AmplifyTheme }
```

And connect the theme to the component Authenticator src/index.js

```jsx
import { AmplifyTheme } from './components'
;<Authenticator usernameAttributes="email" signUpConfig={signUpConfig} theme={AmplifyTheme} />
```

![AmplifyTheme](/img/auth/auth05.png)

![Step11](/img/steps/11.png)

## We connect localization

In our case, the Russian language 🇷🇺

Add export to /src/components/index.js

```jsx
export * from './Localei18n'
```

Create the file /src/components/Localei18n/index.js with the content

```jsx
import { NativeModules, Platform } from 'react-native'
import { I18n } from '@aws-amplify/core'

let langRegionLocale = 'en_US'

// If we have an Android phone
if (Platform.OS === 'android') {
  langRegionLocale = NativeModules.I18nManager.localeIdentifier || ''
} else if (Platform.OS === 'ios') {
  langRegionLocale = NativeModules.SettingsManager.settings.AppleLocale || ''
}

const authScreenLabels = {
  en: {
    'Sign Up': 'Create new account',
    'Sign Up Account': 'Create a new account'
  },
  ru: {
    'Sign Up': 'Создать аккаунт',
    'Forgot Password': 'Забыли пароль?',
    'Sign In Account': 'Войдите в систему',
    'Enter your email': 'Введите email',
    'Enter your password': 'Введите пароль',
    Password: 'Пароль',
    'Sign In': 'Вход',
    'Please Sign In / Sign Up': 'Войти / Создать аккаунт',
    'Sign in to your account': 'Войдите в свой аккаунт',
    'Create a new account': 'Cоздайте свой аккаунт',
    'Confirm a Code': 'Подтвердите код',
    'Confirm Sign Up': 'Подтвердите регистрацию',
    'Resend code': 'Еще отправить код',
    'Back to Sign In': 'Вернуться к входу',
    Confirm: 'Подтвердить',
    'Confirmation Code': 'Код подтверждения',
    'Sign Out': 'Выход'
  }
}

// "en_US" -> "en", "es_CL" -> "es", etc
const languageLocale = langRegionLocale.substring(0, 2)
I18n.setLanguage(languageLocale)
I18n.putVocabularies(authScreenLabels)

const Localei18n = () => null

export { Localei18n }
```

И подключаем компонент Localei18n в src/index.js

```jsx
import {
   AmplifyTheme,
   Localei18n
} from './components'


<Localei18n />
<Authenticator
  usernameAttributes="email"
  signUpConfig={signUpConfig}
  theme={AmplifyTheme}
/>
```

We launch the project, where we see that the localization has not yet been applied. Therefore, we change the language in the settings of our simulator to Russian

![Localei18n](/img/auth/auth06.png)

## Done ✅

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

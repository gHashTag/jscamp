---
id: auth1-02
title: Аутентификация
sidebar_label: Часть II
---

Во-первых стандартный UI от Amplify далеко не всегда удовлетворяет UX приходящий со стороны заказчика

Во-вторых в [официальной документации](https://aws-amplify.github.io/docs/js/react#note-on-jwt-storage) Amplify написано:

> Data is stored unencrypted when using standard storage adapters (localStorage in the browser and AsyncStorage on React Native). Amplify gives you the option to use your own storage object to persist data. With this, you could write a thin wrapper around libraries like: react-native-keychain react-native-secure-storage Expo’s secure store

Это значит, что данные аутентификации хранятся в не зашифрованном виде, а это риск 🕷 информационной безопасности с возможными негативными последствиями 🕸, поэтому мы решим эти две задачи в этой части.

Весь код для этой части можно найти на [GitHub](https://github.com/react-native-village/aws-amplify-react-hooks/tree/master/examples/reactNativeCRUDv2).

[![AWS Amplify](/img/auth/00.gif)](https://youtu.be/CM_M5cNLmK4)

![Step01](/img/steps/01.png)

## Клонируем репозиторий

Мы будем использовать наш UI Kit, но вы можете легко заменить его своим или любым другим.

```bash
git clone https://github.com/fullstackserverless/auth.git
```

переходим в папку проекта

```bash
cd auth
```

Устанавливаем зависимости

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="yarn"
values={[
{label: 'Npm', value: 'npm'},
{label: 'Yarn', value: 'yarn'},
]}>
<TabItem value="npm">

```bash
npm install
```

</TabItem>
<TabItem value="yarn">

```bash
yarn
```

</TabItem>
</Tabs>

![Step02](/img/steps/02.png)

## Инициализация AWS Amplify в проекте React Native

Инициализируйте наш проект AWS Amplify в корневом каталоге.

```bash
amplify init
```

Ответь на эти вопросы:

![amplify init](/img/auth/auth02.png)

Проект успешно инициализирован 🚀

![Step03](/img/steps/03.png)

## Подключить плагин аутентификации

Теперь, когда приложение находится в облаке, вы можете добавить некоторые функции, такие как разрешение пользователям регистрироваться в нашем приложении и входить в систему.

Используйте команду:

```bash
amplify add auth
```

Подключите функцию аутентификации. Выберите конфигурацию по умолчанию. Это добавляет конфигурации ресурсов аутентификации локально в ваш каталог ampify/backend/auth

<div class="alert alert--info" role="alert">
  📌 Выберите профиль, который мы хотим использовать(default). Введите и как пользователи будут входить. Электронная почта (списать деньги за смс).
</div>

![amplify init](/img/auth/auth03.png)

Отправить изменения в облако 💭

```bash
amplify push
```

✔ All resources are updated in the cloud

![Step04](/img/steps/04.png)

## Подключите AWS Amplify к React Native

Подробности можно найти в [инструкции](https://aws-amplify.github.io/docs/js/react) 📃. Короче говоря, вы можете добавить эти зависимости ниже для подключения AWS Amplify:

```bash
yarn add aws-amplify @aws-amplify/core aws-amplify-react-native amazon-cognito-identity-js @react-native-community/netinfo
```

После установки обязательно заходим в папку ios и ставим поды

```bash
cd ios && pod install && cd ..
```

![Step05](/img/steps/05.png)

## Навигация

Установите react-navigation v5, основываясь этой инструкции [здесь](https://reactnavigation.org/docs/getting-started/)
(на момент написания статьи это последняя версия навигации)

```bash
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack
```

Добавить поды для iOS

```bash
cd ios && pod install && cd ..
```

<div class="alert alert--info" role="alert">
📌 Рекомендую запускать приложение для iOS и Android, после каждой установки, во избежание поиска библиотеки, из-за которой приложение вылетает.
</div>

![Step06](/img/steps/06.png)

## react-native-keychain

Добавьте `react-native-keychain` - это безопасная библиотека хранилища ключей для React Native.

```bash
yarn add react-native-keychain
```

Добавить поды для iOS

```bash
cd ios && pod install && cd ..
```

Согласно [официальной документации:](https://aws-amplify.github.io/docs/js/authentication#managing-security-tokens)

> При использовании аутентификации с помощью AWS Amplify вам не нужно обновлять токены Amazon Cognito вручную. При необходимости токены автоматически обновляются библиотекой. Маркеры безопасности, такие как IdToken или AccessToken, хранятся в localStorage для браузера и в AsyncStorage для React Native. Если вы хотите хранить эти токены в более безопасном месте или использовать Amplify на стороне сервера, вы можете предоставить свой собственный объект хранения для хранения этих токенов.

Изменяем файл:

```tsx title="src/index.tsx"
import React, { ReactElement } from 'react'
import Amplify from '@aws-amplify/core'
import * as Keychain from 'react-native-keychain'
import { useColorScheme } from 'react-native-appearance'
import ThemeProvider from './ThemeProvider'
import AppNavigator from './AppNavigator'
import awsconfig from '../aws-exports'

const DarkTheme = {
  dark: true,
  colors: {
    primary: '#50E3C2',
    background: '#1D1E1F',
    card: '#1D1E1F',
    text: '#ffffff',
    border: '#ff06f4'
  }
}

const LightTheme = {
  dark: false,
  colors: {
    primary: '#ff06f4',
    background: '#ffffff',
    card: '#1D1E1F',
    text: '#ffffff',
    border: '#ff06f4'
  }
}

const MEMORY_KEY_PREFIX = '@MyStorage:'
let dataMemory: any = {}
class MyStorage {
  static syncPromise = null

  static setItem(key: string, value: string): boolean {
    Keychain.setGenericPassword(MEMORY_KEY_PREFIX + key, value)
    dataMemory[key] = value
    return dataMemory[key]
  }

  static getItem(key: string): boolean {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined
  }

  static removeItem(key: string): boolean {
    Keychain.resetGenericPassword()
    return delete dataMemory[key]
  }

  static clear(): object {
    dataMemory = {}
    return dataMemory
  }
}

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: false
  },
  storage: MyStorage
})

const App = (): ReactElement => {
  /**
   * Subscribe to color scheme changes with a hook
   */
  const scheme = useColorScheme()
  return (
    <>
      <ThemeProvider theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <AppNavigator />
      </ThemeProvider>
    </>
  )
}

export default App
```

Для авторизации клиентов AppSync поддерживает ключи API, учетные данные Amazon IAM, пулы пользователей Amazon Cognito и сторонних поставщиков OIDC. Это выводится из файла aws-exports.js при вызове Amplify.configure().

При использовании аутентификации с AWS Amplify вам не нужно обновлять токены Amazon Cognito вручную. При необходимости токены автоматически обновляются библиотекой.
Токены безопасности, такие как IdToken или AccessToken, хранятся в localStorage для браузера и в AsyncStorage для React Native. Если вы хотите хранить эти токены в более безопасном месте или используете Amplify на стороне сервера, вы можете предоставить свой собственный объект хранения для хранения этих токенов.

![Step07](/img/steps/07.png)

## AppNavigator

Создайте файл конфигурации навигации для нашей пользовательской аутентификации.
Добавьте к нему экран приветствия.

```tsx title="src/AppNavigator.tsx"
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Hello } from './screens/Authenticator'

const Stack = createStackNavigator()

export type RootStackParamList = {
  HELLO: undefined
}

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="HELLO"
    >
      <Stack.Screen name="HELLO" component={Hello} />
    </Stack.Navigator>
  )
}

export default AppNavigator
```

![Step08](/img/steps/08.png)

## Hello screen

Создайте точку входа для наших экранов аутентификации.

![Hello screen](/img/auth/auth1-04.png)

Подключим экран приветствия:

```ts title="src/screens/Authenticator/index.ts"
export * from './Hello'
```

Создаем сам экран приветствия:

```tsx title="src/screens/Authenticator/Hello/index.tsx"
import React, { useEffect, useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppContainer, Button, Space, Txt } from '../../../components'
import { onScreen } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HELLO'>

type HelloT = {
  navigation: ProfileScreenNavigationProp
}

const Hello = ({ navigation }: HelloT): ReactElement => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const key = async (): Promise<void> => {
      try {
        const credentials = await Keychain.getInternetCredentials('auth')

        if (credentials) {
          const { username, password } = credentials
          const user = await Auth.signIn(username, password)
          setLoading(false)
          user && onScreen('USER', navigation)()
        } else {
          setLoading(false)
        }
      } catch (err) {
        console.log('error', err) // eslint-disable-line
        setLoading(false)
      }
    }
    key()
  }, []) // eslint-disable-line
  return (
    <AppContainer loading={loading}>
      <Space height={80} />
      <Button title="Sign In" onPress={onScreen('SIGN_IN', navigation)} />
      <Space height={10} />
      <Txt h6 title="or" textStyle={{ alignSelf: 'center' }} />
      <Space height={15} />
      <Button title="Sign Up" onPress={onScreen('SIGN_UP', navigation)} />
    </AppContainer>
  )
}

export { Hello }
```

В хуке `useEffect` мы проверяем токен пользователя, где в случае истины мы переходим на экран пользователя, а в случае ложного - остаемся на этом экране.

Соберите все изменения и встретите экран приветствия.

![Step09](/img/steps/09.png)

## SignUp screen

Мы создаем экран регистрации `SIGN_UP`, где для аутентификации мы используем метод [Auth.signUp](https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js#sign-up).

![SignUp](/img/auth/auth1-05.png)

```tsx title="src/screen/Authenticator/SignUp/index.tsx"
import React, { useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppContainer, Space, Button, Input, TextError } from '../../../components'
import { onScreen, goBack } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SIGN_UP'>

type SignUpT = {
  navigation: ProfileScreenNavigationProp
}

const SignUp = ({ navigation }: SignUpT): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values: { email: string; password: string; passwordConfirmation: string }): Promise<void> => {
    const { email, password, passwordConfirmation } = values
    if (password !== passwordConfirmation) {
      setError('Passwords do not match!')
    } else {
      setLoading(true)
      setError('')
      try {
        const user = await Auth.signUp(email, password)
        await Keychain.setInternetCredentials('auth', email, password)
        user && onScreen('CONFIRM_SIGN_UP', navigation, { email, password })()
        setLoading(false)
      } catch (err) {
        setLoading(false)
        if (err.code === 'UserNotConfirmedException') {
          setError('Account not verified yet')
        } else if (err.code === 'PasswordResetRequiredException') {
          setError('Existing user found. Please reset your password')
        } else if (err.code === 'NotAuthorizedException') {
          setError('Forgot Password?')
        } else if (err.code === 'UserNotFoundException') {
          setError('User does not exist!')
        } else {
          setError(err.code)
        }
      }
    }
  }

  return (
    <>
      <AppContainer onPress={goBack(navigation)} title="Sign Up" loading={loading}>
        <Formik
          initialValues={{ email: '', password: '', passwordConfirmation: '' }}
          onSubmit={(values): Promise<void> => _onPress(values)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
            passwordConfirmation: Yup.string().min(6).required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }): ReactElement => (
            <>
              <Input
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={(): void => setFieldTouched('email')}
                placeholder="E-mail"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
              />
              <Input
                name="password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={(): void => setFieldTouched('password')}
                placeholder="Password"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
                secureTextEntry
              />
              <Input
                name="passwordConfirmation"
                value={values.passwordConfirmation}
                onChangeText={handleChange('passwordConfirmation')}
                onBlur={(): void => setFieldTouched('passwordConfirmation')}
                placeholder="Password confirm"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
                secureTextEntry
              />
              <Space height={30} />
              {error !== '' && <TextError title={error} textStyle={{ alignSelf: 'center' }} />}
              <Button title="Sign Up" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { SignUp }
```

![Step10](/img/steps/10.png)

## Подтверждение регистрации ConfirmSignUp

После успешного ответа от сервера мы переходим на экран подтверждения и вводим код, который пришел на нашу почту. Для этого создайте экран `CONFIRM_SIGN_UP`

![ConfirmSignUp](/img/auth/auth1-06.png)

```jsx title="src/screens/Authenticator/ConfirmSignUp/index.tsx"
import React, { useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import { Formik } from 'formik'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import * as Yup from 'yup'
import { AppContainer, Button, Space, ButtonLink, TextError, Input } from '../../../components'
import { onScreen, goBack } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CONFIRM_SIGN_UP'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'CONFIRM_SIGN_UP'>

type ConfirmSignUpT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const ConfirmSignUp = ({ route, navigation }: ConfirmSignUpT): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values: { code: string }): Promise<void> => {
    setLoading(true)
    setError('')
    try {
      const { code } = values
      const { email, password } = route.params
      await Auth.confirmSignUp(email, code, { forceAliasCreation: true })
      const user = await Auth.signIn(email, password)
      user && onScreen('USER', navigation)()
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(err.message)
      if (err.code === 'UserNotConfirmedException') {
        setError('Account not verified yet')
      } else if (err.code === 'PasswordResetRequiredException') {
        setError('Existing user found. Please reset your password')
      } else if (err.code === 'NotAuthorizedException') {
        setError('Forgot Password?')
      } else if (err.code === 'UserNotFoundException') {
        setError('User does not exist!')
      }
    }
  }

  const _onResend = async (): Promise<void> => {
    try {
      const { email } = route.params
      await Auth.resendSignUp(email)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <AppContainer title="Confirmation" onPress={goBack(navigation)} loading={loading}>
        <Formik
          initialValues={{ code: '' }}
          onSubmit={(values): Promise<void> => _onPress(values)}
          validationSchema={Yup.object().shape({
            code: Yup.string().min(6).required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }): ReactElement => (
            <>
              <Space height={180} />
              <Input
                name="code"
                value={values.code}
                onChangeText={handleChange('code')}
                onBlur={(): void => setFieldTouched('code')}
                placeholder="Insert code"
                touched={touched}
                errors={errors}
              />
              <ButtonLink title="Resend code?" onPress={_onResend} textStyle={{ alignSelf: 'center' }} />
              {error !== 'Forgot Password?' && <TextError title={error} />}
              <Button title="Confirm" onPress={handleSubmit} />
              <Space height={50} />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { ConfirmSignUp }
```

## Отправить код повторно - ResendSignUp

Если код не пришел, мы должны предоставить пользователю возможность повторно отправить код.
Для этого мы помещаем Auth.resendSignUp (userInfo.email) на кнопку «Отправить код повторно».
В случае успешного вызова метода

```jsx
Auth.confirmSignUp(email, code, { forceAliasCreation: true })
```

мы должны вызвать метод

```jsx
Auth.signIn(email, password)
```

![Step11](/img/steps/11.png)

## Экран пользователя

После успешного завершения перейдите к экрану `USER`, который мы создаем с помощью кнопки выхода для приложения и очистки токенов.

![User screen](/img/auth/auth1-07.png)

```tsx title="src/screen/Authenticator/User/index.tsx"
import React, { useState, useEffect, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppContainer, Button } from '../../../components'
import { goHome } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HELLO'>

type UserT = {
  navigation: ProfileScreenNavigationProp
}

const User = ({ navigation }: UserT): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const checkUser = async (): Promise<void> => {
      await Auth.currentAuthenticatedUser()
    }
    checkUser()
  }, [navigation])

  const _onPress = async (): Promise<void> => {
    setLoading(true)
    try {
      await Auth.signOut()
      await Keychain.resetInternetCredentials('auth')
      goHome(navigation)()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <AppContainer message={error} loading={loading}>
      <Button title="Sign Out" onPress={_onPress} />
    </AppContainer>
  )
}

export { User }
```

![Step12](/img/steps/12.png)

## SignIn screen - экран входа

После того, как пользователь зарегистрирован, мы должны предоставить пользователю возможность входа в приложение через логин и пароль. Для этого создаем экран `SIGN_IN`.

![SignIn screen](/img/auth/auth1-08.png)

```tsx title="src/screen/Authenticator/SignIn/index.tsx"
import React, { useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { StackNavigationProp } from '@react-navigation/stack'
import { AppContainer, Button, Space, ButtonLink, TextError, Input } from '../../../components'
import { onScreen, goBack } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SIGN_IN'>

type SignUpT = {
  navigation: ProfileScreenNavigationProp
}

const SignIn = ({ navigation }: SignUpT): ReactElement => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values: { email: string; password: string }): Promise<void> => {
    setLoading(true)
    setError('')
    try {
      const { email, password } = values
      const user = await Auth.signIn(email, password)
      await Keychain.setInternetCredentials('auth', email, password)
      user && onScreen('USER', navigation)()
      setLoading(false)
    } catch ({ code }) {
      setLoading(false)
      if (code === 'UserNotConfirmedException') {
        setError('Account not verified yet')
      } else if (code === 'PasswordResetRequiredException') {
        setError('Existing user found. Please reset your password')
      } else if (code === 'NotAuthorizedException') {
        setUserInfo(values)
        setError('Forgot Password?')
      } else if (code === 'UserNotFoundException') {
        setError('User does not exist!')
      } else {
        setError(code)
      }
    }
  }

  return (
    <>
      <AppContainer onPress={goBack(navigation)} title="Sign In" loading={loading} message={error}>
        <Formik
          enableReinitialize
          initialValues={userInfo}
          onSubmit={(values): Promise<void> => _onPress(values)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }): ReactElement => (
            <>
              <Space height={90} />
              <Input
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={(): void => setFieldTouched('email')}
                placeholder="E-mail"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
              />
              <Input
                name="password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={(): void => setFieldTouched('password')}
                placeholder="Password"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
                secureTextEntry
              />
              {error !== 'Forgot Password?' && <TextError title={error} textStyle={{ alignSelf: 'center' }} />}
              {error === 'Forgot Password?' && (
                <ButtonLink
                  title={error}
                  onPress={onScreen('FORGOT', navigation, userInfo)}
                  textStyle={{ alignSelf: 'center' }}
                />
              )}
              <Button title="Sign In" onPress={handleSubmit} />
              <Space height={130} />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { SignIn }
```

![Step13](/img/steps/13.png)

## Forgot password screen - вспоминание пароля

В случае успеха мы отправляем пользователя на экран `USER`, что мы уже сделали, и если пользователь забыл или ввел пароль неправильно, мы показываем ошибку «Забыли пароль» и предлагаем сбросить пароль.

![Forgot password](/img/auth/auth1-09.png)

Для этого создаем экран `FORGOT`

![Forgot password](/img/auth/auth1-10.png)

```tsx title="src/screen/Authenticator/Forgot/index.tsx"
import React, { useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { AppContainer, Button, Input, Space } from '../../../components'
import { onScreen, goBack } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FORGOT'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'FORGOT'>

type ForgotT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const Forgot = ({ route, navigation }: ForgotT): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values: { email: string }): Promise<void> => {
    setLoading(true)
    try {
      const { email } = values
      const user = await Auth.forgotPassword(email)
      user && onScreen('FORGOT_PASSWORD_SUBMIT', navigation, values)()
      setLoading(false)
    } catch (err) {
      setError(error)
    }
  }

  return (
    <>
      <AppContainer title="Forgot" onPress={goBack(navigation)} loading={loading} message={error}>
        <Formik
          initialValues={{ email: route.params.email || '' }}
          onSubmit={(values): Promise<void> => _onPress(values)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }): ReactElement => (
            <>
              <Input
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={(): void => setFieldTouched('email')}
                placeholder="E-mail"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
              />
              <Space height={30} />
              <Button title="Confirm" onPress={handleSubmit} />
              <Space height={100} />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { Forgot }
```

![Step14](/img/steps/14.png)

## Forgot password submit

После подтверждения электронной почты мы вызываем метод `Auth.forgotPassword(email)` и, если такой пользователь есть, отправляем пользователя на экран `FORGOT_PASSWORD_SUBMIT`

![ForgotPassSubmit](/img/auth/auth1-11.png)

```tsx title="src/screen/Authenticator/ForgotPassSubmit/index.tsx"
import React, { useState, ReactElement } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { AppContainer, Button, Space, Input, TextError } from '../../../components'
import { onScreen, goBack } from '../../../constants'
import { RootStackParamList } from '../../../AppNavigator'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FORGOT_PASSWORD_SUBMIT'>
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'FORGOT_PASSWORD_SUBMIT'>

type ForgotPassSubmitT = {
  navigation: ProfileScreenNavigationProp
  route: ProfileScreenRouteProp
}

const ForgotPassSubmit = ({ route, navigation }: ForgotPassSubmitT): ReactElement => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values: { email: string; password: string; code: string }): Promise<void> => {
    setLoading(true)
    try {
      const { email, code, password } = values
      await Auth.forgotPasswordSubmit(email, code, password)
      await Keychain.setInternetCredentials('auth', email, password)
      await Auth.signIn(email, password)
      onScreen('USER', navigation)()
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(err.message)
    }
  }

  return (
    <>
      <AppContainer title="Confirmation" onPress={goBack(navigation)} loading={loading} message={error}>
        <Formik
          initialValues={{ email: route.params.email || '', code: '', password: '', passwordConfirmation: '' }}
          onSubmit={(values): Promise<void> => _onPress(values)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            code: Yup.string().min(6).required(),
            password: Yup.string().min(6).required(),
            passwordConfirmation: Yup.string().min(6).required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }): ReactElement => (
            <>
              <Input
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={(): void => setFieldTouched('email')}
                placeholder="E-mail"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
              />
              <Input
                name="code"
                value={values.code}
                onChangeText={handleChange('code')}
                onBlur={(): void => setFieldTouched('code')}
                placeholder="Code"
                touched={touched}
                errors={errors}
              />
              <Input
                name="password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={(): void => setFieldTouched('password')}
                placeholder="Password"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
                secureTextEntry
              />
              <Input
                name="passwordConfirmation"
                value={values.passwordConfirmation}
                onChangeText={handleChange('passwordConfirmation')}
                onBlur={(): void => setFieldTouched('passwordConfirmation')}
                placeholder="Password confirm"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
                secureTextEntry
              />
              {error !== '' && <TextError title={error} textStyle={{ alignSelf: 'center' }} />}
              <Space height={30} />
              <Button title="Confirm" onPress={handleSubmit} />
              <Space height={80} />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { ForgotPassSubmit }
```

где после ввода отправленного на почту кода нового пароля и его подтверждения вызываем метод смены пароля

```jsx
Auth.forgotPasswordSubmit(email, code, password)
```

успех которого отправляет пользователя на экран `USER`.

![Step15](/img/steps/15.png)

## Связывание экранов

Все созданные компоненты подключаем в

```ts title="src/screens/Authenticator/index.ts"
export * from './Hello'
export * from './User'
export * from './SignIn'
export * from './SignUp'
export * from './Forgot'
export * from './ForgotPassSubmit'
export * from './ConfirmSignUp'
```

![Step16](/img/steps/16.png)

## Обновляем AppNavigator

Обновление файла конфигурации навигации:

```jsx title="src/AppNavigator.tsx"
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Hello, SignUp, SignIn, ConfirmSignUp, User, Forgot, ForgotPassSubmit } from './screens/Authenticator'

const Stack = createStackNavigator()

export type RootStackParamList = {
  HELLO: undefined
  SIGN_UP: undefined
  SIGN_IN: undefined
  FORGOT: { email: string }
  FORGOT_PASSWORD_SUBMIT: { email: string }
  CONFIRM_SIGN_UP: { email: string; password: string }
  USER: undefined
}

const AppNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="HELLO"
    >
      <Stack.Screen name="HELLO" component={Hello} />
      <Stack.Screen name="SIGN_UP" component={SignUp} />
      <Stack.Screen name="SIGN_IN" component={SignIn} />
      <Stack.Screen name="FORGOT" component={Forgot} />
      <Stack.Screen name="FORGOT_PASSWORD_SUBMIT" component={ForgotPassSubmit} />
      <Stack.Screen name="CONFIRM_SIGN_UP" component={ConfirmSignUp} />
      <Stack.Screen name="USER" component={User} />
    </Stack.Navigator>
  )
}

export default AppNavigator
```

![Step17](/img/steps/17.png)

## Debug

Чтобы понять, что происходит с токенами в вашем приложении, добавьте в

```jsx title="root/index.js"
window.LOG_LEVEL = 'DEBUG'
```

Запускаем приложение и получаем кастомную аутентификацию.

## Done ✅

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

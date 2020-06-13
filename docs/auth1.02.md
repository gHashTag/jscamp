---
id: auth1-02
title: Аутентификация
sidebar_label: Часть II
---
Во-первых стандартный UI от Amplify далеко не всегда удовлетворяет UX приходящий со стороны заказчика

Во-вторых в [официальной документации](https://aws-amplify.github.io/docs/js/react#note-on-jwt-storage) Amplify написано:

> Data is stored unencrypted when using standard storage adapters (localStorage in the browser and AsyncStorage on React Native). Amplify gives you the option to use your own storage object to persist data. With this, you could write a thin wrapper around libraries like:
react-native-keychain
react-native-secure-storage
Expo’s secure store

Это значит, что данные аутентификации хранятся в не зашифрованном виде, а это риск 🕷 информационной безопасности с возможными негативными последствиями 🕸, поэтому мы решим эти две задачи в этой части.

Весь код для этой части можно найти на [GitHub](https://github.com/react-native-village/aws-amplify-react-hooks/tree/master/examples/reactNativeCRUDv2).

[![AWS Amplify](/img/auth/00.gif)](https://youtu.be/CM_M5cNLmK4)

![Step01](/img/steps/01.png)
## UI Kit
Мы будем использовать наш UI Kit, но вы можете легко заменить его своим или любым другим.

Подключаем библиотеку компонентов согласно [этой](https://react-native-village.github.io/docs/unicorn00) статьи.


![Step02](/img/steps/02.png)
## Навигация react-navigation
Ставим навигацию react-navigation 5, также как написано [здесь](https://reactnavigation.org/docs/getting-started/) (на момент написание этой статьи):

```bash
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack
```

Добавляем поды под iOS

```bash
cd ios && pod install && cd ..
```

📌 Рекомендую после каждой установки запускать приложение под iOS и Android, чтобы потом не искать библиотеку из-за которой приложение падает.


![Step03](/img/steps/03.png)
## react-native-keychain

Ставим библиотеку react-native-keychain - это безопасное хранилище ключей react-native-keychain для React Native.

```bash
yarn add react-native-keychain
```

Добавляем поды под iOS

```bash
cd ios && pod install && cd ..
```

Согласно тому, что нам говорит [официальная документация](https://aws-amplify.github.io/docs/js/authentication#managing-security-tokens):
> При использовании аутентификации с AWS Amplify вам не нужно обновлять токены Amazon Cognito вручную. Токены автоматически обновляются библиотекой при необходимости. Токены безопасности, такие как IdToken или AccessToken, хранятся в localStorage для браузера и в AsyncStorage для React Native. Если вы хотите хранить эти токены в более безопасном месте или используете Amplify на стороне сервера, вы можете предоставить свой собственный объект хранения для хранения этих токенов.

конфигурируем наш src/index.js

```jsx
import React from 'react'
import Amplify from '@aws-amplify/core'
import * as Keychain from 'react-native-keychain'
import { ThemeProvider, DarkTheme, LightTheme } from 'react-native-unicorn-uikit'
import { useColorScheme } from 'react-native-appearance'
import AppNavigator from './AppNavigator'
import awsconfig from '../aws-exports'

const MEMORY_KEY_PREFIX = '@MyStorage:'
let dataMemory = {}

class MyStorage {
  static syncPromise = null

  static setItem(key, value) {
    Keychain.setGenericPassword(MEMORY_KEY_PREFIX + key, value)
    dataMemory[key] = value
    return dataMemory[key]
  }

  static getItem(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined
  }

  static removeItem(key) {
    Keychain.resetGenericPassword()
    return delete dataMemory[key]
  }

  static clear() {
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

const App = () => {
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

![Step04](/img/steps/04.png)
##  Константы

Чтобы не копипастить одни и те же значения, мы создаем файл с константами для общего использования в компонентах src/constants.js

```jsx
import { Dimensions } from 'react-native'

export const BG = '#0B0B0B'
export const PINK = '#F20AF5'
export const PURPLE = '#7A1374'
export const BLUE = '#00FFFF'
export const GREEN = '#2E7767'
export const RED = '#FC2847'
export const LABEL_COLOR = BLUE
export const INPUT_COLOR = PINK
export const ERROR_COLOR = RED
export const HELP_COLOR = '#999999'
export const BORDER_COLOR = BLUE
export const DISABLED_COLOR = '#777777'
export const DISABLED_BACKGROUND_COLOR = '#eeeeee'

export const win = Dimensions.get('window')
export const W = win.width
export const H = win.height

export const Device = {
  // eslint-disable-next-line
  select(variants) {
    if (W >= 300 && W <= 314) return variants.mobile300 || {}
    if (W >= 315 && W <= 341) return variants.iphone5 || {}
    if (W >= 342 && W <= 359) return variants.mobile342 || {}
    if (W >= 360 && W <= 374) return variants.mi5 || {}
    if (W >= 375 && W <= 399) return variants.iphone678 || {}
    if (W >= 400 && W <= 409) return variants.mobile400 || {}
    if (W >= 410 && W <= 414) return variants.googlePixel || {}
    if (W >= 415 && W <= 434) return variants.mobile415 || {}
    if (W >= 435 && W <= 480) return variants.redmiNote5 || {}
  }
}

export const goBack = navigation => () => navigation.goBack()

export const onScreen = (screen, navigation, obj) => () => {
  navigation.navigate(screen, obj)
}

export const goHome = navigation => () => navigation.popToTop()()
```

![Step05](/img/steps/05.png)
## AppNavigator
Создаем файл с конфигурацией навигации для нашей кастомной аутентификации src/AppNavigator.js

```jsx
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Hello } from './screens/Authenticator'

const Stack = createStackNavigator()

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

![Step06](/img/steps/06.png)
## Hello screen

Создаем точку входа для нашых экранов аутентификации src/screens/Authenticator/index.js

![Hello screen](/img/auth/auth1-04.png)

Где для начала мы подключаем экран приветствия

```jsx
export * from './Hello'
```

После создаем его src/screens/Authenticator/Hello/index.js

В хуке useEffect мы выполняем проверку на наличие токена пользователя, где в случае true мы отправляемся на экран User, а в случае false остаемся на этом экране.

```jsx
import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { AppContainer, Button, Space, H6 } from 'react-native-unicorn-uikit'
import { onScreen } from '../../../constants'

const Hello = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const key = async () => {
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
      <Space height={200} />
      <Button title="Sign In" onPress={onScreen('SIGN_IN', navigation)} />
      <Space height={10} />
      <H6 title="or" textStyle={{ alignSelf: 'center' }} />
      <Space height={15} />
      <Button title="Sign Up" onPress={onScreen('SIGN_UP', navigation)} />
    </AppContainer>
  )
}

export { Hello }
```
Собираем приложение и встречаем экран приветствия.


![Step07](/img/steps/07.png)
## SignUp screen

Создаем экран регистрации SIGN_UP src/screens/Authenticator/SignUp/index.js , где для аутентификации мы используем метод [Auth.signUp](https://aws-amplify.github.io/docs/js/authentication#sign-up)

![SignUp](/img/auth/auth1-05.png)

```jsx
import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AppContainer, Space, Button, Input, TextError } from 'react-native-unicorn-uikit'
import { onScreen, goBack } from '../../../constants'

const SignUp = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values) => {
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
        <Space height={80} />
        <Formik
          initialValues={{ email: '', password: '', passwordConfirmation: '' }}
          onSubmit={(values) => _onPress(values)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
            passwordConfirmation: Yup.string().min(6).required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <>
              <Input
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="E-mail"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
              />
              <Input
                name="password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                placeholder="Password"
                touched={touched}
                errors={errors}
                secureTextEntry
              />
              <Input
                name="passwordConfirmation"
                value={values.passwordConfirmation}
                onChangeText={handleChange('passwordConfirmation')}
                onBlur={() => setFieldTouched('passwordConfirmation')}
                placeholder="Password confirm"
                touched={touched}
                errors={errors}
                secureTextEntry
              />
              <Space height={30} />
              {error !== '' && <TextError title={error} textStyle={{ alignSelf: 'center' }} />}
              <Button title="Sign Up" disabled={!isValid} onPress={handleSubmit} formik />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { SignUp }
```



![Step08](/img/steps/08.png)
## ConfirmSignUp screen

После успешного ответа с сервера, мы переходим на экран подтверждения и ввода кода, пришедшего нам на почту. Для этого создаем экран CONFIRM_SIGN_UP src/screens/Authenticator/ConfirmSignUp/index.js

![ConfirmSignUp](/img/auth/auth1-06.png)

```jsx
import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AppContainer, Button, Space, ButtonLink, TextError, Input } from 'react-native-unicorn-uikit'
import { onScreen, goBack } from '../../../constants'

const ConfirmSignUp = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values) => {
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

  const _onResend = async () => {
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
          onSubmit={(values) => _onPress(values)}
          validationSchema={Yup.object().shape({
            code: Yup.string().min(6).required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <>
              <Space height={180} />
              <Input
                name="code"
                value={values.code}
                onChangeText={handleChange('code')}
                onBlur={() => setFieldTouched('code')}
                placeholder="Insert code"
                touched={touched}
                errors={errors}
              />
              <ButtonLink title="Resend code?" onPress={_onResend} textStyle={{ alignSelf: 'center' }} />
              {error !== 'Forgot Password?' && <TextError title={error} />}
              <Button title="Confirm" disabled={!isValid} onPress={handleSubmit} formik />
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
## ResendSignUp
Если код не пришел, то мы должны предоставить пользователю возможность отправить код повторно. Для этого на кнопку Resend code? мы вешаем метод Auth.resendSignUp(userInfo.email)
В случае успешного вызова метода

```jsx
Auth.confirmSignUp(email, code, { forceAliasCreation: true })
```

мы должны вызывать метод
```jsx
Auth.signIn(email, password)
```


![Step09](/img/steps/09.png)
## User screen
В случае успеха переходим на экран USER, который мы создаем c кнопкой выхода из приложения и очисткой токенов src/screens/Authenticator/User/index.js

![User screen](/img/auth/auth1-07.png)


```jsx
import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { AppContainer, Button } from 'react-native-unicorn-uikit'
import { goHome } from '../../../constants'

const User = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const checkUser = async () => {
      await Auth.currentAuthenticatedUser()
    }
    checkUser()
  })

  const _onPress = async () => {
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


![Step10](/img/steps/10.png)
## SignIn screen

После того, как зарегистрировали пользователя, мы должны предоставить юзеру возможность войти в приложение через логин и пароль. Для этого мы создаем экран SIGN_IN src/screens/Authenticator/SignIn/index.js

![SignIn screen](/img/auth/auth1-08.png)

```jsx
import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AppContainer, Button, Space, ButtonLink, TextError, Input } from 'react-native-unicorn-uikit'
import { onScreen, goBack } from '../../../constants'

const SignIn = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values) => {
    setLoading(true)
    setError('')
    try {
      const { email, password } = values
      const user = await Auth.signIn(email, password)
      await Keychain.setInternetCredentials('auth', email, password)
      user && onScreen('USER', navigation)()
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

  return (
    <>
      <AppContainer onPress={goBack(navigation)} title="Sign In" loading={loading}>
        <Space height={140} />
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => _onPress(values) && setUserInfo(values.email)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <>
              <Input
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="E-mail"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
              />
              <Input
                name="password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                placeholder="Password"
                touched={touched}
                errors={errors}
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
              <Space height={30} />
              <Button title="Sign In" disabled={!isValid} onPress={handleSubmit} formik />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { SignIn }
```

![Step11](/img/steps/11.png)
## Forgot password screen

В случае успеха, мы отправляем юзера на экран USER, который мы уже ранее сделали, а если юзер забыл или не правильно ввел пароль, то мы показываем ошибку Forgot Password? и предлагаем сбросить пароль.

![Forgot password](/img/auth/auth1-09.png)

Для этого мы создаем экран FORGOT src/screens/Authenticator/Forgot/index.js

![Forgot password](/img/auth/auth1-10.png)

```jsx
import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AppContainer, Button, Input } from 'react-native-unicorn-uikit'
import { onScreen, goBack } from '../../../constants'

const Forgot = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values) => {
    setLoading(true)
    try {
      const { email } = values
      const user = await Auth.forgotPassword(email)
      user && onScreen('FORGOT_PASSWORD_SUBMIT', navigation, email)()
      setLoading(false)
    } catch (err) {
      setError(error)
    }
  }

  return (
    <>
      <AppContainer title="Forgot" onPress={goBack(navigation)} loading={loading}>
        <Formik
          initialValues={{ email: route.params }}
          onSubmit={(values) => _onPress(values)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <>
              <Input
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="E-mail"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
              />
              <Button title="Confirm" disabled={!isValid} onPress={handleSubmit} formik />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { Forgot }
```


![Step12](/img/steps/12.png)
## Forgot Password Submit

После подтверждения e-mail, мы вызываем метод Auth.forgotPassword(email) и в случае, если такой юзер есть, то отправляем пользователя на экран FORGOT_PASSWORD_SUBMIT src/screens/Authenticator/ForgotPassSubmit/index.js

![ForgotPassSubmit](/img/auth/auth1-11.png)

```jsx
import React, { useState } from 'react'
import { Platform } from 'react-native'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AppContainer, Button, Space, Input, TextError } from 'react-native-unicorn-uikit'
import { onScreen, goBack } from '../../../constants'

const ForgotPassSubmit = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const _onPress = async (values) => {
    setLoading(true)
    try {
      const { email, code, password } = values
      await Auth.forgotPasswordSubmit(email, code, password)
      await Keychain.setInternetCredentials('auth', email, password)
      onScreen('USER', navigation)()
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(err.message)
    }
  }

  return (
    <>
      <AppContainer title="Confirmation" onPress={goBack(navigation)} loading={loading}>
        <Space height={Platform.OS === 'ios' ? 20 : 150} />
        <Formik
          initialValues={{ email: route.params, code: '', password: '', passwordConfirmation: '' }}
          onSubmit={(values) => _onPress(values)}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            code: Yup.string().min(6).required(),
            password: Yup.string().min(6).required(),
            passwordConfirmation: Yup.string().min(6).required()
          })}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <>
              <Input
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="E-mail"
                touched={touched}
                errors={errors}
                autoCapitalize="none"
              />
              <Input
                name="code"
                value={values.code}
                onChangeText={handleChange('code')}
                onBlur={() => setFieldTouched('code')}
                placeholder="Code"
                touched={touched}
                errors={errors}
              />
              <Input
                name="password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                placeholder="Password"
                touched={touched}
                errors={errors}
                secureTextEntry
              />
              <Input
                name="passwordConfirmation"
                value={values.passwordConfirmation}
                onChangeText={handleChange('passwordConfirmation')}
                onBlur={() => setFieldTouched('passwordConfirmation')}
                placeholder="Password confirm"
                touched={touched}
                errors={errors}
                secureTextEntry
              />
              {error !== '' && <TextError title={error} textStyle={{ alignSelf: 'center' }} />}
              <Space height={30} />
              <Button title="Confirm" disabled={!isValid} onPress={handleSubmit} formik />
            </>
          )}
        </Formik>
      </AppContainer>
    </>
  )
}

export { ForgotPassSubmit }
```

где после ввода кода, отправленного на почту, нового пароля и его подтверждения, мы вызываем метод смены пароля

```jsx
Auth.forgotPasswordSubmit(email, code, password)
```

успех которого отправляет юзера на экран USER.

![Step13](/img/steps/13.png)
## Связывание экранов

Подключаем все созданые компоненты в src/screens/Authenticator/index.js

```jsx
export * from './Hello'
export * from './User'
export * from './SignIn'
export * from './SignUp'
export * from './Forgot'
export * from './ForgotPassSubmit'
export * from './ConfirmSignUp'
```

![Step14](/img/steps/14.png)
## Udpate AppNavigator

Обновляем файл конфигурации навигации:

```jsx
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Hello, SignUp, SignIn, ConfirmSignUp, User, Forgot, ForgotPassSubmit } from './screens/Authenticator'

const Stack = createStackNavigator()

const AppNavigator = () => {
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

![Step15](/img/steps/15.png)
## Clean Up

Так как мы используем кастомную тему, то удаляем компоненты  AmplifyTheme и Localei18n

![Step16](/img/steps/16.png)
## Debug

Для того, чтобы понимать, что происходит с токенами в вашем приложении, добавьте в корневой /index.js

```jsx
window.LOG_LEVEL = 'DEBUG'
```

Запускаем приложение и получаем кастомную аутентификацию.

## Done ✅

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)

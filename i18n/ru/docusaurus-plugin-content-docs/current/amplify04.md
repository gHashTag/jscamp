---
id: amplify-04
title: DataStore - CRUD (Create Read Update Delete)
sidebar_label: DataStore - CRUD
---

## Прощай Redux, MobX, Apollo! Грань между бэкендом и фронтендом сломана! Инновационый шаг эволюции стейт менеджеров.

[![AWS Amplify](/img/dataStore/youtube.gif)](https://youtu.be/iheSA3e58Wc)

Одна из самых сложных задача при разработке веб и мобильных приложений - это синхронизация данных между устройствами и выполнение автономных операции. В идеале, когда устройство находится в автономном режиме, ваши клиенты должны иметь возможность продолжать использовать ваше приложение не только для доступа к данным, но также для их создания и изменения. Когда устройство возвращается в оперативный режим, приложение должно повторно подключиться к бэкэнду, синхронизировать данные и разрешить конфликты, если таковые имеются. Для правильной обработки всех крайних случаев требуется много недифференцированного кода, даже при использовании кэша AWS AppSync SDK на устройстве с автономными мутациями и дельта-синхронизацией.

Amplify DataStore предоставляет постоянное хранилище на устройстве для записи, чтения и наблюдения за изменениями данных, если вы подключены к Интернету или в автономном режиме, а также позволяет легко синхронизировать данные с облаком и между устройствами.

Amplify DataStore позволяет разработчикам писать приложения, используя распределенные данные, без написания дополнительного кода для автономного или онлайн-сценария.

Вы можете использовать Amplify DataStore для автономного использования в режиме «только локальный» без учетной записи AWS или предоставить весь бэкэнд с помощью AWS AppSync и Amazon DynamoDB.

DataStore включает в себя Delta Sync с использованием вашего бэкенда GraphQL и несколько стратегий разрешения конфликтов.

## Преимущества DataStore от AWS Amplify над Redux, MobX, Apollo, Relay, селектрорами, деселекторами и прочими флаксами:

Сравнивать AWS Amplify с Redux, MobX не корректно, так как AWS Amplify это не только стейт-менеджер, но и клиент-сервер, поэтому в классе клиент-сервер мы будем сравнивать его с Apollo и Relay.

## 1. Real time из коробки.

Не думаю, что можно считать бизнес серьезным, если у его мобильного приложения отсустствуют события подписок реализованых на технологии web sockets. А многие ли приложения в наше время работают на web sockets? Думаю нет, по причине того, что real time это дополнительная работа разработчиков на бэке и фронтенде. Для нас же, [fullStack serverless](https://jscamp.app/docs/amplify-01) разработчиков на AWS Amplify, real time идет из коробки, как на фронте так и на бэке и нам не надо писать код реализации для интеграции вэбсокетов на каждую модель, так как он генерируется автоматически, также как и написание документации для всего нашего сгенерированого кода, имплементированого в наш проект на основании инструкции GraphQL схемы. Чтобы не пугать громкими словами, я покажу вам пример, из [прошлого урока](https://jscamp.app/docs/amplify-03), того как в AWS Amplify определяется Store:

```graphql
type Job @model @auth(rules: [{ allow: owner, ownerField: "owner", operations: [create, update, delete] }]) {
  id: ID!
  position: String!
  rate: String!
  description: String!
  owner: String
}
```

Так определяется модель в сторе, не только для фронтенда, но и для бэкенда. Один источник правды для фронтенда и для бэкенда. Да да, вижу я, что еще не раз повтою это в своей жизни, так как это киллер фича и панч лайн vs Redux, MobX, Apollo, Relay.

Вот именно эта отличная от Redux, MobX, Apollo архитектура, стерает грань между бэкендом и фронтендом. И ставит AWS Amplify DataStore над всеми

Все!!! Если вы с бэкенда, то вам больше не нужно писать резольверы к базе данных и тащить подписки на каждую модель данных.

Serverless - это когда разработчикам бэкенда пришла пора учить фронтенд, так как их услуги нужны исключительно легаси проектам, не шагающим в ногу со временем, от чего и не живущими real time.

## 2. Генерация кода.

Что такое кодогенерация вы можете прочитать и без меня в Википедии, если конечно же не знаете его значения, которое и в этом панче напоминает нам о себе. Old schoolщик? Юзаем fetch или axios? Отправляя запросы в дремучий лес API, который еще и сами пишим в связке с Redux, MobX, Apollo, Relay. Так вот вам еще одна новость дня! Вам больше не нужно писать эти запросы к API, вам их нужно только вызвать. Это значит, что больше не нужно создавать эту немаленькую папочку с кодом запроса к серверу, так как в AWS Amplify DataStore они также генерируются в вашем проекте на основании вашего стора, определеннго все той же GraphQL схемы их первого пункта. И выполняется это одной командой:

```bash
amplify codegen model
```

В итоге получаем папку models с генерированным кодом.

![DataStore](/img/dataStore/dataStore09.png)

И папка graphql после пуша на сервер, со всем запросом во Flow, TS или ваниле JavaScript.

![DataStore](/img/dataStore/dataStore08.png)

## 3. Offline data & cloud sync

Не нужно писать дополнительный код, для отправки запроса на сервер, после выхода приложения в онлайн. Иногда вы попадаете в ненадежную ситуацию, но вам лучше подождать дольше, чем явно провалить операцию. У Apollo есть apollo-link-retry который обеспечивает экспоненциальный откат и запросы на сервер между попытками по умолчанию. Правда он (в настоящее время) не обрабатывает повторы для ошибок GraphQL в ответе, только для сетевых ошибок. У Redux, MobX понятное дело под капотом этого решения нет так как они не клиенты и приходится задествовать сторние мидлвари, по причине того, что REST как дедушка на пенсии с поддержкой любимых внуков. Подробный разбор [GraphQL vs REST](https://jscamp.app/docs/amplify-02). У AWS Amplify DataStore есть не только аналог apollo-link-retry , но и встроенная в него и настраиваемая привычная модель программирования с автоматическим контролем версий, обнаружением конфликтов и разрешением в облаке.

Из минусов AWS Amplify хочу назвать то, что хуки Apollo c его loading и error из коробки сокращают количество написаного кода на фронте, поэтому написал open source [библиотеку](https://github.com/react-native-village/aws-amplify-react-hooks), которая решает это недоразумение.

[Официальная документация](https://aws-amplify.github.io/docs/js/datastore)

## Сколько все это стоит?

С AWS Amplify DataStore вы платите только за то, что используете, без минимальных сборов или обязательного использования услуг. Вам выставляется отдельный счет за операции запроса и изменения данных, а также за обновление ваших данных в режиме реального времени. Это обеспечивает прозрачность и низкую цену независимо от типа рабочей нагрузки, поскольку вы платите только за конкретные функции AWS AppSync, которые вы используете.

Операции запросов позволяют вашему приложению получать данные и кэшировать их локально. Операции изменения данных позволяют вашему приложению создавать, обновлять и удалять данные.

4,00 доллара за миллион запросов и операций по модификации данных \*

[Подробности](https://aws.amazon.com/ru/appsync/pricing/)

В конце этого урока мы соберем с вами это мобильное приложение c использованием Amplify DataStore:

![dataStore](/img/dataStore/dataStore07.png)

Поехали!

Данный урок является продолжением урока по [аутентификции](https://jscamp.app/docs/auth1-00), так как работа с DataStore будет выполняться аутентифицированым пользователем. Поэтому, если вы его не прошли, то вернитесь на шаг назад.

Чат поддержки AWS Amplify: [Telegram](https://teleg.run/awsamplify)

Финальный код этой части можно найти на [Github](https://github.com/fullstackserverless/startup/tree/datastore).

![Step01](/img/steps/01.png)

## Клонируем репозиторий

Если вы продолжаете прошлый урок, то можете сразу перейти к шагу 5

```bash
git clone https://github.com/fullstackserverless/startup.git
```

Переходим в папку проекта

```bash
cd startup
```

Install dependencies

```bash npm2yarn
npm install
```

![Step02](/img/steps/02.png)

## Регистрируем свой AWS account

Шаг для тех, кто еще не зарегистрирован на AWS Регестрируемся согласно [этой](https://aws-amplify.github.io/docs/) инструкции 📃 и по видео учебнику 📺 чекаем все 5 шагов.

#### Внимание!!!

Потребуется банковская карта 💳, где должно быть более 1\$ 💵

Там же смотрим и ставим Amplify Command Line Interface (CLI)

![Step03](/img/steps/03.png)

## Инициализация AWS Amplify в проект React Native

В корневой директории проекта React Native инициализируем наш AWS Amplify проект

```bash
amplify init
```

Отвечаем на вопросы:

![amplify init](/img/auth/auth02.png)

Проект инициализацировался 🚀

![Step04](/img/steps/04.png)

## Подключаем плагин аутентификации

Теперь, когда приложение находится в облаке, вы можете добавить некоторые функции, такие как предоставление пользователям возможности зарегистрироваться в нашем приложении и войти в систему.

Командой

```bash
amplify add auth
```

подключаем функцию аутентификации. Выбираем конфигурацию по умолчанию. Это добавляет конфигурации ресурсов auth локально в ваш каталог ampify/backend/auth

#### Выбираем профиль, который мы хотим использовать. default. Enter и как пользователи будут входить в систему. Email(За SMS списывают деньги).

![amplify init](/img/auth/auth03.png)

Отправляем изменения в облако 💭

```bash
amplify push
```

✔ All resources are updated in the cloud

Собераем проект и проверяем работоспособность аутентификации.

![Hello screen](/img/auth/auth1-04.png)

![Step05](/img/steps/05.png)

## Установка зависимостей

Подробная установка [здесь](https://aws-amplify.github.io/docs/js/datastore#setup)

Если у вас React Native Cli, то

```bash
yarn add @aws-amplify/datastore @react-native-community/netinfo @react-native-community/async-storage
```

И если вы используете React Native > 0.50, то выполните следующую команду для iOS:

```bash
cd ios && pod install && cd ..
```

![Step06](/img/steps/06.png)

## Подключаем плагин API(App Sync)

Если подключали его в [прошлом уроке](https://jscamp.app/docs/amplify-03), то пропускаем этот шаг. Если нет то, подключаем плагин API

```bash
amplify add api
```

![AWSAmplify](/img/dataStore/dataStore00.png)

После выбранных пунктов откроется схема GraphQL в `amplify/backend/api/<datasourcename>/schema.graphql` куда вставляем эту модель:

```graphql
type Job @model @auth(rules: [{ allow: owner, ownerField: "owner", operations: [create, update, delete] }]) {
  id: ID!
  position: String!
  rate: String!
  description: String!
  owner: String
}
```

Подробней о ней [здесь](https://jscamp.app/docs/amplify-03#schemagraphql)

![Step07](/img/steps/07.png)

## Генерация моделей

Моделирование ваших данных и создание моделей, используемых DataStore, - это первый шаг к началу работы. GraphQL используется в качестве общего языка для JavaScript, iOS и Android для этого процесса, а также используется в качестве сетевого протокола при синхронизации с облаком. GraphQL также поддерживает некоторые функции, такие как Automerge в AppSync. Генерация модели может быть выполнена с помощью сценария NPX или из командной строки с помощью Amplify CLI.

> Вам не нужна учетная запись AWS для ее запуска и локального использования DataStore, однако, если вы хотите синхронизироваться с облаком, рекомендуется установить и настроить Amplify CLI как в прошлом уроке.

Так как схему мы описали в прошлом уроке, то сейчас нам достаточно запустить команду

```bash
amplify codegen model
```

и получить сгенерированную модель в папке src/models

![Step08](/img/steps/08.png)

## Обновляем API

Включаем DataStore для всего API

```bash
amplify update api
```

![amplify update api](/img/dataStore/dataStore03.png)

Отправляем изменения в облако 💭

```bash
amplify push
```

✔ All resources are updated in the cloud

![Step09](/img/steps/09.png)

## READ

Создаем экран JobsMain src/screens/Jobs/JobsMain.js

![READ](/img/dataStore/dataStore04.png)

На этом экране мы сделаем запрос Query, с опцией пагинации, где число через хук useQuery и он нам вернет массив, который мы отправим в Flatlist.

```jsx
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { Auth } from 'aws-amplify'
import { AppContainer, CardVacancies, Space, Header } from 'react-native-unicorn-uikit'
import { DataStore } from '@aws-amplify/datastore'
import { Job } from '../../models'
import { goBack, onScreen } from '../../constants'

const JobsMain = ({ navigation }) => {
  const [data, updateJobs] = useState([])

  const fetchJobs = async () => {
    const mess = await DataStore.query(Job)
    updateJobs(mess)
  }

  useEffect(() => {
    fetchJobs()
    const subscription = DataStore.observe(Job).subscribe(() => fetchJobs())
    return () => {
      subscription.unsubscribe()
    }
  }, [data])

  const _renderItem = ({ item }) => {
    const owner = Auth.user.attributes.sub
    const check = owner === item.owner
    return (
      <>
        <CardVacancies obj={item} onPress={onScreen(check ? 'JOB_ADD' : 'JOB_DETAIL', navigation, item)} />
        <Space height={20} />
      </>
    )
  }

  const _keyExtractor = obj => obj.id.toString()

  return (
    <AppContainer onPress={goBack(navigation)} flatlist>
      <FlatList
        scrollEventThrottle={16}
        data={data}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <Header
            onPress={goBack(navigation)}
            onPressRight={onScreen('JOB_ADD', navigation)}
            iconLeft="angle-dobule-left"
            iconRight="plus-a"
          />
        }
        stickyHeaderIndices={[0]}
      />
    </AppContainer>
  )
}

export { JobsMain }
```

Для раскрытия подробностей вакансии создаем экран JobDetail src/screens/Jobs/JobDetail.js

![](/img/dataStore/dataStore05.png)

```jsx
import React from 'react'
import { Platform } from 'react-native'
import { AppContainer, CardVacancies, Space, Header } from 'react-native-unicorn-uikit'
import { goBack } from '../../constants'

const JobDetail = ({ route, navigation }) => {
  return (
    <AppContainer>
      <Header onPress={goBack(navigation)} iconLeft="angle-dobule-left" />
      <CardVacancies obj={route.params} detail />
      <Space height={Platform.OS === 'ios' ? 100 : 30} />
    </AppContainer>
  )
}

export { JobDetail }
```

![Step10](/img/steps/10.png)

## CREATE UPDATE DELETE

Создаем экран JobAdd src/screens/Jobs/JobAdd.js , где мы выполняем функции CREATE UPDATE DELETE

![](/img/dataStore/dataStore06.png)

```jsx
import React, { useState, useEffect, useRef } from 'react'
import { AppContainer, Input, Space, Button, Header, ButtonLink } from 'react-native-unicorn-uikit'
import { DataStore } from '@aws-amplify/datastore'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Job } from '../../models'
import { goBack } from '../../constants'

const JobAdd = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false)
  const [check, setOwner] = useState(false)
  const [error, setError] = useState('')

  const [input, setJob] = useState({
    id: '',
    position: '',
    rate: '',
    description: ''
  })

  const formikRef = useRef()

  useEffect(() => {
    const obj = route.params
    if (typeof obj !== 'undefined') {
      setOwner(true)
      setJob(obj)
      const { setFieldValue } = formikRef.current
      const { position, rate, description } = obj
      setFieldValue('position', position)
      setFieldValue('rate', rate)
      setFieldValue('description', description)
    }
  }, [route.params])

  const createJob = async values => (await DataStore.save(new Job({ ...values }))) && goBack(navigation)()

  const updateJob = async ({ position, rate, description }) => {
    try {
      setLoading(true)
      const original = await DataStore.query(Job, input.id)
      const update = await DataStore.save(
        Job.copyOf(original, updated => {
          updated.position = position
          updated.rate = rate
          updated.description = description
        })
      )
      update && goBack(navigation)()
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  const deleteJob = async () => {
    try {
      setLoading(true)
      const job = await DataStore.query(Job, input.id)
      const del = await DataStore.delete(job)
      del && goBack(navigation)()
      setLoading(false)
    } catch (err) {
      setError(err)
    }
  }

  return (
    <AppContainer onPress={goBack(navigation)} loading={loading} error={error}>
      <Header onPress={goBack(navigation)} iconLeft="angle-dobule-left" />
      <Space height={20} />
      <Formik
        innerRef={formikRef}
        initialValues={input}
        onSubmit={values => (check ? updateJob(values) : createJob(values))}
        validationSchema={Yup.object().shape({
          position: Yup.string().min(3).required(),
          rate: Yup.string().min(3).required(),
          description: Yup.string().min(3).required()
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <>
            <Input
              name="position"
              value={values.position}
              onChangeText={handleChange('position')}
              onBlur={() => setFieldTouched('position')}
              placeholder="Position"
              touched={touched}
              errors={errors}
            />
            <Input
              name="rate"
              keyboardType="numeric"
              value={`${values.rate}`}
              onChangeText={handleChange('rate')}
              onBlur={() => setFieldTouched('rate')}
              placeholder="Rate"
              touched={touched}
              errors={errors}
            />
            <Input
              name="description"
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={() => setFieldTouched('description')}
              placeholder="Description"
              touched={touched}
              errors={errors}
              multiline
              numberOfLines={5}
            />
            <Space height={40} />
            <Button title={check ? 'Update' : 'Create'} disabled={!isValid} onPress={handleSubmit} formik />
            {check && (
              <>
                <Space height={10} />
                <ButtonLink title="or"  }} />
                <Space height={15} />
                <Button title="DELETE" onPress={deleteJob} cancel />
              </>
            )}
          </>
        )}
      </Formik>
      <Space height={100} />
    </AppContainer>
  )
}

export { JobAdd }
```

и в screens/Jobs/index.js экспортируем экраны

```jsx
export * from './JobsMain'
export * from './JobDetail'
export * from './JobAdd'
```

![Step11](/img/steps/11.png)

## Навигация

Добавляем импорт экранов Jobs и подключаем их в StackNavigator

```jsx
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens' // eslint-disable-line
import { Hello, SignUp, SignIn, ConfirmSignUp, User, Forgot, ForgotPassSubmit } from './screens/Authenticator'
import { JobsMain, JobDetail, JobAdd } from './screens/Jobs'

enableScreens()

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
      <Stack.Screen name="JOBS_MAIN" component={JobsMain} />
      <Stack.Screen name="JOB_DETAIL" component={JobDetail} />
      <Stack.Screen name="JOB_ADD" component={JobAdd} />
    </Stack.Navigator>
  )
}

export default AppNavigator
```

![Step12](/img/steps/12.png)

## Кнопка Jobs

Редактируем экран User в screens/Authenticator/User/index.js

```jsx
import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import * as Keychain from 'react-native-keychain'
import { AppContainer, Button } from 'react-native-unicorn-uikit'
import { goHome, onScreen } from '../../../constants'

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

  const _onPressJob = () => onScreen('JOBS_MAIN', navigation)() // переход на экран JOBS_MAIN

  return (
    <AppContainer message={error} loading={loading}>
      <Button title="Sign Out" onPress={_onPress} />
      <Button title="Jobs" onPress={_onPressJob} />
    </AppContainer>
  )
}

export { User }
```

Собираем приложение и тестируем

## Done ✅

## References:

https://aws-amplify.github.io

https://learning.oreilly.com/library/view/full-stack-serverless/9781492059882/

https://www.altexsoft.com/blog/engineering/graphql-core-features-architecture-pros-and-cons/

https://engineering.fb.com/core-data/graphql-a-data-query-language/

https://graphql.org/learn

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

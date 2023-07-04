---
id: amplify-04
title: DataStore - CRUD (Create Read Update Delete)
sidebar_label: DataStore - CRUD
---


## Goodbye Redux, MobX, Apollo! The line between backend and frontend is broken! An innovative step in the evolution of state managers.

[![AWS Amplify](/img/dataStore/youtube.gif)](https://youtu.be/iheSA3e58Wc)

One of the biggest challenges in web and mobile development is syncing data across devices and performing offline operations. Ideally, when the device is offline, your customers should be able to continue to use your application not only to access data, but also to create and modify it. When the device comes back online, the app must reconnect to the backend, sync data, and resolve conflicts, if any. A lot of undifferentiated code is required to properly handle all edge cases, even when using the AWS AppSync SDK cache on a device with offline mutations and delta sync.

Amplify DataStore provides persistent on-device storage for writing, reading and observing data changes when connected to the Internet or offline, and allows you to easily sync data to the cloud and across devices.

Amplify DataStore allows developers to write applications using distributed data without writing additional code for offline or online scripting.

You can use Amplify DataStore for standalone use in local-only mode without an AWS account, or expose the entire backend using AWS AppSync and Amazon DynamoDB.

The DataStore includes Delta Sync using your GraphQL backend and several conflict resolution strategies.

## Advantages of DataStore from AWS Amplify over Redux, MobX, Apollo, Relay, selectors, deselectors and other flax:

Comparing AWS Amplify with Redux, MobX is not correct, since AWS Amplify is not only a state manager, but also a client-server, so in the client-server class we will compare it with Apollo and Relay.

## 1. Real time out of the box.

I don't think that a business can be considered serious if its mobile application does not have subscription events implemented on web sockets technology. How many applications run on web sockets these days? I think not, due to the fact that real time is additional work of developers on the back-end and front-end. For us, [fullStack serverless] (https://jscamp.app/docs/amplify-01) developers on AWS Amplify, real time comes out of the box, both on the front and back, and we don't it is necessary to write implementation code for integrating websockets for each model, since it is generated automatically, as well as writing documentation for all our generated code, implemented into our project based on the GraphQL schema instruction. In order not to scare you with loud words, I will show you an example, from [the last lesson] (https://jscamp.app/docs/amplify-03), how the Store is defined in AWS Amplify:

```graphql
type Job @model @auth(rules: [{ allow: owner, ownerField: "owner", operations: [create, update, delete] }]) {
  id: ID!
  position: String!
  rate: String!
  description: String!
  owner: String
}
```

This defines the model in the store, not only for the frontend, but also for the backend. One source of truth for front-end and back-end. Yes, yes, I see that I will repeat this more than once in my life, since this is a killer feature and punch line vs Redux, MobX, Apollo, Relay.

It is precisely this architecture different from Redux, MobX, Apollo that blurs the line between the backend and the frontend. And puts AWS Amplify DataStore above all

Everything!!! If you are from the backend, then you no longer need to write resolvers to the database and drag subscriptions to each data model.

Serverless is when the time has come for backend developers to teach the frontend, since their services are needed exclusively for legacy projects that do not keep pace with the times, from which they do not live in real time.

## 2. Code generation.

What is code generation you can read without me on Wikipedia, unless of course you know its meaning, which in this punch reminds us of itself. Old school boy? Using fetch or axios? By sending requests to the dense forest of API, which we also write in conjunction with Redux, MobX, Apollo, Relay. So here's another news of the day for you! You no longer need to write these API requests, you only need to call them. This means that you no longer need to create this rather large folder with the server request code, since in AWS Amplify DataStore they are also generated in your project based on your store, which is defined by the same GraphQL schema of their first item. And this is done with one command:

```bash
amplify codegen model
```

As a result, we get the models folder with the generated code.

![DataStore](/img/dataStore/dataStore09.png)

And the graphql folder after pushing to the server, with the whole request in Flow, TS or vanilla JavaScript.

![DataStore](/img/dataStore/dataStore08.png)

## 3. Offline data & cloud sync

There is no need to write additional code to send a request to the server after the application is online. Sometimes you find yourself in a precarious situation, but you'd better wait longer than clearly fail the operation. Apollo has apollo-link-retry which provides exponential rollback and requests to the server between retries by default. True, it (currently) does not handle repetitions for GraphQL errors in the response, only for network errors. Redux, MobX, of course, does not have this solution under the hood, since they are not clients and they have to touch the middleware, because REST is like a grandfather in retirement with the support of any grandchildren. A detailed breakdown of [GraphQL vs REST] (https://jscamp.app/docs/amplify-02). AWS Amplify DataStore has not only an analogue of apollo-link-retry, but also a built-in and customizable familiar programming model with automatic version control, conflict detection and resolution in the cloud.

Of the cons of AWS Amplify, I want to name the fact that the Apollo hooks with its loading and error out of the box reduce the amount of written code on the front, so I wrote open source [library] (https://github.com/react-native-village/aws-amplify -react-hooks), which resolves this misunderstanding.

[Official documentation](https://aws-amplify.github.io/docs/js/datastore)

## How much does it all cost?

With AWS Amplify DataStore, you pay only for what you use, no minimum fees or mandatory use of services. You are billed separately for requesting and modifying data, and for updating your data in real time. This provides transparency and low cost no matter what type of workload, because you only pay for the specific AWS AppSync features you use.

Query operations allow your application to receive data and cache it locally. Data change operations allow your application to create, update, and delete data.

$ 4.00 per million requests and data modification operations \*

[Подробности](https://aws.amazon.com/ru/appsync/pricing/)

At the end of this tutorial, we will put together this mobile application with you using Amplify DataStore:

![dataStore](/img/dataStore/dataStore07.png)

Go!

This lesson is a continuation of the lesson on [authentication] (https://jscamp.app/docs/auth1-00), since work with the DataStore will be performed by an authenticated user. Therefore, if you have not passed it, then go back one step.

AWS Amplify Support Chat: [Telegram](https://teleg.run/awsamplify)

The final code for this part can be found at [Github](https://github.com/fullstackserverless/startup/tree/datastore).

![Step01](/img/steps/01.png)

## Clone the repository

If you are continuing the last lesson, you can skip directly to step 5

```bash
git clone https://github.com/fullstackserverless/startup.git
```

Go to the project folder

```bash
cd startup
```

Install dependencies

```bash npm2yarn
npm install
```

![Step02](/img/steps/02.png)

## Registering your AWS account

Step for those who are not yet registered on AWS Register according to [this] (https://aws-amplify.github.io/docs/) instructions 📃 and check all 5 steps from the video tutorial 📺.

#### Attention!!!

You will need a bank card 💳, where there must be more than 1 \ $ 💵

We look there and set Amplify Command Line Interface (CLI)

![Step03](/img/steps/03.png)

## Initializing AWS Amplify into a React Native Project

In the root directory of the React Native project, we initialize our AWS Amplify project

```bash
amplify init
```

We answer the questions:

![amplify init](/img/auth/auth02.png)

The project was initialized 🚀

![Step04](/img/steps/04.png)

## Connecting the authentication plugin

Now that the application is in the cloud, you can add some functionality, such as allowing users to register with our application and sign in.

Team

```bash
amplify add auth
```

we connect the authentication function. We select the default configuration. This adds auth resource configurations locally to your directory ampify/backend/auth

#### We select the profile that we want to use. default. Enter and how users will log in. Email (Money is charged for SMS).

![amplify init](/img/auth/auth03.png)

Submitting changes to the cloud 💭

```bash
amplify push
```

✔ All resources are updated in the cloud

Putting together the project and checking the authentication functionality.

![Hello screen](/img/auth/auth1-04.png)

![Step05](/img/steps/05.png)

## Installing dependencies

Detailed installation [here](https://aws-amplify.github.io/docs/js/datastore#setup)

If you have React Native Cli, then

```bash
yarn add @aws-amplify/datastore @react-native-community/netinfo @react-native-community/async-storage
```

And if you are using React Native> 0.50 then run the following command for iOS:

```bash
cd ios && pod install && cd ..
```

![Step06](/img/steps/06.png)

## Connecting the API plugin (App Sync)

If you connected it in [the last lesson](https://jscamp.app/docs/amplify-03), then skip this step. If not, then connect the API plugin

```bash
amplify add api
```

![AWSAmplify](/img/dataStore/dataStore00.png)

After the selected items, a GraphQL schema will open in `amplify / backend / api / <datasourcename> / schema.graphql` where we insert this model:

```graphql
type Job @model @auth(rules: [{ allow: owner, ownerField: "owner", operations: [create, update, delete] }]) {
  id: ID!
  position: String!
  rate: String!
  description: String!
  owner: String
}
```

More about her [here](https://jscamp.app/docs/amplify-03#schemagraphql)

![Step07](/img/steps/07.png)

## Generating Models

Modeling your data and creating the models used by the DataStore is the first step to getting started. GraphQL is used as a common language for JavaScript, iOS and Android for this process, and is also used as a network protocol when syncing with the cloud. GraphQL also supports some features like Automerge in AppSync. Model generation can be done via NPX script or from the command line using the Amplify CLI.

> Вам не нужна учетная запись AWS для ее запуска и локального использования DataStore, однако, если вы хотите синхронизироваться с облаком, рекомендуется установить и настроить Amplify CLI как в прошлом уроке.

Since we described the scheme in the last lesson, now we just need to run the command

```bash
amplify codegen model
```

and get the generated model in the src/models folder

![Step08](/img/steps/08.png)

## Updating the API

Enabling DataStore for the entire API

```bash
amplify update api
```

![amplify update api](/img/dataStore/dataStore03.png)

Submitting changes to the cloud 💭

```bash
amplify push
```

✔ All resources are updated in the cloud

![Step09](/img/steps/09.png)

## READ

Create a screen JobsMain src/screens/Jobs/JobsMain.js

![READ](/img/dataStore/dataStore04.png)

On this screen, we will make a Query query, with the pagination option, where the number is through the useQuery hook and it will return an array to us, which we will send to Flatlist.

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

To reveal the details of the vacancy, create a screen JobDetail src/screens/Jobs/JobDetail.js

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

Create a screen JobAdd src/screens/Jobs/JobAdd.js , where we perform functions CREATE UPDATE DELETE

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
                <ButtonLink title="or" textStyle={{ alignSelf: 'center' }} />
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

and in screens/Jobs/index.js exporting screens

```jsx
export * from './JobsMain'
export * from './JobDetail'
export * from './JobAdd'
```

![Step11](/img/steps/11.png)

## Навигация

Add import of Jobs screens and connect them to StackNavigator

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

Editing the User screen in screens/Authenticator/User/index.js

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

Putting the application together and testing

## Done ✅

## References:

https://aws-amplify.github.io

https://learning.oreilly.com/library/view/full-stack-serverless/9781492059882/

https://www.altexsoft.com/blog/engineering/graphql-core-features-architecture-pros-and-cons/

https://engineering.fb.com/core-data/graphql-a-data-query-language/

https://graphql.org/learn

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

---
id: unicorn02
title: UI Kit - Unicorn
sidebar_label: Установка
---
# Установка UI Kit - Unicorn

[![react-navigation](/img/uikit/00.gif)](https://youtu.be/4Cn_LdGKA_o)


![Step01](/img/steps/01.png)
## Добавляем библиотеку

```jsx
yarn add react-native-unicorn-uikit
```


![Step02](/img/steps/02.png)
## Добавляем зависимости

```jsx
yarn add react-native-appearance react-native-screens @react-navigation/native @react-navigation/native-stack react-native-safe-area-context react-native-spinkit yup formik faker
```

![Step03](/img/steps/03.png)
## react-native-vector-icons

Добавляем библиотеку с иконками

```jsx
yarn add react-native-vector-icons
```

Настраиваем как написано [здесь](https://github.com/oblador/react-native-vector-icons)

![Step04](/img/steps/04.png)
## Устанавливаем Pods

```jsx
cd ios && pod install && cd ..
```

![Step05](/img/steps/05.png)
## Установка шрифтов

Создаем файл в корне проекта /react-native.config.js

```jsx
module.exports = {
  project: {
    ios: {},
    android: {}
  },
  assets: ['./assets/fonts/']
}
```

Качаем шрифты [здесь](https://github.com/react-native-village/react-native-unicorn/tree/master/assets/fonts) и после в cозданную директорию ./assets/fonts/ кладем их, а после линкуем.

```jsx
react-native link
```
Собираем и если, как и я, получаете эти предупреждения: warning: duplicate output file errors, то перейдите в Xcode и удалите дубликаты шрифтов, кроме подключенных.

![warning: duplicate output file errors](https://miro.medium.com/max/2000/1*SwWN88tSmK2cj9qRDyTWGA.png)

![Step06](/img/steps/06.png)
## ThemeProvider

B App.js подключаем дефолтные темы и ThemeProvider или на сновании [этого](https://github.com/react-native-village/react-native-unicorn/blob/master/src/APIComponents.js) файла добавляем свои темы.

```jsx
import React, { useState } from 'react'
import { Switch, View } from 'react-native'
import { ThemeProvider, DarkTheme, LightTheme } from 'react-native-unicorn-uikit'
import UIKit from './UIKit'

const App = () => {
  const [value, setValue] = useState(!false)
  const dev = true
  const theme = value ? DarkTheme : LightTheme
  return (
    <>
      <ThemeProvider theme={theme}>
        {dev && (
          <View style={{ backgroundColor: value ? '#1D1E1F' : '#fff', height: 90 }}>
            <Switch onValueChange={setValue} value={value} style={{ alignSelf: 'center', marginTop: 50 }} />
          </View>
        )}
        <UIKit />
      </ThemeProvider>
    </>
  )
}

export default App
```

![Step07](/img/steps/07.png)
## All UI Kit

Создаем файл UIKit и подключаем список всех компонентов

```jsx
// @flow
import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Alert } from 'react-native'
import { useTheme } from '@react-navigation/native'
import faker from 'faker'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {
  Avatar,
  H0,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
  H8,
  Body,
  Space,
  Developer,
  CardIssueResponceSub,
  CardIssue,
  CardIssueResponce,
  CardContacts,
  CardVacancies,
  CardAbout,
  CardInfo,
  CardCareer,
  CardResume,
  CardEducation,
  Cost,
  Header,
  HeaderMaster,
  Button,
  ButtonStatusIssue,
  ButtonCircle,
  ButtonText,
  ButtonLink,
  ButtonDeveloperSub,
  ButtonMarkDecision,
  ButtonComments,
  IconCircle,
  Rate,
  Star,
  Input,
  TabDeveloper,
  TabCompany
} from 'react-native-unicorn-uikit'
import {
  userData,
  cardCareer,
  cardContacts,
  cardEducation,
  cardIssueResponce,
  cardVacancies,
  cardIssue,
  cardResume,
  cardInfo
} from './data'

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 65,
    paddingHorizontal: 15
  }
})

const UIKit = () => {
  const { scrollView } = styles
  const {
    colors: { backgroundColor, primary, secondary }
  } = useTheme()
  const [bool, setBool] = useState(false)
  const _onPress = () => console.log('click') // eslint-disable-line
  const { image, name, lorem, random } = faker
  return (
    <>
      <ScrollView style={[scrollView, { backgroundColor }]}>
        <View style={{ alignItems: 'center' }}>
          <H0 title="Avatars" />
          <Space height={30} />
          <Avatar uri={image.avatar()} size="xLarge" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="large" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="medium" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="small" />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="FONTS" />
          <Space height={10} />
          <H0 title="H0" />
          <Space height={1} />
          <H1 title="H1" textStyle={{ textAlign: 'center' }} />
          <Space height={1} />
          <H2 title="H2" />
          <Space height={5} />
          <H3 title="H3" />
          <Space height={5} />
          <H4 title="H4" />
          <Space height={1} />
          <H5 title="H5" />
          <Space height={5} />
          <H6 title="H6" />
          <Space height={5} />
          <H7 title="H7" />
          <Space height={5} />
          <H8 title="H8" />
          <Space height={5} />
          <Body title="body" />
          <Space height={10} />
          <Cost title="500" />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="Buttons" />
          <Space height={30} />
          <Button title="Done" onPress={_onPress} />
          <Space height={20} />
          <Button title="Cancel" cancel />
          <Space height={30} />
          <ButtonStatusIssue title={`Open ${34}`} color={primary} />
          <Space height={30} />
          <ButtonStatusIssue title={`Closed ${34}`} color={secondary} />
          <Space height={30} />
          <ButtonCircle title="Press me" />
          <Space height={30} />
          <ButtonText title="forgot password?" />
          <Space height={30} />
          <ButtonLink title="link" />
          <Space height={30} />
          <ButtonMarkDecision />
          <Space height={30} />
          <IconCircle name=":thought_balloon:" />
          <Space height={10} />
          <IconCircle name=":telephone_receiver:" />
          <Space height={10} />
          <IconCircle name=":loud_sound:" />
          <Space height={10} />
          <IconCircle name=":thought_balloon:" />
          <Space height={30} />
          <ButtonComments title={3} />
          <Space height={30} />
          <ButtonDeveloperSub title={name.findName()} color={secondary} uri={image.avatar()} rate={random.number()} />
          <Space height={30} />
          <Rate title="2/433" />
          <Space height={30} />
          <Star star={bool} onPress={() => setBool(!bool)} />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="Tabs" />
          <Space height={30} />
          <TabDeveloper />
          <Space height={30} />
          <TabCompany />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="Inputs" />
          <Space height={30} />
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => Alert.alert(JSON.stringify(values))}
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
                />
                <Input
                  name="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  placeholder="Password"
                  touched={touched}
                  errors={errors}
                />
                <Space height={40} />
                <Button title="Sign In" disabled={!isValid} onPress={handleSubmit} formik />
              </>
            )}
          </Formik>
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="Headers" />
          <Space height={30} />
          <Header iconLeft="angle-dobule-left" />
          <Space height={30} />
          <HeaderMaster user={userData} />
          <Space height={90} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <H0 title="Cards" />
          <Space height={30} />
          <Developer title={name.findName()} uri={image.avatar()} rate={1} />
          <Space height={30} />
          <CardInfo obj={cardInfo} />
          <Space height={30} />
          <CardVacancies obj={cardVacancies} />
          <Space height={30} />
          <CardResume obj={cardResume} obj2={cardInfo} />
          <Space height={30} />
          <CardResume obj={cardResume} obj2={cardInfo} bool />
          <Space height={30} />
          <CardIssue obj={cardIssue} />
          <Space height={30} />
          <CardIssueResponceSub obj={cardIssueResponce} />
          <Space height={30} />
          <CardIssueResponce obj={cardIssueResponce} />
          <Space height={30} />
          <CardContacts obj={cardContacts} />
          <Space height={30} />
          <CardCareer obj={cardCareer} />
          <Space height={30} />
          <CardEducation obj={cardEducation} />
          <Space height={30} />
          <CardAbout title={lorem.paragraph()} />
          <Space height={60} />
        </View>
      </ScrollView>
    </>
  )
}

export default UIKit
```

![Step08](/img/steps/08.png)
## Faker

Добавляем файл с фейковыми данными src/data.js

```jsx
import faker from 'faker'

const { image, name, random, company, lorem } = faker

const userData = {
  name: name.findName(),
  uri: image.avatar(),
  star: random.boolean()
}

const cardAbout =
  'For 3 years our company has been engaged in financial technologies in online games, in particular in CS:GO and Dota 2. A significant number of users from all over the world use our platform to quickly and safely exchange, buy or sell their in-game items.'

const cardContacts = {
  location: 'Russia, St. Petersburg, Uprising Square',
  web: 'https://job.cs.money',
  phone: '+7 (499) 899-11-22'
}
const cardInfo = {
  position: 'React-Native Developer, Front-end Developer',
  language: 'Java Script, Python',
  stack: 'React-Native, Apollo, GraphQL, AWS Amplify',
  experience: '5 years',
  salary: 5000
}

const cardResume = {
  title: name.findName(),
  avatar: image.avatar(),
  cost: random.number(),
  rate: random.number()
}

const cardIssue = {
  id: random.uuid(),
  title: 'How to make setState update',
  description: lorem.paragraph(),
  name: name.findName(),
  comments: random.number(),
  uri: image.avatar(),
  rate: random.number()
}

const cardIssueResponce = {
  id: random.uuid(),
  name: name.findName(),
  uri: image.avatar(),
  description: lorem.paragraph(),
  comments: random.number(),
  rate: random.number()
}

const cardIssueResponceSub = {
  id: random.uuid(),
  name: name.findName(),
  description: lorem.paragraph()
}

const cardVacancies = {
  id: random.uuid(),
  title: lorem.text(),
  description: lorem.paragraph(),
  company: company.companyName(),
  cost: random.number()
}

const cardCareer = {
  institution: company.companyName(),
  start: '2018',
  finish: '2019',
  description: lorem.paragraph(),
  link: 'Sertifikat'
}

const cardEducation = {
  institution: company.companyName(),
  start: '2018',
  finish: '2019',
  description: lorem.paragraph(),
  link: 'Sertifikat'
}

export {
  userData,
  cardInfo,
  cardAbout,
  cardContacts,
  cardIssueResponce,
  cardVacancies,
  cardCareer,
  cardEducation,
  cardResume,
  cardIssueResponceSub,
  cardIssue
}
```

![Step09](/img/steps/09.png)
## Build

Собираем проект

```jsx
react-native run-ios
```

или

```jsx
react-native run-android
```

Done ✅

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)

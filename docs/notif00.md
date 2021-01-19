---
id: notif-00
title: Push-уведомления с помощью AWS Amplify
sidebar_label: Push-уведомления
---

Push-уведомления играют важную роль в любом приложении. Это может значительно увеличить взаимодействие с пользователями.

![Push Notifications](/img/notification/00.png)

Настройка push-уведомлений с нуля может быть немного сложной. К счастью, Amplify предоставляет услуги push-уведомлений и SDK для наших приложений. В этом уроке мы узнаем, как интегрировать в наше приложение этот сервис.

![Step01](/img/steps/01.png)

## Создаем новый проект ⚛️

```bash
npx react-native init amplifyPush
```

```bash
cd amplifyPush
```

В корневой директории проекта React Native инициализируем AWS Amplify

```bash
amplify init
```

Отвечаем на вопросы:

![Initialize Amplify](/img/notification/notif_amplify_init.png)

Проект инициализацировался 🚀

## Ставим зависимости:

```bash
yarn add aws-amplify @aws-amplify/pushnotification
```

```bash
npm install --save aws-amplify @aws-amplify/pushnotification
```

Cвязываем зависимость push-уведомлений с помощью команды:

```bash
react-native link @aws-amplify/pushnotification
```

:::caution Чтобы предотвратить эту [ошибку](https://github.com/aws-amplify/amplify-js/issues/5010) в будущем, добавьте библиотеку `netinfo`. Вы можете добавить его в свой проект с помощью следующей команды (если у вас его нет):

```bash
yarn add @react-native-community/netinfo
```

```bash
npm install --save @react-native-community/netinfo
```

:::

![Step02](/img/steps/02.png)

## Android - Настройка Firebase

1. Откройте [Firebase консоль](https://console.firebase.google.com/).
2. Откройте или создайте новый проект для дальнейших действий.
3. Выберите `Cloud Messaging` на панели инструментов.

![Cloud Messaging](/img/notification/notif_cloud_messaging.png)

4.  Нажмите на Android и выполните следующие действия:

- Заполните форму и зарегистрируйте приложение. `Android package name` можно найти в `android/app/build.gradle`. Хранится в `applicationId` выглядеть так:

```java
   gradle title="android/app/build.gradle"
      defaultConfig {
       applicationId "com.amplifypush"
      }
```

- Загрузите файл конфигурации на `android/app`.
- Добавьте Firebase SDK. Рассмотрим `<project>` `android` и `<app-module>` `app`

  каталог в react native проект. Не забудьте добавить последнюю версию `firebase-messaging` [отсюда](https://firebase.google.com/docs/android/setup#available-libraries) а также `firebase-analytics` в `dependencies`

- Запустите проект в Android и вы увидите, подтверждение от Firebase. (вы можете пропустить этот шаг). 5. Открыйте `android/app/src/main/AndroidManifest.xml` и добавьте следующий код в `application`:

```xml
<!--[START Push notification config -->
        <!-- [START firebase_service] -->
        <service
            android:name="com.amazonaws.amplify.pushnotification.RNPushNotificationMessagingService">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT"/>
            </intent-filter>
        </service>
        <!-- [END firebase_service] -->
        <!-- [START firebase_iid_service] -->
        <service
            android:name="com.amazonaws.amplify.pushnotification.RNPushNotificationDeviceIDService">
            <intent-filter>
                <action android:name="com.google.firebase.INSTANCE_ID_EVENT"/>
            </intent-filter>
        </service>
        <receiver
            android:name="com.amazonaws.amplify.pushnotification.modules.RNPushNotificationBroadcastReceiver"
            android:exported="false" >
            <intent-filter>
                <action android:name="com.amazonaws.amplify.pushnotification.NOTIFICATION_OPENED"/>
            </intent-filter>
        </receiver>
    <!-- [END Push notification config -->
```

![Step03](/img/steps/03.png)

## Настройка Amplify для FCM

1. Добавьте службу push-уведомлений с помощью следующей команды в каталоге проекта:

```bash
 amplify add notifications
```

2. Выберите `FCM`:

```bash
 ? Choose the push notification channel to enable.
 APNS
 ❯ FCM
 Email
 SMS
```

3. Введите точное имя ресурса (или просто нажмите ввод, не заполняя ничего).
4. У вас спросят `ApiKey`. Для этого вам необходимо выполнить следующие шаги:

- Откройте [Firebase консоль ](https://console.firebase.google.com/) и откройте приложение, которое вы создали на предыдущих шагах.
- Нажмите на значок в разделе `Project Overview` на панели инструментов и выберите `Project settings`. ![Настройки проекта](/img/notification/notif_project_settings.png)
- Выберите вкладку `Cloud Messaging` и скопируйте значение `Server key`. ![Настройки проекта](/img/notification/notif_api_key.png)

5. Вставьте запрошенный значения для `ApiKey`.
6. После завершения настройки запустите `amplify push`.

![Step04](/img/steps/04.png)

## iOS - Настройка

1. Устанавливаем `@react-native-community/push-notification-ios`:

```bash
yarn add @react-native-community/push-notification-ios`
```

```bash
npm install --save @react-native-community/push-notification-ios
```

2. Выполните следующую команду для iOS:

   ```bash
   cd ios && pod install && cd ..
   ```

3. Добавьте уведомления iOS командой `amplify add notifications` :

   1. Выбирайте `APNS`:

   ```bash
   ? Choose the push notification channel to enable.
      > APNS
      FCM
      Email
      SMS
   ```

   2. Затем вам будет предложено ввести метод аутентификации. Рекомендуется выбрать сертификат.

   ```bash
   ? Choose authentication method used for APNs (Use arrow keys)
   > Certificate
   Key
   ```

   3. Если вы выбрали сертификат, вам будет предложено указать путь к сертификату .p12. (Вы можете использовать этот [туториал](https://mobincube.zendesk.com/hc/en-us/articles/200511933-How-to-get-the-p12-file-and-provisioning-profile-for-publishing-an-app-on-App-Store)).
   4. Запустите `amplify push`.

   5. Откройте `.xcworkspace` с помощью XCode.

   6. Выберите проект и выберите название проекта в разделе `TARGETS`. Выберите `Signing & Capabilities` и нажмите `+` перед`Capability`. Выберите `Background Mode - Remote Notifications`.

![Step05](/img/steps/05.png)

## Настройка приложения

Как было сказано ранее, `Analytics` должна быть интегрирована вместе с уведомлениями. Это поможет отследить уведомления. Хотя можно использовать пользовательские свойства, рекомендуется использовать файл `aws-exports`.

В `App.js` добавьте следующую конфигурацию:

```js
...
import Amplify from 'aws-amplify'
import PushNotification from '@aws-amplify/pushnotification'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

PushNotification.configure(awsconfig)
...
```

![Step06](/img/steps/06.png)

## Working with API

Обычно мы хотим отправлять push-уведомления конкретным пользователям для различных целей. API предоставляет нам различные методы для обработки наших пользователей и push-уведомлений.

## onRegister

Каждое устройство может быть распознано с помощью push-токена, с помощью которого вы можете указать устройство, для которого вы хотите получить push-уведомление. Когда пользователь открывает приложение в первый 🥇 раз, выдвинутый токен извлекается и сохраняется на устройстве. Вы должны знать о том, что этот метод может быть вызван снова в будущем, поэтому вы должны быть готовы к этой ситуации, чтобы обновить свои данные в соответствии с ним.

Вы можете добавить следующий код в `App.js`:

```js
PushNotification.onRegister(token => {
  console.log('in app registration', token)
  PushNotification.updateEndpoint(token)
})
```

**attention**: В Android может быть проблема, что этот метод никогда не будет вызван! Однако [обходной путь](https://github.com/aws-amplify/amplify-js/issues/2643#issuecomment-523610933) может быть таким везде, где вам может понадобиться токен:

```js
...
import {NativeModules} from 'react-native'
...
NativeModules.RNPushNotification.getToken((token) => {
  console.log(`PushToken: ${token}`)
})
...
```

## onNotification

Если вы хотите что-то сделать, когда уведомление получено, метод `onNotification` для действий на основе полученного уведомления. Не забывайте, что структура объектов уведомлений отличается от Android и iOS. В iOS, Вам [следует](https://reactnative.dev/docs/pushnotificationios.html#finish) использовать метод `finish`. Вы можете добавить следующий код в `App.js`:

```js
...
import PushNotificationIOS from '@react-native-community/push-notification-ios'
...
PushNotification.onNotification((notification) => {
  console.log('in app notification', notification)
  if (Platform.OS === 'ios') {
    notification.finish(PushNotificationIOS.FetchResult.NoData)
  }
})
```

## onNotificationOpened

Распространенный сценарий - когда пользователь открывает push-уведомление, вызывается `onNotificationOpened`. `App.js` выглядет так:

```js
PushNotification.onNotificationOpened(notification => {
  console.log('the notification is opened', notification)
})
```

## requestIOSPermissions

Push-уведомление работает только на реальном устройстве и не будет получать никаких уведомлений, если конечный пользователь не даст разрешение. `requestIOSPermissions` нужен для получения этого разрешения. Он может быть вызван без каких-либо параметров, или вы можете настроить объект следующим образом:

```js
PushNotification.requestIOSPermissions()
// or
PushNotification.requestIOSPermissions({
  alert: true,
  badge: true,
  sound: false
})
```

![Step07](/img/steps/07.png)

## Тестирование

Прежде всего, мы хотим взглянуть на файл `App.js`.

```js
import React from 'react'
import { SafeAreaView, Platform, Text, NativeModules } from 'react-native'

import PushNotificationIOS from '@react-native-community/push-notification-ios'
import Analytics from '@aws-amplify/analytics'
import Amplify from 'aws-amplify'
import PushNotification from '@aws-amplify/pushnotification'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)
PushNotification.configure(awsconfig)

PushNotification.onRegister(async token => {
  console.log('in app registration', token)
  PushNotification.updateEndpoint(token)
})

// In case PushNotification.onRegister didn't work
NativeModules.RNPushNotification.getToken(token => {
  console.log(`PushToken: ${token}`)
})

PushNotification.onNotification(notification => {
  console.log('in app notification', notification)
  if (Platform.OS === 'ios') {
    notification.finish(PushNotificationIOS.FetchResult.NoData)
  }
})

PushNotification.onNotificationOpened(notification => {
  console.log('the notification is opened', notification)
})

const endpointId = Analytics.getPluggable('AWSPinpoint')._config.endpointId
console.log(`endpoint ID: ${endpointId}`)

if (Platform.OS === 'ios') {
  PushNotification.requestIOSPermissions()
}

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <Text>Push Notification</Text>
    </SafeAreaView>
  )
}

export default App
```

Запускаем проект:

```bash
react-native run-android
```

```bash
react-native run-ios
```

Чтобы идти дальше, нам нужен один из `endpoint ID` или `Push Token`. Подробно объяснено [тут](https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints.html) `endpoint` в `aws` услугах:

> `Endpoint` представляет пункт назначения, в который вы можете отправлять сообщения, например, на мобильное устройство, адрес электронной почты или номер телефона.

`Push Token` это уникальный идентификатор, который генерируется и присваивается от`GCM`(Android) или `APNS`(iOS) к вашему приложению в конкретном устройстве.

Наиболее очевидное различие между этими двумя заключается в том, что `endpoint` генерируется из `aws`, и определяет приложение в устройстве независимо от платформы (iOS / Android). Но токен в зависимости от платформы генерируется либо от `Apple` или `Google`.

Мы используем `console.log` для копирования и сохраняем эти ключи для следующих шагов. Перейдите в режим разработки и скопируйте в консоль следующие значения:

![Tokens](/img/notification/notif_console_tokens.png)

Хотя существует несколько способов отправки тестового push-уведомления на определенное устройство, мы изучим самый простой способ.

1. Выполните следующую команду в корне проекта:

```bash
amplify notification console
```

2. Консоль приложения будет автоматически открыта в браузере.
3. Выберите `Test messaging` в левой боковой панели:

![Test messaging](/img/notification/notif_aws_notif_console.png)

4. В разделе `Channel` , выберите `Push notifications`.

5. Раздел `Destinations` выглядит следующим образом: ![Destinations](/img/notification/notif_testing_message_dest.png)

6. `Destination type` определяет, хотите ли вы использовать `Endpoint IDs` или `Device Tokens`(или `Push token` в предыдущих шагах) в следующем вводе текста.

7. Вставьте токен, который хотите использовать, на основе `Destination type`.

8. Если вы выбрали `Endpoint IDs` и использовали конечную точку, то `Служба push-уведомлений` может автоматически обнаружить ваше устройство. В противном случае, если вы использовали `Device token`, для IOS выберите `APNS`, а для Android - `FCM`.

9. Вы можете заполнить раздел `Message`, как показано ниже, и нажать кнопку `Send message`. ![Destinations](/img/notification/notif_testing_message_message.png)

10. Вы получите сообщение об успехе, как показано ниже. ![Success](/img/notification/notif_testing_message_success.png) Через пару секунд Вы увидите push-уведомление на своем устройстве: ![Push notification result](/img/notification/notif_android_push_result.png)

## Done ✅

## Ссылки:

[Amplify Docs](https://docs.amplify.aws/lib/push-notifications/getting-started/q/platform/js)

[Setting up Android Push Notifications with AWS Amplify](https://medium.com/@dantasfiles/setting-up-android-push-notifications-with-aws-amplify-e6334c6356d8)

[Testing Push Notifications with AWS Amplify & CLI](https://medium.com/@dantasfiles/testing-push-notifications-with-aws-amplify-9126bd621d3a)

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

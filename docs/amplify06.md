---
id: amplify-06
title: AWS Amplify Studio
sidebar_label: Studio
---

# AWS Amplify Studio – Figma to Fullstack React App With Minimal Programming

<<<<<<< HEAD
AWS Amplify announces AWS Amplify Studio, a visual development environment that offers frontend developers new features (public preview) to accelerate UI development with minimal coding, while integrating Amplify’s powerful backend configuration and management capabilities. Amplify Studio automatically translates designs made in Figma to human-readable React UI component code. Within Amplify Studio, developers can visually connect the UI components to app backend data.

For configuring and managing backends, Amplify Admin UI’s existing capabilities (such as “data”, “authentication”, “storage”, and more) will be part of Amplify Studio going forward, providing a unified interface to enable developers to build full-stack apps faster.

![AWS Amplify Studio](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/ezgif-3-b98b50e3f6a6.gif)

To show case the new UI capabilities, let’s build a “Home Listing” application that shows the most recently added homes.

## Build your backend and frontend in one visual development environment
First, let’s deploy this starter React app which includes a GraphQL API backend and a React frontend with the libraries. Click on the button below to deploy:

[![Deploy with Amplify Hosting](/img/amplify/deploy.png)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/renebrandel/amplify-homes)

This workflow forks a GitHub repository and deploys a new Amplify app with a pre-configured backend.

Once deployed, click “Open Studio” to browse your Amplify app configurations.

![AWS Amplify Studio](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/open-studio-1024x333.png)

Explore the data model in the “Data model” section. In this case we have “Home” model with just a few fields to represent a listing.

![AWS Amplify Studio](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/Bitmap.png)

Next, let’s use the content tab to auto-generate some random seed data for your app.

Click on “Content” and then select to “Auto-generate seed data” under the “Actions” menu to seed your database with sample data. Let’s create 5 records for now and also introduce the constraint of “Street address” to the address field to make the auto-generated seed data more semantically accurate.

![AWS Amplify Studio](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/auto-generate.png)

Next, add in some image URLs to into the record’s “image_url” field. (Tip: if you don’t have a image URL handy, [try using Unsplash’s random photo generator.](https://source.unsplash.com/random)

Your content tab should look something like this:

![AWS Amplify Studio](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/generated-data-1024x332.png)

Time to build the frontend. Let’s explore the new “UI Library” preview feature.

## Seamless designer-to-developer hand-off

With Studio’s new “UI Library (Preview)”, you can sync components from Figma to Amplify Studio. Amplify also provides you a handy Figma file to get started faster. The Amplify Figma file includes both UI primitives and pre-built components. Studio can also sync any new components created in Figma as well!

Let’s clone the Figma file as Amplify Studio suggests. Note: this step will require you to have a free Figma account.

![The Amplify Figma](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/figma-1024x465.png)

Explore the Amplify UI component primitives in the “Primitives” Figma page. You can also find a range of pre-built UI components in the “My Components” page.

Optionally, you can also create your new Figma component. You can skip this step and use the pre-built “CardB” component instead if you want. Design a new component in Figma like you’d normally do! I’ll create a new component with auto-layout support an image on top and a couple of Text elements below.

![The Amplify Figma](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/ezgif-7-f1887ba40849.gif)

Back in Studio, paste in the Figma file link to import all the components from your Figma file. You can either choose individual components to import or import all of them via the “Accept all” button on the top right corner.

![AWS Amplify Studio](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/Figma-Link-Copy-1024x358.png)

## Bind UI components to data

With your UI library populated, let’s bind some of these components to data.

Select the component and click “Configure”. In the UI component editor, you can define component properties and then bind them to different UI elements. For our app, let’s add a new property called “home” and select the “Home” type.

To bind images, you can simply select the “src” property and bind it to the home’s “image_url” field.

Next, select the child elements and bind their “label” to a value from the listing property. We can bind the text element to the home’s address. For price, we can even use some lightweight syntax expression to have the UI render “Price: $” + “home.price” + “/night”.

![UIcomponents](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/ezgif-2-4727ada72873.gif)

To see how your component scales with different information and data, click on “Shuffle preview data” and Studio will shuffle through your app data and populate the component with live data.

![UIcomponents](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/ezgif-6-cb3ef86701f6.gif)

## Create a collection

Individual components are great but most of the time you’ll want to show a “collection” of a component. With Amplify Studio, you can make a collection of any component by clicking the “Create collection” button on the top right corner. Configure all your layout options on the left hand side and then configure your data sources on the right hand side.

![collection](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/collection-modal.png)

Let’s use a grid layout for this collection and set the column count to 3. In addition, let’s add 10px padding to all sides of the element to additional spacing.

![collection](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/collection-layout-1024x574.png)

Next, let’s modify the data set used to populate the collection and add a new sort condition to sort by the newest homes to oldest homes. Choose “Add sort”, then select “createdAt” and “Descending” as the sort condition.

![collection](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/collection-data.png)

## Pull into your React app

Let’s get the component code into our React app! To get the starter React code, all you have to do is clone your fork of the GitHub repository, the command should look something like this:

```bash
git clone git@github.com:<GITHUB_USERNAME>/amplify-homes.git
```

![react](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/Screen-Shot-2021-12-02-at-7.12.13-AM-300x149.png)

Then change into the “amplify-homes” directory:

```bash
cd amplify-homes
```

Note, if this is your first time setting up an Amplify project locally, you’ll need to install the Amplify CLI by running:

```bash
npm install -g @aws-amplify/cli
```

Then, click on “Get component code” to retrieve the component code. In this sample repository, the “initial project setup”, which includes adding the correct dependencies and importing the default CSS styles, is mostly completed already. You only need to install all npm dependencies locally:

```bash
npm install
```

Next, follow the instructions in the “Get component code” modal. Pull your UI components into your app’s code base:

```bash
amplify pull --appId <YOUR_APP_ID> --envName <YOUR_ENV>
```

After the `amplify pull`, a few key files have been added to your React code base:

• “ui-components/” contains all UI components from your Figma file as React code
• “models/” contains the local representation of your data model, allowing you to use it with DataStore to fetch, update, and subscribe to your app data
• “aws-exports.js” defines all backend connection details such as API endpoints, API keys, or Amazon Cognito user pool ids

Now, let’s add the UI components to your app. Go to your App.js and import the UI component. Then, place them in the render function. Your App.js file should look something like this:

```jsx
import './App.css'
import { NewHomes, NavBar, MarketingFooter } from './ui-components'

function App() {
  return (
    <div className="App">
      <NavBar />
      <NewHomes />
      <MarketingFooter />
    </div>
  )
}

export default App
```

We also imported the “NavBar” element and the “MarketingFooter” as well to make the app more delightful faster. To test your app, run:

```bash
yarn start
```

You should see something like this in your browser:

![app](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/Running-app-1024x791.png)

## Extend in Code

The generated UI components accept properties [available on the “Flex” component](https://ui.docs.amplify.aws/components/flex) or properties [available on the “Collection” component.](https://ui.docs.amplify.aws/components/collection)

For example, to make a component go full width you can use all the properties available on an Amplify UI “Flex” component. In this case, I’ve set width={“100vw”} for the NavBar and the MarketingFooter, so it scales with my browser window size. We can also enable pagination for NewHomes by setting the isPaginated and itemsPerPage properties.

```jsx
import './App.css'
import { NewHomes, NavBar, MarketingFooter } from './ui-components'

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"}/>
      <NewHomes isPaginated itemsPerPage={3}/>
      <MarketingFooter width={"100vw"}/>
    </div>
  )
}

export default App
```

Now, you can change the window size and also paginate through the collection as well.

![reactapp](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/ezgif-6-5c05151a6886.gif)

There are many more customizations you can apply in code such as applying overrides to child elements, setting up onClick handlers for collection items, or set hover states on icons. Review Extend via Code in the Amplify Studio documentation.

## Amplify UI Library – from Preview to General Availability

Amplify Studio’s UI library feature is currently still in developer preview. There is a range of improvements we’re making before general availability:

• Ability to define event-based actions within Studio (e.g. on clicking a component, go to a specific page)

• Add search, pagination, and filtering on collections

• Ability to define S3 storage bindings (e.g. link an avatar to a user’s profile picture)

• More UI components (color pickers, maps, avatar, file uploader)

## Links

The original article on [AWS Amplify Studio](https://aws.amazon.com/ru/blogs/mobile/aws-amplify-studio-figma-to-fullstack-react-app-with-minimal-programming)
=======
![AWS Amplify Studio](https://d2908q01vomqb2.cloudfront.net/0a57cb53ba59c46fc4b692527a38a87c78d84028/2021/12/02/ezgif-3-b98b50e3f6a6.gif)


Перед тем как мы перейдем к стадиям "Модельной разработки", посмотрим на традиционный метод разработки приложений - «Разработка по фичам» - это метод, при котором ставиться задача с описанием функциональности и с ссылкой на [Zepllin](https://zeplin.io) и в лучшем случае ссылки на экраны прототипа в [Marvel App](https://marvelapp.com). Когда программист получает задачу на разработку фичи, то он разделяет ее на три части:
- Верстает UI
- Создает экраны с навигацией 
- Реализует логику взаимодействия локального и облачного хранилища базы данных

![ModelDevs!](/img/graphql/features.png)

В результате от желаемого мы видим картину, где UI компоненты верстаются прямо на экранах и слой верстки сливается с навигацией и логикой на одном экране, что в свою очередь выходит за границы методологии "Атомарный дизайн (Atomic design)" и его лозунга «Создавайте системы, а не страницы».

![ModelDevs!](/img/graphql/features2.png)

Недостаточная проработка требований на первом этапе может привести к тому, что реализованная функциональность будет работать совсем не так, как ожидалось аналитиком, а только так, как её понял разработчик. Что, к сожалению, в современном мире происходит достаточно часто и приводит к возврату задачи разработчику.

Для того чтобы исключить эту проблему я использую альтернативный способ разработки, он же метод «Модельная разработка». Основное его отличие от метода «Разработка по фичам» в том, что изначально мы ставим задачу в виде типизируемой модели(схемы) [TypeScript](https://www.typescriptlang.org) и GraphQL, что позволяет разработчику использовать типизацию кода не по остаточному принципу, как это обычно бывает, а фундаментально на уровне создания технического задания. И так мы изначально закладываем в задачу типизируемую модель реализации базы данных, что дает нам возможность контролировать точность выполнения задачи на протяжении всего жизненного цикла выполнения задачи из бэклога в done.



![ModelDevs!](/img/graphql/graphql.png)

А также тем, что слой компонентов изолируется от экранов и бизнес логики фреймворком [Storybook](https://storybook.js.org) - это инструмент с открытым исходным кодом для изолированного создания компонентов пользовательского интерфейса и страниц. Он упрощает разработку пользовательского интерфейса, тестирование и документацию.

![ModelDevs!](/img/graphql/features3.png)

В результате мы делим всю разработку на три этапа и распределяем ее между тремя разработчиками одного звена:

- Верстальщик(Junior) - верстка - UI Components 
- Сборщик(Middle) - сборка экранов и логики навигации - Screens
- Проектировщик(Senior) - разрабатывает техническое задание в виде [TypeScript](https://www.typescriptlang.org) и [GraphQL](https://graphql.org) модели - Logic.

![ModelDevs!](/img/graphql/features4.png)

Самый лучший способ что-то объяснить, показать пример на себе, поэтому покажу, как я проектирую истории для своего мобильного приложения ["Игра Лила"](https://onelink.to/be972z) с помощью метода «Модельная разработка». 

![Игра Лила](/img/qrcodes/leela.png)

Сейчас мы создадим историю на декомпозицию экрана ProfileScreen.

![ModelDevs!](/img/mvp/00.jpg)

С этим методом разработка приложения может быть в разы быстрей и называется он «Модельная разработка», потому что любая история декoмпозируется на три задачи, где в одной задаче реализуется [TypeScript](https://www.typescriptlang.org) модель, во второй [GraphQL](https://graphql.org) модель, а в третей ее деплой на сервер:

![model](https://media.giphy.com/media/xTiTnqPpGCiZG7Us7K/giphy.gif?cid=ecf05e4790tj8ym3wpxkfwm9xs09iv9xrughmtj9pwhg6pzu&rid=giphy.gif&ct=g)

## Шаг 1 - UI Components - Верстка - TypeScript модель компонента

![ModelDevs!](/img/logo/storybook.png)

![ModelDevs!](/img/uikit/ui-componets.jpg)

UI Components - это набор инструментов пользовательского интерфейса с исходным кодом, который изолирует связь с экранами и навигацией, а также со слоем логики, внутри кроссплатформенного фреймворка компонентов пользовательского интерфейса. 

Создание мобильного приложения React Native начинается с создания UI Components в [Storybook](https://storybook.js.org), из которых будет строиться приложение. Это наши строительные блоки, атомы, молекулы, организмы, из которых состоит вся визуальная часть приложения(screens). 

[Storybook](https://storybook.js.org) - это разработка надежных пользовательских интерфейсов предоставляет «песочницу» для изолированного создания пользовательских интерфейсов, чтобы вы могли разрабатывать труднодоступные состояния и крайние случаи.

Благодаря тому, что мы делаем приложение по правилам [Storybook](https://storybook.js.org) наши компоненты легко переносятся на [React Native for Web](https://necolas.github.io/react-native-web/). Из-за чего мы получаем UI-kit не только для мобильной разработки, но также мы можем использовать его и на сайте, получая ускорение процесса разработки в два раза по верстке, так как нам не нужно верстать компоненты для сайта отдельно от мобильной платформы. 


> "Storybook - это мощный инструмент фронтенда, который позволяет командам проектировать, создавать и организовывать компоненты пользовательского интерфейса (и даже полные экраны!), Не отвлекаясь от бизнес-логики и сантехники."

> Brad Frost - автор Atomic Design

В наше время кого не спроси про атомарный дизайн (Atomic design), то следовать под его лозунгом «Создавайте системы, а не страницы» готовы все, но к сожалению на практике разработчики продолжают создавать страницы к которым прикручивают бизнес-логику.

Основные преимущества создания UI Components в [Storybook](https://storybook.js.org):
- Изоляция
- Имитация труднодоступных варианты использования
- Документация вариантов использования в виде историй
- Ускорение своего рабочий процесс с помощью надстроек
- Внешний вид визуального теста
- Функциональность модульного тестирования
- Тест доступности
- Документируйте пользовательский интерфейс, чтобы поделиться с вашей командой
- Получите своевременную обратную связь во время разработки
- Совместное использование компонентов между экранами и приложениями
- Автоматическое создание документации пользовательского интерфейса


Так как мы с самого начала типизируем компоненты, то таким образом мы закладываем фундамент для создания модели базы данных для локального хранения и на стороне бэкенда.

Так же как и отделить верстку от экранов - это приоритетная граница на первом шаге разработки приложения. На этом шаге закладывается компонентная разработка на уровне дизайна приложения. Программисту даже не нужно придумывать названия компонентов, так как они написаны на артбордах в программе [Sketch](https://www.sketch.com) App или [Figma](https://www.figma.com). В среднем, в день, можно сверстать 3-6 компонентов. Благодаря этому мы можем посчитать человеко-часы разработчика на создание UI-кита, а далее и всего приложения. 

![ModelDevs!](/img/mvp/01.jpg)

При разработке с помощью React Native вам необходимо вручную настроить приложение, чтобы оно отлично смотрелось на экранах разных размеров. Это утомительная работа, поэтому [react-native-size-matters](https://github.com/nirsky/react-native-size-matters) предоставляет несколько простых инструментов, которые значительно упростят масштабирование. Идея состоит в том, чтобы разработать один раз на стандартном мобильном устройстве с экраном ~ 5 дюймов, а затем просто применить предоставленные утилиты, поэтому размер артборда в [Sketch](https://www.sketch.com) для дизайна 320x568px.

Переходим к созданию технического задания на разработку компонентов UI Components в [Storybook](https://storybook.js.org). 

Для этого экрана мы реализуем две [TypeScript](https://www.typescriptlang.org) модели:
 
### TypeScript модель компонента Txt

```typescript
import { StyleProp, TextStyle } from 'react-native'

type sizeType = 'xLarge' | 'large' | 'medium' | 'small'

interface TxtT {
  h0?: boolean
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  color?: string
  textAlign?: string
  title: string
  numberOfLines?: number
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'
  textStyle?: StyleProp<TextStyle>
}
```

### TypeScript модель компонента Avatar


```typescript
import { StyleProp, ViewStyle, TextStyle } from 'react-native'

type sizeType = 'xLarge' | 'large' | 'medium' | 'small'

interface AvatarT {
  loading: boolean
  avatar: string 
  onPress?: () => void
  size?: sizeType
  viewStyle?: StyleProp<ViewStyle>
}
```

Скорость - 3 - 6 компонентов в день
￼
## Шаг 2 - Прототип - Навигация - GraphQL модель экрана 
Компиляция на экранах - модель экрана - это сумма моделей экрана компонентов на экране. Создаются экраны они же артборды в [Sketch](https://www.sketch.com), где мы объединяем компоненты и позиционируем их относительно друг друга. На этом этапе подключается навигация. В результате у нас готовый прототип, который можно согласовать с клиентом. Благодаря тому, что компоненты типизированы [TypeScript](https://www.typescriptlang.org), мы можем сложить модели компонентов на экране и поставить задачу на разворачивание бэкенда с помощью фреймворка [AWS Amplify](https://aws.amazon.com/ru/amplify/).
Изначально [GraphQL](https://graphql.org) разрабатывался для облегчения работы фронтендеров и в тоже время стал языком общения serverless архитекторов AWS, где типизированные модели стали строительными блоками. 

Даже если в ваших планах нет возможности или интереса использовать в проекте фреймворк [AWS Amplify](https://aws.amazon.com/ru/amplify/), то первые два шага этого метода применимы и к вашему проекту даже без типизации моделей.

![ModelDevs!](/img/mvp/00.jpg)

```graphql
type History @model @auth(rules: [{ allow: owner, ownerField: "owner", operations: [create, update, delete] }]) {
  id: ID!
  step: Numbers! 
  cube: Numbers!
  plan: Numbers!
}

type UserProfile @model @auth(rules: [{ allow: owner, ownerField: "owner", operations: [create, update, delete] }]) {
  id: ID!
  avatar: String!
  firstName: String!
  lastName: String!
  plan: Numbers!
}
```

Скорость - 3 - 6 экранов в день

## Шаг 3 - Логика - Деплой модели
Так как код клиента в [AWS Amplify](https://aws.amazon.com/ru/amplify/) генерируется автоматически, так же как клиент к нему, то после того, как заказчик принял прототип, подключается клиент к серверу путем публикации схемы на сервере командой `amplify push`. 

![deploy](https://media.giphy.com/media/1iTJ8HydjTxQgvYs/giphy.gif?cid=ecf05e47fme205pwb28ufczqdftwi7au77gv8130wuvfha7a&rid=giphy.gif&ct=g)

Скорость - 5-10 минут, так как сразу деплоиться схема с шага два и при этом код для создания запросов на сервер писать не надо, так как работает кодогенерация. Весь деплой это [GraphQL модель](https://graphql.org) из шага 2 отправленая одной командой `amplify push`.

Подробнее и о том как задеплоить схему читать [здесь](https://www.jscamp.app/ru/docs/amplify-04/)



Иногда вы попадаете в ненадежную ситуацию, но вам лучше подождать дольше, чем явно провалить операцию. У [Apollo](https://www.apollographql.com) есть [apollo-link-retry](https://www.apollographql.com/docs/react/api/link/apollo-link-retry/) который обеспечивает экспоненциальный откат и запросы на сервер между попытками по умолчанию. Правда он (в настоящее время) не обрабатывает повторы для ошибок [GraphQL](https://graphql.org) в ответе, только для сетевых ошибок. У Redux, MobX понятное дело под капотом этого решения нет так как они не клиенты и приходится задействовать сторонние мидлвари, по причине того, что REST как дедушка на пенсии с поддержкой любимых внуков. 

Подробный разбор [GraphQL](https://graphql.org) vs REST. 

![ModelDevs!](/img/graphql/graphql2.png)

В [AWS Amplify](https://aws.amazon.com/ru/amplify/) есть функция [DataStore](https://docs.amplify.aws/lib/datastore/getting-started/q/platform/js/), которая не только аналог [apollo-link-retry](https://www.apollographql.com/docs/react/api/link/apollo-link-retry/), а также в нее встроенна настраиваемая привычная модель программирования с автоматическим контролем версий, обнаружением конфликтов и разрешением в облаке. К тому же больше не нужно писать дополнительный код, для отправки запроса на сервер после выхода приложения в онлайн, так как он идет из коробки в форме кодогенерации. Папка с моделями `models` и папка `graphql` генерируется автоматически - это слой клиента на все возможные CRUD - Create Read Delete.

![DataStore](/img/dataStore/dataStore09.png)

![DataStore](/img/dataStore/dataStore08.png)

Правда в [AWS Amplify](https://aws.amazon.com/ru/amplify/) Create и Update это один метод [DataStore.save](https://docs.amplify.aws/lib/datastore/data-access/q/platform/js/#create-and-update).


# Serverless

Создание бэкенда на [AWS Amplify](https://aws.amazon.com/ru/amplify/) — это работа с бессерверной (англ. serverless) технологией, поэтому перед тем, как продолжить, мы с вами разберемся с тем, что такое бессерверные вычисления и в чем их преимущества над серверными.

Прогноз ученых мужей из университета Berkeley о том как будут развиваться бэкенд технологии:

> Предоставляя упрощенную среду программирования, бессерверные вычисления значительно упрощают использование облака, тем самым привлекая больше людей, которые могут и будут его использовать. Бессерверные вычисления включают в себя предложения FaaS и BaaS и знаменуют собой важный этап развития облачного программирования. Это избавляет от необходимости ручного управления ресурсами и их оптимизации, которые сегодняшние серверные вычисления навязывают разработчикам приложений, что походит на переход от языка ассемблера к языкам высокого уровня более четырех десятилетий назад.

> Мы прогнозируем, что использование без серверов будет стремительно расти. Мы также прогнозируем, что локальные гибридные облачные приложения со временем будут сокращаться, хотя некоторые развертывания могут сохраняться из-за нормативных ограничений и правил управления данными.

> Бессерверные вычисления станут стандартной вычислительной парадигмой в эпоху облаков, в значительной степени, заменив серверные вычисления и тем самым закрыв эру клиент-сервер.

[Cloud Programming Simplified: A Berkeley View on Serverless Computing](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2019/EECS-2019-3.pdf)

## Бессерверные вычисления

Естественная для облака архитектура, которая позволяет передать большую часть операционной ответственности AWS и тем самым получить больше гибкости и инновационных возможностей. Бессерверные вычисления позволяют создавать и запускать приложения и сервисы, не беспокоясь о серверах. Они устраняют необходимость заниматься вопросами управления инфраструктурой — такими, например, как выделение серверов или кластеров, необходимых ресурсов, а также установка исправлений и обслуживание операционной системы. Их можно использовать практически для любого типа приложений или сервисов серверной части, при этом всё, что требуется для запуска и масштабирования приложения с высокой доступностью, выполняется без вмешательства клиента.

> В нашем определении, чтобы услуга считалась беcсерверной, она должна автоматически масштабироваться без необходимости явной инициализации и оплачиваться в зависимости от использования.

[Cloud Programming Simplified: A Berkeley View on Serverless Computing](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2019/EECS-2019-3.pdf)

Если очень по простому, то бессерверные (Serverless) означает не физическое отсутствие серверов, а отсутствие головной боли по управлению инфраструктурой, ее обслуживания и создания.

Более подробней о преимуществах бессерверной архитектуры читайте [здесь](https://www.jscamp.app/ru/docs/amplify-01).


## Вывод
Сама по себе модель разделения на фронтенд и бэкенд осталось в прошлом вместе с разработчиками по фичам в эпоху serverless технологий, где фуллстэк разработчики реализуют модельную сборку приложений в разы быстрей, чем разработчики по фичам.


<!-- ## Снипет трека на тему "Модельная разработка" 
Прослушать [здесь](https://www.dropbox.com/s/zt51wbt51s1za83/Model%20development.wav?dl=0)

Текст трека - "Модельная разработка": 

Я из классов и функций

предпочитаю функции

TC 39 

моя библия 

Реактнативный 

моя фамилия

Шести этажные рифмы

Сшибаю с ноги я

GraphQL 

мой первый класс

Подписки 

И реалтайм 

из коробки

Я новая школа

Зови OG Buda

Ru drill основал

а это фактам

Хотите слоумо?

За ваш счет легко

Right MVP solution

для ваших приложений 

Зачем писать код,

Если готовы функции?

Вызови их в коде

Кодогенерация

Атомы, 

молекулы,

темплейты, 

организмы.

Логика клиента

Отдельно от скринов

Atomic Design и вестку

В Storybook

Отдельно от 

UI Components

Изолируй бук

Я Гоша Рубчинский

На лукбуках модель

Вспомнил, кто такой

Брендан Эйх

JavaScript в кэмпе

Модельная разработка

Brad Frost сказал

Изолируй UI

Масштабируй 
бук
На других 
своих проектах
В Storybook 
меняй
Воплощая Ui

Скрины и навигация
Готов твой MVP
Когда 
Rest API
пробирается 
Я говорю 
Беги!

Модельная разработка
Стреляет мой глок
Модельная разработка
На спуске курок

2021 
Димка Реактнативный ака Server Serverlesskiy -->

## References:

[Стадии рождения новой функциональности в программном продукте](https://habr.com/ru/company/acronis/blog/250145/)

[Cоздание дизайн-систем с помощью Atomic Design](https://telegraf.design/cozdanie-dizajn-sistem-s-pomoshhyu-atomic-design/)

[Атомарный дизайн (Atomic design)](https://simpleone.ru/glossary/atomarnyj-dizajn-atomic-design/)

[GraphQL: Core Features, Architecture, Pros and Cons](https://www.altexsoft.com/blog/engineering/graphql-core-features-architecture-pros-and-cons/)

[GraphQL: A data query language](https://engineering.fb.com/core-data/graphql-a-data-query-language/)

[GraphQL](https://graphql.org/learn)


<!-- [![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291) -->
>>>>>>> gh-pages

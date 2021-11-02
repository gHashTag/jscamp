---
id: amplify-01
title: Model development
sidebar_label: Serverless
---


Model development of mobile applications [React Native](https://reactnative.dev) and sites on [React Native Web](https://necolas.github.io/react-native-web/).

![ModelDevs!](/img/whales.png)

Before we move on to the stages of "Model Development", let's look at the traditional method of application development - "Feature Development" is a method in which a task is set with a description of the functionality and with a link to [Zepllin](https://zeplin.io ) and, at best, links to prototype screens in the [Marvel App](https://marvelapp.com). When a programmer receives a task to develop a feature, he divides it into three parts:
- Layout UI
- Creates screens with navigation
- Implements the logic of interaction between local and cloud database storage

![ModelDevs!](/img/graphql/features.png)

As a result, from the desired, we see a picture where UI components are laid out right on the screens and the layout layer merges with navigation and logic on one screen, which in turn goes beyond the boundaries of the Atomic design methodology and its slogan “Create systems, not pages. "

![ModelDevs!](/img/graphql/features2.png)

Insufficient elaboration of requirements at the first stage can lead to the fact that the implemented functionality will not work at all as expected by the analyst, but only as the developer understood it. That, unfortunately, in the modern world happens quite often and leads to the return of the task to the developer.

In order to eliminate this problem, I use an alternative development method, also known as the Model Development method. Its main difference from the "Feature Development" method is that initially we set the task in the form of a typed model schema [TypeScript](https://www.typescriptlang.org) and GraphQL, which allows the developer to use code typing not by the residual principle, as is usually the case, but fundamentally at the level of creating a technical specification. And so we initially put a typed model of the database implementation into the task, which allows us to control the accuracy of the task throughout the entire life cycle of the task from the backlog to done.

![ModelDevs!](/img/graphql/graphql.png)

And also by isolating the component layer from screens and business logic by the [Storybook](https://storybook.js.org) framework , an open source tool for building UI components and pages in isolation. It simplifies user interface development, testing, and documentation.

![ModelDevs!](/img/graphql/features3.png)

As a result, we divide the entire development into three stages and distribute it among three developers of the same tier:

- Layout designer (Junior) - layout - UI Components
- Assembler (Middle) - assembly of screens and navigation logic - Screens
- Designer (Senior) - develops terms of reference in the form of [TypeScript](https://www.typescriptlang.org) and [GraphQL](https://graphql.org) models - Logic.

![ModelDevs!](/img/graphql/features4.png)

The best way to explain something is to show an example myself, so I'll show you how I design stories for my mobile application [Leela's Game](https://onelink.to/be972z) using the Model Development method.

![Игра Лила](/img/qrcodes/leela.png)

Now we will create a history for the decomposition of the ProfileScreen.

![ModelDevs!](/img/mvp/00.jpg)

With this method, application development can be many times faster and it is called "Model Development", because any story is decomposed into three tasks, where one task implements the [TypeScript](https://www.typescriptlang.org) model, the second [GraphQL](https://graphql.org) model, and in the third deploy it to the server:

![model](https://media.giphy.com/media/xTiTnqPpGCiZG7Us7K/giphy.gif?cid=ecf05e4790tj8ym3wpxkfwm9xs09iv9xrughmtj9pwhg6pzu&rid=giphy.gif&ct=g)

## Шаг 1 - UI Components - Layout - TypeScript component model

![ModelDevs!](/img/logo/storybook.png)

![ModelDevs!](/img/uikit/ui-componets.jpg)

UI Components is a source-coded UI toolkit that isolates communication with screens and navigation, as well as a layer of logic, within a cross-platform UI component framework.

Building a React Native mobile app begins by creating the UI Components in the [Storybook](https://storybook.js.org) from which the app will be built. These are our building blocks, atoms, molecules, organisms, which make up the entire visual part of the application (screens).

[Storybook](https://storybook.js.org) - This development of robust user interfaces provides a sandbox for building user interfaces in isolation so you can develop hard-to-reach states and edge cases.

Due to the fact that we make the application according to the [Storybook](https://storybook.js.org) rules, our components are easily portable to [React Native for Web](https://necolas.github.io/react-native-web). Because of this, we get a UI-kit not only for mobile development, but we can also use it on the site, getting the development process twice as fast in layout, since we do not need to layout components for the site separately from the mobile platform.


> "Storybook is a powerful front-end tool that allows teams to design, build and organize UI components (and even full screens!) Without getting distracted from business logic and plumbing."

> Brad Frost by Atomic Design

Nowadays, whoever you ask about Atomic design, then everyone is ready to follow its slogan “Create systems, not pages”, but unfortunately, in practice, developers continue to create pages to which they attach business logic.


### The main benefits of creating UI Components in [Storybook](https://storybook.js.org):

#### Insulation
The implementation of the components happens without fiddling with data, APIs or business logic, since the UI Components are isolated from the navigation layer with screens and application clients.

![isolation](https://media.giphy.com/media/d89BjPGXijE0imFOxA/giphy.gif?cid=ecf05e47iatzzyj46if8cvsbnan7th5yxekz0x0fbmxof4lv&rid=giphy.gif&ct=g)

#### Simulate hard-to-find use cases
Rendering components in key states under load that are difficult to reproduce in an application.

![Mock hard](https://storybook.js.org/images/home/build-cases.png)

#### Use case documentation as stories
Save use cases as stories in plain JavaScript to revisit during development, testing, and QC.

![story](https://storybook.js.org/images/home/build-sidebar.png)

#### Speed up your workflow with add-ins
Use add-ons to customize your workflow, test automation, and integrate with your favorite tools.

![addons](https://storybook.js.org/images/home/build-addons.png)

#### Appearance of the visual test
Pinpoint's user interface changes with pixel precision by comparing snapshots of stories images.

![pinpoint](https://storybook.js.org/images/home/test-visual-regression.png)

#### Unit testing functionality
Stories are a practical, reproducible way to track UI edge cases. Write stories once and then reuse them in automated tests.

![unit test](https://storybook.js.org/images/home/test-unit.png)

#### Accessibility test
Check out stories about WCAG and ARIA issues with the addon [A11y](https://storybook.js.org/addons/@storybook/addon-a11y).

![Storybook](https://storybook.js.org/images/home/test-accessibility.png)

#### Document the user interface to share with your team
The stories show how user interfaces actually work, not just how they are supposed to work. This makes it easier to collect testimonials and reproductions.
Storybook is a one-stop source of truth for your searchable user interface.

![Storybook](https://storybook.js.org/images/home/share-search.png)

#### Get timely feedback during development
Publish your Storybook online to give your team a one-stop reference for feedback.

![Storybook](https://storybook.js.org/images/home/share-collaborate.png)

#### Sharing components between screens and applications
Each story is a use case that your team can find and reuse.

![Storybook](https://storybook.js.org/images/home/share-reuse.png)

#### Automatic generation of user interface documentation
Write Markdown / MDX to create a custom site for Component Libraries and Design Systems using the [Docs](https://storybook.js.org/images/home/share-document.png) add-on.

Since we are typing components from the beginning, this is how we lay the foundation for creating a database model for local storage and on the backend side.

As well as separating the layout from the screens, this is a priority border in the first step of application development. This step sets up component development at the application design level. The programmer does not even need to come up with the names of the components, since they are written on artboards in the [Sketch](https://www.sketch.com) App or [Figma](https://www.figma.com) program. On average, 3-6 components can be drawn up per day. Thanks to this, we can calculate the developer's man-hours to create a UI kit, and then the entire application.

![ModelDevs!](/img/mvp/01.jpg)

When developing with React Native, you need to manually configure your app to look great on different screen sizes. This is a tedious job, so [react-native-size-matters](https://github.com/nirsky/react-native-size-matters) provides some simple tools that make scaling a lot easier. The idea is to design once on a standard mobile device with ~ 5 "screen and then just apply the utilities provided, so the artboard size in [Sketch](https://www.sketch.com) for the design is 320x568px.

Let's move on to the creation of technical specifications for the development of UI Components in the [Storybook](https://storybook.js.org).

For this screen, we will implement two [TypeScript](https://www.typescriptlang.org) models:
 
### TypeScript Txt Component Model

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

### TypeScript Avatar Component Model


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
## Step 2 - Prototype - Navigation - GraphQL Screen Model
Compilation on Screens - The screen model is the sum of the screen models of the components on the screen. Screens are created, they are also artboards in [Sketch](https://www.sketch.com), where we combine components and position them relative to each other. At this stage, navigation is connected. As a result, we have a ready-made prototype that can be agreed with the client. Thanks to the fact that the components are typed by [TypeScript](https://www.typescriptlang.org), we can lay down the component models on the screen and set the task to deploy the backend using the [AWS Amplify](https://aws.amazon.com/ru/amplify/) framework .
Initially, [GraphQL](https://graphql.org) was designed to make frontend work easier and at the same time became the serverless language of AWS architects, where typed models became the building blocks.

Even if your plans do not have the opportunity or interest to use the [AWS Amplify](https://aws.amazon.com/ru/amplify/) framework in the project, then the first two steps of this method are applicable to your project, even without typing models.

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

Speed - 3 - 6 screens per day

## Step 3 - Logic - Deploy Model
Since the client code in [AWS Amplify](https://aws.amazon.com/ru/amplify/) is generated automatically, just like the client to it, after the client has accepted the prototype, the client connects to the server by publishing schemas on the server with the `amplify push` command.

![deploy](https://media.giphy.com/media/1iTJ8HydjTxQgvYs/giphy.gif?cid=ecf05e47fme205pwb28ufczqdftwi7au77gv8130wuvfha7a&rid=giphy.gif&ct=g)

The speed is 5-10 minutes, since the scheme is immediately deployed from step two and at the same time there is no need to write code to create requests to the server, since code generation works. The whole deployment is the [GraphQL model](https://graphql.org) from step 2 sent with a single `amplify push` command.

Read more and how to deploy the scheme [here](https://www.jscamp.app/ru/docs/amplify-04/)

Sometimes you find yourself in a precarious situation, but you'd better wait longer than clearly fail the operation. [Apollo](https://www.apollographql.com) has [apollo-link-retry](https://www.apollographql.com/docs/react/api/link/apollo-link-retry/) which provides exponential rollback and requests to the server between retries by default. True, it (currently) does not handle retrying for [GraphQL] (https://graphql.org) errors in the response, only for network errors. Redux, MobX, of course, does not have this solution under the hood, since they are not clients and you have to use third-party middleware, due to the fact that REST is like a retired grandfather with the support of beloved grandchildren.

Detailed parsing of [GraphQL](https://graphql.org) vs REST.

![ModelDevs!](/img/graphql/graphql2.png)

[AWS Amplify](https://aws.amazon.com/en/amplify/) has a [DataStore](https://docs.amplify.aws/lib/datastore/getting-started/q/platform/js) function , which is not only analogous to [apollo-link-retry](https://www.apollographql.com/docs/react/api/link/apollo-link-retry/), but also has a built-in custom programming model with automatic version control, conflict detection and resolution in the cloud. In addition, you no longer need to write additional code to send a request to the server after the application goes online, since it comes out of the box in the form of code generation. The folder with models `models` and the folder `graphql` are generated automatically - this is the client layer for all possible CRUDs - Create Read Delete.

![DataStore](/img/dataStore/dataStore09.png)

![DataStore](/img/dataStore/dataStore08.png)

True in [AWS Amplify](https://aws.amazon.com/en/amplify/) Create and Update are one method [DataStore.save](https://docs.amplify.aws/lib/datastore/data-access/q/platform/js/#create-and-update).

# Serverless

Creating a backend on [AWS Amplify](https://aws.amazon.com/ru/amplify/) is working with serverless technology, so before proceeding, we'll figure out what is serverless computing and what are their advantages over server-side computing.

A prediction by the University of Berkeley pundits on how backend technology will evolve:

> By providing a simplified programming environment, Serverless Computing makes the cloud much easier to use, thereby attracting more people who can and will use it. Serverless computing includes FaaS and BaaS offerings and marks an important milestone in the evolution of cloud programming. This eliminates the need for manual resource management and optimization that today's server-side computing imposes on application developers, which is like the transition from assembly language to high-level languages ​​over four decades ago.

> We forecast server-free usage to skyrocket. We also predict that on-premises hybrid cloud applications will shrink over time, although some deployments may persist due to regulatory and data governance constraints.

> Serverless computing will become the standard computing paradigm in the cloud age, largely replacing server-side computing and thus ending the client-server era.

[Cloud Programming Simplified: A Berkeley View on Serverless Computing](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2019/EECS-2019-3.pdf)

## Serverless Computing

Cloud-native architecture that allows you to outsource most of your operational responsibility to AWS for more flexibility and innovation. Serverless computing allows you to build and run applications and services without worrying about servers. They eliminate the need to deal with infrastructure management issues such as provisioning servers or clusters, resource requirements, and operating system patching and maintenance. They can be used for virtually any type of back-end application or service, and everything that is required to run and scale a highly available application is done without client intervention.

> In our definition, for a service to be considered serverless, it must scale automatically without the need for explicit provisioning and be billed based on usage.

[Cloud Programming Simplified: A Berkeley View on Serverless Computing](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2019/EECS-2019-3.pdf)

To put it very simply, Serverless means not the physical absence of servers, but the absence of the headache of infrastructure management, maintenance and creation.

# Advantages of serverless architecture:

There are many ways to create an application these days. Decisions made at an early stage can and will affect not only the lifecycle of an application, but also development teams and, ultimately, a company or organization. In this article, I advocate and outline ways to build your applications using serverless technologies using the Model Development methodology. What are the benefits of building an application this way, and why is serverless becoming so popular?

## One programming language

With modern tools and methodologies such as [AWS Amplify](https://aws.amazon.com/en/amplify/), one developer can leverage their existing set of skills and knowledge of a unified platform and ecosystem to build scalable applications, complete with all the features that would have required teams of highly skilled backend programmers and DevOps engineers to build and maintain in the past.

## Less code

The only thing that has value is the function that the code provides, not the code itself. When you find ways to provide these functionality while limiting the amount of code you support and even ditching code entirely, you reduce the overall complexity of your application.
Less complexities mean fewer bugs, easier for new engineers, and overall less cognitive load for those supporting and adding new features.
A developer can connect to these services and implement functions without knowing the actual internal implementation and having little or no internal code.

## No need to manage servers

No need to provision or maintain servers. No installation, maintenance or administration of software or runtime required.

## Scalability

One of the main advantages of not having a server is scalability out of the box. When building an application, you don't have to worry about what happens if your application becomes extremely popular and you connect more new users and the cloud provider can handle it for you.
The cloud provider automatically scales your application by executing code in response to each interaction. In a serverless function, your code runs in parallel and handles each trigger individually (in turn, scales based on the size of the workload).
No need to worry about scaling your servers and databases.

## Development speed

With fewer features, development speed increases. The ability to quickly deploy the types of functions that are typical of most applications (databases, authentication, storage, APIs), and with much less upfront time, allows you to quickly get started writing the core functions and business logic for the function you want to deliver to the end. to the client.

## Experiments

If you don't spend a lot of time creating repetitive features, you can experiment more easily and with less risk.
When submitting a new feature, you often assess the risk (time and money involved in creating that feature) with a possible return on investment (ROI). As the risk associated with trying new things decreases, you may experience ideas that may not have seen the light of day in the past.
We can also test different ideas much easier.

## Security and stability

Since the services you subscribe to are the core competency of the service provider, you get something much more polished and usually more secure than you could possibly create yourself.
Imagine a company whose core business model is focused on providing primary authentication services and has been using it for years, solving and fixing problems for thousands of companies and customers.
Now imagine that you are trying to replicate such a service in your own team or organization. While it is entirely possible and feasible, the chances are that choosing a service created and maintained by people whose only job is to create and maintain this exact thing is a safer and more reliable bet.
Another primary concern of these service providers is simply to keep downtime to a minimum. This means that they take on the burden of not only building, deploying and maintaining these services, but also do their best to ensure their stability and resilience.

## Automatic availability control

Serverless computing provides built-in high availability and fault tolerance. These capabilities do not need to be specially designed because the services that run the application provide them by default.

## Price

With the traditional approach, you often pay for computing resources whether they are being used or not. This means that if you want to ensure that your application will scale, you need to prepare for the largest workload you could see, regardless of whether it reaches that level. After all, this traditional approach meant that you pay for unused resources for most of your application's lifespan.
With serverless technologies, you only pay for what you use. With FaaS (Function-as-a-Service), you are billed based on the number of requests for your functions and the time it takes to execute your function code. With managed services like Amazon Rekognition, you only pay for rendered images, minutes for video processing, and more, again, paying only for what you use.
The bill from your cloud provider is only a fraction of the total cost of your cloud infrastructure, as well as salary. This cost decreases if you have fewer operational resources.
There are also development costs. Building applications in this way speeds time-to-market, reducing overall development time and therefore development costs.
In general, you pay for stable bandwidth or runtime, not for the number of servers you use.

More about pricing [here](https://aws.amazon.com/ru/appsync/pricing/)

## Output
The frontend / backend separation model itself is a thing of the past, together with feature developers in the era of serverless technologies, where full-stack developers implement model assembly of applications many times faster than feature developers.


## References:

[Stages of the birth of new functionality in a software product](https://habr.com/ru/company/acronis/blog/250145/)

[Building design systems with Atomic Design](https://telegraf.design/cozdanie-dizajn-sistem-s-pomoshhyu-atomic-design/)

[Atomic design](https://simpleone.ru/glossary/atomarnyj-dizajn-atomic-design/)

[GraphQL: Core Features, Architecture, Pros and Cons](https://www.altexsoft.com/blog/engineering/graphql-core-features-architecture-pros-and-cons/)

[GraphQL: A data query language](https://engineering.fb.com/core-data/graphql-a-data-query-language/)

[GraphQL](https://graphql.org/learn)


<!-- [![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291) -->

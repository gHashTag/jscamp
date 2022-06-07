---
id: auth1-00
title: Introduction
sidebar_label: Introduction
---

import YouTube from 'react-youtube'

One of the most requested topics among the subscribers of my channel [JS Camp](https://www.youtube.com/channel/UCR8tIQm7pu8MlPewAlUnzQw) is authentication and authorization in the React Native application. Therefore, I decided to devote a separate post to this issue and before we start coding, it is necessary to understand the definition of Authentication / Authorization.

> You can study the course with Expo or through the Android emulator or through any other starter.

![cognito](/img/auth/01.png)

Support Chat AWS Amplify: [Discord](https://discord.gg/6GDAfXn)

## Video

<YouTube videoId="QMObthDaewQ" />

## Authentication

This is a check of the correspondence between the subject and the one for whom he is trying to impersonate, using some unique information (fingerprints, iris color, voice, etc.), in the simplest case - using mail and password.

## Authorization

this is a check and determination of the authority to perform some actions in accordance with the previously performed authentication

At the end of this article, we will make this mobile application with you:

![cognito](/img/auth/00.png)

Authentication is an essential part of almost any application. Knowing who the user is, the user's unique ID, what permissions the user has, and whether they are logged in allows your application to display the correct views and return the correct data for the currently logged in user.

Most applications require mechanisms for registering users, logging in, handling encryption and updating passwords, and a variety of other identity management tasks. Modern applications often require things like OAUTH (open authentication), MFA (multi-factor authentication), and TOTP (time-based passwords).

In the past, developers had to manually unwind all of these authentication features from scratch. This task alone can take the development team weeks or even months to get it right and do it safely. Fortunately, there are fully managed authentication services out there today like Auth0, Okta, and Amazon Cognito that handle all of this for us.

In this article, you will learn how to properly and securely implement authentication in a React Native application using Amazon Cognito with AWS Amplify.

## Amazon Cognito

is a fully managed identity service from AWS. Cognito provides easy and secure user registration, login, access control, token renewal, and user identity management. Cognito scales to millions of users and also supports login with social media providers like Facebook, Google, and Amazon.

Cognito has two main parts: user pools and identity pools.

## User Pools

User pools provide a secure user directory that stores all of your users and scales to hundreds of millions of users. It is a fully managed service. As a serverless technology, custom pools are easily configured without the worry of maintaining any infrastructure. User pools are what governs all users who register and log into an account, and is the main part we will focus on in this article.

## Identity pools

Identity pools allow you to authorize users logged into your application to access various other AWS services. Let's say you want to give the user access to a lambda function so they can get data from another API. You can specify this when creating an identity pool. User pools include the fact that the source of these identifiers could be a Cognito user pool or even Facebook or Google.

Scenario where Amazon Cognito User Pool and Identity Pool are used together.

See diagram for general Amazon Cognito scenario. The goal here is to authenticate your user and then grant him access to another AWS service.

![cognito](/img/auth/auth00.png)

1. In the first step, the user of your application logs in through the user pool and receives the user pool tokens after successful authentication.

2. Your application then exchanges user pool tokens for AWS credentials through the identity pool.

3. Finally, the user of your application can then use these AWS credentials to access other AWS services such as Amazon S3 or DynamoDB.

Cognito User Pools allows your application to call various methods on a service to manage all aspects of user authentication, including things like:

- User registration
- User login
- User logout
- Change user password
- Reset user password
- MFA code confirmation
- Amazon Cognito integration with AWS Amplify

AWS Amplify supports Amazon Cognito in a variety of ways. First of all, you can create and configure Amazon Cognito services directly from the AWS Amplify CLI. Once you create an authentication service through the CLI, you can call various methods (such as signUp, signIn, and signOut) from your JavaScript application using the Amplify JavaScript client library. Amplify also has pre-configured UI components that let you build entire authentication flows in just a couple of lines of code for frameworks like React, React Native, Vue, and Angular.

## You ask how much does it all cost?

#### Pay only for what you use. No minimum fees.

When you use Amazon Cognito Identity to create your user pool, you only pay for your monthly active users (MAU). MAUs are users who have performed at least one identification operation during a calendar month: registration, authorization, token renewal or password change. Subsequent sessions of active users and inactive users during this calendar month are not charged.
![cognito](/img/auth/auth01.png)

CODING TIME 👨🏼‍💻👩🏻‍💻

![cognito](https://media.giphy.com/media/836HiJc7pgzy8iNXCn/giphy.gif)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖</a><a href="#financial-gHashTag" title="Financial">💵</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

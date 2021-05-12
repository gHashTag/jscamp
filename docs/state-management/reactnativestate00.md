---
id: reactnativestate00
title: MobX
sidebar_label: MobX
---

> Simple scalable state management.

## Introduction

MobX is a field-proven library that makes state management simple and scalable through the transparent application of functional reactive programming (TFRP).

The MobX philosophy is simple:

### Simple 😙

Write minimalist, boilerplate-free code that reflects your intent. Trying to update a record field? Use good old JavaScript assignment. Updating data in an asynchronous process? No special tools are required, the reactivity system will detect all your changes and propagate them to where they are used.

### Optimal rendering effortlessly 🚅

All changes and usage of your data are tracked at runtime, creating a dependency tree that captures all relationships between state and output. This ensures that your state-specific computations, such as React components, are only done when strictly necessary. There is no need to manually optimize components using error prone and suboptimal techniques like memoization and selectors.

### Architectural freedom 🤹🏻‍

MobX is obscure and allows you to manage the state of your application outside of any UI framework. This makes your code independent, portable, and above all, easily testable.

## Installing dependencies

MobX 6 has released a compatible companion package `mobx-react-lite @ 3`, which supports React Hooks and functional components.

We will also install the `nanoid` library for creating unique `id` and a library with the checkbox component `@ react-native-community / checkbox`

```bash npm2yarn
npm install mobx mobx-react-lite nanoid @react-native-community/checkbox
```

## Enabling decorators
To use decorators, follow these steps.

### TypeScript

Include the ExperimentalDecorators compiler option in `tsconfig.json`, or pass it to the compiler as the `--experimentalDecorators` flag. You must target es5 + (es5, es6, ...) using the target parameter or the --target flag.

## React Native

When using c react native the following preset can be used

```bash npm2yarn
npm install @babel/plugin-proposal-decorators
```


## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

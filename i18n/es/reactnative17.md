---
id: reactnative17
title: ESLint & Prettier
sidebar_label: ESLint & Prettier
---

import YouTube from 'react-youtube'


Plugin ES Lint — [https://eslint.org](https://eslint.org) allows you to write your code cleaner, tells you where you make mistakes and, in general, it is a good practice for working in a team, so that everyone has everything in the same style - ES Lint will suggest which variables you do not use, where and which components do not use, shows syntax errors and where you put spaces incorrectly, where you put semicolons, etc. That is, this is already a de facto standard that must be used in writing your code, and this plugin will save you from many stupid mistakes that you make when developing your application.

Prettier - Code formatting tool with support for multiple languages, minimum configuration and maximum imposed rules.

![Step01](/img/steps/01.png)

## Install dependencies

```
 yarn add eslint eslint-config-airbnb babel-preset-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-watch babel-core babel-eslint babel-preset-react-native prettier prettier-eslint eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-native eslint-plugin-react-hooks --dev
```

![Step02](/img/steps/02.png)

## Rules Eslint

Add rules to `.eslintrc.js`

```jsx title=".eslintrc.js"
module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'react-native', 'jsx-a11y', 'import', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    'react-native/react-native': true
  },
  rules: {
    'no-param-reassign': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': ['off'],
    'react/jsx-one-expression-per-line': 0,
    'linebreak-style': ['off'],
    'implicit-arrow-linebreak': 0,
    'no-undef': ['error'],
    'react/sort-comp': ['off'],
    'react/prefer-stateless-function': ['off'],
    'react/destructuring-assignment': 1,
    'function-paren-newline': 0,
    semi: ['error', 'never'],
    'spaced-comment': 0,
    'comma-dangle': ['error', 'never'],
    'react/prop-types': 0,
    'no-extra-boolean-cast': 0,
    'quote-props': 0,
    'object-curly-spacing': ['error', 'always'],
    camelcase: 0,
    'no-nested-ternary': 0,
    'react/jsx-wrap-multilines': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'no-unused-expressions': 0,
    'global-require': 0,
    'max-len': 0,
    'import/no-cycle': 0,
    'no-underscore-dangle': 0,
    'no-return-assign': 0,
    'import/prefer-default-export': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'no-console': 'error',
    'arrow-parens': 0,
    'eol-last': 0,
    'react-native/no-unused-styles': 0,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,
    'consistent-return': 0
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js']
      }
    }
  }
}
```

![Step03](/img/steps/03.png)

## Rules Prettier

Add rules to .prettierrc.js

```jsx title=".prettierrc.js"
module.exports = {
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  trailingComma: 'none',
  bracketSpacing: true,
  semi: false,
  useTabs: false,
  jsxBracketSameLine: false,
  arrowParens: 'avoid'
}
```

![Step04](/img/steps/04.png)

## Editing package.json

Where we add scripts:

- Симулятор. Для меня это iPhone SE так как его размер экрана миниматльное требование по верстке(iPhone 3,4 уже все)
- Линтер, который будет запрещать вам пушить до исправления всех ошибок в коде
- Установка Pods

```jsx  title="package.json"
"scripts": {
   "ios": "react-native run-ios --simulator='iPhone SE'",
   "android": "react-native run-android",
   "lint": "esw src/**",
   "lint-watch": "esw -w --changed src/**",
    "postinstall":"cd ./ios && pod install && cd .."
 },
"precommit": "lint",
```

![Step05](/img/steps/05.png)

## We transfer App.js

Create a folder `src` and move the App.js file there, renaming it `src/index.js`


![Step06](/img/steps/07.png)

## Run the application

`yarn start-ios` or `yarn start-android`

## Questions

Which library allows you to write your code cleaner, tells you where you are making mistakes?

1. Prettier
2. ES Lint
3. Babel

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Done 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

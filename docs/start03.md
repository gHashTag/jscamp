---
id: start03
title: ESLint & Prettierrc
sidebar_label: ESLint & Prettierrc
---

Плагин ES Lint — [https://eslint.org](https://eslint.org) писать ваш код более чистым, подсказывает, где вы совершаете ошибки и вообще это хорошая практика для работе в команде, чтобы у всех всё было в одном стиле — ES Lint будет подсказывать какие переменные вы не используете, где и какие компоненты не задействуйте, показывает синтаксические ошибки и где не правильно ставите пробелы, где ставите точки с запятыми и т.д. То есть это уже стандарт дефекте, который нужно использовать в написании своего кода и этот плагин вас избавит от многих глупых ошибок, которые вы допускаете при разработке своего приложения.

Prettierrc - Инструмент форматирования кода c поддержкой множества языков, минимумом конфигурации и максимумом навязанных правил.

[![Eslint](/img/start/03.gif)](https://youtu.be/noQ0JGVC6SA)


![Step01](/img/steps/01.png)

## Устанавливаем зависимости

```
 yarn add eslint eslint-config-airbnb babel-preset-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-watch babel-core babel-eslint babel-preset-react-native pre-commit prettier prettier-eslint eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-native eslint-plugin-flowtype eslint-plugin-react-hooks --dev
```

![Step02](/img/steps/02.png)

## Правила Eslint

Добавляем правила в .eslintrc.js

```jsx
module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:flowtype/recommended'],
  plugins: ['react', 'react-native', 'jsx-a11y', 'import', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    'react-native/react-native': true,
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
    'react/destructuring-assignment': 0,
    'react-native/no-unused-styles': 0,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 0,
    'consistent-return': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ios.js', '.android.js'],
      },
    },
  },
};
```

![Step03](/img/steps/03.png)

## Правила Prettierrc

Добавляем правила в .prettierrc.js

```jsx
module.exports = {
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  trailingComma: 'none',
  bracketSpacing: true,
  semi: false,
  useTabs: false,
  jsxBracketSameLine: false,
};
```

![Step04](/img/steps/04.png)

## Редактируем package.json

Куда добавляем скрипты:

- Симулятор. Для меня это iPhone SE так как его размер экрана минимальное требование по верстке(iPhone 3,4 уже все)
- Линтер, который будет запрещать вам пушить до исправления всех ошибок в коде
- Установка Pods

```jsx
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

## Переносим App.js

Создаем папку `src` и переносим туда файл App.js, переименовывая его `src/index.js`

![Step06](/img/steps/06.png)

## Запускаем приложение

`yarn start-ios` or `yarn start-android`

## Done ✅

[![Become a Patron!](/img/logo/patreon.png)](https://www.patreon.com/bePatron?u=31769291)

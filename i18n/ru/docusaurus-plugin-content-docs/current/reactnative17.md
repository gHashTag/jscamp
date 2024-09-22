---
id: reactnative17
title: ESLint & Prettier
sidebar_label: ESLint & Prettier
---

import YouTube from 'react-youtube'

Плагин ES Lint — [https://eslint.org](https://eslint.org) позволяет писать ваш код более чистым, подсказывает, где вы совершаете ошибки и вообще это хорошая практика для работе в команде, чтобы у всех всё было в одном стиле — ES Lint будет подсказывать какие переменные вы не используете, где и какие компоненты не задействуйте, показывает синтаксические ошибки и где не правильно ставите пробелы, где ставите точки с запятыми и т.д. То есть это уже стандарт дефакто, который нужно использовать в написании своего кода и этот плагин вас избавит от многих глупых ошибок, которые вы допускаете при разработке своего приложения.

Prettier - Инструмент форматирования кода c поддержкой множества языков, минимумом конфигурации и максимумом навязанных правил.

<YouTube videoId='noQ0JGVC6SA' />

![Step01](/img/steps/01.png)

## Устанавливаем зависимости

```bash
 yarn add eslint eslint-plugin-import prettier eslint-plugin-react-hooks --dev
```

![Step02](/img/steps/02.png)

## Правила Eslint

Добавляем правила в файл конфигурации Eslint

```jsx title=".eslintrc.json"
{
  "env": {
    "browser": true,
    "es2021": true,
    "react-native/react-native": true
  },
  "extends": ["plugin:react/recommended", "airbnb"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "react-native", "react-hooks"],
  "rules": {
    "no-param-reassign": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": ["off"],
    "react/jsx-one-expression-per-line": 0,
    "linebreak-style": ["off"],
    "implicit-arrow-linebreak": 0,
    "no-undef": ["error"],
    "react/sort-comp": ["off"],
    "react/prefer-stateless-function": ["off"],
    "react/destructuring-assignment": 1,
    "function-paren-newline": 0,
    "semi": ["error", "never"],
    "spaced-comment": 0,
    "comma-dangle": ["error", "never"],
    "react/prop-types": 0,
    "no-extra-boolean-cast": 0,
    "quote-props": 0,
    "object-curly-spacing": ["error", "always"],
    "camelcase": 0,
    "no-nested-ternary": 0,
    "react/jsx-wrap-multilines": 0,
    "object-curly-newline": 0,
    "operator-linebreak": 0,
    "no-unused-expressions": 0,
    "global-require": 0,
    "max-len": 0,
    "import/no-cycle": 0,
    "no-underscore-dangle": 0,
    "no-return-assign": 0,
    "import/prefer-default-export": 0,
    "jsx-quotes": ["error", "prefer-double"],
    "no-console": "error",
    "arrow-parens": 0,
    "eol-last": 0,
    "react-native/no-unused-styles": 0,
    "react-native/split-platform-components": 0,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 0,
    "react-native/no-raw-text": 0,
    "consistent-return": 0
  }
}

```

![Step03](/img/steps/03.png)

## Правила Prettier

Добавляем правила в файл конфигурации Prettier

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
## Переносим App.js

Создаем папку `src` и переносим туда файл App.js, переименовывая его `src/index.js`. Вставляем в него следующий код:

```jsx title="src/index.js"
import React from 'react'
import { StyleSheet, Text } from 'react-native'

const App = () => {
  return (
    <>
      <Text style={styles.h1}>Hello World</Text>
    </>
  )
}

const styles = StyleSheet.create({
  h1: {
    backgroundColor: '#BEFCE5',
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    padding: 20,
    textAlign: 'center'
  }
})

export default App
```

![Step05](/img/steps/05.png)
## Запускаем приложение

`yarn start-ios` or `yarn start-android`

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Telegram](https://t.me/neuro_coder_group) или [ВКонтакте](https://vk.com/neurocoder), а также подписывайтесь на наши [новости](https://t.me/neuro_coder_ai)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Вопросы

Какая библиотека позволяет писать ваш код более чистым, подсказывает, где вы совершаете ошибки?

1. Prettier
2. ES Lint
3. Babel

## Done 

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)


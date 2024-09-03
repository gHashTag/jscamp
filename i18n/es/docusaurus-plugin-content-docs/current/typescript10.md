---
id: typescript10
title: ESLint & Prettier & TS config
sidebar_label: ESLint & Prettier & TS config
---

import YouTube from 'react-youtube'

Плагин ES Lint — [https://eslint.org](https://eslint.org) позволяет писать ваш код более чистым, подсказывает, где вы совершаете ошибки и вообще это хорошая практика для работе в команде, чтобы у всех всё было в одном стиле — ES Lint будет подсказывать какие переменные вы не используете, где и какие компоненты не задействуйте, показывает синтаксические ошибки и где не правильно ставите пробелы, где ставите точки с запятыми и т.д. То есть это уже стандарт дефакто, который нужно использовать в написании своего кода и этот плагин вас избавит от многих глупых ошибок, которые вы допускаете при разработке своего приложения.

Prettier - Инструмент форматирования кода c поддержкой множества языков, минимумом конфигурации и максимумом навязанных правил.

<YouTube videoId='noQ0JGVC6SA' />

![Step01](/img/steps/01.png)

Создаем TypeScript проект если еще не создали:

```
react-native init eCommerce --template react-native-template-typescript 
```

## Устанавливаем зависимости

```bash
yarn add eslint-plugin-import eslint-plugin-react prettier prettier-eslint eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-native eslint-plugin-react-hooks --dev
```

![Step02](/img/steps/02.png)

## Правила Eslint

Добавляем правила в .eslintrc.js

```jsx
module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-native',
    'jsx-a11y',
    'import',
    'react-hooks',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-param-reassign': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-filename-extension': ['off'],
        'react/jsx-one-expression-per-line': 0,
        'linebreak-style': ['off'],
        'implicit-arrow-linebreak': 0,
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
        'consistent-return': 0,
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
    },
  ],
}
```

![Step03](/img/steps/03.png)

## Правила Prettier

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
  arrowParens: 'avoid'
}
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
```

![Step05](/img/steps/05.png)

## Переносим App.js

Создаем папку `src` и переносим туда файл App.js, переименовывая его `src/index.js`

![Step06](/img/steps/06.png)

## Редактируем tsconfig.json

Редактируем конфигурацию работы typescript.

```jsx
{
  "compilerOptions": {
    /* Basic Options */
    "target": "esnext" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
    "lib": ["es6"] /* Specify library files to be included in the compilation. */,
    "allowJs": true /* Allow javascript files to be compiled. */,
    // "checkJs": true,                       /* Report errors in .js files. */
    "jsx": "react-native" /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */,
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "removeComments": true,                /* Do not emit comments to output. */
    "noEmit": true /* Do not emit outputs. */,
    // "incremental": true,                   /* Enable incremental compilation */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    "isolatedModules": true /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */,

    /* Strict Type-Checking Options */
    "strict": true /* Enable all strict type-checking options. */,
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */
    "resolveJsonModule": true,
    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    "moduleResolution": "node" /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */,
    "baseUrl": "./" /* Base directory to resolve non-absolute module names. */,
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    "allowSyntheticDefaultImports": true /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */,
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */

    /* Source Map Options */
    // "sourceRoot": "./",                    /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "./",                       /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */
  },
  "exclude": ["node_modules", "babel.config.js", "metro.config.js", "jest.config.js"]
}
```

![Step07](/img/steps/07.png)

## Запускаем приложение

`yarn start-ios` or `yarn start-android`

## Done 

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

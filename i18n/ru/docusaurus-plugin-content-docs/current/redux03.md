---
id: redux-03
title: StargateQuery
sidebar_label: StargateQuery
---

## Что мы узнаем

Мы узнаем как извлекать данные используя RTK(Redux ToolKit)

## Что такое RTK Query

RTK Query — это расширенный инструмент для выборки и кэширования данных, разработанный для упрощения типичных случаев загрузки данных в веб-приложение.


## Установка
Для установки репозитория проекта необходимо ввести в консоль:

```jsx
git clone https://github.com/gHashTag/stargate2.git
```
Далее в папке проекта:
```jsx
yarn // либо используем npm install
```
И потом:
```jsx
npx react-native run-android // или run-ios
```
## Создание службы

В папке `src/store/movieApi` вы увидите следующее:

```js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.tvmaze.com/search/'
  }),
  endpoints: build => ({
    getMovie: build.query({
      query: name => `shows?q=${name}`
    })
  })
})

export const { useGetMovieQuery } = movieApi
```
Тут мы используем поисковую систему фильмов от https://api.tvmaze.com, для того чтобы получать о них информацию по ссылке(чтобы лучше понять можете перейти по ссылке: http://api.tvmaze.com/search/shows?q=stargate. Вы увидите массив данных в котором информация о фильмах)

## Добавление службы в Store

Служба RTKQ генерирует «редуктор фрагментов», который должен быть включен в корневой редуктор Redux. И еще специальное промежуточное программное обеспечение, которое обрабатывает выборку данных. Оба должны быть добавлены в магазин Redux.

```js
import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from './movieApi'

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: getMiddleware => getMiddleware().concat(movieApi.middleware)
})
```
После ваше приложение должно быть обернуто в `<Provider store={store}>` 

## Почти готово

Теперь вы можете использовать сгенерированный хук `useGetMovieQuery` в своих компонентах!

```js
import React, { useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EmptyList, Header, ImageCard, Loading, Search } from '../../components'
import { nanoid } from 'nanoid/non-secure'
import { useGetMovieQuery } from '../../store/movieApi'

export function HomeScreen({ navigation }) {
  const [visibleSearch, setVisibleSearch] = useState(false)
  const [filterText, setFilterText] = useState('stargate')

  const { data, error, isLoading } = useGetMovieQuery(filterText) // передаем текст поиска
  function onSearch(text) {
    setFilterText(text ? text : 'stargate')
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {visibleSearch ? (
        <Search
          colorRight={'#fff'}
          iconRight="magnify"
          placeholder="Search"
          value={filterText}
          onSubmit={onSearch}
          onBlur={() => setVisibleSearch(false)}
        />
      ) : (
        <Header
          title={'Search'}
          colorRight={'#fff'}
          iconRight="magnify"
          onPressRight={() => setVisibleSearch(true)}
        />
      )}
      {isLoading ? (
        <Loading />
      ) : data.length === 0 ? (
        <EmptyList />
      ) : (
        <FlatList
          data={data.filter(a => (a?.show?.image?.original ? true : false))}
          numColumns={2}
          ListHeaderComponent={<View style={{ height: 20 }} />}
          ListFooterComponent={<View style={{ height: 100 }} />}
          contentContainerStyle={{ alignItems: 'center' }}
          keyExtractor={() => nanoid()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <ImageCard
              data={item}
              onPress={() => navigation.navigate('DETAIL_SCREEN', { data: item.show })}
            />
          )}
        />
      )}
    </SafeAreaView>
  )
}
```

## Итог

Мы научились брать удаленные данные с сервера с помощью Redux ToolKit Query!

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)
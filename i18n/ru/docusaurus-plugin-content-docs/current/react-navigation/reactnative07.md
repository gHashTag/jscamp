---
id: reactnative07
title: Вложенные навигаторы
sidebar_label: Вложенные навигаторы
---

Вложение навигаторов означает отображение навигатора внутри экрана другого навигатора, например:

```jsx
import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Feed() {
  return <Text>Feed!</Text>
}

function Messages() {
  return <Text>Messages!</Text>
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  )
}

function Profile() {
  return <Text>Profile!</Text>
}

function Settings() {
  return <Text>Settings!</Text>
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
```

В приведенном выше примере компонент `Home` содержит навигатор с табами. Компонент `Home` также используется для экрана `Home` в вашем навигаторе стека внутри компонента `App`. Итак, здесь навигатор вкладок вложен в навигатор стека:

- `Stack.Navigator`
  - `Home` (`Tab.Navigator`)
    - `Feed` (`Screen`)
    - `Messages` (`Screen`)
  - `Profile` (`Screen`)
  - `Settings` (`Screen`)

Вложенные навигаторы работают так же, как и обычные компоненты. Чтобы добиться желаемого поведения, часто необходимо вложить несколько навигаторов.

## Как вложение навигаторов влияет на поведение

При вложении навигаторов следует помнить о некоторых вещах:

### Каждый навигатор хранит свою историю навигации.

Например, когда вы нажимаете кнопку «Назад», находясь на экране во вложенном навигаторе стека, он вернется к предыдущему экрану внутри вложенного стека, даже если в качестве родителя есть другой навигатор.

### У каждого навигатора свои параметры

Например, указание опции `title` на экране, вложенном в дочерний навигатор, не повлияет на заголовок, отображаемый в родительском навигаторе.

Если вы хотите добиться такого поведения, см. Руководство для [параметры экрана с вложенными навигаторами](https://reactnavigation.org/docs/6.x/screen-options-resolution#setting-parent-screen-options-based-on-child-navigators-state). Это может быть полезно, если вы визуализируете навигатор вкладок внутри навигатора стека и хотите показать заголовок активного экрана внутри навигатора вкладок в заголовке навигатора стека.

### У каждого экрана в навигаторе свои параметры

Например, любые параметры `params`, переданные на экран во вложенном навигаторе, находятся в prop `route` этого экрана и недоступны с экрана в родительском или дочернем навигаторе.

Если вам нужно получить доступ к параметрам родительского экрана с дочернего экрана, вы можете использовать [React Context](https://reactjs.org/docs/context.html), чтобы предоставить параметры дочерним элементам.


### Действия навигации обрабатываются текущим навигатором и всплывают, если не могут быть обработаны

Например, если вы вызываете `navigation.goBack()` во вложенном экране, он вернется в родительский навигатор только в том случае, если вы уже находитесь на первом экране навигатора. Другие действия, такие как `navigate`, работают аналогично, то есть навигация будет происходить во вложенном навигаторе, и если вложенный навигатор не может ее обработать, то родительский навигатор попытается ее обработать. В приведенном выше примере при вызове `navigate('Messages')` внутри экрана `Feed` вложенный навигатор вкладок будет обрабатывать его, но если вы вызываете `navigate('Settings')`, родительский навигатор стека будет обрабатывать его. 

## Done 

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Links

[React Navigation](https://reactnavigation.org/docs/6.x/nesting-navigators)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

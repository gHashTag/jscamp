---
id: reactnative08
title: FlatList - list
sidebar_label: FlatList - list
---

import YouTube from 'react-youtube'

React Native provides a set of components for representing lists of data. Typically, you need to use either [FlatList](https://reactnative.dev/docs/flatlist) or [SectionList](https://reactnative.dev/docs/sectionlist).

The `FlatList` component displays a scrollable list of data that is changing but similar in structure. It works well with long lists of data, the number of elements of which can change over time. Unlike the more general `ScrollView`, `FlatList` only displays the items that are currently displayed on the screen, not all items at once.

The `FlatList` component requires two properties: `data` and `renderItem`.

- `data` - source of information for the list.

- `renderItem` takes one item from the source and returns a formatted component to render.

This example creates a basic `FlatList` of hardcoded data. Each item in the data props is displayed as a text component. The `FlatListBasics` component then displays the `FlatList` and all text components.

## Payment

Now you are on a stripped-down version of the site, after subscribing to [Patreon](https://www.patreon.com/javascriptcamp), you will get full access to the training course, as well as access to our server's private channels in [Discord](https://discord.gg/6GDAfXn).

Download our [mobile application](http://onelink.to/njhc95) or get tested in our [JavaScript telegram bot](https://t.me/javascriptcamp_bot), and also subscribe to [our news](https://t.me/javascriptapp).

[![Become a Patron!](/Img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">📖💲</a></td>
  </tr>
</table>

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

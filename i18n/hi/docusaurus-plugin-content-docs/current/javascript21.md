---
id: javascript21
title: 'समापन'
sidebar_label: समापन
---

![@serverSerrverlesskiy](/img/javascript/headers/20.jpg)

एक बंद एक समारोह है⚙️, जिसके पास बाहरी फ़ंक्शन तक पहुंच है⚙️, बाहरी कार्य का संचालन बंद होने के बाद भी। बाहरी फ़ंक्शन के दायरे तक पहुंच के साथ एक आंतरिक फ़ंक्शन प्रदान करने के लिए एक क्लोजर की आवश्यकता होती है, लेकिन साथ ही बाहरी वातावरण से आंतरिक फ़ंक्शन के चर के करीब पहुंच⚙️.

![Snake](https://media.giphy.com/media/3oFzmdjqH15YebLQ52/giphy.gif)

निर्माण के लिए आवश्यकताएँ🏗️ बंद करना:

1. एक बाहरी फ़ंक्शन जिसे कोड में कहा जाता है।
2. बाहरी फ़ंक्शन में आंतरिक फ़ंक्शन होता है।
3. नतीजतन, बाहरी फ़ंक्शन आंतरिक लौटाता है।

बनाने पर विचार करें🏗️ उदाहरण के लिए बंद:

```jsx live
function learnJavaScript() {
  const getFruit = () => {
    let fruit = 'Banana',
      show = () => {
        return fruit
      }
    return show
  }
  let showFruit = getFruit()
  return showFruit()
}
```

1. उदाहरण में, हमने एक बाहरी फ़ंक्शन बनाया है `getFruit`;
2. के भीतर `getFruit` एक आंतरिक कार्य बनाया `show`.
3. नतीजतन, समारोह `getFruit` एक समारोह जारी करता है `show`.
4. आगे कोड में, हमने परिणाम को फ़ंक्शन को सौंपा `getFruit` चर `showFruit`.
5. इसलिये काम का नतीजा `getFruit` एक समारोह है, तो `showFruit` अपरिवर्तनशील हो जाता है🔔 , लेकिन एक समारोह।
6. पूरे निर्माण का परिणाम एक चर था🔔 `fruit` समारोह के अंदर `getFruit`, वह वापस ले ली गई। अब हम केवल इस वेरिएबल का मान ज्ञात कर सकते हैं।🔔 , आप इसे बदल नहीं सकते।

## इसके उदाहरण

![Math](https://media.giphy.com/media/xT1Ra5h24Eliux3UVq/giphy.gif)

आइए समझने के लिए और उदाहरण देखें।

### काउंटर

क्लोजर कैसे काम करता है, इस पर विचार करने के लिए एक काउंटर सबसे सरल उदाहरण है।

<!-- ![Counter](https://media.giphy.com/media/QSNvClMu5zWJW/giphy.gif) -->

```jsx live
function learnJavaScript() {
  const makeCounter = () => {
    let x = 0
    return () => {
      return ++x
    }
  }
  const counter = makeCounter()
  return counter()
}
```

### बेहतर काउंटर

![Counter](https://media.giphy.com/media/3o6Zt6fzS6qEbLhKWQ/giphy.gif)

परिणामस्वरूप, हमारे पास एक से अधिक फ़ंक्शन होंगे⚙️, लेकिन एक साथ कई।

```jsx live
function learnJavaScipt() {
  let makeCounter = () => {
    let x = 0
    return {
      inc: () => {
        return ++x
      },
      dec: () => {
        return --x
      },
      val: () => {
        return x
      }
    }
  }

  let counter = makeCounter()
  counter.inc() // 1
  counter.inc() // 2
  counter.inc() // 3
  counter.inc() // 4
  counter.dec() // 3
  return counter.val()
}
```

### एक लूप में बंद करें

![circle](https://media.giphy.com/media/u5s2ezDicmyuA/giphy.gif)

```jsx live
function learnJavaScript() {
  let res = []
  for (let i = 0; i < 5; i++) {
    res[i] = () => {
      return i
    }
  }
  return res[2]()
}
```

### वाक्यांश याद रखें

![l](https://media.giphy.com/media/l4pTfqyI6TCjUW4Yo/giphy.gif)

```jsx live
function learnJavaScript() {
  let phrase = x => {
    return y => {
      return x + ' ' + y
    }
  }

  hello = phrase('Hello')
  return hello('World')
}
```

## संपूर्ण

क्लोजर सबसे महत्वपूर्ण मौलिक अवधारणाओं में से एक है JavaScript, प्रत्येक JS डेवलपर को इसे समझना चाहिए। समझ 💡 क्लोजर लेखन की राह के चरणों में से एक है 🖊️ प्रभावी और गुणवत्तापूर्ण अनुप्रयोग।

## समस्या?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

को लिखना [Discord](https://discord.gg/6GDAfXn) या तार [बातचीत](https://t.me/jscampapp), और हमारे को भी सब्सक्राइब करें [समाचार](https://t.me/javascriptapp)

## प्रशन

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

एक बंद क्या है?

1. निर्माण
2. समारोह
3. संकल्पना

किस पर बंद है?

1. कार्यक्षेत्र पर कार्य
2. एक समारोह में चर

बंद चर तक पहुँचने के लिए आपको क्या करने की आवश्यकता है?

1. मैं इसका वर्णन करूंगा और इसका उपयोग करूंगा
2. यह उपलब्ध है
3. वेरिएबल को केवल देखा जा सकता है

यह समझने के लिए कि आपने यह पाठ कितना सीखा है, इसमें परीक्षा दें [मोबाइल एप्लिकेशन](http://onelink.to/njhc95) इस विषय पर हमारे स्कूल।

![Sumerian school](/img/app.jpg)

## लिंक

1. [Learn JavaScript](https://learn.javascript.ru/closures)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures)
3. [बंद JavaScript](https://medium.com/@stasonmars/понимаем-замыкания-в-javascript-раз-и-навсегда-c211805b6898)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)

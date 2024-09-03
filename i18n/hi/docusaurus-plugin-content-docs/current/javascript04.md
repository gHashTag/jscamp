---
id: javascript04
title: जानकारी का प्रकार
sidebar_label: जानकारी का प्रकार
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/04.jpg)

## गतिशील टाइपिंग

JavaScript एक कमजोर टाइप या गतिशील भाषा है। इसका मतलब है कि आपको चर के प्रकार को परिभाषित करने की आवश्यकता नहीं है।  अग्रिम रूप से।

![Dinamics](https://media.giphy.com/media/26uf759LlDftqZNVm/giphy.gif)

कार्यक्रम निष्पादन के दौरान प्रकार स्वचालित रूप से निर्धारित किया जाएगा। इसका मतलब यह भी है कि आप एक चर का उपयोग कर सकते हैं  भंडारण के लिए  विभिन्न प्रकार के डेटा  :

```jsx live
function learnJavaScript() {
  let foo = 42 // अब क foo प्रकार number
  foo = 'bar' // और अब foo प्रकार string
  return typeof foo
}
```

## वीडियो

<YouTube videoId="1zXZCVbNbkQ" />

## typeof

एक चर में निहित डेटा प्रकार को समझने के लिए, ऑपरेटर का उपयोग किया जाता है `typeof`. ऑपरेटर `typeof` तर्क का प्रकार देता है।
इसमें दो सिंटेक्स होते हैं, कोष्ठक के साथ और बिना:

- ऑपरेटर सिंटैक्स: `typeof x`

- फ़ंक्शन सिंटैक्स: `typeof(x)`

वे समान काम करते हैं, लेकिन पहला सिंटैक्स छोटा होता है।

परिणाम `typeof` प्रकार युक्त स्ट्रिंग है।

```jsx live
function learnJavaScript() {
  let num = 9
  return typeof num
}
```

## जानकारी का प्रकार

![Data types](https://media.giphy.com/media/NPXkCN2FutVO1Nt4P9/giphy.gif)

मानक JavaScript 9 डेटा प्रकारों को परिभाषित करता है। कंसोल में आउटपुट करके उनमें से प्रत्येक को जानें और बाद में मैं आपको बताऊंगा  उनमें से प्रत्येक के बारे में अधिक।

```javascript
let one = { firstName: 'John', lastName: 'Smith' } // object

let two = () => {} // function

let three 'bar' // string

let four = 42 // number

let five = 19241924124n // bigint

let six = true // boolean

let seven = null // null

let eight // undefined

let nine = Symbol() // symbol
```

## वस्तुओं

![cupboard](https://media.giphy.com/media/l2Sq0NFJlJC5Dqb7y/giphy.gif)

कंप्यूटर शब्दावली में, एक ऑब्जेक्ट प्रकार `object` — यह स्मृति में एक मूल्य है जिसे एक पहचानकर्ता द्वारा संदर्भित किया जा सकता है। में JavaScript एक वस्तु को गुणों के एक सेट के रूप में माना जा सकता है। यह एक कोठरी की तरह है 🗄️ भंडारण के लिए  अन्य डेटा प्रकार।

## कार्यों

![Function](https://media.giphy.com/media/FuSJ5C7SSHlZCxjC6q/giphy.gif)

कार्यों⚙️ `function` — ये साधारण वस्तुएं हैं जिन्हें निष्पादन की अतिरिक्त क्षमता कहा जाता है।

## आदिम मूल्य

![Primitive](https://media.giphy.com/media/rBdWc61BPFVYc/giphy.gif)

में सभी डेटा प्रकार JavaScript, кवस्तुओं के अलावा, अपरिवर्तनीय हैं (मूल्यों को संशोधित नहीं किया जा सकता है, लेकिन केवल एक नए पूर्ण मूल्य के साथ ओवरराइट किया गया है)। उदाहरण के लिए, भाषा के विपरीत  सी, जहां स्ट्रिंग को चरित्र द्वारा वर्ण समायोजित किया जा सकता है, में JavaScript लाइनों को फिर से बनाया गया है केवल पूरी तरह से। इस प्रकार के मूल्यों को "आदिम मूल्य" कहा जाता है।

## पाठ तार

![text](https://media.giphy.com/media/26n6AaCcCajAyZx04/giphy.gif)

में JavaScript पाठ की प्रस्तुति के लिए  डेटा प्रकार के रूप में कार्य करता है `string`.

## नंबर

![Numbers](https://media.giphy.com/media/xT5LMMneIRG1UJquOI/giphy.gif)

संख्यात्मक डेटा प्रकार `number` पूर्णांक और फ़्लोटिंग पॉइंट मान दोनों का प्रतिनिधित्व करता है।

## BigInt

![giant](https://media.giphy.com/media/LZGipmRpX6uwE/giphy.gif)

में JavaScript एक प्रकार `number` से अधिक संख्याएँ नहीं हो सकती हैं (253-1) (अर्थात। 9007199254740991), या इससे कम है -(253-1) नकारात्मक संख्या के लिए। यह तकनीकी सीमा उनके आंतरिक प्रतिनिधित्व के कारण है।

ज्यादातर मामलों के लिए, यह पर्याप्त है। लेकिन कभी-कभी हमें वास्तव में विशाल संख्याओं की आवश्यकता होती है, जैसे क्रिप्टोग्राफी में या टाइमस्टैम्प का उपयोग करते समय ("timestamp") माइक्रोसेकंड के साथ।

एक प्रकार `bigInt` में जोड़ा गया था JavaScript, मनमाने ढंग से लंबाई के पूर्णांक के साथ काम करना संभव बनाने के लिए।

## बूलियन डेटा प्रकार

बूलियन `boolean` एक तार्किक इकाई का प्रतिनिधित्व करता है और दो हैं 2️⃣ जिसका अर्थ है: `true`  (सच)

![true](https://media.giphy.com/media/ap6wcjRyi8HoA/giphy.gif)

и `false`  (असत्य).

![False](https://media.giphy.com/media/HNOVuT5AvCK1fgvp1m/giphy.gif)

इस प्रकार का उपयोग आमतौर पर भंडारण के लिए किया जाता है  मान हाँ / नहीं: true  का अर्थ है "हाँ, सही है", और असत्य  का अर्थ है "नहीं, सही नहीं".

## Null

![Null](https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif)

इस डेटा प्रकार का केवल एक ही अर्थ है: `null`. यह मान विशेष रूप से एक आदिम के रूप में निर्दिष्ट है, क्योंकि यह वास्तव में, व्यवहार में एक दृश्यमान आदिम है। लेकिन उसी समय से `null` अन्य सभी वस्तुएं विरासत में मिली हैं, इसलिए, इस तथ्य के बावजूद कि `null` रिटर्न एक आदिम मूल्य, इसका प्रकार एक वस्तु है।
उदाहरण के लिए, आप इसे डिफ़ॉल्ट मान पर असाइन कर सकते हैं।

## Undefined

![Unndefined](https://media.giphy.com/media/PkKzNQjwPy7GvxZbfe/giphy.gif)

परिवर्तनशील  , जिसे कोई मूल्य नहीं दिया गया है वह मायने रखेगा `undefined`.

### बीच के भेद null तथा undefined

![Spiderman](https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif)

`null` एक वस्तु की अनुपस्थिति का निश्चित मूल्य है, जबकि `undefined` अनिश्चितता के लिए खड़ा है। उदाहरण के लिए, आप इसे ब्राउज़र कंसोल में देख सकते हैं:

```javascript
let TestVar
console.log(TestVar) // undefined
console.log(typeof TestVar) // undefined
```

`null` - यह असाइनमेंट मान है। यह एक चर को सौंपा जा सकता है  मूल्य के बिना एक प्रतिनिधित्व के रूप में:

```javascript
let TestVar = null
console.log(TestVar) // null
console.log(typeof TestVar) // object
```

यह पिछले उदाहरणों से स्पष्ट है कि `undefined` तथा `null` - यह दो है 2️⃣ अलग - अलग प्रकार: `undefined` - यह स्वयं प्रकार है (अपरिभाषित), लेकिन अ `null` - एक वस्तु.

```javascript
null === undefined // false
null == undefined // true
null === null // true
```

## डेटा प्रकार प्रतीक (Symbol)

![Symbol](https://media.giphy.com/media/QvSGhHq8CrVzq/giphy.gif)

प्रतीक प्रकार `Symbol` — यह एक अद्वितीय और अपरिवर्तनीय आदिम मूल्य है जिसका उपयोग किसी वस्तु की संपत्ति के लिए एक कुंजी के रूप में किया जा सकता है। इस प्रकार का उपयोग शायद ही कभी वास्तविक काम में किया जाता है कि हम इस पाठ्यक्रम में भी इस पर विचार नहीं करेंगे।

## समस्या?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

को लिखना [Discord](https://discord.gg/6GDAfXn) या तार [बातचीत](https://t.me/jscampapp), और हमारी सदस्यता भी लें [समाचार](https://t.me/javascriptapp)

## प्रशन:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

ऑपरेटर किसके लिए उपयोग किया जाता है `typeof`?

1. डेटा प्रकार निर्धारित करने के लिए
2. डेटा प्रकार को कंसोल में आउटपुट करने के लिए
3. एक नया चर दर्ज करने के लिए

मानक कितने प्रकार का डेटा परिभाषित करता है JavaScript?

1. 7
2. 9
3. 5

क्या डेटाटाइप में गुणों का एक सेट होता है?

1. `function`
2. `string`
3. `object`

क्या यह संभव है JavaScript चरित्र द्वारा स्ट्रिंग चरित्र को सही?

1. हां
2. विशेष मामलों में संभवतः
3. नहीं, लाइनें केवल पूरी तरह से पुनर्निर्मित हैं

क्या डेटा प्रकार मनमाने ढंग से लंबाई के पूर्णांक के साथ काम करना संभव बनाता है?

1. `number`
2. `string`
3. `bigint`

किस मूल्य का कोई बूलियन प्रकार नहीं है `boolean`?

1. `false`
2. `null`
3. `true`

किस डेटा प्रकार का एक मूल्य है जिसका उपयोग किसी वस्तु की संपत्ति के लिए एक कुंजी के रूप में किया जा सकता है?

1. `undefined`
2. `symbol`
3. `null`

यह समझने के लिए कि आपने इस पाठ को कितना सीखा है, परीक्षा को अंदर लें [मोबाइल एप्लिकेशन](http://onelink.to/njhc95) इस विषय पर हमारा स्कूल।

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## लिंक:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [किशोर के लिए कोड: प्रोग्रामिंग के लिए एकदम सही शुरुआत की गाइड, खंड 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

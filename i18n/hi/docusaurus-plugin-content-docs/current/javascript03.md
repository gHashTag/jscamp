---
id: javascript03
title: खुले पैसे
sidebar_label: खुले पैसे
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/03.jpg)

## चर

चर  (Variables, संक्षिप्त `var`) — यह एक कंटेनर है  मूल्यों के लिए जैसे कि इसके अलावा उपयोग किए गए नंबर ➕ , या एक स्ट्रिंग जिसे हम एक वाक्य के भाग के रूप में उपयोग कर सकते हैं।

![Container](https://media.giphy.com/media/0T0FUiZl51VPCLsqLR/giphy.gif)

## वीडियो

<YouTube videoId="gCqxA_JOtmw" />

## परिवर्तनशील घोषणा

![Announcement](https://media.giphy.com/media/cYaBD8kxE4PZudHBRA/giphy.gif)

एक चर का उपयोग करने के लिए, आपको पहले इसे बनाना होगा, या, अधिक सटीक होने के लिए, घोषित करें परिवर्तनशील। ऐसा करने के लिए, हम कुंजी का परिचय देते हैं🗝️ शब्द `var`, नाम के बाद आप अपना चर देना चाहते हैं। नीचे दिया गया निर्देश बनाता है (दूसरे शब्दों में: घोषित करता है या परिभाषित करता है) चर नाम «message»:

```jsx live
function learnJavaScript() {
  var message = ''

  return message
}
```

यहां हम एक वैरिएबल बनाते हैं  `message`. वर्तमान में ⏱️ इसमें एक मान नहीं होता है, अधिक सटीक होने के लिए, चर में एक रिक्त स्ट्रिंग होती है।

## किसी वैरिएबल के लिए मान निर्दिष्ट करना

![Memory](https://media.giphy.com/media/3o6ZtafpgSpvIaKhMI/giphy.gif)

एक बार चर  घोषित, यह एक मूल्य सौंपा जा सकता है। इसके लिए यह लिखा है  चर का नाम  , उसके बाद बराबर चिह्न `=` अनुसरण करता है, उसके बाद आप जिस मूल्य को असाइन करना चाहते हैं। उदाहरण के लिए  :

```jsx live
function learnJavaScript() {
  var message
  message = 'My name is ...'
  //हम चर नाम का उपयोग करके इसे एक्सेस कर सकते हैं
  return message
}
```

में `RESULT` वह मान जिसे आपने चर को सौंपा है  , कंसोल पर लौटे। मूर्ख या गैर जिम्मेदाराना व्यवहार 🎮 परिवर्तनशील मूल्यों के साथ  , उदाहरण के लिए, अपने नाम के साथ अभिव्यक्ति को पूरा करें।

संक्षिप्तता के लिए, आप एक चर की घोषणा को जोड़ सकते हैं  और रिकॉर्डिंग  एक पंक्ति में  :

```jsx live
function learnJavaScript() {
  var message = 'Hello!' // एक चर को परिभाषित करें और इसके लिए एक मान निर्दिष्ट करें
  return message
}
```

## परिवर्तनशील अद्यतन

![Update](https://media.giphy.com/media/FP47IFqWyXfdKYU6VG/giphy.gif)

चरों की विशेषताओं में से एक  — उनके अर्थ भिन्न हो सकते हैं।
जब एक चर  एक मान दिया गया है, आप एक अलग मूल्य निर्दिष्ट करके उस मूल्य को बदल सकते हैं (अपडेट)। आइए एक साधारण उदाहरण देखें  :

```jsx live
function learnJavaScript() {
  var message = 'Bob' // अब क message Bob
  message = true // और अब message true
  message = 35 // और अंत में message 35

  return message
}
```

चर की एक और विशेषता  यह है कि वे लगभग कुछ भी शामिल कर सकते हैं, न कि केवल तार और संख्या। चर  इसमें जटिल डेटा और यहां तक ​​कि संपूर्ण फ़ंक्शन भी हो सकते हैं। आप इसके बारे में और जानेंगे क्योंकि आप आगे के पाठ्यक्रम का अध्ययन करेंगे।

:::tip एक नोट पर!
हम कहते हैं कि चर में मान होते हैं। यह एक महत्वपूर्ण अंतर है। चर खुद मूल्यों नहीं हैं! वे कंटेनर हैं मूल्यों के लिए। कल्पना कीजिए कि वे छोटे कार्डबोर्ड बॉक्स की तरह दिखते हैं।, जिसमें आप चीजों को स्टोर कर सकते हैं।
:::

![Variables](https://mdn.mozillademos.org/files/13506/boxes.png)

![Hello World](https://media.giphy.com/media/26his8ERHOSxKuWw8/giphy.gif)

## परिवर्तनीय नामकरण नियम

![Rules](https://media.giphy.com/media/XK8I8Am1gSe17MiJ2m/giphy.gif)

आप चर का नाम दे सकते हैं  जो भी आपको पसंद है, लेकिन सीमाएं हैं। आम तौर पर, आपको केवल लैटिन वर्णों से चिपके रहना चाहिए (0-9, a-z, A-Z) और अंडरस्कोर चरित्र।

- अन्य प्रतीकों के उपयोग की अनुशंसा नहीं की जाती है क्योंकि वे त्रुटियों का कारण बन सकते हैं या अंतर्राष्ट्रीय दर्शकों के लिए समझ से बाहर हो सकते हैं।
- चर नामों की शुरुआत में अंडरस्कोर का उपयोग न करें  - इसका उपयोग कुछ डिज़ाइनों में किया जाता है JavaScript विशिष्ट चीजों के संदर्भ में।
- चर की शुरुआत में संख्या का उपयोग न करें  . यह अमान्य है और इसके परिणामस्वरूप त्रुटि होगी।
- यह आमतौर पर तथाकथित का पालन करने के लिए स्वीकार किया जाता है "lower camel case"(CamelCase - तथाकथित "कूबड़" के कारण जिसे शब्दों के पहले अक्षर बनाते हैं), जहां आप कई शब्दों को एक साथ गोंद करते हैं, पूरे पहले शब्द के लिए लोअरकेस अक्षरों का उपयोग करते हैं, और फिर बाद के शब्दों को कैपिटल करते हैं। हमने इसका उपयोग अपने चर नामों के लिए किया है इस आलेख में।
- परिवर्तनशील नाम  ताकि यह स्पष्ट रूप से स्पष्ट हो सके कि उनके पास कौन सा डेटा है। केवल एक अक्षर / संख्या या बड़े लंबे वाक्यांशों का उपयोग न करें।
- चर  मामला संवेदनशील है, इसलिए `myage` तथा `myAge` - विभिन्न चर  .
- एक आखिरी बात - आपको आरक्षित शब्दों का उपयोग करने से भी बचना होगा। JavaScript चर नामों के रूप में  - इसके द्वारा हम वास्तविक वाक्य रचना करने वाले शब्दों का अर्थ निकालते हैं JavaScript! इस प्रकार, आप शब्दों का उपयोग नहीं कर सकते हैं var, function, let, तथा for चर नामों के लिए  . ब्राउज़र उन्हें कोड के विभिन्न टुकड़ों के रूप में पहचानते हैं और इसलिए त्रुटियां होती हैं।

## आरक्षित शब्दों की सूची

![Reserved](https://media.giphy.com/media/3o6Mb3eci7bVDKBR2o/giphy.gif)

हम इन शब्दों के साथ चर का नाम नहीं दे सकते।  , चूंकि वे भाषा में आरक्षित हैं Java Script.
`break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `new`, `return`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, `yield`

## ढीली टाइपिंग

![Freedom](https://media.giphy.com/media/6901DbEbbm4o0/giphy.gif)

JavaScript - यह एक "स्वतंत्र रूप से टाइप की गई भाषा है », जिसका अर्थ है कि कुछ अन्य भाषाओं के विपरीत  आपको यह निर्दिष्ट करने की आवश्यकता नहीं है कि चर में किस प्रकार का डेटा होगा  (जैसे संख्याएँ, तार, सरणियाँ, आदि।).

उदाहरण के लिए, यदि आप एक चर घोषित करते हैं  और इसे उद्धरण में संलग्न मान प्रदान करें, ब्राउज़र चर को संभाल लेगा  एक स्ट्रिंग के रूप में  :

```jsx live
function learnJavaScript() {
  var myString = 'Hello'
  // यह अभी भी एक स्ट्रिंग होगा, भले ही इसमें संख्याएँ हों, इसलिए सावधान रहें:
  var myNumber = '500' // उफ़ यह अभी भी एक स्ट्रिंग है (string)

  myNumber = 500 // यह बेहतर है, अब यह संख्या (number). इस पंक्ति को निकालें और डेटा प्रकार देखें।

  return typeof myNumber
}
```

## पदावनत कीवर्ड "var"

![Old](https://media.giphy.com/media/3orieJI3IdkKWIsAGA/giphy.gif)

आमतौर पर `var` आधुनिक लिपियों में उपयोग नहीं किया जाता है, लेकिन फिर भी पुराने में छिपा हो सकता है। यह इस तथ्य के कारण है कि वह असंदिग्ध रूप से व्यवहार नहीं करता है, इसलिए, इसके बजाय `var` हम इस्तेमाल करेंगे `let` चर के लिए  , लेकिन अ `const` स्थिरांक के लिए - स्थिरांक।

 ब्रेक खत्म हो गया है, चलिए अगले पाठ पर चलते हैं!

## समस्या?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

को लिखना [Discord](https://discord.gg/6GDAfXn) या तार [बातचीत](https://t.me/neuro_coder_group), और हमारी सदस्यता भी लें [समाचार](https://t.me/javascriptapp)

## प्रशन:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

जिनके लिए कमांड में जानकारी होती है `console.log`?

1. उपयोगकर्ता
2. डेवलपर
3. दुभाषिया JavaScript

चर क्या हैं?

1. मूल्यों के लिए कंटेनर
2. चर मान
3. लैटिन अक्षर

चर में क्या हो सकता है?

1. केवल तार और संख्या
2. संख्या, तार, जटिल डेटा, फ़ंक्शन
3. केवल जटिल डेटा और फ़ंक्शन

वेरिएबल असाइन करने के लिए कमांड कैसे लिखें?

1. `var`
2. `var` [चर का नाम] =
3. `var` [चर का नाम]

मैं एक चर को कैसे अपडेट करूं?

1. चर अद्यतन नहीं किया जा सकता है
2. चर के लिए एक अलग मूल्य निर्दिष्ट करें
3. एक कस्टम कमांड सेट करें

चर नामकरण नियमों में क्या गायब है?

1. चर की शुरुआत में संख्या का उपयोग न करें
2. चर की शुरुआत में अंडरस्कोर का उपयोग करें
3. लैटिन अक्षरों से चिपके रहते हैं

मैं एक चर का मूल्य कैसे लिखूं ताकि ब्राउज़र चर को एक स्ट्रिंग के रूप में मानता है?

1. उद्धरण के बिना
2. उद्धरणों में
3. कोष्ठक में

क्या कुंजी है🗝️ क्या हम चर को परिभाषित करने के लिए शब्द का उपयोग नहीं करते हैं?

1. `let`
2. `const`
3. `var`

यह समझने के लिए कि आपने इस पाठ को कितना सीखा है, परीक्षा को अंदर लें [मोबाइल एप्लिकेशन](http://onelink.to/njhc95) इस विषय पर हमारा स्कूल।

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## लिंक:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Первые_шаги/Variables)
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
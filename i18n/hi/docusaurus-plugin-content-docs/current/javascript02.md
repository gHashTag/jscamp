---
id: javascript02
title: टिप्पणियाँ (1)
sidebar_label: टिप्पणियाँ (1)
---

![@serverSerrverlesskiy](/img/javascript/headers/02.jpg)

## टिप्पणियाँ क्या हैं?

में JavaScript कोड में टिप्पणियों को निर्दिष्ट करने के कई तरीके हैं 

कभी-कभी लिखते समय  कोड, आपको इसे केवल लोगों के लिए स्पष्टीकरण के साथ प्रदान करना होगा  , कंप्यूटर के लिए नहीं।
 शायद यह अपने आप को अतीत (भविष्य के लिए!) से किसी तरह का संदेश होगा जो प्रोग्राम कोड में इस या उस चीज के बारे में है। या हो सकता है कि यह केवल एक संकेत होगा कि केवल और केवल इस तरह के कोड का एक भाग चलाने की आवश्यकता है, और बाकी को छोड़ दिया जाना चाहिए। संक्षेप में, ऐसे किसी भी मामले में, आपको टिप्पणियों की सहायता का सहारा लेना होगा।
टिप्पणियाँ (1)  जोड़ने के लिए उपयोग किया जाता है ➕ युक्तियाँ, नोट्स  , सुझाव या चेतावनी। वे पढ़ना और समझना आसान बना सकते हैं 💡 कोड। इन्हें रोकने के लिए भी इस्तेमाल किया जा सकता है  कोड निष्पादन (कोड डिबगिंग के समय इस तकनीक का अभ्यास किया जाता है)।

में JavaScript टिप्पणियां निर्दिष्ट करने के कई तरीके हैं  कोड में।

## वीडियो

<YouTube videoId="zCvKMw5QHRw" />

## सिंगल लाइन टिप्पणी

![Slash](https://media.giphy.com/media/bKXMS0NjXoyaY/giphy.gif)

प्रथम 1️⃣ मार्ग `// टिप्पणी`  इस मामले में पूरा पाठ  डबल स्लैश के बाद लाइन पर एक टिप्पणी होगी  . जब दुभाषिया दो को देखता है 2️⃣ एक पंक्ति में स्लैश `//`, वह तुरंत समझ जाता है कि लाइन के अंत तक आगे बढ़ने वाली सभी चीजों को सुरक्षित रूप से अनदेखा किया जा सकता है। वाक्य-विन्यास पर अभी तक ध्यान न दें    कोड, हमें इसे विस्तार से थोड़ी देर बाद पता चलेगा।

```jsx live
function learnJavaScript() {
  // यह लाइन में एक टिप्पणी है
  var hello = 'Hello world!!!'

  return hello
}
```

## मल्टी-लाइन टिप्पणी

![Coments](https://media.giphy.com/media/UevalSWg5twQeqpc8Q/giphy.gif)

दूसरा 2️⃣ रास्ता है `/* */`, यह विधि पहले की तुलना में अधिक लचीली है 1️⃣ . जैसे ही दुभाषिया देखता है `/*`, वह सोचता है: "हाँ, इसका मतलब है कि जब तक मैं नहीं देखता `*/`, मैं यहां किसी भी चीज पर ध्यान नहीं दे सकता! ”
उदाहरण के लिए, आप इसे एक में उपयोग कर सकते हैं 1️⃣ लाइन  :

```jsx live
function learnJavaScript() {
  /* यह एक लाइन की टिप्पणी है */
  var hello = 'Hello world!!!'

  return hello
}
```

या आप एक बहु-पंक्ति टिप्पणी कर सकते हैं  , जैसा यहाँ दिखाया गया है  :

```jsx live
function learnJavaScript() {
  /* यह टिप्पणी कई पंक्तियों में फैली हुई है।
     कृपया ध्यान दें कि आपको टिप्पणी समाप्त करने की आवश्यकता नहीं है जब तक आप समाप्त नहीं कर लेते।*/
  var hello = 'Hello world!!!'
  /* अपनी टिप्पणी यहाँ लिखें */
  return hello
}
```

## कोड के बीच में टिप्पणी करें

![Among](https://media.giphy.com/media/fnjIiBNo38IHS/giphy.gif)

इसके अलावा, यदि आप चाहें, तो आप इस टिप्पणी का उपयोग, कोड की एक पंक्ति के बीच में कर सकते हैं। हालाँकि यह कोड की पठनीयता को ख़राब कर सकता है :

```jsx live
function learnJavaScript() {
  var x = ''
  var hello = 'Hello ' + x /* मूल्य डालें x */ + '!'

  return hello
}
```

कोड पर टिप्पणी के साथ, यह सब और परिवर्तन कॉल लग रहा है .

![Comments](https://media.giphy.com/media/SvuRLwWT0EoeErwPvB/giphy.gif)

## समस्या?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

को लिखना [Discord](https://discord.gg/6GDAfXn) या तार [बातचीत](https://t.me/neuro_coder_group), और हमारी सदस्यता भी लें [समाचार](https://t.me/javascriptapp)

## प्रशन:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

के लिए टिप्पणियाँ कौन हैं?

1. व्यक्ति
2. सांत्वना
3. दुभाषिया JavaScript

टिप्पणियों का उपयोग किस लिए नहीं किया जाता है?

1. टिप्स, नोट्स, सुझाव जोड़ना
2. प्रोग्राम कोड के हिस्से के रूप में
3. कोड निष्पादन को रोकने के लिए

जावास्क्रिप्ट कोड में एक टिप्पणी निर्दिष्ट करने का कौन सा तरीका मौजूद नहीं है?

1. `(' ')`
2. `//`
3. `/* */`

मैं कोड की किसी भी संख्या को कैसे अक्षम कर सकता हूं?

1. कोड के बीच में एक टिप्पणी लिखें
2. एक टिप्पणी में कोड लपेटें
3. कमांड का उपयोग करें `console.log`

यह समझने के लिए कि आपने इस पाठ को कितना सीखा है, परीक्षा को अंदर लें [मोबाइल एप्लिकेशन](http://onelink.to/njhc95) इस विषय पर हमारा स्कूल।

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## लिंक:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar)
2. [किशोर के लिए कोड: शुरुआती के लिए एक उत्कृष्ट प्रोग्रामिंग गाइड। वॉल्यूम 1: Javascript - Jeremy Moritz ](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## योगदानकर्ताओं ✨

धन्यवाद इन अद्भुत लोगों को जाता है ([इमोजी की](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

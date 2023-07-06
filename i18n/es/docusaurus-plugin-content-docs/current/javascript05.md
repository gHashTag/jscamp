---
id: javascript05
title: Errores
sidebar_label: Errores
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/05.jpg)

Definitivamente cometerás errores  en el código , como todos nosotros. Los errores de software se llaman errores. Error: significa un error  en el programa 💾 o en el sistema, por lo que el programa produce un comportamiento inesperado y, como resultado, el resultado. La mayoría de los errores de programación  se deben a errores  que cometen los desarrolladores del programa, ya sea en su código fuente  o en su diseño.

![error](https://media.giphy.com/media/1VT3UNeWdijUSMpRL4/giphy.gif)

En el sentido de “error técnico esquivo ”, la palabra “bug” (error en inglés) fue utilizada mucho antes de la llegada de las computadoras     ️ por el personal de las compañías telefónicas y de telégrafos en relación con problemas con equipos eléctricos y de ingeniería de radio. En 1878 Thomas Edison escribió:

> “Así fue con todos mis inventos. 1️⃣ El primer paso es la intuición, que llega como un relámpago, luego surgen las dificultades: el dispositivo se niega a funcionar, y es entonces cuando aparecen los "errores", como se llama a estos pequeños errores y dificultades, y se necesitan meses de observación minuciosa, investigación y esfuerzo antes de que llegue al éxito o al fracaso comercial.

La depuración es el proceso de encontrar y corregir errores  en un script.

[Wikipedia](https://ru.wikipedia.org/wiki/Программная_ошибка)

## Video

<YouTube videoId="xJtVop2fAxg" />

## Errores más comunes

![Teacher](https://media.giphy.com/media/27c3zdaY6eeIAwp7Qi/giphy.gif)

Espero que ya hayas encontrado tus primeros errores  en el proceso de escribir código. ¿Por qué esperanza? Porque los errores  son nuestros maestros que nos muestran lo que estamos haciendo mal en nuestro código  y la computadora     ️, más precisamente el intérprete de código , simplemente no puede entendernos. Los errores al escribir código suceden casi todos los días. El truco es poder leer el mensaje de error  sobre el error  que te dará la máquina    para encontrar y corregir rápidamente la falla en el código escrito . Cuanto más aprenda JavaScript, más comenzará a apreciar los  mensajes de error : a menudo le muestran exactamente dónde se equivocó.

Un par de los tipos de errores más populares  en el código :

## SyntaxError

![Error](https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif)

`Syntax Error` - нарушение правил языка . Например введите ​​​​​девять плюс точка с запятой `9 + ;`:

```jsx live
function learnJavaScript() {
  let error = 9

  return error
}
```

Ответ: `SyntaxError: Unexpected token ;`

Un error de sintaxis  solo significa que el cuerpo de tu oración contiene un error . En otras palabras, lo que escribiste no es correcto en términos del lenguaje   JavaScript. El intérprete no puede leer su oración y no sabe qué hacer con ella. `Token inesperado;` significa que el intérprete leyó algo que no esperaba leer en absoluto: en nuestro caso, un punto y coma `;`.

¡Otra vez equivocado !
Escribe en la consola cinco más tres y el paréntesis al final `5+3)`.

```jsx live
function learnJavaScript() {
  let error = 5

  return error
}
```

Tiene una llave de cierre `)`, pero no una llave de apertura `(`! Pero los corchetes siempre vienen en pares: no puede haber una llave de cierre pero no una llave de apertura, y viceversa.

## ReferenceError

![Error](https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif)

¡`ReferenceError` es un nombre no válido! El objeto `ReferenceError` representa un error  que ocurre cuando se accede a una variable inexistente. Por ejemplo, ingrese cinco más variable `5 + variable`:

```jsx live
function learnJavaScript() {
  let error = 5

  return error
}
```

Ahora tenemos un error de llamada `ReferenceError`. ¿Quizás ya has notado cuál es el problema aquí? Leamos atentamente el mensaje de error  (¡después de todo, para eso es, después de todo!). Dice: `la variable  no está definida`: la variable no está configurada, ¡y aquí es donde radica nuestro problema! Primero necesitamos declarar la variable  de alguna manera, digamos así:

```jsx live
function learnJavaScript() {
  let переменая = 5
  let error = 5 + переменая

  return error
}
```

## TypeError

El objeto TypeError representa el error que ocurre cuando un valor no es del tipo esperado. Estamos aplicando el método `toUpperCase`, al que llegaremos con más detalle más adelante, en el tipo indefinido, que no está permitido porque este método convierte la cadena a mayúsculas. Verifique este error en la consola de su navegador ya que no funciona en `LIVE EDITOR`.

```javascript
let foo = undefined
foo.toUpperCase()
```

![TypeError](/img/javascript/25.jpg)

## Ayuda

También podemos cometer errores, por lo que si encuentra un error en el sitio o una inexactitud en la traducción, puede ayudar fácilmente a corregir el error en el sitio. Para hacer esto, haga clic en el botón `Editar esta página` en la parte inferior de cada página.

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Qué significa `Syntax Error`?

1. Orden incorrecto de los signos
2. Violación de las reglas del idioma.
3. Soportes inapropiados

¿Qué significa `Reference Error`?

1. Variable no declarada
2. Error de sintaxis
3. Tipo incorrecto

¿Qué tipo de error obtendrá si intenta ejecutar esta instrucción? \n `let sum = (9 +; 3)`

1. `undefined`
2. `SyntaxError` (el ';' apareció de repente aquí. Debería haberse movido al lado derecho del paréntesis de cierre).
3. `11;`

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)


## Enlaces:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures)
2. [Código para adolescentes: la gran guía de programación para principiantes Volumen 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/types)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

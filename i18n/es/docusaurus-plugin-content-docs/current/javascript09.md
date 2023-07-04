---
id: javascript09
title: Funciones
sidebar_label: Funciones
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/10.jpg)

Se necesitan funciones⚙️ para no repetir el mismo código📟 en muchos lugares del algoritmo del programa. En los programas modernos, las funciones son los "bloques" básicos.

## Don’t repeat yourself

DRY (ruso no repetir) es un principio de desarrollo de software destinado a reducir la repetición de información de varios tipos, especialmente en sistemas con muchas capas de abstracción. Las funciones son exactamente el tipo de datos que sirven a este principio de diseño.

## Video

<YouTube videoId="3rEcxqlkJNE" /> 

## Elegir un nombre de función

¡Función ⚙️ es acción! Por lo tanto, el nombre de la función suele ser un verbo. Debe ser simple, preciso y describir la acción de la función para que el programador que lea el código tenga una idea correcta de lo que hace la función.

![Choice](https://media.giphy.com/media/VbEloWwOz3QqYBsqIZ/giphy.gif)

Por regla general, se utilizan prefijos verbales que denotan el carácter general de la acción, seguidos de una aclaración. Por lo general, los equipos de desarrollo tienen convenciones con respecto a los significados de estos prefijos.

Por ejemplo, las funciones ⚙️ que comienzan con `"show"` generalmente muestran algo.

Características ⚙️ comenzando con…

```javascript
"get..." – valor de retorno🔄,
"calc..." - calcular algo,
"create..." - crear algo,
"check..." - verificar algo y devolver un valor booleano, etc.
```

Ejemplos de tales nombres:

```javascript
showMessage(..) // mostrar el mensaje
getAge(..) // devuelve la edad (en algún valor)
calcSum(..) // calcula la suma y devuelve el resultado
createForm(..) // crea un formulario (y generalmente devuelve uno)
checkPermission(..) // comprueba el acceso, devolviendo verdadero/falso
```

Gracias a los prefijos, a simple vista el nombre de una función queda claro qué hace su código📟 y qué valor puede devolver🔄.

En cualquier caso, usted y su equipo deben comprender exactamente qué significa el prefijo y qué puede y no puede hacer la función⚙️ con él.

:::note Nombres de funciones súper cortos⚙️
Los nombres de funciones⚙️ que se usan mucho a veces se hacen muy cortos.

Por ejemplo, el marco jQuery tiene una función ⚙️ denominada `$`. En la biblioteca de Lodash, la función principal ⚙️ está representada por el nombre del guión bajo \_

Estas son excepciones. En general, los nombres de las funciones deben ser moderadamente breves y descriptivos 🖊️.
:::

### Funciones === Comentarios

![cut](https://media.giphy.com/media/kf2bxcoZD8UmY/giphy.gif)

Las funciones⚙️ deben ser cortas y hacer una sola cosa. Si es algo grande, tiene sentido dividir la función⚙️ en varias más pequeñas. Definitivamente es útil seguir esta regla, especialmente en el trabajo en equipo.

Las funciones pequeñas⚙️ no solo facilitan las pruebas y la depuración, sino que la existencia misma de tales funciones⚙️ sirve como buenos comentarios.

## Declaración de función

![Announcement](https://media.giphy.com/media/2A5zHrIPvo8MNnkAXl/giphy.gif)

Para crear funciones⚙️ usamos una declaración de función🗣️⚙️.

Primero viene la palabra clave🗝️ palabra `funcion`, luego el nombre de la funcion⚙️, luego la lista de parámetros entre paréntesis separados por comas (en el ejemplo anterior está vacío) y finalmente el código📟 de la funcion⚙️, también llamada el “cuerpo de la funcion⚙️”, dentro de corchetes.

Esta forma clásica de escribir funciones 🖊️ se llama `Declaración de funcion`.

Sintaxis📖:

```javascript
function nombre (opciones) {
  ... тело ...  // Algoritmo
  return valorFinal
}
```

:::nota ¡Atención!
Si no se especifica `return`, la función⚙️ devuelve🔄 `undefined` en su lugar y, de forma predeterminada, se considera que la función⚙️ finaliza con un resguardo `return` vacío, ejecutando solo scripts internos.
:::

En JavaScript, puede crear una función⚙️ además del método clásico de `Declaración de función` de la siguiente manera:

- `Function Expression`
- `Arrow Function(funciones de flecha)`

`Expresión de función` es una declaración 🗣️ de una función⚙️ que forma parte de alguna expresión (por ejemplo, asignación).

```javascript
const имя = function (параметры) {
  // instrucciones
}
```

Compare `Declaración de función` y `Expresión de función`:

```javascript
// Function Declaration
function sum(num1, num2) {
  return num1 + num2
}

// Function Expression
const sum = function (num1, num2) {
  return num1 + num2
}
```

La sintaxis para `Arrow Function(funciones de flecha)` se presentará más adelante en este capítulo. Esta es la forma simplificada y más utilizada de escribir funciones 🖊️.

## Llamada de función

Para llamar a una función⚙️ y ejecutarla, debe referirse a ella por su nombre y luego especificar dos paréntesis `myMessage()`:

```javascript
// declaración de función
function myMessage() {
  let str = 'Hello!'
}

myMessage() // Llamada de función
```

Tenga en cuenta que en este ejemplo, se llama a la función ⚙️ pero no devuelve un valor 🔄.

## Funciones con retorno

![Return](https://media.giphy.com/media/Y08bx6Fea1BafzTlvc/giphy.gif)

Para que una función⚙️ devuelva algo🔄, en su cuerpo se indica la palabra clave🗝️ `return` (punto de salida o retorno🔄 del resultado) y el valor de retorno🔄.

```jsx live
function showNumberFive() {
  return 5
}
```

Experimenta, pon en lugar del número original 9️⃣ el número de tus años.

:::consejo ¡Recuerda!
Al declarar🗣️ una función⚙️ y luego llamarla, en cualquier caso, obtenemos el resultado de ejecutar el algoritmo (acciones descritas anteriormente) en el cuerpo de la función⚙️.
:::

## Función dentro de otra función

![Matryoschka](https://media.giphy.com/media/bFhSvsdyaCy4g0d2lU/giphy.gif)

Dentro de una función⚙️ puedes colocar otras funciones⚙️. Por ejemplo, la función⚙️ `showNumberFive()` devolverá el número 5️⃣, cuyo valor se mostrará mediante la llamada a la función⚙️ `learnJavaScript()`.

```jsx live
function learnJavaScript() {
  function showNumberFive() {
    return 5
  }
  return showNumberFive()
}
```

Veamos todo esto paso a paso:

- La palabra clave `función` le dice al intérprete que el siguiente código está definido por el usuario, es decir, usted lo creó y no es una función integrada.
- Escrito 🖊️ en mayúsculas y minúsculas `showNumberFive` ​​​​es el nombre personalizado para esta función. Para el intérprete, en general, no importa cómo se llame exactamente a esta función, pero es mejor dar nombres a las funciones que indiquen claramente qué hacen exactamente.
- Los corchetes `()` son un elemento obligatorio de cualquier función. A veces una, dos o más variables 🔔 se encierran entre paréntesis, en nuestro caso no hay nada entre paréntesis.
- Las llaves `{}` deben contener el cuerpo de la función en sí, la esencia del algoritmo del programa.
- El cuerpo de la función en sí se sangra habitualmente a la derecha (usando la tecla TAB). Esto no es necesario para la ejecución del programa, pero sí para el trabajo en equipo, ya que facilita mucho la legibilidad del código.
- La palabra clave `return` significa que cada vez que llamemos a esta función, el valor se pasará, es decir, se "devolverá" al intérprete, por lo que se llama "valor de retorno de la función".

<!-- Еще один пример 👇 :

```jsx live
function sum() {
  let x = 10
  let y = 20
  let z = x + y // Алгоритм
  return z
}
```

В функции⚙️ `sum()` объявляются🗣️ переменные `x` и `y` со значениями, объявляется🗣️ переменная 🔔 `z` и по заданному алгоритму производим расчет (сложение 2-х чисел), а результат выводим через `return`.

При необходимости обращаться к функции⚙️ можно несколько раз. Например в значение двух разных переменых присвоить нашу функцию⚙️:

```javascript
let x1 = sum()

let y1 = sum()
```

Этот пример явно показывает одно из главных предназначений функций⚙️: избавление от дублирования кода📟 ! Функцию⚙️ можно запускать множества раз в разных участках вашего кода📟 . -->

## Parámetros y argumentos de la función

![couple](https://media.giphy.com/media/3o7TKO3AC2o5cOkZfG/giphy.gif)

Declaremos🗣️ una función más⚙️, pero con una variable entre paréntesis.
Cuando una función ⚙️ tiene una variable 🔔 entre paréntesis, la llamaremos parámetro formal (indefinido de antemano, no sabemos cuál será el valor de x). La mayoría de las funciones⚙️ tendrán parámetros, pero a veces veremos funciones⚙️ sin ellos.

```javascript
function addThree(x) {
  return x + 3
}
```

Después de declarar🗣️ la función⚙️ y sus parámetros, podemos llamar (ejecutar) un "bloque de código" con un valor específico (por ejemplo: 5).
Llamaremos a esta asignación de valor un argumento:

```javascript
addThree(5)

Responder: 8
```

En nuestro ejemplo, el número 5️⃣ es un argumento de función: un valor específico pasado dentro de la función⚙️.
Tan pronto como nuestra función⚙️ recibió su argumento, inmediatamente asignó su valor a la variable x (que es el parámetro formal de nuestra función⚙️).

### Ejemplo de código📟:

Experimento 👇:

```jsx live
function learnJavaScript() {
  function addThree(x) {
    return x + 3
  }

  return addThree(5)
}
```

### Diferencia entre parámetros y argumentos

![Dedefencce](https://media.giphy.com/media/l41YkuPROHQj0fjRS/giphy.gif)

Consiste en lo siguiente:

`argumento` es un valor específico que "pasamos" a la función⚙️ cuando la llamamos entre paréntesis. Este valor o conjunto de valores se asigna a los parámetros formales de esta función⚙️.

`parámetro` es el nombre de una variable 🔔, especificada en la declaración de la función y esperando a que se le asigne un valor específico en el momento en que se llama a la función. El valor asignado al parámetro es el argumento.

Muchos programadores usan estos términos (argumento y parámetro) indistintamente, pero entendemos la diferencia.

## Ejemplo:

![Mathematics](https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif)

Intentemos declarar🗣️ una función⚙️ para calcular en dos lados del perímetro de un rectángulo, cuyos parámetros esperarán dos números 2️⃣ como su valor. Tenga en cuenta que si tiene más de un parámetro, deben estar separados entre sí por una coma.

```jsx live
function learnJavaScript() {
  function calcPrym(x, y) {
    return 2 * x + 2 * y
  }
  return calcPrym(7, 4)
}
```

Cuando llamemos a esta función⚙️, necesitaremos darle dos números 2️⃣ como argumentos: los valores de los lados de un rectángulo en particular (separados entre sí por una coma):

```javascript
calcPrym(7, 8)

Responder: 30
```

¡Oh, muchas gracias, computadora 🖥️!

Pasando otros valores a la función ⚙️, inmediatamente calculará los perímetros de otros rectángulos.

:::info ¡Una vez más!
Uno de los propósitos principales de las funciones⚙️ es deshacerse de la duplicación de código📟 y la capacidad de llamarlas varias veces para resolver sus problemas.
:::

## Funciones integradas

![Integration](https://media.giphy.com/media/F0NHdHQRjr9f2/giphy.gif)

### console.log()

![Secret](https://media.giphy.com/media/l1J9BGJOQMbkbpWVy/giphy.gif)

Una forma de enviar (registrar) información de depuración a la consola solo para desarrolladores (los usuarios no podrán verla; como saben, la mayoría de las personas ni siquiera sospechan la existencia de la consola en sí, ¡y mucho menos los "registros" secretos! ).

Presiona el atajo de teclado 🎹 `Ctrl + Shift + I` en el navegador Google Chrome y en la pestaña `Consola` escribe:

```javascript
console.log('¡Ultra secreto! ¡Solo para desarrolladores!')
```

Como implica el nombre de la función ⚙️, mostramos "log" (es decir, información sobre el funcionamiento del sistema) en la consola; los desarrolladores usan esta buena súper habilidad todo el tiempo. Digamos, cuando tuvo mensajes de error💬 sobre errores🙅‍♂️, vio exactamente esto en la consola: el intérprete emitió ("registró") información sobre el funcionamiento del sistema en la consola para que pudiera leer y corregir los parámetros necesarios. . En una palabra, algo muy útil. Tendrás que usar `console.log()` más de una o dos veces, ¡así que recuerda esta función⚙️!

Ingrese los siguientes comandos línea por línea:

```javascript
console.log('Imprime el mensaje que quieras')
console.log('simplemente escriba algo aquí' + 'cadena')
let myMessage = '¡También puedes usar variables como argumento!'
consola.log(miMensaje)
```

Mientras juegas con los registros de la consola, te mostraré un truco más. ¡Nuestro buen viejo amigo, la barra invertida, me ayudará a hacerlo!

Con su ayuda `\n` puedes descifrar tu código 📟 línea por línea. ¡Inténtalo tú mismo!
Ingrese los siguientes comandos línea por línea:

```javascript
console.log('Puede dividir cualquier texto\n en muchas\n líneas.')
console.log('Aquí está el primero.\nY aquí está el 2.º.\n3.º\n4.º\n5.º!')
```

Esta cosa `\n` en realidad tiene muchos usos prácticos útiles. Por ejemplo, puede dibujar en 📟 [ASCII](https://ru.wikipedia.org/wiki/ASCII) codificando un oso en la consola. Escriba en la consola:

```javascript
console.log(" c___c\n /. .\\\n \\_T_/\n /' '\\\n(/ . \\)\n/';‑;'\\\n()/ \\()")
```

¿Está claro por qué esto es así?

Cada `\n` establece una nueva línea, de modo que los caracteres subsiguientes parecen "descender" debajo, ¡y listo! ¡Hemos hecho una contribución seria al desarrollo de la sociedad dibujando un lindo oso!

### Math.random()

![Random](https://media.giphy.com/media/3o6ozoD1ByqYv7ARIk/giphy.gif)

Otra función integrada útil⚙️: `Math.random()`. Tenga en cuenta que, a diferencia de las anteriores, el nombre de esta función ⚙️ comienza con una letra mayúscula `'M'`. Hay razones para esto, las letras mayúsculas y minúsculas en JavaScript se distinguen por códigos internos📟.
En todos los idiomas👅, ya sea ruso, inglés o JavaScript, siempre hay algunas excepciones a las reglas. Aqui esta uno de ellos. Todas las demás variables y funciones ⚙️ que encuentre deben escribirse con una letra minúscula. Recuerda que las mayúsculas y minúsculas son importantes, y si el nombre de `Math.random()` comienza con `math`, ¡la función⚙️ simplemente no se ejecutará!

```jsx live
function learnJavaScript() {
  return Math.random()
}
```

Cada vez que un nuevo número! La función ⚙️ devuelve un número real aleatorio entre 0 y 1.

Modernicemos la ecuación 👇:

```jsx live
function learnJavaScript() {
  return Math.random() * 100
}
```

Si de repente necesita un número aleatorio en el rango de 0 a 100, entonces esta función⚙️ le será muy útil.

### Math.floor()

![Floor](https://media.giphy.com/media/uTAZTQi8dX1VGa4pXT/giphy.gif)

Esta función⚙️ toma un número o digit5️⃣ como argumento y lo redondea hacia abajo cuando se recibe.

```javascript
Math.floor(10.7) // 10
Math.floor(4.8) // 4
Math.floor(14.19723) // 14
```

```jsx live
function learnJavaScript() {
  return Math.floor(10.7)
}
```

### Math.round()

![rounding](https://media.giphy.com/media/g4G287ogD1fmgqwVjS/giphy.gif)

`Math.round(x)` es al revés, al entero más cercano, sin decimales.

```javascript
Math.round(10.7) // 11
Math.round(4.8) // 5
Math.round(14.19) // 14
```

```jsx live
function learnJavaScript() {
  return Math.round(10.7)
}
```

### .toUpperCase() / .toLowerCase()

![Words](https://media.giphy.com/media/Utt80M7ucSJyiGdbLi/giphy.gif)

¿Alguna vez has notado que ALGUNOS mensajes 💬 tienen DEMASIADAS PALABRAS EN MAYÚSCULAS?
Bueno, eso es lo que vamos a aprender ahora.

Puede tomar fácilmente cualquier cadena y devolver su nueva versión en mayúsculas 🖊️ (es decir, mayúsculas/minúsculas) utilizando el método integrado `.toUpperCase() / .toLowerCase()`. Y, en consecuencia, puede devolver cualquier cadena en minúsculas (es decir, en minúsculas).

Recuerda que un `método es solo una función` adjunta a un objeto 🖊️ descrito, en este caso una cadena genérica.

Funciona así, `.toUpperCase()` en mayúsculas 🖊️ letras 👇:

```jsx live
function learnJavaScript() {
  return '¡Me gusta la pizza!'.toUpperCase()
}
```

А `.toLowerCase()` в строчные:

```jsx live
function learnJavaScript() {
  return 'ESCUCHA, DEJA DE GRITAR YA.'.toLowerCase()
}
```

## ¡Y ahora todo está junto!

![Mix](https://media.giphy.com/media/WTdOnTQJwTHmhifwGE/giphy.gif)

Intentemos mezclar un pequeño cóctel de las funciones que acabamos de aprender⚙️.

```jsx live
function learnJavaScript() {
  // randomNumber - un número aleatorio entre 0 y 1
  let randomNumber = Math.random()
  // Multiplique nuestro número aleatorio por 100 para obtener un número entre [0; 100] desplazando el punto decimal 2 lugares a la derecha
  let number100 = randomNumber * 100
  // Use Math.floor() para redondear hacia ABAJO
  let task = 'Выбрано число от 0 до 100: '
  let numberBig = Math.floor(number100)
  // Salida de resultados
  return task + numberBig
}
```

Espero que nada de lo que hice haya resultado una tarea difícil para ti y hayas entendido todo. Si no, tómese su tiempo para revisar cada línea y sus comentarios.

## Arrow Function (funciones de flecha)

![Arrow](https://media.giphy.com/media/xT9IgAakXAITtXIWje/giphy.gif)

Existe una sintaxis📖 aún más simple y concisa para crear funciones⚙️ que a menudo es mejor que otros tipos.

Entonces, la versión clásica de grabación 🖊️ funciona⚙️:

Declaración de funciones:

```javascript
function func1(arg1, arg2, ...argN) {
  return expression
}
```

Function Expression:

```javascript
let func1 = function (arg1, arg2, ...argN) {
  return expression
}
```

Este código📟 crea una función⚙️ `func1` con argumentos `arg1, .. argN` y calcula `expression` - un conjunto de acciones del algoritmo en el lado derecho usándolas, devolviendo🔄 el resultado de los cálculos a través de la palabra clave `return `.

Ahora apliquemos funciones de flecha - `Funciones de flecha`:

```javascript
let func1 = (arg1, arg2, ...argN) => expression
```

Другими словами, это более короткий вариант такой записи 🖊️ .

:::note ¡Cómo!
`=>` reemplazó `{ return ... }` en el lado derecho y nos permitió no escribir 🖊️ la palabra clave 🗝️ `function` en el lado izquierdo.
:::

Veamos un ejemplo concreto 👇:

```jsx live
function learnJavaScript() {
  // La forma original de la función de suma de 2 números
  let calcSum1 = function (a, b) {
    return a + b
  }
  // Forma de flecha (sin palabra `función` y `retorno`)
  let calcSum2 = (a, b) => a + b

  return calcSum1(5, 2) + ' или ' + calcSum2(5, 2) // 7 o 7
}
```

¡Ambas opciones son correctas! `función` casi nunca se usa en el código 🖊️ moderno📟, ¡así que usa "funciones de flecha⚙️"!

### Solo un argumento

![only one](https://media.giphy.com/media/3o6MbjZirZUc6cYpz2/giphy.gif)

Si solo tenemos un argumento, entonces se pueden omitir los paréntesis alrededor de los parámetros, haciendo que la notación sea aún más corta `let num2 = n => n * 2`

```jsx live
function learnJavaScript() {
  // La forma original de la función de suma de 2 números:
  let num1 = function (n) {
    return n * 2
  }

  // eliminar corchetes alrededor de n
  let num2 = (n) => n * 2 // prettier-ignore

  return num1(7) + ' или ' + num2(7) // 14
}
```

### Si no hay argumentos

![no](https://media.giphy.com/media/LOEI8jsNKPmzdJYvhJ/giphy.gif)

Si no hay argumentos, entonces para evitar el doble `==`, se especifican `paréntesis vacíos` 👇:

```jsx live
function learnJavaScript() {
  let messHello = () => 'Hello!'

  return messHello()
}
```

¡Las `"funciones de flecha"` son prácticas y muy compactas!

## Funciones autoejecutables(IIFE)

![Start](https://media.giphy.com/media/xTiTnmeJ1bBGONMCBy/giphy.gif)

Una 'Expresión de función invocada inmediatamente' es una función de JavaScript que se ejecuta inmediatamente después de haber sido definida. JavaScript le permite crear, además de funciones ordinarias y de flecha, también funciones anónimas⚙️ que juegan un papel importante en JavaScript.

### Funciones anónimas

![Anonym](https://media.giphy.com/media/m3lszq64i1k2s/giphy.gif)

Si hay un nombre después de `función`, se nombra la función⚙️, en todos los demás casos es anónima.
Las funciones anónimas⚙️ a menudo se crean y ejecutan de inmediato. Otra diferencia importante es que las funciones con nombre⚙️ se declaran🗣️, mientras que las anónimas se crean utilizando la declaración de función.

Escribe el siguiente código en la consola de Google Chrome:

```
(function (num1, num2) {
  return num1 + num2
})(7, 4)
```

Una autoinvocación se crea mediante paréntesis al final de una función⚙️ que le dice al intérprete que la función⚙️ debe ejecutarse de inmediato.

## Conclusión

![conclusion](https://media.giphy.com/media/8Bksh0hra9RcZcSNSO/giphy.gif)

Una vez que comprenda la esencia de las funciones regulares y de flecha⚙️, podrá pasar funciones a objetos variables 🔔 y reconstruir código 📟 en módulos. Las funciones de este tipo también se pueden usar para crear y devolver 🔄 otras funciones ⚙️. Aquí ya estamos hablando del cierre, del que hablaremos en la próxima serie.

## Reaccionar nativo

Los componentes de React Native son los componentes básicos de la biblioteca `react-native`, a partir de la cual creamos interfaces para aplicaciones. Conceptualmente, los componentes son similares a las funciones de JavaScript.
La forma más fácil de declarar un componente es escribir una función de JavaScript. ¿Recuerdas el ejemplo de la primera serie `Hello world`?

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

const App = () => (
  <Text>Hello world!</Text>
)

export default App
```

Compliquemos el ejemplo y creemos un botón, haciendo clic en el cual llamará a la función `onPress`, donde puede implementar la funcionalidad que necesita.

```SnackPlayer name=index.js
import React from 'react'
import { Button } from 'react-native'

const App = (props) => {
  const onPress = () => console.log('click')

  return (
    <Button title="Press me" onPress={onPress} />
  )
}

export default App
```


## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas

![question](https://media.giphy.com/media/Uq4ucFb5FLDStK6CUk/giphy.gif)

¿Punto de salida o retorno en una función?

1. `Esc`
2. `return`
3. `Hello`

Palabra clave `return` dentro del cuerpo de la función \_\_\_

1. requerido
2. opcional
3. de manera diferente

Dada una función

```javascript
const addThree = x => x + 3

addThree(20)
```

Defina un parámetro formal:

1. `20`
2. `x`
3. `x + 3`

Dada una función

```javascript
const addThree = x => x + 3

addThree(20)
```

Defina un argumento:

1. `20`
2. `x`
3. `x + 3`

¿Para quién contiene información el comando `console.log`?

1. Usuario
2. Desarrollador
3. Intérprete de JavaScript

¿Dónde está la función incorporada?

1. `console.log()`
2. `myMessage()`
3. `return()`

¿Qué sintaxis usan las funciones de flecha?

1. `Вперед()`
2. `=>`
3. `go.Стрелка`

El uso de funciones de flecha permite?

1. Escriba código de forma más compacta y segura
2. Aumenta la estructura del código
3. Te permite usar nuevas variables

Una función autoejecutable es

1. Una función que se ejecuta inmediatamente después de haber sido definida
2. Función integrada en JavaScript
3. Este es un procedimiento ordinario que ejecuta una secuencia de comandos

¿Qué símbolos rodean el cuerpo de la función?

1. Corchetes `{y}`
2. `()`
3. `=>`

¿Qué acrónimo se utiliza para describir la intención de los buenos desarrolladores de evitar repetir bloques de código similares una y otra vez?

1. D.R.Y. (No te repitas - No te repitas)
2. R.Y. (Repítete a ti mismo - Repítete a ti mismo)

Si se pasan múltiples valores a una función, ¿qué carácter se usa para separarlos?

1. `,`
2. `.`
3. `/`

¿Qué función incorporada es buena para enviar mensajes secretos a los desarrolladores (oa usted mismo mientras depura su propio sitio web) que los usuarios probablemente no verán?

1. `console.log()`
2. `Math.floor()`
3. `Math.random()`

La función de aleatorización integrada devuelve un valor mayor que \_\_\_\_ pero menor que \_\_\_\_.

1. `0 и 100(Math.random())`
2. `0 и 1(Math.random())`
3. `1 и 0(Math.random())`

¿Qué función incorporada redondea cualquier número al entero más cercano?

1. `Math.floor()`
2. `Math.max()`
3. `Math.random()`

Una función puede estar envuelta en otra función.

1. `false`
2. `true`

Al evaluar las llamadas a funciones anidadas, el intérprete las evaluará internamente.

1. `false`
2. `true`

¿Qué método (función) puede usar para convertir una cadena para usar letras mayúsculas?

1. `toUpperCase()`
2. `toLowerCase()`
3. `Math.max()`

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Enlaces:

1. [MDN web docs - Function](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function)
2. [Learn.javascript.ru - Artículo "Funciones"](https://learn.javascript.ru/function-basics)
3. [Learn.javascript.ru - Artículo "Funciones de flecha"](https://learn.javascript.ru/arrow-functions-basics)
4. [Funciones anónimas y autoejecutables en JavaScript](https://webformyself.com/anonimnye-i-samovypolnyayushhiesya-funkcii-v-javascript/)
5. [Developer.mozilla.org - Artículo "Math"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math)
6. [Developer.mozilla.org - Artículo de funciones de flecha](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
7. [Basicweb.ru - Artículo "Funciones de JavaScript"](https://basicweb.ru/javascript/js_function.php)
8. [Javascript.ru - Artículo "Funciones"](https://javascript.ru/basic/functions)
9. [Código para adolescentes: la gran guía de programación para principiantes Volumen 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">📖</a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

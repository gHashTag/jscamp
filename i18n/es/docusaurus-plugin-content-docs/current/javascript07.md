---
id: javascript07
title: Números
sidebar_label: Números
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/07.jpg)

Hay dos tipos de números 2️⃣ en JavaScript moderno:

### `number`

Los números regulares en JavaScript se almacenan en el formato IEEE-754 de 64 bits, también conocido como números de coma flotante de doble precisión. Estos son los números que usaremos con más frecuencia. Los números enteros no se tratan como un tipo de número separado. Además de los números de punto flotante, también hay tres valores de caracteres que son numéricos: `Infiniy`, `-Infinity` y `NaN` (no es un número).

![Numbers](https://media.giphy.com/media/JtBZm3Getg3dqxK0zP/giphy.gif)

## Video

<YouTube videoId="wltQLqPeOyc" /> 

### `bigInt`

Los números hacen posible trabajar con enteros de longitud arbitraria. Rara vez se necesitan y se utilizan en los casos en que es necesario trabajar con valores más allá del valor entero seguro máximo `Number`.

Cualquier número, incluso una fracción decimal con muchos lugares decimales, nunca se cita.

Puede utilizar cuatro tipos de literales numéricos: decimal, binario, octal y hexadecimal. Dado que los últimos tres se usan muy raramente, omitiremos su descripción detallada , pero los curiosos pueden familiarizarse con ellos [aquí](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Numbers_and_dates).

:::caution
¡Tenga cuidado al usar ceros a la izquierda! Así que no necesitas poner un cero antes del número decimal.
:::

```jsx
1234567890
42

0888 // 888 se trata como decimal
0777 // procesado como octal no estricto (511 en decimal)
```

## Operaciones aritmeticas

![Arithmetic operation](https://media.giphy.com/media/gEvab1ilmJjA82FaSV/giphy.gif)

Se pueden usar dos o más enteros para formar un nuevo entero. Hay muchas maneras de componer un nuevo entero. La forma de componer un nuevo número a partir de dos o más números se llama aritmética.
En general, hay muchas operaciones aritméticas, pero solo hay cuatro básicas: suma, resta, multiplicación y división. Se llaman básicos, porque todas las demás acciones se reducen a ellos.

El signo más `+` se usa para expresar la suma: `4 + 4` Respuesta: `8`

Menos `–` para restar: `7 - 6` Respuesta: `1`

Un asterisco `*` representa la multiplicación: `3 * 4` Respuesta: `12`

Barra diagonal `/` división: `15 / 5` Respuesta: `3`

Si se realiza más de una acción en una línea, para separarlas y también para hacer que el código  sea más legible, usamos - (paréntesis). Escribamos las siguientes oraciones en la consola. La respuesta para cada uno de ellos debe consistir en un solo dígito 9️⃣:

```
 3 * (2 + 1)
(3 + 24) / (10 - 7)
(2 + 5 * 5) / (6 -  3)
 3 * (5 - 8 / 2) * (2 + 1)
```

Introduce los siguientes valores en `LIVE EDITOR` :

```jsx {2} live
function learnJavaScript() {
  let result = 2 + 3 // aquí
  return result
}
```

## Asignación combinada

![Combinación](https://media.giphy.com/media/l2Sq8jlaqqnqBoGhG/giphy.gif)

Un operador es una designación simbólica de alguna acción realizada en operandos en una expresión (por ejemplo: `+`, `-`, `*`, `/`).

El operando es algún valor procesado en el programa. Los operandos pueden ser de cualquier tipo de datos. El operando a la izquierda del operador es el operando izquierdo, el operando a la derecha del operador es el operando derecho.

El operador básico de asignación combinada es el signo igual `=`, que asigna el valor del operando derecho al operando izquierdo. Es decir - `x = y` asigna un valor a la variable  `y`, la variable  `x`.

Ya has visto cómo los operadores matemáticos asignan valores a las variables . Por ejemplo, así:

```javascript
let sum = 2 + 3 // valor de suma 7
```

Y probablemente no tuviste tiempo de olvidar que en cualquier momento puedes cambiar el valor de una variable ya conocida :

```jsx live
function learnJavaScript() {
  let sum = 2 + 3
  sum = sum + 3 // ahora el valor de la suma es 8
  return sum
}
```

¡Asignación con adición `+=` para aumentar rápidamente el valor de una variable! Aquí hay algunos ejemplos para ti:

```javascript
let sentido = 5
sentido += 2 // el valor ahora es 7 (igual que valor = // valor + 2)
sentido += 3 // el valor ahora es 10 (igual que valor = // valor + 3)
sentido = sentido + sentido // 20 (o simplemente valor += // valor)
sentido += sentido // 40 (igual que valor = valor + // valor)
```

Вы ведь уже догадались, что подобные штуки работают и с прочими математическими действиями, да?!

```javascript
sentido –= 25 // el valor ahora es 15 (igual que valor = valor − // 25)
sentido -= 2 // el valor ahora es 30 (igual que valor = // valor - 2)
sentido /= 3 // el valor ahora es 10 (igual que valor = // valor / 3)
sentido // Respuesta: 10
```

A continuación, compruebe todos los ejemplos enumerados en `LIVE EDITOR`:

```jsx live
function learnJavaScript() {
  let sentido = 0 + 0
  return sentido
}
```

Puede leer más sobre la asignación combinada [aquí](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)

## incrementar y decrementar

![increment](https://media.giphy.com/media/ZZaCZyXh5yR4bkJmlR/giphy.gif)

El operador `++` (incremento) aumenta el valor de su operando en uno. Si el valor del operando no es un número, el operador lo convierte automáticamente en un número, lo incrementa en uno y devuelve el resultado, que se vuelve a asignar al operando:

```jsx live
function learnJavaScript() {
  let incremento = 0
  incremento++
  return incremento
}
```

El operador `--` (decremento) funciona de manera similar al operador de incremento, pero no aumenta el valor de su operando, sino que, por el contrario, lo disminuye en uno:

```jsx live
function learnJavaScript() {
  let decrement = 6
  decrement--
  return decrement
}
```

## operador de módulo

![function](https://media.giphy.com/media/seVVu09CPz2upPeU1s/giphy.gif)

El signo `%` (por ciento) denotamos el resto de la división. El operador devuelve  el resto entero después de dividir el operando izquierdo por el operando derecho. El valor  devuelto siempre toma el signo del dividendo, no del divisor. Utiliza la función integrada ⚙️ módulo para obtener el resultado, que es el resto entero de dividir `let1` por `let2`.

`12 % 5` resultado `2`

`NaN % 2` da como resultado `NaN`

`1 % 2` resultado `1`

`2 % 3` resultado `2`

`4 % 2` resultado `0`

`5.5 % 2` da como resultado `1.5`

Compruebe todos los ejemplos enumerados en `LIVE EDITOR` e inmediatamente comprenderá todo:

```jsx live
function learnJavaScript() {
  let modulo = 12 % 5
  return modulo
}
```

## redondeo

![Balls](https://media.giphy.com/media/6glYLqOQ3dlok/giphy.gif)

El método `Math.round()` devuelve el número  redondeado al entero más cercano. Si la parte fraccionaria del número es mayor o igual a `0.5`, el argumento se redondeará al entero superior más cercano. Si la parte fraccionaria del número es menor que '0,5', el argumento se redondeará al entero menor más cercano.

`resultado = Math.round(20.49)` Devuelve el valor 20

`resultado = Math.round(20.5)` Devuelve el valor 21

compruébelo usted mismo:

```jsx live
function learnJavaScript() {
  let result = Math.round(20.49)
  return result
}
```

## React Native

Los números se insertan en las aplicaciones `React Native` con la misma facilidad que las cadenas.

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

const App = () => {
  const str = 999 
  return (
    <Text>{str}</Text>
)}


export default App
```

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Cuáles son las operaciones aritméticas básicas?

1. Suma, resta
2. Multiplicación, división
3. Sumas, restas, multiplicaciones, divisiones

¿Cuál es la forma correcta de leer `+=`?

1. Incremento
2. Asignación con adición
3. Más e igual

¿Cómo se escribe un incremento con signo(s)?

1.`++`
2. `--`
3. `+`

¿Cuál es el símbolo del resto de una división?

1. `%`
2. `/`
3. `\`

¿Qué valor devolverá `Math.round` cuando se aplique `Math.round (20.62)`?

1. `22`
2. `20`
3. `21`

¿Qué carácter especial podrías usar para hacer esta tarea más fácil? \n `myVariable = myVariable * 2`

1. `=*`
2. `*=`
3. `*`

¿Cuál es el símbolo que se usa para representar el módulo (resto de la división) en JavaScript?

1. `%`
2. `$`
3. `&`

¿Cuál es la forma más fácil (es decir, la más corta) de escribir esto (usando un carácter especial)? ¿Cuál es el nombre del carácter especial?\n `myVariable = myVariable + 1`

1. `myVariable++`
2. `myVariable+`
3. `myVariable+=`

¿Cuál es la forma más fácil (es decir, la más corta) de escribir esto (usando un carácter especial)? ¿Cómo se llama el personaje especial? \n `myVariable = myVariable - 1`

1. `myVariable--`
2. `myVariable-`
3. `myVariable-=`

Si tuviera que escribir un programa para determinar si un valor es par o impar, ¿qué número usaría después del operador módulo?

1. `2`
2. `4`
3. `0`

¿Qué carácter especial podría usar para facilitar esta tarea?\n `myValue = myValue - 8`

1. `- (myValue - 8)`
2. `-= (myValue -= 8)`
3. `=- (myValue =- 8)`

¿Cuál es el nombre colectivo de los símbolos que primero realizan una operación en una variable y luego asignan un nuevo valor a la misma variable (por ejemplo, +=, -=, \*= y /=)?

1. Asignación combinada
2. Tarea matemática
3. Cesión condicional

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Enlaces:

1. [MDN web docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Numbers_and_dates)
2. [Código para adolescentes: la gran guía de programación para principiantes Volumen 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/number)
4. [Operaciones aritméticas con números enteros](https://maths-public.ru/arithmetic/actions)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

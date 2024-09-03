---
id: javascript08
title: ¿Verdadero o falso?
sidebar_label: ¿Verdadero o falso?
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/08.jpg)

Habrá muchas cosas nuevas en este capítulo, pero no debería ser muy difícil: después de todo, en general, todo gira en torno a una idea simple: ¿verdadero o falso?

Hasta ahora, siempre hemos tratado solo con tipos de datos primitivos, con números y cadenas.
¿Quizás ya conoces el término "primitivo" en relación con la programación? Si no, aclaro: "primitivo" (también llamado "simple") significa que este tipo de datos no es un objeto (volveremos a este punto) y no tiene métodos de trabajo incorporados (es decir, funciones⚙️ ).

![True](https://media.giphy.com/media/gLWLC3fjwG56p3H4uC/giphy.gif)

El tipo de datos que definitivamente necesitará se llama booleano `boolean` o lógico. El tipo booleano siempre tiene el valor `true`  - verdadero, o `false`  - falso. ¡Y sólo de esta manera, y nada más! Está mintiendo o diciendo la verdad: acertar o fallar, encender o apagar las luces, estar allí o no. O hiciste tu tarea o no la hiciste. Solo dos valores de 2️⃣ `true`  o `false`.

## Video

<YouTube videoId="P5nXzvtZgH0" /> 

## Operadores de igualdad

![Operator](https://media.giphy.com/media/9r1n7HzkPT9sM1Wp0G/giphy.gif)

Los valores booleanos son útiles cuando necesitamos comparar algo en JavaScript. Cuando surge tal necesidad, llamamos inmediatamente a los operadores de comparación.
Ahora estudiaremos secuencialmente los ocho operadores de comparación, pero la cosa es que como resultado del trabajo de cada uno de ellos, todavía
siempre nos quedará un valor booleano, ya sea `true`  o `false` .

### Es igual a `==`

![Justice](https://media.giphy.com/media/3o85xDf6hr7ajhVL9K/giphy.gif)

El operador de igualdad primero convierte los operandos al mismo tipo y luego aplica una comparación estricta. Si ambos operandos son objetos, entonces JavaScript compara las referencias internas que son iguales si se refieren al mismo objeto en la memoria.

Sintaxis  :

```javascript
x == y
```

Примеры:

```javascript
1 == 1 // verdadero
'1' == 1 // verdadero
1 == '1' // verdadero
3 == 5 // Falso
0 == false // verdadero
'foo' == 'bar' // Falso
```

Ingrese los ejemplos uno por uno en la variable  `bool` de nuestro `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 1 == 1
  return bool.toString()
}
```

### No es igual a `!=`

![Equals](https://media.giphy.com/media/xT8qBit7YomT80d0M8/giphy.gif)

El operador no igual devuelve  `false`  si los operandos no son iguales. Es similar al operador de igualdad, convierte los operandos al mismo tipo antes de comparar. Si ambos operandos son objetos, JavaScript compara las referencias internas que no son iguales si se refieren a diferentes objetos en la memoria.

Sintaxis  :

```javascript
x != y
```

Ejemplos:

```javascript
1 != 2 // verdadero
1 != '1' // Falso
'1' != 1 // Falso
1 != true // Falso
0 != false // Falso
'foo' != 'bar' // verdadero
```

Ingrese los ejemplos uno por uno en la variable  `bool` de nuestro `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 1 != 2
  return bool.toString()
}
```

### Estrictamente igual a `===`

![equality](https://media.giphy.com/media/4W0ZwRP8y7pQtcUMyQ/giphy.gif)

El operador devuelve  verdadero si los operandos son estrictamente iguales. A diferencia del operador de igualdad, este operador no convierte operandos al mismo tipo.

Sintaxis  :

```javascript
x === y
```

Примеры:

```javascript
3 === 3 // verdadero
3 === '3' // Falso
'foo' === 'foo' // verdadero
```

El operador se asegura de que tanto el valor como el tipo sean estrictamente idénticos. En el caso de `3 === '3'`, el valor es, por supuesto, idéntico, pero el tipo no lo es: después de todo, el primero es un número y el segundo es una cadena.

Ingrese los ejemplos uno por uno en la variable  `bool` de nuestro `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 === 3
  return bool.toString()
}
```

### Estrictamente no es igual a `!==`

![ruler](https://media.giphy.com/media/tPK9Fyl1gyIkU6XbZv/giphy.gif)

El operador estrictamente no igual devuelve  verdadero si los operandos no son iguales o sus tipos son diferentes.

Sintaxis  :

```javascript
x !== y
```

Ejemplos:

```javascript
3 !== '3' // verdadero
4 !== 3 // verdadero
```

Ingrese los ejemplos uno por uno en la variable  `bool` de nuestro `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 === 3
  return bool.toString()
}
```

¿Por qué no usar `==` y `!=`? Sino porque tal necesidad, en general, nunca existe. En todos los casos posibles en los que pueda usarlos, siempre puede usar estrictos `===` y `!==`. Si desea más flexibilidad en la respuesta (por ejemplo, que tanto `1` como `'1'` o `true`  se acepten con el mismo éxito), simplemente puede incluir las opciones de respuesta deseadas en el código en sí (sin cambiando este `===`).

:::info Solo entiende la regla
Nunca use `==` o `!=`
:::

## Operadores de comparación

### Más `>`

![not equal](https://media.giphy.com/media/jPfQcPdmI9bTXpa7hi/giphy.gif)

El operador mayor que devuelve  verdadero si el valor del operando izquierdo es mayor que el valor del operando derecho.

Sintaxis  :

```javascript
x > y
```

Ejemplos:

```javascript
4 > 3 // verdadero
1 > 5 // Falso
```

Introduce los ejemplos uno por uno en la variable  `bool` en `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 4 > 3
  return bool.toString()
}
```

### Menos que `<`

![small](https://media.giphy.com/media/82tNeaMTlEsdW/giphy.gif)

El operador menor que devuelve  verdadero si el valor del operando de la izquierda es menor que el valor del operando de la derecha.

Sintaxis  :

```javascript
x < y
```

Примеры:

```javascript
3 < 4 // verdadero
5 < 2 // falso
```

Ingrese los ejemplos uno por uno en la variable  `bool` de nuestro `LIVE EDITOR`

```jsx live
function learnJavaScript() {
  let bool = 3 < 4
  return bool.toString()
}
```

### Mayor o igual que `>=`

![comparison operator](https://media.giphy.com/media/icJA0VF7ntoEL18Jez/giphy.gif)

El operador mayor que o igual devuelve  verdadero si el valor del operando de la izquierda es mayor o igual que el valor del operando de la derecha.

Sintaxis  :

```javascript
x >= y
```

Ejemplos:

```javascript
4 >= 3 // verdadero
3 >= 3 // verdadero
```

Ingrese los ejemplos uno por uno en la variable  `bool` :

```jsx live
function learnJavaScript() {
  let bool = 4 >= 3
  return bool.toString()
}
```

### Menor o igual que `<=`

![less](https://media.giphy.com/media/UQbDc6dyK6WjpCXMvt/giphy.gif)

El operador menor o igual devuelve  verdadero si el valor del operando de la izquierda es menor o igual que el valor del operando de la derecha.

Sintaxis  :

```javascript
x <= y
```

Примеры:

```javascript
3 <= 4 // verdadero
3 <= 3 // verdadero
```

Ingrese los ejemplos uno por uno en la variable  `bool` :

```jsx live
function learnJavaScript() {
  let bool = 3 < 4
  return bool.toString()
}
```

## Construcciones condicionales

![boolean](https://media.giphy.com/media/12W5Sg2koWYnwA/giphy.gif)

Debes estar pensando: "Bueno, todo este asunto de la lógica booleana era muy simple... Deben ser bastante inútiles y no se usan muy a menudo". ¡No importa cómo! Los valores booleanos se usan más que constantemente en la programación y, con mayor frecuencia, en forma de construcciones condicionales (o expresiones).

### ¿Qué es una "construcción condicional"?

![thoughtful](https://media.giphy.com/media/IyyGGEMZhZIZwAxnUS/giphy.gif)

¡Buena pregunta! Una construcción condicional es una oración que se usa para ejecutar ciertos bloques de código  de acuerdo con una condición dada. La condición (por ejemplo, al comparar `x === y`) siempre devuelve un valor booleano, ya sea `true`  o `false` . En consecuencia, si el valor es `true` , entonces se debe ejecutar el código; de lo contrario, se debe omitir el bloque de código. Veamos algunos ejemplos.

### Expresiones condicionales con `if`

![Instruction manual](https://media.giphy.com/media/2mDSs3gPUyrcMqtheg/giphy.gif)

La construcción `si` ejecuta `instrucción1` si la condición es `true` , si la condición es `false` , entonces se ejecuta `instrucción2`.

Sintaxis  :

```javascript
if (condición) {
  instrucciones1
} else {
  instrucciones2
}
```

`condición` -
Una expresión que es verdadera o falsa.

`instrucción1` -
La instrucción que se ejecutará si el valor de `condición` es verdadero `true`  . Puede ser cualquier declaración, incluido `if` anidado. Cuando no se requiere ninguna acción, se puede usar una declaración vacía.

`instrucción2` -
La instrucción a ejecutar si el valor de `condición` es falso `false`. Tal vez cualquier declaración, incluido `if` anidado. Las instrucciones también se pueden agrupar en un bloque. Cambie el año en la variable  `whatIsTheYearNow` y observe el resultado.

```jsx live
function learnJavaScript() {
  let whatIsTheYearNow = 2021

  if (whatIsTheYearNow === 2021) {
    whatIsTheYearNow = true
  } else {
    whatIsTheYearNow = false
  }

  return whatIsTheYearNow.toString()
}
```

### `if` no solo con valores booleanos

![No](https://media.giphy.com/media/ftqLysT45BJMagKFuk/giphy.gif)

Las expresiones condicionales pueden funcionar no solo con valores booleanos, es decir, con aquellos que no son exactamente `true`  o `false`  Entonces, en general, podemos usarlos con seguridad entre paréntesis, al igual que los valores booleanos.

- Todos los enteros excepto cero — `true` 
- Cadena con al menos un carácter `true` 
- Una cadena vacía es `false` 

Intentémoslo, ingrese valores en la variable  `bool` :

```jsx live
function learnJavaScript() {
  let bool = 1

  if (bool) {
    bool = true
  } else {
    bool = false
  }

  return bool.toString()
}
```

### Operadores de comparación en expresiones con `if`

![made for each other](https://media.giphy.com/media/6yxIP39EMwP7IlIA28/giphy.gif)

Hasta ahora, hemos tratado con comparaciones o con expresiones condicionales con `if`, pero hasta ahora no las hemos usado juntas, ¡sino que están hechas  la una para la otra!

```jsx live
function learnJavaScript() {
  let year = 2021

  let output

  if (year < 2020) {
    output = 'menos de 2020'
  } else {
    output = 'más 2020'
  }
  return output
}
```

### Múltiples condiciones `else if`

A veces, es necesario comprobar varias variantes de una condición. El bloque `else if` se usa para esto. Cambie el año y vea la salida.

```jsx live
function learnJavaScript() {
  let year = 2021

  let output

  if (year < 2020) {
    output = 'menos de 2020'
  } else if (year > 2020) {
    output = 'más 2020'
  } else {
    output = 'es igual a 2020'
  }
  return output
}
```

## Operadores booleanos

JavaScript tiene tres operadores lógicos: `||` (O), `&&` (Y) y `!` (NO).

A pesar de su nombre, estos operadores se pueden aplicar a valores de cualquier tipo. Los resultados obtenidos también pueden ser de otro tipo.

Veámoslos con más detalle.

### `||` (O)

El operador "OR" parece un carácter de barra doble:

```jsx
result = a || b
```

Tradicionalmente en la programación, OR solo está destinado a manipular valores booleanos: si alguno de los argumentos es `true`, devolverá `true`, de lo contrario devolverá `false`.

En JavaScript, como veremos más adelante, este operador funciona de forma ligeramente diferente. Pero primero veamos qué sucede con los valores booleanos.

Sólo hay cuatro combinaciones lógicas posibles:

```jsx
true || true // true
false || true // true
true || false // true
false || false // false
```

Como podemos ver, el resultado de las operaciones siempre es `true`, excepto cuando ambos argumentos son `false`.

Por lo general, el operador `||` se usa en un `si` para probar la veracidad de cualquier condición dada.

```jsx live
function learnJavaScript() {
  let hour = 9
  let result = ''

  if (hour < 10 || hour > 18) {
    result = 'La tienda está cerrada'
  }

  return result
}
```

### `&&` (И)

El operador AND se escribe como dos símbolos de unión `&&`:

```jsx
result = a && b
```

En la programación tradicional, AND devuelve "true" si ambos argumentos son verdaderos y "false" en caso contrario:

```jsx
true && true // true
false && true // false
true && false // false
false && false // false
```

Пример с `if`:

```jsx live
function learnJavaScript() {
  let hour = 12
  let minute = 30
  let result = ''

  if (hour === 12 && minute === 30) {
    result = 'The time is 12:30'
  }

  return result
}
```

### `!` (NO)

El operador NOT se representa con un signo de exclamación `!`.

La sintaxis es bastante simple:

```jsx
result = !value
```

El operador toma un argumento y hace lo siguiente:

Primero convierte el argumento en el booleano `true/false`.
Luego devuelve el valor opuesto.

Por ejemplo:

```jsx
!true // false
!0 // true
```



## Operador condicional (ternario) `?`

![question mark](https://media.giphy.com/media/wH4rY2nPnEnp6/giphy.gif)

El único operador en JavaScript que toma tres operandos: `condición` seguida de un signo de interrogación `?`, luego `expresión`, que se ejecuta si la condición es verdadera, seguida de dos puntos `:` y finalmente `expresión`, que se ejecuta si la condición es falsa. A menudo se usa como una versión abreviada de la declaración condicional `si`.

Sintaxis  :

```javascript
condición ? expresión1 : expresión2
```

Opciones:

`condición` - Una expresión que se evalúa como `true`  o `false`  .

`expresión1`, `expresión2` - Expresiones cuyos valores pueden pertenecer a cualquier tipo.

Ejemplo :

```jsx live
function learnJavaScript() {
  let age = 20
  let output = age > 18 ? 'Да' : 'Нет'

  return output
}
```

## React Native

Por ejemplo, necesitamos mostrar un indicador de carga siempre que se carguen los datos del servidor, y luego mostrar estos datos. Por ahora, emule este cambio manualmente y reemplace `false` con `true`.

```SnackPlayer name=index.js
import * as React from 'react'
import { Text, ActivityIndicator } from 'react-native'

const App = () => {
  const fetchData = false // здесь измени на true

  const data = 'Здесь был Вася!'

  return (
    <>
      { fetchData ? 
        <Text>{data}</Text> 
        : 
        <ActivityIndicator size="large" color="red" /> 
      } 
    </>
)}


export default App
```

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Cuál es la sintaxis del operador igual?

1. `x == y`
2. `x = y`
3. `x -- y`

¿En qué caso el operador no igual devuelve `true`?

1. Si los operandos no son iguales
2. Si los operandos son iguales
3. Si ambos operandos son objetos

¿En qué se diferencia el operador de igualdad de estrictamente igual?

1. Estrictamente igual no convierte operandos al mismo tipo
2. Estrictamente iguales lanzan operandos al mismo tipo
3. Estrictamente igual asegura que el valor es idéntico, pero el tipo no es

¿Cuál es la sintaxis del operador estrictamente no igual?

1. `!=`
2. `!==`
3. `==!`

¿En qué caso el operador más que devuelve falso?

1. Si el valor del operando izquierdo es mayor que el valor del operando derecho
2. Si el valor del operando derecho es mayor que el izquierdo
3. Si los valores del operando son iguales

¿Cuál es la sintaxis del operador mayor o igual que?

1. `>=`
2. `> =>`
3. `> <=`

¿En qué ejemplo el operador menor o igual devolvería verdadero?

1. `4 <= 5`
2. `5 <= 4`
3. `3 <= 2`

¿Qué es una condición?

1. instrucción
2. Expresión
3. Significado

¿Qué bloque se usa para probar múltiples variantes de una condición?

1. `else if`
2. `if`
3. `for`

¿Qué operador toma 3 operandos?

1. Operador condicional (ternario)
2. Mayor o igual
3. Menor o igual

¿Qué operador de comparación es preferible para verificar: los valores no son iguales?

1. `===`
2. `!=`
3. `!==`

¿Qué dos operadores de comparación se recomienda no usar en el código?

1. `> y <`
2. `== y !=`
3. `=> y <=`

¿Qué operador de comparación comprueba si el valor de la derecha es menor o igual que el valor de la izquierda?

1. `<=`
2. `=>`
3. `>=`

¿Cuáles son las instrucciones generales de codificación que se utilizan para ejecutar ciertos bloques de código en función de una condición dada?

1. Expresión booleana
2. Expresión condicional
3. Expresiones misceláneas

¿Qué tipo de declaración solo se ejecuta cuando la condición para el bloque `if` se evalúa como `false`?

1. `if`
2. `else if`
3. `else`

Los operadores de comparación siempre se evalúan como "true" o "false".

1. `true`
2. `false`

A veces, los operadores de comparación se pueden usar dentro de la instrucción `else`.

1. `true`
2. `false`

La declaración `if / else` solo se puede usar fuera de una función.

1. `true`
2. `false`

Al igual que los operadores de comparación, los operadores \_\_\_ (`&&`, `||` y `!`) funcionan muy bien en declaraciones condicionales.

1. condiciones
2. comparaciones
3. lógica

¿Qué es `53 >= 53 && !(51 <= 52)`?

1. `true`
2. `false`

Si una condición entre paréntesis de un bloque `if` devuelve falso, ¿qué sintaxis se puede usar para probar otra condición antes de convertirla en un bloque `else`?

1. `else if`
2. `if`
3. `else`

¿Cuál es el nombre del único operador lógico que siempre devuelve un valor booleano? ¿Cuál es el símbolo de este operador lógico?

1. `!`
2. `||`
3. `&&`

¿Cuál es el nombre del operador lógico que devolverá verdadero si es verdadero en ambos lados? ¿Cuál es el símbolo de este operador lógico?

1. `||`
2. `&&`
3. ambas cosas

¿Qué es `true || false`?

1. `true`
2. `false`

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Enlaces:

1. [Documentos web de MDN - Operadores de comparación](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Операторы_сравнения)
2. [Código para adolescentes: la gran guía de programación para principiantes Volumen 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  </a><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
  </tr>

</table>

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

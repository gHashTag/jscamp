---
id: javascript11
title: Tipo de conversión y fundición
sidebar_label: Tipo de conversión y fundición
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/09.jpg)

## Escriba coerción

Esta es una conversión automática o implícita de valores de un tipo de datos a otro (por ejemplo, una cadena a un número). La conversión de tipos es similar a la conversión de tipos porque ambos convierten valores de un tipo de datos a otro con una diferencia clave: la conversión de tipos es implícita, mientras que la conversión de tipos puede ser implícita o explícita.

![transformation](https://media.giphy.com/media/xT4uQr9H3EDL7Ha2hq/giphy.gif)

Ejemplos :

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = value1 + value2

  return sum
}
```
En el ejemplo anterior, JavaScript convierte el número `9` en una cadena y luego concatena los dos valores 2️⃣, lo que da como resultado la cadena `59`. JavaScript podía elegir entre una cadena o un número y eligió usar una cadena.

El compilador podría haber convertido la cadena `5` en un número y devolver la suma `14`, pero no lo hizo. Para obtener este resultado, debe convertir explícitamente la cadena `5` en un número mediante el método `Number()`:

```jsx live
function learnJavaScript() {
  const value1 = '5'
  const value2 = 9
  let sum = Number(value1) + value2

  return sum
}
```
## Video

<YouTube videoId="Ay82Lut-CS8" /> 

## Tipo de conversión

![Transformation](https://media.giphy.com/media/l2SpMMVivErM0Q7jG/giphy.gif)

Significa la transferencia de datos de un tipo de datos a otro. La conversión implícita ocurre cuando el compilador asigna automáticamente tipos de datos, pero el código fuente también puede requerir explícitamente una conversión para completarse.

### Conversión de cadenas

![Transformation](https://media.giphy.com/media/RLVHPJJv7jY1q/giphy.gif)

Una conversión de cadena ocurre cuando algo debe representarse como una cadena. Por ejemplo, podemos usar la función `String(value)` para convertir un valor en una cadena :

```jsx live
function learnJavaScript() {
  let value = true // boolean

  value = String(value)
  return typeof value
}
```

La transformación se produce de forma evidente. `true`  se convierte en `"true"` 

### Conversión numérica

![Transformation](https://media.giphy.com/media/4H5nOUqX7FywOGpCF7/giphy.gif)

La conversión numérica ocurre en funciones matemáticas⚙️ y expresiones.

```jsx live
function learnJavaScript() {
  let value = '6' / '2'

  return value
}
```

Podemos usar la función `Número (valor)` para convertir explícitamente `value` en un número :

```jsx live
function learnJavaScript() {
  let str = '123'
  let num = Number(str)

  return typeof num
}
```

La conversión explícita se usa a menudo cuando esperamos obtener un número de un contexto de cadena, como campos de formulario de texto .

Si la cadena no se puede convertir explícitamente en un número, el resultado de la conversión será `NaN` (del inglés Not-a-Number, "no es un número"). Por ejemplo :

```jsx live
function learnJavaScript() {
  let age = Number('Cualquier cadena en lugar de un número')

  return age
}
```

### Reglas de conversión numérica:

| Sentido          |                                                                           convertido                                                                          |
| ---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `undefined`      |                                                                                `NaN`                                                                                 |
| `null `          |                                                                                 `0`                                                                                  |
| `true` / `false` |                                                                              `1` / `0`                                                                               |
| `string`         | Los caracteres de espacio en blanco se cortan en los bordes. Además, si queda una cadena vacía, obtenemos 0; de lo contrario, se "lee" un número de una cadena no vacía. En caso de error el resultado es NaN. |

Ejemplos:

```javascript
Number('   123   ') // 123
Number('123z') // NaN (error al leer el número en lugar del carácter "z")
Number(true) // 1
Number(false) // 0
Number(null) // 0
Number(undefined) // NaN
```

Tenga en cuenta que `null` e `undefined` se comportan de manera diferente. Entonces `null` se convierte en nulo, mientras que `undefined` se convierte en `NaN`.

### Transformación booleana

![Transformation](https://media.giphy.com/media/JjAdpCxrdro7m/giphy.gif)

La transformación lógica es la más simple. Ocurre en operaciones lógicas, pero también se puede hacer explícitamente con la función ⚙️ `Boolean(value)`.

### Reglas de transformación lógica:

Los valores que son intuitivamente "vacíos", como `0`, la cadena vacía, `null`, `undefined` y `NaN`, se convierten en `false`. Todos los demás valores se vuelven `true`.

```javascript
Boolean(1) // true
Boolean(0) // false
Boolean('¡Hola!') // true
Boolean('') // false
```

Se utiliza una forma más corta de la función `Boolean` double NOT(!!) para convertir valores a un valor booleano:

```jsx
!!'non-empty string' // true
!!null // false
```

Es decir, el primero NO convierte el valor a booleano y devuelve lo contrario, y el segundo NO lo vuelve a invertir. Al final, tenemos una simple conversión de valor a booleano.

:::precaución Tenga en cuenta que la cadena con cero "0" es verdadera
Algunos lenguajes  (como PHP) tratan la cadena `"0"` como `false`. Pero en JavaScript, si la cadena no está vacía, siempre es `false`.

:::

```javascript
Boolean('0') // verdadero
Boolean(' ') // el espacio también es verdadero (cualquier cadena no vacía es verdadera)
```

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas:

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Qué función se debe usar para la conversión de cadenas?

1.  `Boolean(value)`
2.  `String(value)`
3.  `Number(value)`

¿Qué es la conversión de tipos?

1. Pasar datos de un tipo a otro
2. Convertir valores de un tipo de datos a otro
3. Representar algo como una cadena

¿Cuál es la diferencia clave entre la conversión de tipos y la conversión de tipos?

1. La conversión de tipos es explícita y la conversión de tipos es implícita.
2. La conversión de tipos es implícita y la conversión de tipos es explícita.
3. La conversión de tipos es implícita y la conversión de tipos puede ser tanto explícita como implícita.

¿En qué caso el resultado de la conversión será `NaN`?

1. Cuando una cadena no se puede convertir explícitamente en un número
2. Cuando un número no se puede convertir explícitamente en una cadena
3. Cuando hay un error en el código

¿En qué se convierten los valores "vacíos" cuando se convierten?

1.  `null`
2.  `true`
3.  `false`

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://apps.apple.com/kz/app/englishmoji/id6450254885)

## Enlaces:

1. [Documentos web de MDN: conversión de tipos](https://developer.mozilla.org/ru/docs/Словарь/Type_coercion)
2. [para adolescentes: La gran guía de programación para principiantes Volumen 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)
3. [JavaScript.ru](https://learn.javascript.ru/ifelse#blok-else)
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

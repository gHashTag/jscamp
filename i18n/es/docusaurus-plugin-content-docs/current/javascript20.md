---
id: javascript20
title: Destrucción de arreglos y objetos.
sidebar_label: Destrucción de arreglos y objetos.
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/30.jpg)

La desestructuración en JavaScript es una sintaxis de asignación que le permite extraer datos de forma conveniente, en una sola línea, de matrices y objetos.

## Desestructuración de objetos

![object](https://media.giphy.com/media/3o85xx7Yll3UyNVQf6/giphy.gif)

```jsx live
function learnJavaScript() {
  // Создаём объект `fruit`
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: 5
  }

  // Destrucción del objeto `fruit`
  let { title, group, quantity } = fruit

  // Mostrar `title`
  return title
}
```
Las propiedades `title`, `group` y `quantity` repiten la estructura del objeto `fruta` y copian sus valores en variables idénticas  ubicadas en `{...}`. Por lo tanto, si intercambia las variables  en `{...}`, entonces el código funcionará igual de bien, intente intercambiar las variables  en el ejemplo anterior.

## Video

<YouTube videoId="AGB030qG0zA" />

### objeto anidado

![bookmark](https://media.giphy.com/media/3og0IDyqVFNH7qFpAI/giphy.gif)

También podemos desestructurar un objeto anidado.

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: {
      store: 5,
      storeHaus: 99
    }
  }

  let {
    title,
    quantity: { store: s1, storeHaus: s2 }
  } = fruit

  return title + ', ' + parseFloat(s1 + s2)
}
```

### Otros nombres

Si necesita usar nombres de variables  que no sean nombres de propiedades, esta sintaxis funcionará:

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: 5
  }
  // title -> a; group -> b; quantity -> c
  let { title: a, group: b, quantity: c } = fruit

  return a
}
```

### Valores predeterminados

Si en `{...}` escribes una variable  propiedades que no se encuentran, entonces se le asignará el valor `undefined`. Para asignar un valor predeterminado a una variable , se le puede asignar este valor. Si intenta asignar un valor a una variable  cuyas propiedades se encuentran, se le asignará el valor de la propiedad. Veamos un ejemplo.

![Dafault](https://media.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana'
  }
  let { title = 'lime', group, quantity = 5 } = fruit

  return title + ', ' + group + ', ' + quantity
}
```

`title` muestra el valor de la propiedad, no lo que le asignamos. La propiedad `group` no existe en el objeto `fruit` y no hemos asignado ningún valor a la variable . La propiedad `quantity` tampoco existe, pero le hemos asignado el valor `5` a la variable .

### Resto

![octatok](https://media.giphy.com/media/hvddF1vHatFIgQspUB/giphy.gif)

Si necesita obtener una variable  de un objeto y agrupar el resto en otro objeto, utilice `...` antes de la variable  a partir de la cual se creará el objeto con las propiedades restantes.

```jsx live
function learnJavaScript() {
  let fruit = {
    title: 'banana ',
    group: 'tropical ',
    quantity: 5
  }
  let { group, ...prop } = fruit

  return prop.title + group
}
```

## Desestructuración de arreglos

La desestructuración de una matriz ocurre de la misma manera que la de un objeto. La única diferencia es que los valores de los elementos de la matriz se asignarán a las variables  en el orden en que se definen los elementos.

![Take](https://media.giphy.com/media/IuBlckSD7dQv6/giphy.gif)

```jsx live
function learnJavaScript() {
  // Crear una matriz `fruit`
  let fruit = ['banana', 'tropical', 5]

  // Destrucción de la matriz `fruit`
  let [title, group, quantity] = fruit

  // Visualización en la pantalla
  return `${title}, ${group}, ${quantity}`
}
```

### Resto

Por analogía con los objetos, el resto funciona.

```jsx live
function learnJavaScript() {
  let fruit = ['banana ', 'tropical ', 5]

  let [name, ...prop] = fruit

  return `${name}, ${prop}`
}
```

### Copia de matriz

Un ejemplo de creación de una copia  de una matriz.

![Copia](https://media.giphy.com/media/GI1KnTxySlrCE/giphy.gif)

```jsx live
function learnJavaScript() {
  let fruit = ['banana ', 'tropical ', 5]

  let _fruit = [...fruit]

  return _fruit
}
```

### Unión de arreglos

![add](https://media.giphy.com/media/3gMrhfFtWHq9XxtqPy/giphy.gif)

Un ejemplo de combinación de arreglos en uno.

```jsx live
function learnJavaScript() {
  let name = ['banana '],
    prop = ['tropical ', 5],
    fruit = [...name, ...prop]

  return fruit
}
```

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## preguntas

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Desestructurar es?

1. Función
2. Sintaxis
3. Objeto

Al desestructurar un objeto, ¿es necesario poner las variables en el mismo orden que están en el objeto?

1. `true`
2. `false`

¿Qué se asignará a una variable si no se encuentra una propiedad idéntica en el objeto?

1. `error`
2. `undefined`
3. `unknown`

Para comprender cuánto ha aprendido en esta lección, realice la prueba en [aplicación móvil] (http://onelink.to/njhc95) en nuestra escuela sobre este tema.

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## Enlaces

1. [Learn JavaScript](https://learn.javascript.ru/destructuring-assignment)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
3. [Desestructuración en ES6](https://medium.com/@stasonmars/деструктуризация-в-es6-полное-руководство-b865bb71f376)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr> 
    <td align="center"><a href="https://github.com/IIo3iTiv"><img src="https://avatars1.githubusercontent.com/u/72025062?v=4?s=200" width="200px;" alt=""/><br /><sub><b>IIo3iTiv</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/commits?author=IIo3iTiv" title="Documentation">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

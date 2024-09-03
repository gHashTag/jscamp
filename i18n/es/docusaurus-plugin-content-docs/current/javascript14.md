---
id: javascript14
title: Expresiones regulares
sidebar_label: Expresiones regulares
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/13.jpg)

Las expresiones regulares (inglés _regular expressions_) es un lenguaje formal   para buscar y manipular cadenas en texto  basado en el uso de metacaracteres.

Las expresiones regulares le permiten:

- Buscar texto en una cadena
- Reemplazar subcadenas en una cadena
- Extraer información de una cadena

![search](https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif)

JavaScript, junto con Perl, es uno de los lenguajes de programación  en los que la compatibilidad con expresiones regulares está integrada directamente en el lenguaje .

## Video

<YouTube videoId="HBAejHnWk7g" />

## Dificultad de uso

![the complexity of using](https://media.giphy.com/media/5XYsIwzY00ONq/giphy.gif)

La desventaja de las expresiones regulares es que a menudo se ven extrañas e incluso intimidantes. Esto es especialmente cierto para las plantillas más complejas.

```jsx
let regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
```

## Definición de expresiones regulares

![search](https://media.giphy.com/media/RMwYOO5e8pr1lhL8K7/giphy.gif)

La definición de una expresión regular es la creación de una plantilla, sobre la base de la cual se realizará el trabajo con cadenas. En JavaScript, una expresión regular es un objeto que se puede definir de dos maneras.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="literal"
values={[
{label: 'Literal', value: 'literal'},
{label: 'Diseño', value: 'construction'},
]
}>
<TabItem value="literal">

Definición de expresiones regulares usando literales. Para las expresiones regulares, las barras diagonales `/ ... /` actúan como literales, juegan el mismo papel que los corchetes `' ... '` al crear  cadenas.

```jsx
let regExp = /muestra/
```

Si decide crear  expresiones regulares utilizando literales, debe tener en cuenta que este método de creación _no permite cambios dinámicos_ de los valores establecidos. Esto se debe a que los literales de expresiones regulares provocan una _precompilación_ cuando se analiza el script.

  </TabItem>
  <TabItem value="construction">

Definición de expresiones regulares usando un constructor.

```jsx
let regExp = new RegExp('muestra')
```

La compilación de la expresión regular creada por  usando el constructor ocurre en el momento de la ejecución del script. Esta forma de crear debe usarse si su expresión regular se crea a partir de una cadena generada dinámicamente.

  </TabItem>
</Tabs>

## Uso

![pressing the button](https://media.giphy.com/media/12hhLP67q6PqCs/giphy.gif)

Usando expresiones regulares, veamos un ejemplo:

```jsx
let regExp = /banana/
```

Con este código hemos creado una expresión regular simple que busca la cadena `banana`. Para probar una expresión regular, puede usar el método `.test(string)`, el resultado del método es un valor `boolean`.

```jsx live
function learnJavaScript() {
  let regExp = /banana/,
    str = 'fanana ranana banana'
  return regExp.test(str) ? 'Encontrado' : 'No'
}
```

En el ejemplo, la expresión regular busca la subcadena `banana` en la cadena `str`.

## Anclajes

![anchor](https://media.giphy.com/media/3ohze1LSWrEGCML02Y/giphy.gif)

Los anclajes anclan un patrón al principio o al final de una cadena. Para enlazar al principio de una línea, use `^`, y al final - `$`.

```jsx live
function learnJavaScript() {
  let regExp = /^banana/,
    str = 'lime banana orange'
  return regExp.test(str) ? 'Encontrado' : 'No'
}
```

Usando este patrón `/banana/` buscará `banana` en toda la cadena. Si necesita verificar una coincidencia completa de una cadena con un patrón, debe usar los anclajes `/^banana$/`. El método `.test()` devolverá `true`  solo si la cadena completa es `banana`.

## Banderas

![Flag](https://media.giphy.com/media/ihRmRCxJuIi3pCORTL/giphy.gif)

Las banderas se utilizan para extender la búsqueda realizada por expresiones regulares.

- `g` - al buscar, busca todas las coincidencias;
- `i` - la búsqueda no distingue entre mayúsculas y minúsculas `[Z-z]`;
- `m` - modo multilínea;
- `s` - activa el modo **dotall**, en el que el punto `.` puede coincidir con el carácter de nueva línea;
- `y` - busca a partir del carácter que está en la posición de la propiedad **lastindex** de la expresión regular actual;
- `u` - habilita la compatibilidad con **Unicode**.

Uso de banderas de diferentes maneras para crear un patrón de expresión regular 
<Tabs
defaultValue="literal"
values={[
{label: 'Литерал', value: 'literal'},
{label: 'Diseño', value: 'construction'},
]
}>
<TabItem value="literal">

```jsx
let regExp = /patrón/bandera // prettier-ignore
```

Tenga en cuenta que las banderas son **una parte esencial** de una expresión regular. Las banderas no se pueden agregar o eliminar más tarde. Las banderas también se pueden combinar.

```jsx live
function learnJavaScript() {
  let regExp = /banana/i,
    str = 'faNana RanaNA BaNanA'
  return regExp.test(str) ? 'Encontrado' : 'No'
}
```

Intente eliminar el indicador `i` del ejemplo.
</TabItem>
<TabItem value="construction">

```jsx
let regExp = new RegExp('plantilla', 'bandera')
```

Tenga en cuenta que las banderas son **una parte esencial** de una expresión regular. Las banderas no se pueden agregar o eliminar más tarde. Las banderas también se pueden combinar.

```jsx live
function learnJavaScript() {
  let regExp = new RegExp('banana', 'i'),
    str = 'faNana RanaNA BaNanA'
  return regExp.test(str) ? 'Encontrado' : 'No'
}
```

Intente eliminar el indicador `i` del ejemplo. La búsqueda ahora distingue entre mayúsculas y minúsculas.
</TabItem>
</Tabs>

## Total

El tema es muy extenso y rara vez lo usamos en el desarrollo, por lo que si está interesado, puede familiarizarse con él con más detalle [aquí,](https://learn.javascript.ru/regular-expressions) [aquí]( https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions)[ y aquí.](https://tuhub.ru/frontend/js-regexp)

## ¿Problemas?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Preguntas

![Question](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Para qué sirven las expresiones regulares?

1. Crea plantillas
2. Manipulación de cadenas
3. Edición de línea

¿Qué carácter se usa para crear literalmente una expresión regular?

1. Barra inclinada `/`
2. Barra invertida `\`
3. Corchetes `[]`

¿Qué forma de crear una expresión regular no permite un mayor cambio dinámico de los valores dados?

1. En un literal
2. En diseño
3. Con cualquier método, se permite el cambio dinámico

Para comprender cuánto ha aprendido en esta lección, realice la prueba en [aplicación móvil](http://onelink.to/njhc95) en nuestra escuela sobre este tema.

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Enlaces

1. [Learn JavaScript](https://learn.javascript.ru/regular-expressions)
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions)
3. [JS RegExp](https://tuhub.ru/frontend/js-regexp)

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

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

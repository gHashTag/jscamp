---
id: javascript16
title: Ciclos
sidebar_label: Ciclos
---

import YouTube from 'react-youtube'

![@serverSerrverlesskiy](/img/javascript/headers/17.jpg)

Cuando alguna acción necesita repetirse una gran cantidad de veces, los bucles se utilizan en la programación. Por ejemplo, debe mostrar el texto  "¡Hola, mundo!" 200 veces en la pantalla.  . En lugar de repetir el mismo comando de salida de texto  200 veces, a menudo se crea un bucle que repite 200 veces lo que está escrito  en el cuerpo del bucle. Cada repetición se llama iteración.

![cycle](https://media.giphy.com/media/Pkck2unt0XQfc4gs3R/giphy.gif)

Iteración en programación, en un sentido amplio, la organización del procesamiento de datos, en la que las acciones se repiten muchas veces, sin dar lugar a llamadas 📞 de sí mismas (a diferencia de la recursividad). En un sentido estricto, es un paso de un proceso iterativo y cíclico.

Un bucle en JavaScript (y en todos los demás idiomas ) es un bloque de código que se repite mientras una condición conocida sigue siendo cierta. Hay muchos tipos diferentes de bucles, pero básicamente todos hacen lo mismo: repetir una acción varias veces.

## Video

<YouTube videoId="TQmZIuS9fVE" />

## bucle while()

![While](https://media.giphy.com/media/WS6CDvvyNDrhZRFBtT/giphy.gif)

La declaración `while` crea un bucle que ejecuta la instrucción dada mientras la condición que se está probando es verdadera. El valor lógico de la condición se evalúa ➕ antes de que se ejecute el cuerpo del ciclo.

### Sintaxis

![Boock](https://media.giphy.com/media/LkjlH3rVETgsg/giphy.gif)

```javascript
while (условие) {
  инструкция // código de algoritmo - instrucciones
}
```

`condición` es una expresión cuyo valor booleano se comprueba cada vez antes de entrar en el bucle. Si el valor es verdadero - `true`, entonces se ejecuta la instrucción. Cuando el valor se vuelve falso - `false`, salimos del ciclo.

`instrucción` es el código del algoritmo que se ejecuta cada vez que la condición es verdadera. Para ejecutar varias instrucciones en un bucle, use el operador de bloque ❌ `{ ... }` para agruparlas. Cuando se usa 1 comando en el cuerpo del bucle, se pueden omitir las llaves.

Aquí está el ejemplo más simple de un bucle `while(condición) {...}`

```jsx live
function learnJavaScript() {
  let count = 0 // contar - contador
  let result = 'Счет: '
  // cambiar cuenta a cualquiera
  while (count < 10) {
    result += count + ', '
    count++
  }

  return result
}
```

El contador `count` en el ejemplo tiene el valor `0`. La condición de nuestro ciclo (está escrito  entre paréntesis) es que el bloque con el código se repetirá una y otra vez hasta que (es decir, en realidad `while`) `count` sea menor que `10`.

Dado que el valor inicial `0` es menor que `10`, se ejecuta el código. Cada vez que el intérprete vuelve a verificar ✔️ la condición, si la condición sigue siendo verdadera `true` , entonces el código se ejecutará nuevamente. Cada vez incrementamos el valor del contador en `1`. De lo contrario, el valor permanecería en '0', lo que haría que nuestra condición 'contador < 10' siempre se mantuviera verdadera, ¡y nuestro código  se repetiría para siempre!

Como resultado, después de '10' ciclos, será igual a '10'. Después de eso, el intérprete finalizará el bucle ya que la condición es `false`  e irá a las líneas finales de nuestro código .

<!-- ## Цикл do … while

![Check](https://media.giphy.com/media/PijzuUzUhm7hcWinGn/giphy.gif)

Проверку ✔️ условия можно разместить под телом цикла, используя специальный синтаксис   `do .. while`:

```javascript
do {
  // тело цикла
} while (условие)
```

Цикл сначала выполнит тело, а затем проверит ✔️ условие (condition - `состояние`), и пока его значение равно `true`  , он будет выполняться снова и снова.

Например, посчитаем сумму чисел от `0` до `25`  :

```jsx live
function learnJavaScript() {
  let sum = 0
  let i = 0
  do {
    sum += i
    i++
  } while (i < 25)

  return sum
}
```

Такая форма синтаксиса   оправдана, если вы хотите, чтобы тело цикла выполнилось хотя бы один раз, даже если условие окажется ложным  . -->

## bucle for ()

![Create](https://media.giphy.com/media/XaExByjWTK1V2HgDfh/giphy.gif)

La expresión `for` crea un bucle que consta de tres expresiones opcionales 3️⃣ entre paréntesis, separadas por punto y coma.

### Sintaxis

![Book](https://media.giphy.com/media/l1J9HWBKLp20YfNAY/giphy.gif)

```javascript
for ([inicialización]; [condición]; [expresión final])
   { expresión }
```

`inicialización` es una expresión o definición de variables. Esta expresión puede declarar opcionalmente nuevas variables usando la palabra clave `let`. Estas variables solo son visibles en el bucle `for`, es decir, en el mismo ámbito (por seguridad).

`condición` es una expresión que se ejecuta en cada integración de bucle. Si la expresión es verdadera, se ejecuta el ciclo. La condición es opcional. Si no está presente, la condición siempre se considera verdadera. Si la expresión es falsa, la ejecución `for` finaliza.

`expresión final`: la expresión que se ejecuta al final de la integración del bucle. Ocurre hasta que se cumple la siguiente condición. Usualmente se usa para `incrementar++`, `decrementar--` o `actualizar i += 5` de la variable de contador .

`expresión`: código ejecutable del algoritmo mientras la condición del ciclo es `verdadera`. Para ejecutar múltiples expresiones en un ciclo, use un bloque `{ ... }` para agrupar estas expresiones. Para no ejecutar ninguna expresión en el bucle, utilice una expresión `for (;;;)` vacía.

Calculemos la suma de los números del 0 al 100  :

```jsx live
function learnJavaScript() {
  let sum = 0
  for (let i = 0; i <= 100; i++) {
    sum += i
  }

  return sum
}
```

¿Recuerdas cuando escribimos nuestro 1️⃣ primero `while()` qué pasó con nuestro contador? Descubrimos que es muy importante que cambie constantemente (el `incremento ++` nos ayudó con esto). Porque si lo olvida, el código  caerá en un "bucle infinito de ciclos".

Bueno, situaciones como esta suceden con bastante frecuencia con `while-loops`, ¡por lo que `for` se hizo con un contador incorporado!

### Ejemplo de bucle

![hmm](https://media.giphy.com/media/l3nSILUHhuVDuWSnC/giphy.gif)

Al ver la sintaxis    de un bucle `for` por primera vez frente a ti, podrías pensar 🤔 que esto es algo muy extraño. Pero igual deberías estudiarlo 🎓, porque te encontrarás
así muchas veces:

```jsx live
function learnJavaScript() {
  let result = 'Счет: '

  for (let i = 0; i < 10; i++) {
    result += i + ' '
  }

  return result
}
```

![Wow](https://media.giphy.com/media/3oriO13KTkzPwTykp2/giphy.gif)

Bueno, ¿cómo lo supiste? ¡Y deberían haberlo hecho! ¡Es prácticamente el mismo código  que usamos para el bucle `while` al principio del capítulo! Las tres partes del bucle están separadas entre sí por punto y coma; todos estaban en ese bucle `while`, pero en diferentes lugares. Miremos más de cerca:

![para](/img/javascript/14/00.png)

1. En primer lugar, declaramos un contador de variables  `let i = 0`. Es en la función misma y fuera de este ciclo que esta `i` estará ausente, ¡y esto es seguro!
2. A continuación, establecemos una condición que el intérprete verificará antes de cada iteración del ciclo (para determinar si vale la pena volver a ejecutar el código). Una iteración se llama una iteración del bucle (por ejemplo, si tuviéramos 10 ciclos de ejecución, entonces podemos decir que hubo 10 iteraciones del código).
3. La tercera parte de nuestro código es `incremento ++` (o `decremento --`). Se ejecuta al final de cada iteración para cambiar nuestra variable  cada vez.

## Conclusión

![El y](https://media.giphy.com/media/l1Lc1Kn9hImgpx5Re/giphy.gif)

Casi siempre, cuando se conoce el número de iteraciones requeridas, trabajará con `for` en lugar de `while`. Esta es la razón por la que los bucles `for` son tan populares. Hay otros ciclos, pero no son tan populares y, si lo desea, puede familiarizarse con ellos [aquí](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/%D0%A6%D0%B8%D0%BA%D0%BB%D1%8B_%D0%B8_%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8).

## Reaccionar nativo

Un ejemplo de uso en aplicaciones `React Native`.

```SnackPlayer name=index.js
import * as React from 'react'
import { Text } from 'react-native'

const App = () => {
  const list = []

  for (let i = 0; i <= 10; i++) {
    list.push(<Text>{i}</Text>)
  }
  
  return (
    <>
      {list}
    </>
  )
}

export default App
```


## ¿Problemas?

![Problema](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Escribe en [Discord](https://discord.gg/6GDAfXn) o Telegram [chat](https://t.me/jscampapp) y suscríbete a nuestras [noticias](https://t.me/javascriptapp)

<!-- ![JavaScript Camp](/img/bandlink.png) -->

## Preguntas:

![Pregunta](https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif)

¿Cuál es el nombre de un bloque de código que se repite una y otra vez hasta que una condición dada deja de ser cierta?

1. Bucle
2. Condición
3. Inicialización

¿Cuál de las dos declaraciones de bucle es más popular?

1. `for`
2. `while`
3. `break`

¿Cuántos mensajes imprimirá el siguiente código en la consola?

```javascript
let k = 0
while (k < 7) {
  console.log('¡una línea más!')
}
```

1. `7`
2. `8`
3. `infinitamente`

¿Qué carácter separa las partes entre paréntesis del bucle `for` entre sí?

1. `&&`
2. `;`
3. `.`

Si `_______` siempre se mantiene verdadero, entonces el código puede atascarse en un `_______` infinito.

1. condición/bucle
2.ciclo/condición

¿Cómo se llama el `_____` del medio de las tres partes entre paréntesis de un bucle `for`?

1. Expresión
2. Condición
3. Incremento

¿Cuál es el término que denota un pasaje único (paso a paso) de un ciclo?

1. Iteración
2. Interrumpir
3. Bucle

Para comprender cuánto ha aprendido esta lección, realice una prueba en la [aplicación móvil](http://onelink.to/njhc95) de nuestra escuela sobre este tema o en nuestro [bot de Telegram](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

## Enlaces:

1. [Documento web de MDN. Artículo "El bucle do...while"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while)
2. [Documento web de MDN. Artículo "For Loop"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for)
3. [Documento web de MDN. Artículo "bucle while"](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/while)
4. [Artículo "Iteración", sitio de Javascript Express](https://www.javascript.express/syntax/iteration)
5. [Artículo "bucles while y for"](https://learn.javascript.ru/while-for)
6. [Código para adolescentes: la gran guía de programación para principiantes Volumen 1: Javascript - Jeremy Moritz](https://www.amazon.com/Code-Teens-Beginners-Programming-Javascript-ebook/dp/B07FCTLVPC)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KoDim-React"><img src="https://avatars1.githubusercontent.com/u/72087863?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy K.</b></sub></a><br /><a href="#mentoring-KoDim-React" title="Mentoring">  </a></td>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">💵</a></td>
    <td align="center"><a href="https://github.com/Resoner2005"><img src="https://avatars1.githubusercontent.com/u/75675814?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Resoner2005</b></sub></a><br /><a href="https://github.com/gHashTag/react-native-village/issues?q=author%3AResoner2005" title="Bug reports">🐛 🎨 🖋</a></td>
    <td align="center"><a href="https://github.com/Navernoss"><img src="https://avatars0.githubusercontent.com/u/75784137?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Navernoss</b></sub></a><br /><a href="#content-Navernoss" title="Content">🖋 🐛 🎨 </a></td>
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[![EnglishMoji!](/img/logo/NeuroCoder.png)](https://vk.com/neurocoder)

<!--

### Жизненный цикл

Рассмотрим пример цикла `while` из реальной жизни.
Предположим, вы — трёхлетний малыш (вам же когда‑то было три, так ведь?). Всё утро вы с упоением играли в конструктор, но тут пришла мама и сказала, что пора заканчивать, а все кубики нужно собрать в коробку. А их тут на полу несметные сотни! Вы быстро прикидываете в уме и понимаете, что за раз вам с этим никак не управиться. Так что вы приходите к единственному разумному решению в такой ситуации: начинаете плакать. И тут ваша мама поражает вас до глубины души, предлагая простое решение, казалось бы, неразрешимой проблемы: она берёт сначала часть кубиков, затем кладёт их в коробку, затем возвращается и… повторяет то же самое! И этот удивительный трюк нужно будет проделать столько раз, сколько потребуется, чтобы все кубики
с пола перекочевали в коробку.

Вы прикидываете в уме… Ну да, вроде всё верно! Должно сработать while()!

Давайте шаг за шагом разберём мамин план:

- Предположим, вы выяснили, что ваша `oneCube` - кубикоПодъёмность (то есть то, сколько кубиков за раз вы сможете унести) — постоянная величина (вы понимаете — константа) и равняется 10.
- Давайте также предположим, что `countCube` - кубиковНаПолу разбросано 120 штук.
- Инструкции таковы: взять наибольшее возможное количество кубиков с пола и перенести их в коробку (то есть вычесть нашу `кубикоПодъёмность` из `кубиковНаПолу`).
- Всё время, пока (то есть while) `кубикиНаПолу` ещё остаются (то есть пока наше условие остаётся истинным), нам предстоит возвращаться (то есть совершать цикл) к выполнению инструкции.

Вот вариант этого плана на языке JavaScript:

```jsx live
function learnJavaScript() {
  const oneCube = 10
  let countCube = 120
  console.log('На полу ' + countCube + ' кубиков.')
  while (countCube > 0) {
    // комбинированное присваивание: `x -= y;` то же, что и `x = x - y;`
    countCube = countCube - oneCube
    console.log('Я убрал в коробку ' + oneCube + ' кубиков, и теперь на полу осталось только ' + countCube + '.')
  }
  console.log('Ура-а-а! Все кубики уложены в коробку!')
}
```

```
На полу 120 кубиков.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 110.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 100.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 90.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 80.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 70.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 60.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 50.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 40.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 30.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 20.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 10.
 Я убрал в коробку 10 кубиков, и теперь на полу осталось только 0.
 Ура-а-а! Все кубики уложены в коробку!
```

Надеюсь, тут всё понятно? И смотрите, какая занятная штука: всё то же самое вы можете проделать с любым количеством `countCube - кубиковНаПолу`, а количество необходимого для этого кода останется примерно тем же! Чтобы показать вам, насколько гибкими могут быть циклы, мы завернём наш код в `функцию с этим параметром`.

Итак, у нас должен выйти следующий рассказ созданный программой:

```jsx live
function learnJavaScript() {
  // oneCube - кубикоПодъёмность
  let oneCube = 10
  // countCube - кубиковНаПолу

  let clearing = function (countCube) {
    let result = 'На полу ' + countCube + ' кубиков. \n'

    while (countCube > 0) {
      countCube = countCube - oneCube
      result += 'Я убрал в коробку ' + oneCube + ' кубиков, и теперь на полу осталось только ' + countCube + '. \n'
    }

    result += '\n Ура-а-а! Все кубики уложены в коробку!'
    return result
  }

  return clearing(70)
}
```

Ну а теперь можно просто вызвать нашу функцию `clearing(70)` предложив ей другой аргумент, изменив наш рассказ!

### break

Чтобы организовать бесконечный цикл, используют конструкцию `while (true)`. При этом он, как и любой другой цикл, может быть прерван директивой `break`.

:::note Внимание
Если условие явно не указывать, а оставить `while ()`, то считается что условие всегда будет `true`. И тут уж приходиться из цикла выходить используя команду `break`.
:::

### continue

Если на данной итерации цикла делать больше ничего не надо, но полностью прекращать цикл не следует – используют директиву `continue` переходя к следующему шагу цикла (итерации).

:::note Обратите внимание
Если вы случайно запустите «вечную петлю», то вам придётся перезапустить браузер Chrome и исправить код, чтобы продолжить работу.
:::

Например, цикл ниже использует continue, чтобы выводить только нечётные значения:

```jsx live
function learnJavaScript() {
  let result = ''
  for (let i = 0; i < 10; i++) {
    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue
    result += i + ' ' // 1 3 5 7 9
  }

  return result
}
```

Для чётных значений i, директива continue прекращает выполнение тела цикла и передаёт управление на следующую итерацию for (со следующим числом). Таким образом `result += i` вызывается только для `нечётных значений`.
### Просто «так принято»

А теперь вновь напем тот же код, но назовем переменную `i`, а не `счётчик`:

```javascript
let i = 0
while (i < 10) {
  console.log(i + ' ')
  i++
}
// console.log('0 1 2 3 4 5 6 7 8 9');
```

Так, ну и в чём же тут смысл? Неужели необходима была другая переменная?

Да нет. А зачем тогда всё это? Дело в том, что в названии `i` самом по себе, конечно, ничего особенного нет, но по условленной договорённости, если хотите, по традиции, переменную, которая циклично увеличивается или уменьшается,
принято называть именно так. Когда подобного рода решения принимаются не из соображений правильности или неправильности кода, но «по традиции», мы называем это соглашением о стандартах оформления кода.

Это именно способ исполнения соглашения. Возьмём в качестве примера `верблюжийРегистр`: ведь на работе кода, по сути, никак не скажется, если ваши переменные будут ВОТТАКИМИ, или воттакими, или вовсе вот_такими. Однако, следуя соглашению об использовании `верблюжьегоРегистра` ваш код с самого начала визуально по ходил на код профессиональных разработчиков, а им самим будет гораздо легче читать и понимать его.

Так вот, использование строчной `i` для циклично увеличивающейся (при помощи `инкремента ++`) или уменьшающейся (при помощи `декремента --`) переменной — это также стандарт оформления кода. Если вы решите продолжить карьеру в качестве профессионального разработчика, то переменную i в таких обстоятельствах вам предстоит лицезреть сотни и тысячи раз.

-->
<!-- ## Цикл for...in

Проходит через перечисляемые свойства объекта. Он пройдёт по каждому отдельному элементу.

### Синтаксис

```javascript
for (variable in object) { ...
}
```

`variable` - очередное (следующее) имя свойства назначается переменной на каждой итерации.

`object` - объект, по чьим свойствам мы проходим.

### Описание

Цикл `for...in` проходит только по перечисляемым свойствам объекта. -->

<!-- ### Удаление, добавление и модификация свойств

Цикл `for...in` проходит по свойствам в произвольном порядке.

Если свойство изменяется за одну итерацию, а затем изменяется снова, его значением в цикле является его последнее значение. Свойство, удаленное до того, как до него дошёл цикл, не будет участвовать в нём.

Свойства добавленные в объекты в цикле могут быть пропущены. В общем, лучше `не добавлять, изменять или удалять` свойство из объекта `во время итерации`, если по нему ещё не прошли. Нет гарантии, что добавленное свойство будет посещено циклом, изменное после проведения изменений, а удалённое после удаления.

### Проход по массиву и for...in

Индексы массива - это перечисляемые свойства с целочисленными именами, в остальном они аналогичны свойствам объектов. Нет гарантии, что `for...in` будет возвращать индексы в конкретном порядке. Цикл `for...in` возвращает все перечисляемые свойства, включая имеющие нецелочислиненные имена и наследуемые.

:::note Замечание
`for...in` не следует использовать для `Array`, где важен порядок индексов.
:::

Так как порядок прохода зависит от реализации, `проход по массиву` может не произойти в правильном порядке. Следовательно лучше `с числовыми индексами` использовать циклы for, Array.prototype.forEach() или for...of, когда проходим по массивам, где важен `порядок доступа к свойствам`.

### Проход только через собственные свойства

Следующее выражение берёт аргументом объект. Затем проходит по всем перечислимым свойствам объекта и возвращает строку содержащую имена свойств и их значения.

Нажмите в браузере Google Chrome сочетание клавиш `Ctrl + Shift + I` и на вкладке `Console` наберите:

```javascript
var obj = { a: 1, b: 2, c: 3 }

for (var i in obj) {
  console.log('obj.' + i + ' = ' + obj[i])
}

// Выведет:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
``` -->

<!--
## Цикл for ... of

Проходит по итерируемым объектам (включающим в себя массивы, массивоподобные объекты и итераторы с генераторами), выполняя пользовательский хук с инструкциями, исполняющимися для значения каждого уникального свойства.

### Сводка

Оператор `for...of` выполняет цикл обхода итерируемых объектов (включая `Array`, `Map`, `Set`, объект аргументов и подобных), вызывая на каждом шаге итерации операторы для каждого значения из различных свойств объекта.

### Синтаксис

```javascript
for (variable of iterable) {
  statement
}
```

`Variable` - на каждом шаге итерации variable присваивается значение нового свойства объекта iterable. Переменная variable может быть также объявлена с помощью const, let или var.

`Iterable` - объект, перечисляемые свойства которого обходятся во время выполнения цикла.

### Обход Array[..]

```jsx live
function learnJavaScript() {
  let result = ''
  let mas = [10, 20, 30]

  for (let value of mas) {
    value += 5
    result += value + ' '
  }

  return result
}
```

Можно также использовать `const` вместо `let`, если не нужно переназначать переменные внутри блока.

```jsx live
function learnJavaScript() {
  let result = ''
  let mas = [10, 20, 30]

  for (const value of mas) result += value + ' '

  // 10 20 30

  return result
}
```

:::note Внимание
В цикле `for()` выполняется всего одна команда, поэтому `фигурные скобки {...}` можно не писать.
:::

### Обход String

```jsx live
function learnJavaScript() {
  let result = ''
  let iterable = 'boo'

  for (let value of iterable) {
    result += value + ' '
  }
  // "b" "o" "o"

  return result
}
``` -->

<!--
### Обход TypedArray

```jsx live
function learnJavaScript() {
  let result = ''
  let iterable = new Uint8Array([0x04, 0x10, 0xff])

  for (let value of iterable) {
    result += value + ' '
  }
  // 4 16 255
  return result
}
``` -->

<!-- ```javascript
### Обход Map
let iterable = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3]
])

for (let entry of iterable) {
  console.log(entry)
}
// ['a', 1] ['b', 2] ['c', 3]

for (let [key, value] of iterable) {
  console.log(value)
}
// 1 2 3
```

### Обход Set

```javascript
let iterable = new Set([1, 1, 2, 2, 3, 3])

for (let value of iterable) {
  console.log(value)
}
// 1 2 3
```

### Обход объекта arguments

```javascript
;(function () {
  for (let argument of arguments) {
    console.log(argument)
  }
})(1, 2, 3)

// 1 2 3
```

### Закрытие итераторов

В циклах `for...of` аварийный выход осуществляется через `break`, `throw` или `return`. Во всех вариантах итератор завершается.

## Различия между for...in и for...of

:::note Разница
Оба оператора, и `for...in и for...of` производят обход объектов . Разница в том, как они это делают.
:::

Для `for...in` обход перечисляемых свойств объекта осуществляется в произвольном порядке.

Для `for...of` обход происходит в соответствии с тем, какой порядок определен в итерируемом объекте. -->

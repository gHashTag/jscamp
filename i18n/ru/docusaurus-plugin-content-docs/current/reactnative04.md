---
id: reactnative04
title: Верстка компонентов - Flexbox
sidebar_label: Верстка компонентов - Flexbox
---

Это новая технология, которая уже имеет достаточно широкую поддержку браузеров. Flexbox предоставляет инструменты для быстрого создания сложных, гибких макетов, и функции, которые были сложны в традиционных методах CSS. В этой статье объясняются все основы данной технологии.

Компонент может указывать макет своих дочерних элементов, используя алгоритм Flexbox. Flexbox разработан для обеспечения единообразного макета на экранах разных размеров.

Обычно вы будете использовать комбинацию `flexDirection`, `alignItems` и `justifyContent` для достижения правильного макета.

Прежде чем мы продолжим, предлагаю поиграть в игру [Flexbox Froggy](https://flexboxfroggy.com/#ru). Задача игры - это перемещение лягушенков на листы лилии используя для этого свойства `flexbox`.

![flexbox foggy](https://media-exp1.licdn.com/dms/image/C5612AQHTOPvO_L9DjA/article-inline_image-shrink_1000_1488/0/1549509849465?e=1619049600&v=beta&t=v5FfGyN3yTfpz7cjhQeX5Nj0jpy8Fu6j-6BE09lrLcg)

> Flexbox работает в React Native так же, как и в CSS в Интернете, за некоторыми исключениями. Значения по умолчанию разные: для `flexDirection` по умолчанию используется столбец вместо строки, для `alignContent` по умолчанию используется `flex-start` вместо `stretch`, для `flexShrink` по умолчанию установлено значение `0` вместо `1`, параметр `flex` поддерживает только одно число.

## Flex

`flex` определит, как ваши элементы будут «заполнять» доступное пространство вдоль вашей главной оси. Пространство будет разделено в зависимости от свойства `flex` каждого элемента.

В следующем примере красный, желтый и зеленый `View` являются дочерними в представлении контейнера, для которого задано значение `flex: 1`. Красный вид использует `flex: 1`, желтый вид использует `flex: 2`, а зеленый вид использует `flex: 3`. 1 + 2 + 3 = 6, что означает, что красный вид займет 1/6 пространства, желтый 2/6 пространства и зеленый 3/6 пространства.

```SnackPlayer name=index.js
import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})

export default Flex
```

## Flex Direction

[flexDirection](https://reactnative.dev/docs/layout-props#flexdirection) указывает на то, как flex-элементы располагаются во flex-контейнере по главной оси и направлению. Поперечная ось - это ось, перпендикулярная главной оси, или ось, по которой проложены линии обертывания.

- `column` (значение по умолчанию) Выровнять дочерние элементы сверху вниз. Если обертывание включено, следующая строка начнется справа от первого элемента в верхней части контейнера.

- `row` Вырaвнивает дочерние элементы слева направо. Если обертывание включено, следующая строка начнется под первым элементом слева от контейнера.

- `column-reverse` Выровняйте дочерние элементы снизу вверх. Если обертывание включено, следующая строка начнется справа от первого элемента в нижней части контейнера.

- `row-reverse` Выровнять дочерние элементы справа налево. Если обертывание включено, следующая строка начнется под первым элементом справа от контейнера.

Вы можете узнать больше [здесь](https://yogalayout.com/docs/flex-direction/).

```SnackPlayer name=index.js
import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState("column")

  return (
    <PreviewLayout
      label="flexDirection"
      values={["column", "row", "row-reverse", "column-reverse"]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
    >
      <View
        style={[styles.box, { backgroundColor: "powderblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "steelblue" }]}
      />
    </PreviewLayout>
  )
}

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
})

export default FlexDirectionBasics;
```

<!-- ## Layout Direction

Направление макета определяет направление, в котором должны располагаться дочерние элементы и текст в иерархии. Направление компоновки также влияет на то, к чему относятся начало и конец кромки. По умолчанию React Native использует направление макета `LTR`. В этом режиме начало относится к левому, а конец - к правому.

- `LTR` (значение по умолчанию) Текст и дочерние элементы располагаются слева направо. Поля и отступы, применяемые к началу элемента, применяются к левой стороне.

- `RTL` Текст и дочерние элементы располагаются справа налево. Поля и отступы, применяемые к началу элемента, применяются с правой стороны.

```SnackPlayer name=index.js
import React, { useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

const DirectionLayout = () => {
  const [direction, setDirection] = useState("ltr")

  return (
    <PreviewLayout
      label="direction"
      selectedValue={direction}
      values={["ltr", "rtl"]}
      setSelectedValue={setDirection}>
      <View
        style={[styles.box, { backgroundColor: "powderblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "steelblue" }]}
      />
    </PreviewLayout>
  )
}

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
})

export default DirectionLayout;
```

# Justify Content

`justifyContent` описывает, как выровнять дочерние элементы по главной оси их контейнера. Например, вы можете использовать это свойство для центрирования дочернего элемента по горизонтали в контейнере с `flexDirection`, установленным на `row`, или по вертикали внутри контейнера с `flexDirection`, установленным на `column`.

- `flex-start` (значение по умолчанию) Выровнять дочерние элементы контейнера по началу главной оси контейнера.

- `flex-end` Выровнять дочерние элементы контейнера по концу его главной оси.

- `center` Выровняйте дочерние элементы контейнера по центру главной оси контейнера.

- `space-between` Равномерное расстояние от дочерних элементов по главной оси контейнера, распределяя оставшееся пространство между дочерними элементами.

- `space-around` Равномерно распределите дочерние элементы по главной оси контейнера, распределяя оставшееся пространство вокруг дочерних элементов. По сравнению с `space-between`, использование `space-around` приведет к тому, что пространство будет распределено между началом первого дочернего элемента и концом последнего дочернего элемента.

- `space-evenly` Равномерно распределите дочерние элементы в контейнере выравнивания по главной оси. Расстояние между каждой парой смежных элементов, краем основного начала и первым элементом, а также краем основного конца и последним элементом абсолютно одинаковы.

Вы можете узнать больше [здесь](https://yogalayout.com/docs/justify-content/).

```SnackPlayer name=index.js
import React, { useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

const JustifyContentBasics = () => {
  const [justifyContent, setJustifyContent] = useState("flex-start")

  return (
    <PreviewLayout
      label="justifyContent"
      selectedValue={justifyContent}
      values={[
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ]}
      setSelectedValue={setJustifyContent}
    >
      <View
        style={[styles.box, { backgroundColor: "powderblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "steelblue" }]}
      />
    </PreviewLayout>
  )
}

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
})

export default JustifyContentBasics
```

## Align Items

`alignItems` описывает, как выровнять дочерние элементы по поперечной оси их контейнера. Выравнивание элементов очень похоже на `justifyContent`, но вместо применения к главной оси `alignItems` применяется к поперечной оси.

- `stretch` (значение по умолчанию) Растянуть дочерние элементы контейнера, чтобы они соответствовали высоте поперечной оси контейнера.

- `flex-start` Выровнять дочерние элементы контейнера по началу поперечной оси контейнера.

- `flex-end` Выровнять дочерние элементы контейнера по концу поперечной оси контейнера.

- `center` Выровняйте дочерние элементы контейнера по центру поперечной оси контейнера.

- `baseline` Выровняйте дочерние элементы контейнера по общей базовой линии. Отдельных детей можно установить в качестве эталона для своих родителей.

> Чтобы растяжение имело эффект, дочерние элементы не должны иметь фиксированного размера вдоль вторичной оси. В следующем примере установка `alignItems: stretch` ничего не делает, пока ширина: 50 не будет удалена из дочерних элементов.

Вы можете узнать больше [здесь](https://yogalayout.com/docs/align-items/).

```SnackPlayer name=index.js
import React, { useState } from "react"
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native"

const AlignItemsLayout = () => {
  const [alignItems, setAlignItems] = useState("stretch")

  return (
    <PreviewLayout
      label="alignItems"
      selectedValue={alignItems}
      values={[
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
      ]}
      setSelectedValue={setAlignItems}
    >
      <View
        style={[styles.box, { backgroundColor: "powderblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[
          styles.box,
          {
            backgroundColor: "steelblue",
            width: "auto",
            minWidth: 50,
          },
        ]}
      />
    </PreviewLayout>
  )
}

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value &&
                styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View
      style={[
        styles.container,
        { [label]: selectedValue },
      ]}
    >
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
})

export default AlignItemsLayout
```

## Align Self

`alignSelf` имеет те же параметры и эффект, что и `alignItems`, но вместо того, чтобы влиять на дочерние элементы в контейнере, вы можете применить это свойство к одному дочернему элементу, чтобы изменить его выравнивание в его родительском элементе. `alignSelf` переопределяет любой параметр, установленный родителем с помощью `alignItems`.

```SnackPlayer name=index.js
import React, { useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

const AlignSelfLayout = () => {
  const [alignSelf, setAlignSelf] = useState("stretch")

  return (
    <PreviewLayout
      label="alignSelf"
      selectedValue={alignSelf}
      values={["stretch", "flex-start", "flex-end", "center", "baseline"]}
      setSelectedValue={setAlignSelf}>
        <View
          style={[styles.box, {
            alignSelf,
            width: "auto",
            minWidth: 50,
            backgroundColor: "powderblue",
          }]}
        />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "steelblue" }]}
      />
    </PreviewLayout>
  )
}

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value &&
                styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.container}>
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
})

export default AlignSelfLayout
```

## Align Content

`alignContent` определяет распределение линий вдоль поперечной оси. Это действует только тогда, когда элементы переносятся на несколько строк с помощью `flexWrap`.

`flex-start` (значение по умолчанию) Выровняйте обернутые строки по началу поперечной оси контейнера.

`flex-end` Выровняйте обернутые линии до конца поперечной оси контейнера.

`stretch` (значение по умолчанию при использовании Yoga в Интернете) Растягивайте обернутые линии, чтобы они соответствовали высоте поперечной оси контейнера.

`center` Выровняйте обернутые линии по центру поперечной оси контейнера.

`space-between` Равномерно распределите обернутые строки поперек поперечной оси контейнера, распределяя оставшееся пространство между строками.

`space-around` Равномерно распределите обернутые линии поперек поперечной оси контейнера, распределяя оставшееся пространство вокруг линий. По сравнению с пробелом между, использование пробела вокруг приведет к тому, что пробел будет распределен между началом первой строки и концом последней строки.

Вы можете узнать больше [здесь](https://yogalayout.com/docs/align-content).

```SnackPlayer name=index.js
import React, { useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

const AlignContentLayout = () => {
  const [alignContent, setAlignContent] = useState("flex-start")

  return (
    <PreviewLayout
      label="alignContent"
      selectedValue={alignContent}
      values={[
        "flex-start",
        "flex-end",
        "stretch",
        "center",
        "space-between",
        "space-around",
      ]}
      setSelectedValue={setAlignContent}>
      <View
        style={[styles.box, { backgroundColor: "orangered" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "orange" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "mediumseagreen" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "deepskyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "mediumturquoise" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "mediumslateblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "purple" }]}
      />
    </PreviewLayout>
  )
}

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value &&
                styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View
      style={[
        styles.container,
        { [label]: selectedValue },
      ]}
    >
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    marginTop: 8,
    backgroundColor: "aliceblue",
    maxHeight: 400,
  },
  box: {
    width: 50,
    height: 80,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
})

export default AlignContentLayout
```

## Flex Wrap

Свойство `flexWrap` устанавливается для контейнеров и контролирует, что происходит, когда дочерние элементы превышают размер контейнера по главной оси. По умолчанию дочерние элементы помещаются в одну строку (что может сжимать элементы). Если обертывание разрешено, при необходимости элементы оборачиваются в несколько строк вдоль главной оси.

При переносе строк можно использовать `alignContent`, чтобы указать, как строки размещаются в контейнере. Узнайте больше [здесь](https://yogalayout.com/docs/flex-wrap).

```SnackPlayer name=index.js
import React, { useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

const FlexWrapLayout = () => {
  const [flexWrap, setFlexWrap] = useState("wrap");

  return (
    <PreviewLayout
      label="flexWrap"
      selectedValue={flexWrap}
      values={["wrap", "no-wrap"]}
      setSelectedValue={setFlexWrap}>
      <View
        style={[styles.box, { backgroundColor: "orangered" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "orange" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "mediumseagreen" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "deepskyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "mediumturquoise" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "mediumslateblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "purple" }]}
      />
    </PreviewLayout>
  )
}

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value &&
                styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View
      style={[
        styles.container,
        { [label]: selectedValue },
      ]}
    >
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    maxHeight: 400,
  },
  box: {
    width: 50,
    height: 80,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
})

export default FlexWrapLayout
```

## Absolute & Relative Layout

Тип позиции элемента определяет, как он расположен внутри своего родителя.

- `relative` (значение по умолчанию) По умолчанию элемент позиционируется относительно. Это означает, что элемент позиционируется в соответствии с обычным потоком макета, а затем смещается относительно этой позиции на основе значений `top`, `right`, `bottom` и `left`. Смещение не влияет на положение каких-либо родственных или родительских элементов.

- `absolute` При абсолютном позиционировании элемент не участвует в нормальном потоке компоновки. Вместо этого он выкладывается независимо от своих братьев и сестер. Положение определяется на основе значений верхнего, правого, нижнего и левого угла.

```SnackPlayer name=index.js
import React, { useState } from "react"
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native"

const PositionLayout = () => {
  const [position, setPosition] = useState("relative")

  return (
    <PreviewLayout
      label="position"
      selectedValue={position}
      values={["relative", "absolute"]}
      setSelectedValue={setPosition}
    >
      <View
        style={[
          styles.box,
          {
            top: 25,
            left: 25,
            position,
            backgroundColor: "powderblue",
          },
        ]}
      />
      <View
        style={[
          styles.box,
          {
            top: 50,
            left: 50,
            position,
            backgroundColor: "skyblue",
          },
        ]}
      />
      <View
        style={[
          styles.box,
          {
            top: 75,
            left: 75,
            position,
            backgroundColor: "steelblue",
          },
        ]}
      />
    </PreviewLayout>
  )
}

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value &&
                styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.container}>{children}</View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
})

export default PositionLayout
```

## Больше про Flexbox

Посетите интерактивную площадку [yoga playground](https://yogalayout.com/playground), которую вы можете использовать, чтобы лучше понять flexbox.

Мы рассмотрели основы, но есть много других стилей, которые могут вам понадобиться для макетов. Полный список свойств, управляющих макетом, задокументирован [здесь](https://reactnative.dev/docs/layout-props).


## Проблемы?

![Problem](https://media.giphy.com/media/xTiTnGeUsWOEwsGoG4/giphy.gif)

Пишите в [Discord](https://discord.gg/6GDAfXn) или телеграмм [чат](https://t.me/jscampapp), а также подписывайтесь на наши [новости](https://t.me/javascriptapp)

![JavaScript Camp](/img/bandlink.png)

## Вопросы

Flexbox предоставляет инструменты для быстрого создания сложных, гибких макетов, и функции, которые были сложны в традиционных методах CSS.

1. `true`
2. `false`

Обычно вы будете использовать комбинацию `flexDirection`, `alignItems` и `justifyContent` для достижения правильного макета.

1. `true`
2. `false`

Flexbox не работает в React Native так же, как и в CSS в Интернете?

1. `true`
2. `false`

`flex` определит, как ваши элементы будут «заполнять» доступное пространство вдоль вашей главной оси и пространство будет разделено в зависимости от свойства `flex` каждого элемента?

1. `true`
2. `false`

`flexDirection` не указывает на то, как flex-элементы располагаются во flex-контейнере по главной оси и направлению?

1. `true`
2. `false`

Какое свойство в `flexDirection` выравнивает дочерние элементы слева направо?

1. `column`
2. `column-reverse`
3. `row`

Какое свойство описывает, как выровнять дочерние элементы по главной оси их контейнера?

1. `flexDirection`
2. `justifyContent`
3. `alignItems`

Какое значение у свойства `justifyContent` создает равномерное расстояние от дочерних элементов по главной оси контейнера, распределяя оставшееся пространство между дочерними элементами?

1. `center`
2. `space-between`
3. `space-around`

Какое свойство описывает, как выровнять дочерние элементы по поперечной оси их контейнера?

1. `flexDirection`
2. `justifyContent`
3. `alignItems`

Какое значение у свойства `alignItems` выравнивает дочерние элементы контейнера по началу поперечной оси контейнера?

1. `flex-start`
2. `stretch`
3. `flex-end`

Какое свойство имеет те же параметры и эффект, что и `alignItems`, но вместо того, чтобы влиять на дочерние элементы в контейнере, вы можете применить это свойство к одному дочернему элементу, чтобы изменить его выравнивание в его родительском элементе?

1. `alignItems`
2. `alignSame`
3. `alignSelf`

Какое свойство определяет распределение линий вдоль поперечной оси?

1. `alignContent`
2. `justifyContent`
3. `alignSelf`

Какое свойство устанавливается для контейнеров и контролирует, что происходит, когда дочерние элементы превышают размер контейнера по главной оси?

1. `flexDirection`
2. `flexWrap`
3. `flex`

Какой тип позиции элемента, по умолчанию, позиции элемента определяет, как он расположен внутри своего родителя?

1. `relative`
2. `absolute`

## Done ✅

Чтобы узнать, насколько хорошо вы усвоили этот урок, пройдите тест в [мобильном приложении](http://onelink.to/njhc95) нашей школы по этой теме или в [боте Telegram](https://t.me/javascriptcamp_bot).

![Sumerian school](/img/app.jpg)

## Ссылки:

1. [React Native](https://reactnative.dev/docs/flexbox)
2. [Flexbox Froggy](https://flexboxfroggy.com/#ru)

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291) -->

## Оплата

Сейчас ты находишся на урезанной версии сайта, после оформления подписки на [Patreon](https://www.patreon.com/javascriptcamp), ты получишь полный доступ к обучающему курсу, а также доступ к серетным каналам нашего сервера в [Discord](https://discord.gg/6GDAfXn).  

Качай наше [мобильное приложение](http://onelink.to/njhc95) или пройди тестирование в нашем [JavaScript телеграм боте](https://t.me/javascriptcamp_bot), а также подпишитесь на [наши новости](https://t.me/javascriptapp).

[![Become a Patron!](/img/logo/patreon.jpg)](https://www.patreon.com/bePatron?u=31769291)


[![Sumerian school](/img/app.jpg)](http://onelink.to/njhc95)

![JavaScript Camp](/img/bandlink.png)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):


<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /><a href="#financial-gHashTag" title="Financial">📖 💵</a></td>
  </tr>
</table>

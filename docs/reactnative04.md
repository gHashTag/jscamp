---
id: reactnative04
title: Layout of components - Flexbox
sidebar_label: Layout of components - Flexbox
---

This is a new technology that already has fairly broad browser support. Flexbox provides tools to quickly create complex, flexible layouts, and features that were difficult in traditional CSS techniques. This article explains all the basics of this technology.

A component can specify the layout of its children using the Flexbox algorithm. Flexbox is designed to provide a consistent layout across different screen sizes.

Typically you will use a combination of `flexDirection`, `alignItems` and `justifyContent` to achieve the correct layout.

Before we continue, I suggest you play the game [Flexbox Froggy](https://flexboxfroggy.com/#ru). The task of the game is to move frogs onto lily leaves using the `flexbox` property.

![flexbox foggy](https://media-exp1.licdn.com/dms/image/C5612AQHTOPvO_L9DjA/article-inline_image-shrink_1000_1488/0/1549509849465?e=1619049600&v=beta&t=v5FfGyN3yTfpz7cjhQeX5Nj0jpy8Fu6j-6BE09lrLcg)

> Flexbox works in React Native just like it does CSS on the web, with a few exceptions. The defaults are different: `flexDirection` defaults to column instead of row, `alignContent` defaults to `flex-start` instead of `stretch`, `flexShrink` defaults to `0` instead of `1`, parameter `flex` only supports one number.

## Flex

flex will determine how your items will "fill" the available space along your main axis. The space will be split based on the flex property of each item.

In the following example, red, yellow, and green `View` are children in the container view set to `flex: 1`. The red view uses `flex: 1`, the yellow view uses `flex: 2`, and the green view uses `flex: 3`. 1 + 2 + 3 = 6, which means that the red view will take up 1/6 of the space, the yellow 2/6 of the space and the green 3/6 of the space.

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

[flexDirection](https://reactnative.dev/docs/layout-props#flexdirection) indicates how flex items are laid out in a flex container along the main axis and direction. The transverse axis is the axis perpendicular to the main axis, or the axis along which the wrap lines are laid.

- `column` (default) Align children from top to bottom. If wrap is on, the next line will start to the right of the first item at the top of the container.

- `row` Aligns children from left to right. If wrap is on, the next line will start under the first item to the left of the container.

- `column-reverse` Align the children from bottom to top. If wrap is on, the next line will start to the right of the first element at the bottom of the container.

- `row-reverse` Align children from right to left. If wrap is on, the next line will start below the first item to the right of the container.

You can find out more [here](https://yogalayout.com/docs/flex-direction/).

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

## Layout Direction

Layout direction determines the direction in which children and text should be positioned in the hierarchy. The direction of the layout also affects where the start and end of the edge are. By default, React Native uses the `LTR` layout direction. In this mode, the beginning is left and the end is right.

- `LTR` (default) Text and children are laid out from left to right. Margins and padding applied to the start of an element are applied to the left side.

- `RTL` Text and children are laid out from right to left. Margins and padding applied to the start of an element are applied to the right side.

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

`justifyContent` describes how to align children to the main axis of their container. For example, you can use this property to center a child horizontally in a container with `flexDirection` set to `row`, or vertically inside a container with `flexDirection` set to `column`.

- `flex-start` (default) Align the children of the container to the start of the main axis of the container.

- `flex-end` Align the children of the container to the end of its main axis.

- `center` Align the children of the container to the center of the main axis of the container.

- `space-between` An even distance from the children along the main axis of the container, distributing the remaining space between the children.

- `space-around` Space the children evenly along the main axis of the container, distributing the remaining space around the children. Compared to `space-between`, using `space-around` will cause space to be allocated between the beginning of the first child and the end of the last child.

- `space-evenly` Arrange the children evenly in the align container along the main axis. The distance between each pair of adjacent elements, the edge of the main start and the first element, and the edge of the main end and the last element are exactly the same.

You can find out more [here](https://yogalayout.com/docs/justify-content/).

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
`alignItems` describes how to align child items to the transverse axis of their container. The alignment of items is very similar to `justifyContent`, but instead of being applied to the main axis, `alignItems` is applied to the cross axis.

- `stretch` (default) Stretch the children of the container to match the height of the container's cross-axis.

- `flex-start` Align the children of the container to the start of the cross-axis of the container.

- `flex-end` Align the children of the container to the end of the cross axis of the container.

- `center` Align the children of the container to the center of the transverse axis of the container.

- `baseline` Align the children of the container to the common baseline. Individual children can be set as a reference for their parents.

> For stretching to have an effect, children do not need to have a fixed size along the secondary axis. In the following example, setting `alignItems: stretch` does nothing until width: 50 is removed from the children.

You can find out more [here](https://yogalayout.com/docs/align-items/).

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
`alignSelf` has the same options and effect as `alignItems`, but instead of affecting the children in a container, you can apply this property to a single child to change its alignment in its parent. `alignSelf` overrides any parameter set by the parent with` alignItems`.

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
`alignContent` defines the distribution of lines along the cross axis. This only works when items are wrapped across multiple lines using `flexWrap`.

`flex-start` (default) Align wrapped lines to the start of the container's cross axis.

`flex-end` Align the wrapped lines to the end of the container's cross-axis.

`stretch` (default when using Yoga on the web) Stretch the wrapped lines to match the height of the container's cross-axis.

`center` Align the wrapped lines to the center of the transverse axis of the container.

`space-between` Space the wrapped lines evenly across the transverse axis of the container, spreading the remaining space between the lines.

`space-around` Spread the wrapped lines evenly across the transverse axis of the container, distributing the remaining space around the lines. Compared to whitespace in between, using whitespace around will cause the whitespace to be split between the beginning of the first line and the end of the last line.

You can find out more [here](https://yogalayout.com/docs/align-content).

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

The `flexWrap` property is set on containers and controls what happens when the child elements exceed the size of the container along the main axis. By default, children are placed on one line (which can shrink the elements). If wrap is allowed, items are wrapped in multiple lines along the main axis if necessary.

When wrapping lines, you can use `alignContent` to specify how the lines are laid out in the container. Find out more [here](https://yogalayout.com/docs/flex-wrap).

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

The position type of an element determines how it is positioned within its parent.

- `relative` (default) By default, the element is positioned relative. This means that the element is positioned according to the normal layout flow and then offset from that position based on the values ​​of `top`, `right`, `bottom`, and `left`. Offset does not affect the position of any sibling or parent elements.

- `absolute` With absolute positioning, the element does not participate in the normal flow of the layout. Instead, he goes all out independently of his siblings. The position is determined based on the `top`, `right`, `bottom`, and `left` corner values.

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

## More on Flexbox

Visit the [yoga playground](https://yogalayout.com/playground) which you can use to understand flexbox better.

We've covered the basics, but there are many other styles you may need for your layouts. A complete list of properties that control layout is documented [here](https://reactnative.dev/docs/layout-props).

## Questions and Answers

Flexbox provides tools to quickly create complex, flexible layouts, and features that were difficult in traditional CSS techniques.

1. `true`
2. `false`

Typically you will use a combination of `flexDirection`, `alignItems` and `justifyContent` to achieve the correct layout.

1. `true`
2. `false`

Flexbox doesn't work the same way in React Native as it does in CSS on the web?

1. `true`
2. `false`

`flex` will determine how your items will" fill "the available space along your main axis and the space will be split based on the` flex` property of each item.?

1. `true`
2. `false`

`flexDirection` does not indicate how flex items are laid out in a flex container along the main axis and direction.

1. `true`
2. `false`

Which property in `flexDirection` aligns children from left to right.

1. `column`
2. `column-reverse`
3. `row`

Which property describes how to align children to the main axis of their container?

1. `flexDirection`
2. `justifyContent`
3. `alignItems`

What is the value of the `justifyContent` property that creates an even distance from the children along the main axis of the container, distributing the remaining space between the children?

1. `center`
2. `space-between`
3. `space-around`

Which property describes how to align children along the transverse axis of their container?

1. `flexDirection`
2. `justifyContent`
3. `alignItems`

What is the value of the `alignItems` property to align the children of the container to the origin of the transverse axis of the container?

1. `flex-start`
2. `stretch`
3. `flex-end`

Which property has the same options and effect as `alignItems`, but instead of affecting the children in a container, you can apply that property to a single child to change its alignment in its parent?

1. `alignItems`
2. `alignSame`
3. `alignSelf`

What property determines the distribution of lines along the transverse axis?

1. `alignContent`
2. `justifyContent`
3. `alignSelf`

Which property is set on containers and controls what happens when the children exceed the size of the container along the main axis.

1. `flexDirection`
2. `flexWrap`
3. `flex`

What type, by default, position of an element determines how it is positioned within its parent?

1. `relative`
2. `absolute`

To see how well you learned this lesson, take the test in the [mobile application](http://onelink.to/njhc95) of our school on this topic or in the [telegram bot](https://t.me/javascriptcamp_bot).

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

## Links:

1. [React Native](https://reactnative.dev/docs/flexbox)
2. [Flexbox Froggy](https://flexboxfroggy.com/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><a href="https://fullstackserverless.github.io/"><img src="https://avatars0.githubusercontent.com/u/6774813?v=4?s=200" width="200px;" alt=""/><br /><sub><b>Dmitriy Vasilev</b></sub></a><br /> <a href="https://github.com/gHashTag/react-native-village/commits?author=gHashTag" title="Documentation">  💲</a></td>
  </tr>
</table>

[![EnglishMoji!](/img/logo/englishmoji.png)](https://link-to.app/xvh7Ush9kl)

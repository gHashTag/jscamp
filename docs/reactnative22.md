---
id: reactnative22
title:  Подключение кастомных шрифтов к проекту
sidebar_label: Подключение кастомных шрифтов к проекту
---

## 4. For type casting use (eslint: no-new-wrappers):

Numbers:
Why? The parseInt function produces an integer value dictated by interpretation of the contents of the string argument according to the specified radix. Leading whitespace in string is ignored. If radix is undefined or 0, it is assumed to be 10 except when the number begins with the character pairs 0x or 0X, in which case a radix of 16 is assumed. This differs from ECMAScript 3, which merely discouraged (but allowed) octal interpretation. Many implementations have not adopted this behavior as of 2013. And, because older browsers must be supported, always specify a radix.
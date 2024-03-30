---
title: Function Names (读取函数名)
Topic:
  - Function
Type: D
tags:
  - JavaScript
DateStarted: 2024-02-16
DateModified: 2024-02-16
DateDo:
DateDone:
DateDue:
DateReviewed: 2024-02-16
Reviewed: 1
Difficulty:
status:
Comment:
---

---

Basic

### `name` 属性功能用法

Back:

- 所有函数对象都会暴露一个只读的 `name` 属性，可读取函数名
_ 保存的就是一个函数标识符，一个字符串化的变量名
_ 若函数没有名称，也会如实显示成*空字符串*
_ `console.log((() ={}).name); //（空字符串）`
_ 如果它是使用 Function 构造函数创建的，则会标识成 "_anonymous_"
_ `console.log((new Function()).name); // anonymous`
_ 函数名前面 _加前缀_ 的情况
_ 如果函数是一个获取函数、设置函数，或者使用 `bind()` 实例化
_ `bound foo`
_ `foo.bind(null).name`
_ `get age`
_ `propertyDescriptor.get.name`
_ `set age` \* `propertyDescriptor.set.name`
📌: JS::JS-Function
🏷️: JS-Function
<!--ID: 1708068045611-->

---

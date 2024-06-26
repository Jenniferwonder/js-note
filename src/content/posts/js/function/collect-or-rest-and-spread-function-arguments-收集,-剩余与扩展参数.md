---
draft: false
aliases:
  - Collect and Spread Function Arguments-收集与扩展参数
title: Collect and Spread Function Arguments-收集与扩展参数
topic:
  - Function
type: D
tags:
  - JavaScript
DateStarted: 2024-02-16
DateModified: 2024-04-25
Datereviewed: 2024-02-16
reviewed: 1
difficulty: 
status: 
comment: 
linter-yaml-title-alias: Collect and Spread Function Arguments-收集与扩展参数
category: Programming
---

# Collect and Spread Function Arguments-收集与扩展参数

> [Iteration and Spread Operators 迭代与扩展操作](iteration-and-spread-operators-迭代与扩展操作)

---

Basic

### 收集参数 (ES6)

Back:

- `function ignoreFirst(firstValue, ...values) {`
  - `ignoreFirst(1,2);    // [2]`
  - 前面如果还有命名参数，则只会收集其余的参数
  - 如果没有则会得到空数组
  - 只能把它作为最后一个参数
- 箭头函数虽然不支持 `arguments` 对象，但支持收集参数的定义方式
  - `let getSum = (...values) => {   return values.reduce((x, y) =x + y, 0);  }`
- 使用收集参数并不影响 `arguments` 对象  
📌: JS::JS-Function  
🏷️: JS-Function
<!--ID: 1708066400813-->

---

---

Basic

### 扩展参数 (ES6)

Back:

- 案例：实现将所有传入的参数累加起来的函数
  - `console.log(getSum.apply(null, values)); // 10`
  - `console.log(getSum(...values)); // 10`
- 不妨碍在其前面或后面再传其他的值  
_ `getSum(-1, ...values)`  
_ `getSum(-1, ...values, 5)`
<!--ID: 1708066400824-->

---

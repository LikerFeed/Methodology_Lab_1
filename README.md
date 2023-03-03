# Quadratic equation solver

## Description

This is a small console application was created by Anenko Ivan from KPI FICE IM-13 group to solve quadratic equations **a*x^2 + b*x + c = 0** where **a != 0**.

_As in the legendary prison riddle,_ the program has two modes: **interactive** and **uninteractive _(file)_**.

### Interactive mode

The console application is launched without arguments _(startup instructions below)_. You can enter your own values of coefficients **a**, **b** and **c** _(correct and a != 0, an error will be noticed and it will be proposed to enter the value again)_. After entering **a**, **b** and **c**, the value of the discriminant, the roots of the equation and also roots number will appear on the screen.

### Uninteractive (file) mode

The application accepts the path to the file in which the coefficients of the equation are specified. To work correctly, the file with coefficients must contain space-separated values **a**, **b** and **c** and one empty line.

## How to run

### Interactive mode

```
$ node .\src\main.js
```

### Uninteractive (file) mode

```
$ node .\src\main.js /file/path/abc
```

## Revert-commit link

https://github.com/LikerFeed/Methodology_Lab_1/commit/5dc2c436addcc91cbd3c4aeb6568882410e75e15

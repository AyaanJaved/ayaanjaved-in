---
title: Library vs *Framework*
subtitle: React and Android — a useful way to think about the difference.
date: May 2024
readTime: 5 min read
tags: Android · React
furtherReading:
  label: Inversion of Control — Martin Fowler →
  href: https://martinfowler.com/bliki/InversionOfControl.html
---

Both are pre-written code that you bring into your project. But the difference lies in how your code interacts with it.

## 1. If your code is in control — *it's a library*

You decide when to call it, how to call it, and what to do with the result. You're the one driving.

React is a good example. You import it, you decide where components go, when they render, and how your app is structured. React doesn't dictate any of that. You call React — React doesn't call you.

> A library is a toolbox. You reach in and grab what you need. You control the order, the timing, the composition.

## 2. If the pre-written code is in control — *it's a framework*

You write code inside its structure, and it decides when to call your code. This inversion of control is the key difference — often called the *Hollywood Principle*: don't call us, we'll call you.

Android is a good example here. The Android framework calls the code you write. It manages the app lifecycle, and you provide the pieces it asks for.

```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        // Android calls this. You don't.
        super.onCreate(savedInstanceState)
    }

    override fun onResume() {
        // Android calls this too.
        super.onResume()
    }

}
```

You don't instantiate `MainActivity` yourself. You don't call `onCreate`. The framework does all of that — you just implement the callbacks it expects.

---

## Why the distinction matters

The learning curve for a framework tends to be steeper, because there are a lot of opinionated rules to play by. You need to understand *where* the framework wants your code before you can write useful code.

Libraries, on the other hand, have fewer rules. But that means their implementation and usage is far more open-ended — which introduces its own complexity. You have to make more decisions yourself.

Neither is better. The right mental model depends on what you're building and what kind of structure you want. But knowing which one you're dealing with — and what it expects from you — makes the difference between fighting a tool and actually using it.

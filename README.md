# Vue-const-enum-problem

This project only exists to demonstrate that Vue (as of April 2020) has a problem with compiling typescript's const enums. As you can see in tsconfig.json, I have set the "preserveConstEnums": false. This is supposed to tell the TS compiler to not emit code for the enum, but instead use the numeric value
of the enum every where an enum member is referenced.

This isn't happening. Instead, the compiler is leaving the reference to the enum in the file and the browser is throwing a reference error on it.

## Project setup

```bash
yarn install
yarn serve
```

### What should happen if everything was working

the page should show the words:

```bash
everything is fine, nothing to see here
```

### What does happen

the page will show

```bash
compilation failed
```

and if you open the dev tools, you will see this error:

```bash
app.7fff05514100a3800d00.hot-update.js:22 Uncaught ReferenceError: SkyCourtApi is not defined
    at new AppModel (app.7fff05514100a3800d00.hot-update.js:22)
    at app.js:886
```

### App setup

The const enum is found in /src/api/SkyCourtApi.d.ts
This directory is pointed to in tsconfig.json as a typings root and the namespace has been added to the list of types

There is only one page located in:
/src/pages/app/App.vue

The App.vue uses a TS model class that references the const enum in its constructor. I put the constructor in a setTimeout so that the page would successfully show the compilation failed message, otherwise the page would show nothing because processing would have stopped on the error.

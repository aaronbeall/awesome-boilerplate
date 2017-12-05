# Aaron's Awesome Web Starter
## TypeScript + React + Redux + Webpack + CSS Modules + CSS Next

This is my gold-standard project setup for 2018!

*Last updated: Dec 1, 2017*

## Includes the following awesomeness:

**Language:**
- [TypeScript](http://www.typescriptlang.org/)

**UI framework:** 
- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [React-Router](https://github.com/reactjs/react-router)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [React-Intl](https://github.com/yahoo/react-intl)

**Styling:** 
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Typed CSS Modules](https://github.com/Quramy/typed-css-modules)
- [PostCSS](https://github.com/postcss/postcss)
- [CSSNext](http://cssnext.io/)

**Build tools:**
- [NPM](https://www.npmjs.com/)
- [Webpack](https://webpack.js.org/)
- [TSLint](https://palantir.github.io/tslint/)

**Unit tests:**
- [Jest](https://facebook.github.io/jest/)

**Polyfills:**
- [CoreJS](https://github.com/zloirock/core-js)
- [WHATWG-Fetch](https://github.com/github/fetch)

## Highlights

- Idiomatic TypeScript, with examples of React component classes, stateless functional components, [typed Redux actions and reducers](https://medium.com/@martin_hotell/redux-typescript-typed-actions-with-less-keystrokes-d984063901d), [typed CSS modules](https://github.com/Quramy/typed-css-modules), [typed unit tests](https://github.com/kulshekhar/ts-jest), and [typed webpack configuration](https://medium.com/webpack/unambiguous-webpack-config-with-typescript-8519def2cac7).
- [CSS modules](https://github.com/css-modules/css-modules) is the preferred style system, but traditional global CSS is also supported for compatibility.
- Bootstrap as a basic starting point for React components. For a more advanced component set I recommend [Semantic UI for React](https://react.semantic-ui.com) which has built in TypeScript definitions.
- Thorough comments in code to explain the setup.

## Usage

First clone or fork the project. Then use commands:

- `npm install` to install all dependencies.
- `npm start` to begin development. A live-reloaded browser window will open.
- `npm run build` to build for production. Distribute the `dist` folder.
- `npm test` to run unit tests. To run tests in watch mode use `npm test -- --watch`.
- `npm run lint` to lint the code (see `tslint.json`), and `npm run fix` to apply lint fixers.

## Issues

- Initial run of `npm start` results in several recompiles for a few seconds. This is because `typed-css-modules` writes out a bunch of files (`*.css.d.ts`) and there's a [bug with how `webpack-dev-server` watches recently created files](https://github.com/webpack/watchpack/issues/25).
- Typed CSS Modules process is separate from Webpack/TypeScript compiler and IDE, meaning sometimes a CSS change is not picked up right away, leading to bogus compile errors. Opening the `*.css.d.ts` file in IDE can nudge it to see the latest.
- Type defs for `node` and `webpack` are visible to the entire app, even though they are only relevent to the build scripts (like `webpack.config.ts`). For example import suggestions in a React component file might show node's `fs`, but you obviously can't use that in a browser. Similarly Jest/Jasmine statements like `describe()` and `it()` are suggested as imports in component files, but they should only be available in unit test files. The fix to this would be to create separate `tsconfig.json` files that explicitly include the files and types for a certain context (node, test, and browser), but maintaining those lists would be a chore.

## FAQ

### Why **TypeScript**? Why not vanilla JavaScript or Flow?

Over years of coding I have become a strong believer in static type systems. JavaScript was my first real programming language, so I did not start this way -- to the contrary, I initially resisted the idea of static types as cumbersome and unnecessary in JavaScript. Today I am fully convinced that TypeScript helps you write better JavaScript code: it guides you to use good patterns, and helps you maintain, refactor, and scale your codebase, especially on teams. It dramatically improves the IDE experience as well. I love the improvements to JavaScript in ES6+, which I get to use in TypeScript, but I consider the addition of a static type system as a critical feature for long-term (and even short-term) development. 

Facebook's [Flow](https://github.com/facebook/flow) is a more recent static type system for JavaScript that I also really like, but I don't have much practical experience with it, and it (currently) lacks the vast ecosystem and community support that TypeScript has, for example the huge collection of type definitions that are available through [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped). 

### Why **React**? Why not Angular or Aurelia or Polymer or Vue?

For me the killer feature of React is that it's 100% component driven with no templates, and its declarative JS syntax (JSX) for creating those components. I've worked with HTML templates a lot in the past (Angular and others) and I've had some experience with other component systems (Flex MXML, R.I.P.), and the component approach has always proved a better experience. Basically the [reasons Facebook created React](https://reactjs.org/blog/2013/06/05/why-react.html) really resonate with me. There's *a lot* I like about Aurelia, Polymer and Angular (in that order?), but at the moment React seems truly unique. React and TypeScript also work together brilliantly: since React is just pure JavaScript the type system catches would-be errors in all code -- there are no "black boxes" in templates or other DSLs found in the other frameworks, and IDEs understand all the code.

### Why **Redux**? Why not Flux or MobX?

I had experience with [Flux](https://facebook.github.io/flux/) before Redux. I loved the pattern of one-directional data flow (actions -> dispatch -> stores -> views) but found that the stores become hard to manage, since they had a mixture of functionality, state, and sometimes confusing inter-dependencies. [Redux simplifies this](https://stackoverflow.com/a/32920459/2225281) with a single state-only store and reducers that *only* update the state, and in a predictable way. The [Redux dev tools](https://github.com/gaearon/redux-devtools) are also amazing, and Redux has become so popular it's hard not to choose.

As for [MobX](https://github.com/mobxjs/mobx), it looks very interesting and I would love to try it in a real project. I am somewhat put off by how it throws out some of the core principals espoused by React, Flux and Redux, such as immutable data and dumb components, but the underlying implementation looks brilliant and easy to use. I would consider MobX for a small project.

### Why **CSSNext**? Why not SASS or LESS?

Future CSS specs cover pretty much everything that proprietary CSS preprocessors of old have to offer. We can use these future CSS specs today with the amazing [CSSNext](http://cssnext.io/) project.

### Why **CSS Modules**? Why not regular stylesheets or CSS-in-JS?

Working with all styles in the same global scope and dealing with overrides, unwanted or unpredictable cascading effects, and wrestling with specificity has been a huge pain point with CSS, especially on large, long-lived projects. CSS Modules solves those problems. It isn't perfect, and comes with its own challenges, but overall it is a huge improvement over any previous CSS experience I've had. I like that it fully embraces CSS for what it's good for: *styling*, and only throws away the thing that is a source of so many problems: *global scope*. CSS-in-JS solutions tend to lose some of the power of CSS or make you learn new syntax.

### Why **Webpack**? Why not Gulp or Grunt or Browserify?

[Webpack](https://webpack.js.org/) can be hard to approach and master, but it's powerful, flexible, and smart: everything "just works" in the browser. With all the necessary complexities of modern JavaScript development (module loading, transpiling, minification, cache-busting, routing, third-party libraries, etc) a tool like Webpack to handle it all at once becomes a huge help. Having a built-in dev-server is also helpful.

As for other tools like Gulp or Grunt, they just aren't needed anymore. NodeJS, NPM and Webpack provide a complete and powerful build chain entirely in JS, so the added abstraction of a tool like Gulp or Grunt just isn't necessary, it adds cost to maintain and depends on an extra layer of plugins for everything. [This article](https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8) explains it well. 
# Consuming a separated CSS file in a Lit-Element TypeScript project - using rollup-plugin-lit-css

- `git clone`
- `npm i`
- `npm run dev`

## Why Lit, TS, and lit-css in one example project?

If you're using Lit Element to build your WebComponents, you might also be using TypeScript, if nothing else - to fit in with the crowd.

If you also want to use rollup-plugin-lit-css to keep your css in a separate file... 

This project gives you a working example. There are a couple tricky issues to integrate with TypeScript.

## Why would you want to keep your css in a separate file?

- Maybe you wouldn't - except for one larger shared css file - maintained by the others?
- You might want to use a css file editor
- You might want to keep your TS file a little smaller
- Some portion of your CSS might be maintained by a separate team

Whatever the reason, thanks to [Benny Powers](https://bennypowers.com/) for creating this useful package! 

## When would you not want to do this?

- Have you thought about the bloat issue? Bringing in a big fat bootstrap file, for example, might be a really dumb idea. This has nothing to do with Lit and everything to do with keeping your WC's light.
- Not everything that works inside an html/css works inside a WC. For example `:root`
- Lots of other reasons, potentially, to not do this.

## Where to find lit-css plugin:

https://www.npmjs.com/package/rollup-plugin-lit-css

## What is the main feature of this app that is not in the docs?

- If you are using TS, this app shows you how to integrate the .d.ts file
- Fully working syntax/semantics for integrating into LitElement

## package.json

- "rollup-plugin-lit-css": "^2.0.1",

## rollup config

- import { litCssConfig } from './rollup.config.rest'
- litcss( litCssConfig ),

## rollup.config.rest.js 

- export const litCssConfig etc
- this is optional, if you just want the defaults

## Lit-Element

- import style from "../css/shared.css";
- mix in with your other css styles like so:
- static get styles() etc

## and the global.d.ts!

`declare module '*.css' etc`

## Your mileage may vary:

- Used a variation of our own setup which is consumes production code in a browsersync
- Most shops probably use a es-dev-server?

## Combined with other stylesheet sources:

You can combine stylesheets from different sources. Showed that here, even though it probably wouldn't be that great an idea to use this particular pattern in the way that it was used here.

## Credits:

- Thanks again [Benny Powers](https://bennypowers.com/) !
- [Westbrook](https://medium.com/@westbrook) for the global.d.ts
- [CaptainCodeman](https://github.com/captainCodeman/) for rollup inspiration and much more
- [water.css](https://github.com/kognise/water.css) is used in this example
- Everyone at [open-wc](https://open-wc.org/) for their constant help, year after year
- Justin, the polymer chrome team, and the polymer slack feed that keeps me pointed forward
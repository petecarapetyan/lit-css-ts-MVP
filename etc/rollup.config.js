'use strict';

import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import litcss from 'rollup-plugin-lit-css'
import { litCssConfig } from './rollup.config.rest'

export default {
  input: 'src/index.ts',
  output: {
    dir: "./dist/scripts",
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    resolve({
      dedupe: [
        'lit-element',
        'lit-html',
      ]
    }),
    litcss( litCssConfig ),
    typescript({ typescript: require('typescript') })
  ]
}

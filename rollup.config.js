import typescript from '@rollup/plugin-typescript'
import {babel} from '@rollup/plugin-babel'
import {} from '@rollup/plugin-commonjs'
import babelConfig from './babel.config'
import copy from 'rollup-plugin-copy'
//  json Converts .json files to ES6 modules.
import json from '@rollup/plugin-json'
import pkg from './package.json'

// format: 'cjs', 'umd', 'amd', 'esm', 'å', 'system'
const config = {
  input: 'src/index.ts',
  output: {
    file: `lib/vue-focus.esm.js`,
    format: 'esm',
  },
  plugins: [
    json(),
    typescript({
      tsconfig: 'tsconfig.json'
    }),
    babel(babelConfig),
    copy({
      targets: [{
        src: 'types',
        dest: "lib"
      }]
    })
  ],
  watch: {
    exclude: 'node_modules/**'
  },
  external: ['vue']
}

export default config
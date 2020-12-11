import typescript from '@rollup/plugin-typescript'
import {babel} from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import babelConfig from './babel.config'
import copy from 'rollup-plugin-copy'

// format: 'cjs', 'umd', 'amd', 'esm', 'iife', 'system'
const config = {
  input: 'src/index.ts',
  output: {
    file: `lib/vue-focus.cjs.js`,
    format: 'cjs',
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
  }
}

export default config
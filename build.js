const rollup = require('rollup')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')
const copy = require('rollup-plugin-copy')
const json = require('@rollup/plugin-json')
const {babel, getBabelOutputPlugin} = require('@rollup/plugin-babel')
const babelConfig = require('./babel.config.js')
const pkg = require('./package.json')

const {version} = pkg

async function build(format = 'esm', minify = false) {
  const babelConfig = {
    presets: ["minify"],
    allowAllFormats: true,
  }
  if (minify) {
    babelConfig.presets = ["minify"]
  } else {
    delete babelConfig.presets
  }
  const inputOpt = {
    input: 'src/index.ts',
    external: ['vue'],
    plugins: [
      commonjs(),
      json(),
      typescript({
        tsconfig: 'tsconfig.json'
      }),
      getBabelOutputPlugin(babelConfig),
    ]
  }
  const outputOpt = {
    file: `lib/vue-focus.${format}${minify ? '.min' : ''}.js`,
    format,
  }
  if (format === 'iife' || format === 'umd') {
    outputOpt.name = 'vue3Focus'
  } else {
    delete outputOpt.name
  }
  const bundle = await rollup.rollup(inputOpt)
  await bundle.generate(outputOpt)
  bundle.write(outputOpt)
}

Promise.all([
  build('esm'),
  build('cjs'),
  build('iife'),
  build('umd'),
  build('amd'),
  build('esm', true),
  build('cjs', true),
  build('iife', true),
  build('umd', true),
  build('amd', true)
]).catch(e => {
  console.log(e)
})

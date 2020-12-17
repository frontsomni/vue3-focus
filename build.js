const rollup = require('rollup')
const typescript = require('@rollup/plugin-typescript')
const json = require('@rollup/plugin-json')
const {babel, getBabelOutputPlugin} = require('@rollup/plugin-babel')
const fse = require('fs-extra')
const babelConfig = require('./babel.config.js')
const pkg = require('./package.json')

const {version} = pkg
const pluginName = 'vue3Focus'
const args = process.argv.slice(2)
const destName = args[0] || 'dist'

async function build(format = 'esm', minify = false) {
  const babelConfig = {
    presets: ['minify'],
    allowAllFormats: true,
  }
  if (minify) {
    babelConfig.presets = ['minify']
  } else {
    delete delete babelConfig.presets
  }

  const inputOpt = {
    input: 'src/index.ts',
    external: ['vue'],
    plugins: [
      json(),
      typescript({
        tsconfig: 'tsconfig.json'
      }),
      getBabelOutputPlugin(babelConfig),
    ]
  }
  const outputOpt = {
    file: `${destName}/vue3-focus.${format}${minify ? '.min' : ''}.js`,
    format,
  }
  if (format === 'iife' || format === 'umd') {
    outputOpt.name = pluginName
  }
  const bundle = await rollup.rollup(inputOpt)
  await bundle.generate(outputOpt)
  bundle.write(outputOpt)
}


const tasks = [
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
]

async function generateFiles() {
  try {
    await fse.emptyDir(destName)
    await fse.copy('types', `${destName}/types`)
    const tasks = [
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
    ]

    Promise.all(tasks)
    .catch(e => {
      console.log(e)
    })

  } catch(e) {
    console.log(e)
  }
}


generateFiles()

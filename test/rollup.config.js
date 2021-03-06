import rpi_resolve from '@rollup/plugin-node-resolve'
import rpi_jsy from 'rollup-plugin-jsy'

const sourcemap = 'inline'
const external_nodejs = ['crypto']

const browser_globals = {'crypto': 'globalThis.crypto'}

const plugins_nodejs = [
  rpi_jsy({defines: {PLAT_NODEJS: true}}),
  rpi_resolve({preferBuiltins: true}), ]

const plugins_web = [
  rpi_jsy({defines: {PLAT_WEB: true}}),
  rpi_resolve({preferBuiltins: true}), ]


export default [
  { input: `./unittest.jsy`, context: 'window', plugins: plugins_web,
    output: { file: './__unittest.iife.js', format: 'iife', name: `test_asn1_codec`, sourcemap, } },

  { input: `./unittest.jsy`, plugins: plugins_nodejs, external: external_nodejs,
    output: { file: './__unittest.cjs.js', format: 'cjs', sourcemap } },
]


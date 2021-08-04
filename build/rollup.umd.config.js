import basicConfig, { file } from './rollup.config'
// import vue from 'rollup-plugin-vue'

// basicConfig.plugins.push(vue({ css: false }))

export default {
  ...basicConfig,
  output: {
    name: 'LegoComponents',
    file: file('umd'),
    format: 'umd',
    globals: {
      vue: 'Vue',
      'lodash-es': '_',
    },
  },
  exports: 'named',
}

import css from 'rollup-plugin-css-only'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { name } from '../package.json'
const file = (type) => `dist/${name}.${type}.js`
export { file, name }
const overrides = {
  compilerOptions: { declaration: true },
  exclude: ['node_modules', 'src/App.vue', 'src/main.ts'],
}
export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es',
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue(),
    css({ output: 'bundle.css' }),
  ],
  external: ['vue', 'lodash-es'],
}
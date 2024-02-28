// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
    unocss: true,
    formatters: true,
  },
  {
    rules: {
      'no-console': 'off',
      'unused-imports/no-unused-vars': 'off',
      'antfu/top-level-function': 'off', //
    },
  },
)

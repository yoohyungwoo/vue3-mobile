import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['flex-center', 'flex items-center'],
    ['flex-between', 'flex justify-between'],
  ],
  rules: [
    // size
    ['text-36', { 'font-size': '36px' }],
    ['text-32', { 'font-size': '32px' }],
    ['text-28', { 'font-size': '28px' }],
    ['text-24', { 'font-size': '24px' }],
    ['text-20', { 'font-size': '20px' }],
    ['text-18', { 'font-size': '18px' }],
    ['text-16', { 'font-size': '16px' }],
    ['text-14', { 'font-size': '14px' }],
    ['text-12', { 'font-size': '12px' }],
    ['text-11', { 'font-size': '11px' }],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({}),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})

<script setup lang="ts">
import '~/styles/base.scss'
import '~/styles/common.scss'

useHead({
  title: 'LG U+ Mobile 데이터팜',
  meta: [
    {
      name: 'description',
      content: 'Mobile DataFarm',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
main {
  @apply flex flex-col;
  overflow-y: auto;
  position: fixed;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  min-width: 360px;
  max-width: 960px;
  padding: 44px 20px 0;

  @supports (-webkit-touch-callout: none) {
    padding: calc(var(--sat) + 20px) 20px 0;
  }

  background-repeat: no-repeat;
  background-attachment: fixed;
}

.light {
  main {
    background: #ffffff;
  }
}

.dark {
  main {
    background: #000000;
  }
}
</style>

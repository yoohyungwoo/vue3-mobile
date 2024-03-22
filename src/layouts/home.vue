<script setup lang="ts">
const test = ref<string>(`${import.meta.env.BASE_URL}/datafarm-logo.png`)
</script>

<template>
  <header class="header">
    <div class="relative h-full flex-center justify-center">
      <button type="button" class="btn__prev__left">
        <img :src="test" alt="메뉴 이미지" type="svg">
      </button>
      <h1>
        <img class="logo__img" :src="test" alt="로고 이미지" type="png">
      </h1>
      <button type="button" class="btn__prev__right">
        <img src="../../public/img/icon/alarm__bell.svg" alt="알람 이미지" type="svg">
      </button>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 999;
  width: 100%;
  min-width: 360px;
  max-width: 900px;
  height: 76px;

  @supports (-webkit-touch-callout: none) {
    height: calc(52px + var(--sat));
    padding-top: var(--sat);
  }

  h2 {
    @apply text-18 font-700;
  }

  .btn__prev__left {
    display: inline-block;
    position: absolute;
    top: calc(50%);
    left: 16px;
    width: 28px;
    height: 28px;
    transform: translateY(-50%);
  }
  .btn__prev__right {
    display: inline-block;
    position: absolute;
    top: calc(50%);
    right: 16px;
    width: 28px;
    height: 28px;
    transform: translateY(-50%);
  }
}
main {
  @apply flex flex-col;
  overflow-y: auto;
  position: fixed;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  min-width: $min-width;
  max-width: $max-width;

  &.login-layout {
    // 로그인 레이아웃 내 패딩 제거
    padding: 68px 0 0 0;
  }
}

.light {
  .sub-header {
    background: rgba(255, 255, 255, 0.3);

    &.gray-theme {
      background: $gray-50;
    }
  }
}

main {
  background: $white-00;

  &.gray-theme {
    background: $gray-50;
  }
}

.dark {
  .sub-header {
    background: rgba(16, 16, 18, 0.3);
  }

  main {
    background: $d-gray-10;
  }
}
.logo__img {
  width: 117px;
  height: 29px;
}
</style>

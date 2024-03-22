<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const router = useRouter()
const movePage = () => {
  router.push('/home')
}
</script>

<template>
  <div>
    <p>테스트중</p>
    <button @click="movePage">
      Main 화면 이동
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

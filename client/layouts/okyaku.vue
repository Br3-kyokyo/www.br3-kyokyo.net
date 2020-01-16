<template lang="pug">
  div
    Header
    div.body
      .section
        .content
          h1
            nuxt-link(to="/apps/reception_training/ios") 
              p 「英語で接客訓練」サービスページ
          hr
          nuxt
</template>

<style lang="scss">
.body {
  margin: 5vh 0; /* bodyの外側の余白を指定する */
  padding: 8vh 2vw 8vh 2vw; /* bodyの内側余白を指定する(上:右:下:左) */
}
</style>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>

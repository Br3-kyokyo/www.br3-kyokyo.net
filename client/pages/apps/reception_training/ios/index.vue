<template lang="pug">
  .section
    .content
      h1 「英語で接客訓練」サービスページ
      hr
      .menu
        ul.menu-list
          li
            nuxt-link(to="/apps/reception_training/ios/contact") お問い合わせ
          li
            nuxt-link(to="/apps/reception_training/ios/privacy_policy") プライバシーポリシー


</template>

<style lang="scss">
.section {
  background-color: white;
}
</style>

<script>
export default {
  layout: 'default'
}
</script>

<template lang="pug">
  .section
    .content
      h1 「英語で接客訓練」サービスページ
      hr
      p.error_pane(v-if="errors.length")
        ul
          li(v-for="error in errors") {{ error }}
      .field
        label.label お名前
        .control
          input.input(v-model="name" type="text" id="name" name="name" placeholder="e.g., 山田 太郎")
      .field
        label.label メールアドレス
        .control
          input.input(v-model="email" type="email" id="email" name="email" placeholder="address@xxx.xxx")
      .field
        label.label 件名
        .control
          input.input(v-model="subject" type="text" id="subject" name="subject")
      .field
        label.label 本文
        textarea.textarea(v-model="text" type="textarea" id="text" name="text")
      .field
        .control
          button.button(name="submit" type="submit" v-on:click="mailsend") send
</template>

<style lang="scss">
.section {
  background-color: white;
  .content {
    .error_pane {
      background-color: red;
      color: white;
    }
  }
}
</style>

<script>
export default {
  layout: 'default',
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      text: '',
      errors: []
    }
  },
  methods: {
    mailsend(event) {
      this.errors = []
      if (!this.name) this.errors.push('名前を入力してください')
      if (!this.email) this.errors.push('メールアドレスを入力してください')
      if (!this.text) this.errors.push('本文を入力してください')
      if (this.errors.length) return

      const data = {
        name: this.name,
        email: this.email,
        type: 'okyaku-ios webform',
        subject: this.subject,
        text: this.text
      }

      this.$axios
        .$post(`https://br3-kyokyo.net/apiserver/mailsender/`, data)
        .then((response) => {
          alert(response)
          this.$router.push('/apps/reception_training/ios')
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
}
</script>

<template lang="pug">
  .okyaku-body
    h2 ご意見・お問い合わせ
    .contact_form_body
      p.error_pane(v-if="errors.length")
        ul
          li(v-for="error in errors") {{ error }}
      .field
        label.label 
          span お名前
        .control
          input.input(v-model="name" type="text" id="name" name="name" placeholder="e.g. 宮沢賢治, 賢治, miyaken, ...")
      .field
        label.label 
          span メールアドレス
          span.has-text-danger *
        .control
          input.input(v-model="email" type="email" id="email" name="email" placeholder="address@example.com")
      .field
        label.label
          span 件名
          span.has-text-danger *
        .control
          input.input(v-model="subject" type="text" id="subject" name="subject")
      .field
        label.label
          span 本文
          span.has-text-danger *
        textarea.textarea(v-model="text" type="textarea" id="text" name="text")
      .field
        .control
          button.button(name="submit" type="submit" v-on:click="mailsend") send
</template>

<style lang="scss">
.section {
  .content {
    .error_pane {
      background-color: red;
      color: white;
    }
    .contact_form_body {
      margin-top: 30px;
    }
  }
}
</style>

<script>
export default {
  layout: 'okyaku',
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
      if (!this.email) this.errors.push('メールアドレスを入力してください')
      if (!this.subject) this.errors.push('件名を入力してください')
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

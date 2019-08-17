<template>
  <div class="container">
    <div>
      <img src="~/static/myicon2.png" id="icon" />
      <h1 class="title">www.br3-kyokyo.net</h1>
      <h2 class="subtitle">Br3-kyokyo&#39;s index web site</h2>
      <div class="links">
        <a
          href="https://github.com/Br3-kyokyo"
          target="_blank"
          class="button--grey"
          >GitHub</a
        >
        <a
          href="https://qiita.com/Br3-kyokyo"
          target="_blank"
          class="button--grey"
          >Qiita</a
        >
        <a
          href="https://br3-kyokyo.hatenadiary.com/"
          target="_blank"
          class="button--grey"
          >HatenaBlog</a
        >
        <a
          href="https://note.mu/br3_kyokyo"
          target="_blank"
          class="button--grey"
          >note</a
        >
        <a
          href="https://twitter.com/Br3_kyokyo_ut"
          target="_blank"
          class="button--grey"
          >Twitter</a
        >
        <a
          href="https://www.wantedly.com/users/62636991"
          target="_blank"
          class="button--grey"
          >Wantedly</a
        >
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

#icon {
  width: 20em;
}
</style>

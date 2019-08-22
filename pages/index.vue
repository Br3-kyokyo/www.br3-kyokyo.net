<template>
  <div class="container">
    <div class="section">
      <img id="icon" src="~/static/myicon2.png" />
      <h1 class="title">www.br3-kyokyo.net</h1>
      <h2 class="subtitle">自分らしく、変わり続ける。</h2>
    </div>

    <div id="link-buttons" class="is-flex-tablet">
      <a
        href="https://github.com/Br3-kyokyo"
        target="_blank"
        class="button culumn s"
        >GitHub</a
      >
      <a href="https://twitter.com/Br3_kyokyo_ut" target="_blank" class="button"
        >Twitter</a
      >
      <a href="https://qiita.com/Br3-kyokyo" target="_blank" class="button"
        >Qiita</a
      >
      <a
        href="https://br3-kyokyo.hatenadiary.com/"
        target="_blank"
        class="button"
        >HatenaBlog</a
      >
      <a href="https://note.mu/br3_kyokyo" target="_blank" class="button"
        >note</a
      >
      <a
        href="https://www.wantedly.com/users/62636991"
        target="_blank"
        class="button"
        >Wantedly</a
      >
      <a
        href="https://atcoder.jp/users/Br3kyokyo"
        target="_blank"
        class="button"
        >AtCoder</a
      >
      <a href="https://peing.net/ja/br3_kyokyo" target="_blank" class="button"
        >Peing</a
      >
    </div>
  </div>
</template>

<style>
.container {
  text-align: center;
  vertical-align: center;
}

.title {
  font-family: 'Noto Serif CJK JP', 'Quicksand', 'Source Sans Pro',
    -apple-system, 'Noto Serif CJK JP', BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  font-size: 8vw;
  color: #35495e;
  letter-spacing: 0.2vw;
}

.subtitle {
  font-size: 4vw;
  letter-spacing: 0.1vw;
}

#icon {
  width: 20em;
}

#link-buttons {
  justify-content: center;
  align-items: center;
}

#link-buttons a {
  display: block;
  margin: 0 0.5vw 2vw;
}
</style>

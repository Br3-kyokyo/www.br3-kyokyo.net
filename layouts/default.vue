<template lang="pug">
  div
    .header
      .head-1
      .head-2
      .head-3
      .head-4
      .upper-pane-overlayer
        nuxt-link(to="/")
          img.logo(src="~/static/logo.svg")
    nuxt
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: $white;
}

.header {
  z-index: 2;
  position: fixed; /* ヘッダーを固定する */
  top: 0; /* 上部から配置の基準位置を決める */
  left: 0; /* 左から配置の基準位置を決める */
  width: 100%; /* ヘッダーの横幅を指定する */
  height: 10vh; /* ヘッダーの高さを指定する */

  display: flex;

  .head-1 {
    z-index: 2;
    width: 8vw;
    background-color: $red;
  }

  .head-2 {
    z-index: 2;
    width: 11vw;
    background-color: $green;
  }

  .head-3 {
    z-index: 2;
    width: 15vw;
    background-color: $blue;
  }

  .head-4 {
    z-index: 2;
    width: 66vw;
    background-color: $yellow;
  }

  .upper-pane-overlayer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 1.5vh 3vw;
    z-index: 2;
    display: flex;
    justify-content: start;
    align-content: flex-start;
    align-items: flex-start;
    a {
      height: 100%;
      img.logo {
        height: 100%;
      }
    }
  }
}
</style>

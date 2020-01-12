<template lang="pug">
  .main
    .desktop-container.is-hidden-touch
      .upper-pane
        .upper-pane-overlayer
          img.logo(src="~/static/logo.svg")

        .upper-left
          .triad-first
          .triad-4th
        .upper-right
          .triad-second            
          .triad-third

      .bottom-pane
        .links
          a.logo(href="https://twitter.com/Br3_kyokyo" target="_blank")
            img(src="~/static/twitter.svg")
          a.logo(href="https://br3-kyokyo.hatenadiary.com/" target="_blank")
            img(src="~/static/hatenablog.svg")
          //- a.logo(href="https://note.mu/br3_kyokyo" target="_blank")
          //-   img(src="~/static/note.svg")
          a.logo(href="https://github.com/Br3-kyokyo" target="_blank")
            img(src="~/static/github.png")
          a.logo(href="https://www.instagram.com/br3.kyokyo/" target="_blank")
            img(src="~/static/instagram.png")
          //- a.logo(href="https://qiita.com/Br3-kyokyo" target="_blank")
          //-   img(src="~/static/qiita.png")
          a.logo(href="https://www.wantedly.com/users/62636991" target="_blank")
            img(src="~/static/wantedly.svg")
          //- a.logo(href="https://atcoder.jp/users/Br3kyokyo" target="_blank")
          //-   img(src="~/static/atcoder.png")
          a.logo(href="https://twitcasting.tv/br3_kyokyo" target="_blank")
            img(src="~/static/twitcasting.png")
          a.logo(href="https://peing.net/ja/br3_kyokyo" target="_blank")
            img(src="~/static/peing.jpg")
          //- a.logo(href="https://www.youtube.com/channel/UCdxQL-T5wzYYmJOKtZ3v_5g" target="_blank")
          //-   img(src="~/static/youtube.png")


    .mobile-container.is-hidden-desktop
      .upper-pane
        .upper-pane-overlayer
          img.logo(src="~/static/logo.svg")
        .upper-left
          .triad-first
          .triad-4th
        .upper-right
          .triad-second
          .triad-third


      .bottom-pane
        .links
          a.logo(href="https://twitter.com/Br3_kyokyo" target="_blank")
            img(src="~/static/twitter.svg")
          a.logo(href="https://br3-kyokyo.hatenadiary.com/" target="_blank")
            img(src="~/static/hatenablog.svg")
          a.logo(href="https://note.mu/br3_kyokyo" target="_blank")
            img(src="~/static/note.svg")
          a.logo(href="https://github.com/Br3-kyokyo" target="_blank")
            img(src="~/static/github.png")
          a.logo(href="https://www.instagram.com/br3.kyokyo/" target="_blank")
            img(src="~/static/instagram.png")
          //- a.logo(href="https://qiita.com/Br3-kyokyo" target="_blank")
          //-   img(src="~/static/qiita.png")
          a.logo(href="https://www.wantedly.com/users/62636991" target="_blank")
            img(src="~/static/wantedly.svg")
          //- a.logo(href="https://atcoder.jp/users/Br3kyokyo" target="_blank")
          //-   img(src="~/static/atcoder.png")
          a.logo(href="https://twitcasting.tv/br3_kyokyo" target="_blank")
            img(src="~/static/twitcasting.png")
          a.logo(href="https://peing.net/ja/br3_kyokyo" target="_blank")
            img(src="~/static/peing.jpg")
          //- a.logo(href="https://www.youtube.com/channel/UCdxQL-T5wzYYmJOKtZ3v_5g" target="_blank")
          //-   img(src="~/static/youtube.png")


</template>

<style lang="scss">
.main {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.mobile-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .upper-pane {
    height: 50vh;
    width: 100vw;
    display: flex;
    position: relative;

    .upper-pane-overlayer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      img.logo {
        width: 90vw;
      }
    }

    .upper-left {
      width: 25vw;
      background: $green;

      .triad-first {
        height: 30vh;

        background: $blue;
      }
      .triad-4th {
        height: 20vh;
        background: $green;
      }
    }
    .upper-right {
      width: 75vw;
      .triad-second {
        height: 25vh;
        background: $yellow;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
      }
      .triad-third {
        height: 25vh;
        background: $red;
      }
    }
  }

  .bottom-pane {
    height: 50vh;
    width: 100vw;
    .links {
      height: 100%;

      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: space-around;
      .logo img {
        height: 14vh;
      }
    }
  }
}

.desktop-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .upper-pane {
    height: 60vh;
    width: 100vw;
    display: flex;
    position: relative;

    .upper-pane-overlayer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      img.logo {
        width: 70vw;
      }
    }

    .upper-left {
      width: 40vw;
      background: $green;

      .triad-first {
        height: 40vh;

        background: $blue;
      }
      .triad-4th {
        height: 20vh;
        background: $green;
      }
    }
    .upper-right {
      width: 60vw;
      .triad-second {
        height: 30vh;
        background: $yellow;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
      }
      .triad-third {
        height: 30vh;
        background: $red;
      }
    }
  }

  .bottom-pane {
    height: 40vh;
    width: 100vw;
    .links {
      height: 100%;

      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: space-around;

      a.logo {
        height: 19.5vh;
        img {
          height: 19.5vh;
        }
      }
    }
  }
}
</style>

<script>
export default {
  layout: 'plane'
}
</script>

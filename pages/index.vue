<template lang="pug">
  .main

    .desktop-container-draft.is-hidden-touch
      .upper-pane
        .links
          a.logo(href="https://github.com/Br3-kyokyo" target="_blank")
            img(src="~/static/github.png")
          a.logo(href="https://twitter.com/Br3_kyokyo" target="_blank")
            img(src="~/static/twitter.svg")
          a.logo(href="https://qiita.com/Br3-kyokyo" target="_blank")
            img(src="~/static/qiita.png")
          a.logo(href="https://br3-kyokyo.hatenadiary.com/" target="_blank")
            img(src="~/static/hatenablog.svg")

      .middle-pane
        .middle-pane-overlayer
          //span.logo Br3-kyokyo.net
          img.logo(src="~/static/logo.svg")
        .middle-left
          .triad-first
          .triad-4th
        .middle-right
          .triad-second            
          .triad-third

      .bottom-pane
        .links
          a.logo(href="https://note.mu/br3_kyokyo" target="_blank")
            img(src="~/static/note.svg")
          a.logo(href="https://www.wantedly.com/users/62636991" target="_blank")
            img(src="~/static/wantedly.svg")
          a.logo(href="https://atcoder.jp/users/Br3kyokyo" target="_blank")
            img(src="~/static/atcoder.png")
          a.logo(href="https://peing.net/ja/br3_kyokyo" target="_blank")
            img(src="~/static/peing.png")
            
    .mobile-container.is-hidden-desktop
      .upper-pane
        .upper-left
          .triad-first
          .triad-4th
        .upper-right
          .triad-second
            p.urllogo Br3-kyokyo.net
          .triad-third


      .bottom-pane
        .links
          a.logo(href="https://github.com/Br3-kyokyo" target="_blank")
            img(src="~/static/github.png")
          a.logo(href="https://twitter.com/Br3_kyokyo" target="_blank")
            img(src="~/static/twitter.svg")
          a.logo(href="https://qiita.com/Br3-kyokyo" target="_blank")
            img(src="~/static/qiita.png")
          a.logo(href="https://br3-kyokyo.hatenadiary.com/" target="_blank")
            img(src="~/static/hatenablog.svg")
          a.logo(href="https://note.mu/br3_kyokyo" target="_blank")
            img(src="~/static/note.svg")
          a.logo(href="https://www.wantedly.com/users/62636991" target="_blank")
            img(src="~/static/wantedly.svg")
          a.logo(href="https://atcoder.jp/users/Br3kyokyo" target="_blank")
            img(src="~/static/atcoder.png")
          a.logo(href="https://peing.net/ja/br3_kyokyo" target="_blank")
            img(src="~/static/peing.png")

</template>

<style lang="scss">
@import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);

.main {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.desktop-container {
  min-height: 100%;
  min-width: 100%;
  padding: 0;
  margin: 0;
  text-align: center;
  vertical-align: center;
  display: flex;

  .column {
    padding: 0;
  }

  .left-pane {
    height: 100vh;
    width: 20vw;
    background: $altred;
  }

  .right-pane {
    max-height: 100%;
    width: 80%;
    margin: 0%;
    .right-upper {
      height: 10vh;
      background: $blue;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .copy {
        color: white;
        margin-right: 5vw;
      }
    }

    .right-bottom {
      height: 40vh;
      background: $blue;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      .sentence {
        margin-right: 5vw;
        text-align: right;
        position: absolute;
        left: 0px;
        top: 0px;
        width: 70vw;
        color: black;
        font-family: 'Times New Roman', Times, serif;
        ._01 {
          position: absolute;
          left: -50vw;
          top: -10vh;
          width: 100vw;
          font-size: 15em;
          text-shadow: 3px;
          opacity: 0.8;
        }
        ._02 {
          position: absolute;
          left: 0px;
          top: 170px;
          width: 80vw;
          font-size: 5em;
          opacity: 0.5;
        }
        ._03 {
          position: absolute;
          left: -3vw;
          top: 15vh;
          width: 80vw;
          font-size: 1em;
          opacity: 1;
        }
      }
    }
    .links {
      height: 50vh;
      display: flex;
      align-items: flex-start;
      margin: 10px;

      flex-wrap: wrap;
      justify-content: space-around;
      align-content: space-around;
      .logo img {
        height: 20vh;
        width: auto;
      }
    }
  }
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
        .urllogo {
          height: auto;
          font-family: 'Noto Sans JP', sans-serif;
          font-weight: 900;
          font-size: 2em;
          font-kerning: 5px;
        }
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

.desktop-container-draft {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .middle-pane {
    height: 60vh;
    width: 100vw;
    display: flex;
    position: relative;

    .middle-pane-overlayer {
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
        width: 60vw;
      }

      span.logo {
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 1000;
        font-size: 6em;
        letter-spacing: 2px;
        //text-shadow: ivory 0 0 10px;
        //-webkit-text-stroke: 2px ivory;
      }
    }

    .middle-left {
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
    .middle-right {
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
    height: 20vh;
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

  .upper-pane {
    height: 20vh;
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
</style>

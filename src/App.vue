<template>
  <div v-bind:class="{default:classp,second:flagRed,third:flagBlue}">
    <div class="content">
      <div class="imgss">
        <img :src="imgs" :style="st">
      </div>
    </div>
    <div class="content">
      <div :key="selected_card.id"
           class="card"
           :class="suitColor[selected_card.suit]">
        <span class="card__suit card__suit--top">{{ selected_card.suit }}</span>
        <span class="card__number">{{ selected_card.rank }} </span>
        <span class="card__suit card__suit--bottom">{{ selected_card.suit }}</span>
      </div>
    </div>
    <div style="clear:both;">
      <button @click="genRandom" class="btn">Refresh</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  //   data: function () {
  //         return {
  //             newTodo: '',
  //     }
  // },
  computed: {
      classp () {
          return this.$store.getters.classp;
      },
      flagRed () {
          return this.$store.getters.flagRed;
      },
      flagBlue () {
          return this.$store.getters.flagBlue;
      },
      imgs () {
          return this.$store.getters.imgs;
      },
      st () {
          return this.$store.getters.st;
      },
      selected_card () {
          return this.$store.getters.selected_card;
      },
      suitColor () {
          return this.$store.getters.suitColor;
      },
    


  },
  methods: {
    genRandom() {

      let snd = new Audio('../audio/ONEDICE.WAV');
      snd.play();
      this.$store.dispatch('genRandom');
      this.$store.dispatch('shuffleDeck');
    },
    displayInitialDeck() {
      this.$store.dispatch('displayInitialDeck');
    },
  },
  created() {
    this.displayInitialDeck();
  },
  updated () {
      // let classp = this.$store.getters.classp;
      // let flagRed = this.$store.getters.flagRed;
      // let flagBlue = this.$store.getters.flagBlue;
      // let imgs = this.$store.getters.imgs;
      // let st = this.$store.getters.st;
      // let selected_card = this.$store.getters.selected_card;
      // let suitColor = this.$store.getters.suitColor;

  },  
};
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
}


button {
  padding: 0.7rem;
  background-color: rgb(9, 10, 5);
  border-radius: 11px;
  font-size: 1rem;
  color: rgb(219, 221, 223);
  outline: none;
  box-shadow: inset 20px 2px 20px 0px #a51717;
  transition: all 0.3s;
  margin-right: 1rem;
}

button:hover {
  box-shadow: inset 20px 2px 20px 0px transparent;
  background-color: #a51717;
}

.default {
  color: #f4f4f4;
  background-color: #ffffff;
  padding: 2rem;
  text-align: center;
  font-family: cursive;
  height: 100vh;
  text-transform: capitalize;
}


.second {
  color: white;
 background-color: #ff0000;
  padding: 2rem;
  position: relative;
  font-family: cursive;
  height: 100vh;
  text-transform: capitalize;
}


.third {
  color: white;
 background-color: #0000ff;
  padding: 2rem;
  position: relative;
  font-family: cursive;
  height: 100vh;
  text-transform: capitalize;
}

.imgss {
  box-shadow: -20px 10px 2px 0px rgb(219, 221, 223);
  border: 2.9px double rgba(243, 241, 241, 0.712);
  border-radius: 20px;
  padding: 1rem 1rem 1rem 1rem;
  backface-visibility: hidden;
  background-color: rgba(5, 12, 10, 0.57);
  width: 10rem;
  height: 170px;
  margin: 0 auto;
  transition: all 0.3s;
  z-index: 100;
  cursor: pointer;
}

img {
  border-radius: 20px;
  box-shadow: 2px 10px 10px black;
  transition: all 0.3s;
}

.imgss:hover {
  box-shadow: none;
}

.imgss:hover > img {
  box-shadow: 0px 7px 10px #fff;
  padding: 2px;
}

.score {
  background-color: #dfff;
  color: rgb(54, 48, 48);
  width: fit-content;
  padding: 1rem;
  text-align: center;
  margin:2rem auto;

}

.content {
  margin: 50px 0 100px;
  float: left;
  width: 50%;
}

h3 {
  cursor: pointer;
  text-transform: capitalize;
  transition: all 0.3s;
}
h3:hover {
  color: rgb(143, 151, 153);
}


.title {
  font-family: Roboto Slab, sans-serif;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 0 !important;
  font-weight: 300;
  font-size: 3rem;
}

.vue-logo {
  height: 55px;
  position: relative;
  top: 10px;
}

.speed-buttons {
  text-align: center;
  padding-top: 30px;
}
.speed-buttons .button {
  height: 2.50em;
}

.main-buttons {
  display: block;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 0 !important;
}

.count-section {
  position: absolute;
  top: 10px;
  right: 10px;
}

.fas {
  padding-left: 5px;
}

.deck {
  margin-left: 30px;
  padding-top: 30px;
}

.card {
  width: 100px;
  height: 150px;
  margin: 5px;
  border-radius: 5px;
  border:#000 solid 2px;
  position: relative;
  background-color: #ffffff;
  box-shadow: 8px 7px 10px #fff;
  padding: 2px;
  font-size: 25px;
}

.card:hover{
  box-shadow: none;
}

.card__suit {
  width: 100%;
  display: block;
}

.card__suit--top {
  text-align: left;
  padding-left: 5px;
}

.card__suit--bottom {
  position: absolute;
  bottom: 0px;
  text-align: left;
  transform: rotate(180deg);
  padding-left: 5px;
}

.card__number {
  width: 100%;
  position: absolute;
  top: 38%;
  left: 0;
  text-align: center;
}

.red {
  color: #FF0000;
}

.black {
  color: #000;
}

.twitter-section {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.twitter-section .fa-twitter-square {
  color: #00d1b2;
  font-size: 30px;
}

.shuffleSlow-move {
  transition: transform 2s;
}

.shuffleMedium-move {
  transition: transform 1s;
}

.shuffleFast-move {
  transition: transform 0.5s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 1210px) {
  .deck {
    position: initial;
    top: 0;
  }

  .twitter-section {
    display: none;
  }
}
</style>

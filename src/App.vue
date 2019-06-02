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
  data() {
    return {
      classp: true,
      flagRed: false,
      flagBlue: false,
      start: false,
      imgs: "",
      user: 0,
      system: 0,
      st: "",
      number: 0,

      ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
      values: [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      suits: ['♥','♦','♠','♣'],
      cards: [],
      selected_card: null,
      suitColor: {
        '♠': 'black',
        '♣': 'black',
        '♦': 'red',
        '♥': 'red',
      },
      shuffleSpeed: 'shuffleMedium',
      shuffleTypes: ['Slow', 'Medium', 'Fast'],
      isDeckShuffled: false,
      shuffleCount: 0,
    };
  },
  methods: {
    genRandom() {

       let snd = new Audio('../audio/ONEDICE.WAV')
       snd.play()
      let num = Math.floor(Math.random() * 6) + 1;
      this.number = num;

      switch (num) {
        case 1:
          this.imgs = "../images/1.png";
          this.st = {
            border: "4px doubled #1abc9c"
          };
          this.user += num;

          break;
        case 2:
          this.imgs = "../images/2.png";
          this.user += num;
          this.st = {
            border: "4px dotted #2ecc71"
          };
          break;

        case 3:
          this.imgs = "../images/3.png";
          this.user += num;
          this.st = {
            border: "4px dotted #3498db"
          };
          break;

        case 4:
          this.imgs = "../images/4.png";
          this.user += num;
          this.st = {
            border: "4px dotted rgba(239, 87, 119,1.0)"
          };
          break;

        case 5:
          this.imgs = "../images/5.png";
          this.user += num;
          this.st = {
            border: "4px dotted #e74c3c"
          };
          break;

        case 6:
          this.imgs = "../images/6.png";
          this.user += num;
          this.st = {
            border: "4px dotted #ecf0f1"
          };
          break;
      }

      this.shuffleDeck();
    },
    displayInitialDeck() {
      let id = 1;
      this.cards = [];

      for( let s = 0; s < this.suits.length; s++ ) {
        for( let r = 0; r < this.ranks.length; r++ ) {
          let card = {
            id: id,
            rank: this.ranks[r],
            suit: this.suits[s],
            value: this.values[r]
          }
          this.cards.push(card);
          id++;
        }
      }

      this.isDeckShuffled = false;
      this.shuffleCount = 0;
      
      this.system = 0;
      this.user = 0;
      this.imgs = null;
      this.st = null;
      this.selected_card = this.cards[1];
    },
    shuffleDeck() {        
      for(let i = this.cards.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        
        let temp = this.cards[i];
        this.cards[i] = this.cards[randomIndex];
        this.cards[randomIndex] = temp;
      }

      this.selected_card = this.cards[1];

      if (this.suitColor[this.selected_card.suit] == 'red' && (this.selected_card.value + this.number) % 2 == 0) this.flagRed = true;
      else this.flagRed = false;
      
      if (this.suitColor[this.selected_card.suit] == 'black' && (this.selected_card.value + this.number) % 2 == 1) this.flagBlue = true;
      else this.flagBlue = false;
      

      this.isDeckShuffled = true;
      this.shuffleCount = this.shuffleCount + 1;
    }
  },
  created() {
    this.displayInitialDeck();
  }
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

import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)

export default new Vuex.Store({

    state: {//data
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
        loading: true,

    },
    getters:{//computed properties
        classp: state => state.classp,
        flagRed: state => state.flagRed,
        flagBlue: state => state.flagBlue,
        start: state => state.start,
        imgs: state => state.imgs,
        user: state => state.user,
        system: state => state.system,
        st: state => state.st,
        number: state => state.number,
        ranks: state => state.ranks,
        values: state => state.values,
        suits: state => state.suits,
        cards: state => state.cards,
        selected_card: state => state.selected_card,
        suitColor: state => state.suitColor,
        shuffleSpeed: state => state.shuffleSpeed,
        shuffleTypes: state => state.shuffleTypes,
        isDeckShuffled: state => state.isDeckShuffled,
        shuffleCount: state => state.shuffleCount,
    },
    mutations:{

        genRandom_real(state){
            //update products
            let num = Math.floor(Math.random() * 6) + 1;
            state.number = num;
            switch (num) {
                case 1:
                    state.imgs = "../images/1.png";
                    state.st = {
                    border: "4px doubled #1abc9c"
                  };
                  state.user += num;
        
                  break;
                case 2:
                    state.imgs = "../images/2.png";
                    state.user += num;
                    state.st = {
                    border: "4px dotted #2ecc71"
                  };
                  break;
        
                case 3:
                    state.imgs = "../images/3.png";
                    state.user += num;
                    state.st = {
                    border: "4px dotted #3498db"
                  };
                  break;
        
                case 4:
                    state.imgs = "../images/4.png";
                    state.user += num;
                    state.st = {
                    border: "4px dotted rgba(239, 87, 119,1.0)"
                  };
                  break;
        
                case 5:
                    state.imgs = "../images/5.png";
                    state.user += num;
                    state.st = {
                    border: "4px dotted #e74c3c"
                  };
                  break;
        
                case 6:
                    state.imgs = "../images/6.png";
                    state.user += num;
                    state.st = {
                    border: "4px dotted #ecf0f1"
                  };
                  break;
              }            
        },
        shuffleDeck_real(state){
            for(let i = state.cards.length - 1; i > 0; i--) {
                let randomIndex = Math.floor(Math.random() * i);
                
                let temp = state.cards[i];
                state.cards[i] = state.cards[randomIndex];
                state.cards[randomIndex] = temp;
              }
        
              state.selected_card = state.cards[1];
        
              if (state.suitColor[state.selected_card.suit] == 'red' && (state.selected_card.value + state.number) % 2 == 0) state.flagRed = true;
              else state.flagRed = false;
              
              if (state.suitColor[state.selected_card.suit] == 'black' && (state.selected_card.value + state.number) % 2 == 1) state.flagBlue = true;
              else state.flagBlue = false;
              
        
              state.isDeckShuffled = true;
              state.shuffleCount = state.shuffleCount + 1;            
        },
        displayInitialDeck_real(state){
            let id = 1;
            state.cards = [];
      
            for( let s = 0; s < state.suits.length; s++ ) {
              for( let r = 0; r < state.ranks.length; r++ ) {
                let card = {
                  id: id,
                  rank: state.ranks[r],
                  suit: state.suits[s],
                  value: state.values[r]
                }
                state.cards.push(card);
                id++;
              }
            }
      
            state.isDeckShuffled = false;
            state.shuffleCount = 0;
            
            state.system = 0;
            state.user = 0;
            state.imgs = null;
            state.st = null;
            state.selected_card = state.cards[1];            
        }
    },
    actions:{
        genRandom({ commit }){
            commit('genRandom_real');
        },
        shuffleDeck({ commit }){
            commit('shuffleDeck_real');
        },
        displayInitialDeck({ commit }){
            commit('displayInitialDeck_real');
        },
    }    
})
<!-- src/components/FinalResult.vue -->
<template>
    <div>
        <div class="container">
        <div class="row">
          <div class="result-selection">
            <div class="result-selection__selection">
              <p class="result-selection__selection__title">You Picked</p>
              <img
                :src="player1ImageUrl"
                alt="Player 1"
                :class="{'result-selection__selection--paper': player1Choice === 'Paper', 'result-selection__selection--scissors': player1Choice === 'Scissors', 'result-selection__selection--rock': player1Choice === 'Rock'}"
                class="result-selection__selection__selection-result"
              />
            </div>
            <div class="result-selection__selection__final-result">
                <h3 class="result-selection__selection__final-result__title">{{ finalResult }}</h3>
                <!-- <h3>Player 1 Wins: {{ player1Wins }}</h3> -->
                <button @click="resetGame" class="result-selection__selection__final-result__play-again">Play Again</button>
            </div>
            <div class="result-selection__selection">
              <p class="result-selection__selection__title">The House Picked</p>
              <img :src="player2ImageUrl" alt="Player 2" 
              :class="{'result-selection__selection--paper': player2Choice === 'Paper', 'result-selection__selection--scissors': player2Choice === 'Scissors', 'result-selection__selection--rock': player2Choice === 'Rock'}"
                class="result-selection__selection__selection-result"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      player1Choice: String,
      player2Choice: String,
      finalResult: String,
      player1Wins: Number
    },
    computed: {
      player1ImageUrl() {
        return this.getImageUrl(this.player1Choice);
      },
      player2ImageUrl() {
        return this.getImageUrl(this.player2Choice);
      }
    },
    methods: {
      getImageUrl(option) {
     
        const imageMap = {
          Paper: "./images/icon-paper.svg",
          Scissors: "./images/icon-scissors.svg",
          Rock: "./images/icon-rock.svg"
        };
  
        return imageMap[option] || "";
      },
      resetGame() {
        this.$emit("reset");
      }
    }
  };
  </script>
  
  <style scoped>
  .option-image {
    max-width: 50px;
    max-height: 50px; 
  }
  
  .selection {
    display: inline-block;
    margin: 10px;
    text-align: center;
  }
  </style>
  
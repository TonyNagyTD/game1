<!-- eslint-disable vue/multi-word-component-names -->
<!-- src/components/Result.vue -->
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
    },
    computed: {
      player1ImageUrl() {
        return this.getImageUrl(this.player1Choice);
      },
      player2ImageUrl() {
        return this.getImageUrl(this.player2Choice);
      },
    },
    mounted() {
      // Use setTimeout to automatically move to the final result after 3 seconds
      setTimeout(() => {
        this.$emit("proceedToFinalResult");
      }, 1000); // 3000 milliseconds (3 seconds)
    },
    methods: {
      getImageUrl(option) {
        // Map option names to image URLs
        const imageMap = {
          Paper: "./images/icon-paper.svg",
          Scissors: "./images/icon-scissors.svg",
          Rock: "./images/icon-rock.svg",
        };
  
        return imageMap[option] || "";
      },
    },
  };
  </script>
  
  
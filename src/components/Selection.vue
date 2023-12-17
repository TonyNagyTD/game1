<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="container">
            <div class="row m-auto">
                <div class="player-choice">
                    <div class="player-choice__btn-group">
                        <button v-for="option in options" :key="option.name" @click="selectOption(option.name)" class="player-choice__btn-group__selection-btn">
                            <img :src="option.imageUrl" alt="option.name" class="option-image" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      <!-- <h2>Player 1 - Make a Selection</h2> -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedOption: null,
        options: [
            { name: "Paper", imageUrl: "/images/icon-paper.svg" },
            { name: "Scissors", imageUrl: "/images/icon-scissors.svg" },
            { name: "Rock", imageUrl: "/images/icon-rock.svg" },
      ]
      };
    },
    methods: {
      selectOption(option) {
        this.selectedOption = option;
        this.$emit("selected", this.selectedOption);
      }
    }
  };
  </script>
  
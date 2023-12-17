<!-- src/App.vue -->
<template>
  <div id="app" class="app-body">
      <div class="container">
          <div class="row">
            <div id="counter" class="counter">
              <div class="counter__bolck">
                <h2 class="counter__bolck__Title">Rock <br> paper <br> scissors</h2>
                <div class="counter__bolck__box">
                  <p class="counter__bolck__box__title">score</p>
                  <h3 class="counter__bolck__box__result">{{ player1Wins }}</h3>
                </div>
              </div>
            </div>
        </div>
      </div>
   
    <div v-if="currentView === 'selection'">
      <Selection @selected="handleSelection" />
    </div>
    <div v-else-if="currentView === 'result'">
      <Result :player1Choice="player1Choice" :player2Choice="player2Choice" @proceedToFinalResult="proceedToFinalResult" />
    </div>
    <div v-else-if="currentView === 'finalResult'">
      <FinalResult :player1Choice="player1Choice" :player2Choice="player2Choice" :finalResult="finalResult" :player1Wins="player1Wins" @reset="resetGame" />
    </div>
    <div class="rules-block">
      <button class="rules-block__rules-btn" @click="openModal">RULES</button>
    </div>
    <modal ref="modal"></modal>
    </div>
  </template>

<script>
import Selection from "./components/Selection.vue";
import Result from "./components/Result.vue";
import FinalResult from "./components/FinalResult.vue";
import Modal from "./components/Modal.vue";

export default {
  data() {
    return {
      currentView: "selection",
      player1Choice: null,
      player2Choice: null,
      finalResult: null,
      player1Wins: 0
    };
  },
  methods: {
    openModal() {
      // Set showModal to true to display the modal
      this.$refs.modal.showModal = true;
    },
    handleSelection(option) {
      this.player1Choice = option;
      this.generatePlayer2Choice();
      this.currentView = "result";
    },
    generatePlayer2Choice() {
      const options = ["Rock", "Paper", "Scissors"];
      this.player2Choice = options[Math.floor(Math.random() * options.length)];
    },
    proceedToFinalResult() {
      this.finalResult = this.determineResult();
      this.player1Wins += this.finalResult === "you win" ? 1 : (this.finalResult === "It's a tie" ? 0 : -1);
      this.currentView = 'finalResult';
    },
    determineResult() {
      // Add your logic to determine the winner and update result
      // For simplicity, let's assume Rock beats Scissors, Scissors beats Paper, and Paper beats Rock
      if (
        (this.player1Choice === "Rock" && this.player2Choice === "Scissors") ||
        (this.player1Choice === "Scissors" && this.player2Choice === "Paper") ||
        (this.player1Choice === "Paper" && this.player2Choice === "Rock")
      ) {
        return "you win";
      } else if (this.player1Choice === this.player2Choice) {
        return "It's a tie";
      } else {
        return "you Lose";
      }
    },
    resetGame() {
      this.currentView = "selection";
      this.player1Choice = null;
      this.player2Choice = null;
      this.finalResult = null;
    },
  },
  components: {
    Selection,
    Result,
    FinalResult,
    Modal
}
};
</script>

<style coped lang="scss">
 @import "./assets/styles/main.scss";

</style>

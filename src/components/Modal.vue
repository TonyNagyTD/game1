<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <img class="modal-content-image" src="../assets/images/image-rules.svg" alt="Popup Image" />
  
        <span class="close-btn" @click="closeModal">&times;</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false,
      };
    },
    methods: {
      closeModal() {
        this.showModal = false;
      },
    },
  };
  </script>
  
  <style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    position: relative;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: unset;
  }
  
  .close-btn {
    position: absolute;
    top: 0px;
    right: 10px;
    font-size: 25px;
    cursor: pointer;
    color: gray;
  }
  </style>
  
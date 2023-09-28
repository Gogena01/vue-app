<template>
    <div>
      <ul>
        <li v-if="visiblePrevBtn" @click="movePage(-1)">
          <button class="prev" :disabled="isDisabledPreviousBtn">Previous</button>
        </li>
        <li v-for="(pageNum, index) in pagesCount" :key="index">
          <button @click="onChangePage(pageNum)" class="pageBtn" :class="{active: pageNum === currentPage}">
            {{ pageNum }}
          </button>
        </li>
        <li v-if="visibleNextBtn">
          <button class="next" @click="movePage(1)" :disabled="isDisabledNextBtn">Next</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: `paginator`,
    emits: ['update:currentPage'],
    props: {
      entriesCount: {
        type: Number,
        required: true,
      },
      entriesPerPage: {
        type: Number,
        default: 10,
      },
      currentPage: { 
        type: Number,
        default: 1
      },
      visibleNextBtn: {
        type: Boolean,
        default: true
      },
      visiblePrevBtn: {
        type: Boolean,
        default: true
      },
      visiblePageCounter: {
        type: Boolean,
        default: true
      }
    },
    data: (ctx) => {
      return {
        page: ctx.currentPage
      }
    },
    computed: {
      pagesCount() {
        return Math.ceil(this.entriesCount/ this.entriesPerPage)
      },
      isDisabledPreviousBtn() {
        return this.currentPage <= 1
      },
      isDisabledNextBtn() {
        return this.currentPage >= this.pagesCount
      }
    },
    methods: {
      onChangePage(pageNum) {
        this.$emit('update:currentPage', pageNum)
      },
      movePage (step, event){
        console.log(event)
        this.$emit('update:currentPage', this.currentPage + step)
      }
    }
  }
  </script>
  
  <style scoped>
  ul {
    list-style: none;  
    display: flex;
    gap: 0.5rem;
  }
  
  .active {
    border: 1px solid #ccc;
  }
  
  button[disabled]  {
    background: #E0E0E0;
    color: #ccc;
    cursor: not-allowed;
  }
  
  button[disabled]:focus, button[disabled]:hover {
    border-color: transparent;
    outline: none;
  }
  
  </style>
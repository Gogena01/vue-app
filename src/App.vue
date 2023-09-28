<template>
  page is: {{ page }}
  <paginator-comp
     :entriesCount="entries.length"
     v-model:currentPage="page"
     @update:currentPage="test"
  />
</template>

<script>
import PaginatorComp from './components/PaginatorComp.vue'

export default {
  components: {
    PaginatorComp
  },
  data: () => ({
    page: 1
  }),
  methods: {
    onPageChanged(e) {
      this.page = e
    },
    test(e){ 
      console.warn(e)
    }
  },
  computed: {
    entries() {
      return Array.from(new Array(52)).fill(8)
    }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
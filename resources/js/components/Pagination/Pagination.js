export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pageNumbers() {
      const numbers = [];
      for (let i = Math.max(1, this.currentPage - 1); i <= Math.min(this.totalPages, this.currentPage + 1); i++) {
        numbers.push(i);
      }
      return numbers;
    },
  },
  methods: {
    prevPage() {
      this.$store.dispatch('setCurrentPage', this.$store.state.currentPage - 1);
    },
    nextPage() {
      this.$store.dispatch('setCurrentPage', this.$store.state.currentPage + 1);
    },
    goToPage(pageNumber) {
      this.$store.dispatch('setCurrentPage', pageNumber);
    },
  },
};
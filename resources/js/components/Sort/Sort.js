export default {
  name: "Sort",
  data() {
    return {
      sortBy: "newest",
    };
  },
  methods: {
    sortComments() {
      this.$store.dispatch('commentsSorted', this.sortBy);
    },
  },
};
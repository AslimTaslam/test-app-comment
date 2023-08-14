export default {
  name: "Sort",
  data() {
    return {
      sortBy: "newest",
      tabs: [
        { id: 1, name: "Newest", sortBy: "newest" },
        { id: 2, name: "Oldest", sortBy: "oldest" },
        { id: 3, name: "Id asc", sortBy: "idasc" },
        { id: 4, name: "Id desc", sortBy: "iddesc" },
      ],
    };
  },
  methods: {
    sortComments(key) {
      this.sortBy = key;
      this.$store.dispatch('commentsSorted', this.sortBy);
    },
  },
};
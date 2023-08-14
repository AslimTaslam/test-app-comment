import Comment from "../Comment";

export default {
  name: "CommentsList",
  components: {
    Comment,
  },
  computed: {
    comments() {
      return this.$store.state.comments;
    },
    currentPageComments() {
      const start = (this.$store.state.currentPage - 1) * this.$store.state.pageSize;
      const end = start + this.$store.state.pageSize;
      return this.comments.slice(start, end);
    },
  },
  async created() {
    this.$store.dispatch('getComments');
  },

  methods: {
    async deleteComment(id) {
      this.$store.dispatch('deleteComment', id);
    },
  },
};
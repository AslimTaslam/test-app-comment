import { mapState, mapActions } from "vuex";
import CommentsList from "../../components/CommentsList/CommentsList.vue";
import CommentForm from "../../components/CommentForm/CommentForm.vue";
import Pagination from "../../components/Pagination/Pagination.vue";
import Sort from "../../components/Sort/Sort.vue";

export default {
  name: "App",
  components: {
    CommentsList,
    CommentForm,
    Pagination,
    Sort,
  },

  computed: {
    ...mapState(["comments", 'currentPage', 'pageSize', 'sortOptions']),
    totalPages() {
      return Math.ceil(this.$store.state.comments.length / this.$store.state.pageSize);
    },
    sortedComments() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      const comments = [...this.$store.state.comments];
      if (this.sortBy === "date") {
        comments.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (this.sortBy === "id") {
        comments.sort((a, b) => a.id - b.id);
      }
      return comments.slice(start, end);
    },
  },
  methods: {
    ...mapActions("comments", ["addComment", 'setCurrentPage', 'setPageSize', 'setSortOptions']),
    handleSortChanged(sortBy) {
      this.sortBy = sortBy;
      this.$store.dispatch('setCurrentPage', 1);
    },
  },
}
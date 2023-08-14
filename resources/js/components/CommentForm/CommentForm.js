import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: "CommentForm",
  components: { DatePicker },
  data() {
    return {
      username: "",
      comment: "",
      date: "",
    };
  },
  methods: {
    async addComment() {
      this.$store.dispatch("addComment", {
        name: this.username,
        text: this.comment,
        date: this.date,
      });
      this.username = "";
      this.comment = "";
      this.date = "";
    },
  },
};

import Vue from 'vue'
import Vuex from 'vuex';
import { getComments, createComment, deleteComment } from "../utils/api";

const state = {
  comments: [],
  currentPage: 1,
  pageSize: 3,
  sortOptions: [
    { value: "date", label: "Date" },
    { value: "id", label: "Id" },
  ],
};

const mutations = {
  ADD_COMMENT(state, comment) {
    state.comments = [...state.comments, comment];
  },
  UPDATE_COMMENT(state, comments) {
    state.comments = comments;
  },
  DELETE_COMMENT(state, id) {
    state.comments = state.comments.filter((comment) => comment.id !== id);
  },
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page
  },
  SET_PAGE_SIZE(state, size) {
    state.pageSize = size
  },
  SET_SORT_OPTIONS(state, options) {
    state.sortOptions = options
  }
};

const actions = {
  async addComment({ commit, dispatch }, comment) {
    await createComment(comment);
    commit("ADD_COMMENT", comment);
    dispatch('getComments');
  },
  async getComments({ commit }) {
    const result = await getComments();
    commit("UPDATE_COMMENT", result);
  },
  async deleteComment({ commit, dispatch }, id) {
    await deleteComment(id);
    commit("DELETE_COMMENT", id);
    dispatch('getComments');
  },
  async commentsSorted({ commit, dispatch, state }, sortBy) {
    let sortedComments = [];
    if (sortBy === "newest") {
      sortedComments = state.comments.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "oldest") {
      sortedComments = state.comments.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === "idasc") {
      sortedComments = state.comments.sort((a, b) => a.id - b.id);
    } else if (sortBy === "iddesc") {
      sortedComments = state.comments.sort((a, b) => b.id - a.id);
    }
    commit("UPDATE_COMMENT", sortedComments);
  },
  setCurrentPage({ commit }, page) {
    commit('SET_CURRENT_PAGE', page)
  },
  setPageSize({ commit }, size) {
    commit('SET_PAGE_SIZE', size)
  },
  setSortOptions({ commit }, options) {
    commit('SET_SORT_OPTIONS', options)
  }

};

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

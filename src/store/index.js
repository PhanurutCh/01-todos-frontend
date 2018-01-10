import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all'
  },
  mutations: {
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    REMOVE_TODO (state, index) {
      state.todos.splice(index, 1)
    },
    CHANG_COMPLETED (state, {index, value}) {
      state.todos[index].completed = value
    }
  },
  actions: {
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    RECIVE_TODO ({commit}, index) {
      commit('REMOVE_TODO', index)
    },
    CHANG_COMPLETED ({commit}, obj) {
      console.log(obj)
      commit('CHANG_COMPLETED', obj)
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})

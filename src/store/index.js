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
    },
    CLEAR_COMPLETED (state) {
      for (let i = state.todos.length - 1; i >= 0; i--) {
        if (state.todos[i].completed === true) {
          state.todos.splice(i, 1)
        }
      }
    },
    SaveValue (state, valuenew) {
      localStorage.setItem('todos', JSON.stringify(valuenew))
    },
    GetValue (state) {
      let todos = localStorage.getItem('todos')
      if (todos) {
        state.todos = JSON.parse(todos)
      }
    },
    Move (state, valuemove) {
      state.todos.splice(valuemove.newIndex, 0, state.todos.splice(valuemove.oldIndex, 1)[0])
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
    },
    CLEAR_COMPLETED ({commit}) {
      commit('CLEAR_COMPLETED')
    },
    CALL_VALUE ({commit}, valuenew) {
      commit('SaveValue', valuenew)
    },
    CALL_GET ({commit}) {
      commit('GetValue')
    },
    CALL_MOVE ({commit}, valuemove) {
      commit('Move', valuemove)
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})

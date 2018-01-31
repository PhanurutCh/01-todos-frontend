<template>
  <div>
    <b-field class="is-pulled-right">
      <b-radio-button v-model="visibility"
        native-value="all">
        <span>All ({{countall}})</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="active">
        <span>Active ({{active}})</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="completed">
        <span>Completed ({{completed}})</span>
      </b-radio-button>
      <b-radio-button v-model="visibility"
        native-value="ClearCompleted">
        <span @click="CLEAR_COMPLETED()">ClearCompleted</span>
      </b-radio-button>
    </b-field>
  </div>
</template>

<script>
import { store } from '@/store'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['todos']),
    visibility: {
      get: function () {
        return store.state.visibility
      },
      set: function (newValue) {
        store.dispatch('changeVisibility', newValue)
      }
    },
    countall () {
      return this.todos.length
    },
    active () {
      return this.todos.filter((todo) => todo.completed === false).length
    },
    completed () {
      return this.todos.filter((todo) => todo.completed === true).length
    }
  },
  methods: {
    ...mapActions(['CLEAR_COMPLETED'])
  }
}
</script>

<template>
  <div id="Checkid">
    <div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'all' ">
      <b-field class="is-pulled-left handle">
        <b-checkbox size="is-large" @input="CHANG_COMPLETED({index, value: $event})">
          <template v-if="todo.completed">
            <strike>
              {{ todo.title }}
            </strike>
          </template>
          <template v-else>
            {{ todo.title }}
          </template>
        </b-checkbox>
      </b-field>
      <a @click="RECIVE_TODO(index)" class="delete is-pulled-right"></a>
      <div class="is-clearfix"></div>
    </div>
 
     <div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'active' ">
      <div v-if="todo.completed === false">
      <b-field class="is-pulled-left handle">
        <b-checkbox size="is-large" @input="CHANG_COMPLETED({index, value: $event})" :value="todo.completed">
          <template v-if="todo.completed">
            <strike>
              {{ todo.title }}
            </strike>
          </template>
          <template v-else>
            {{ todo.title }}
          </template>
        </b-checkbox>
      </b-field>
      <a @click="RECIVE_TODO(index)" class="delete is-pulled-right"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>

<div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'completed' ">
    <div v-if="todo.completed === true">
      <b-field class="is-pulled-left handle">
        <b-checkbox size="is-large" @input="CHANG_COMPLETED({index, value: $event})" :value="todo.completed">
          <template v-if="todo.completed">
            <strike>
              {{ todo.title }}
            </strike>
          </template>
          <template v-else>
            {{ todo.title }}
          </template>
        </b-checkbox>
      </b-field>
      <a @click="RECIVE_TODO(index)" class="delete is-pulled-right"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Sortable from 'sortablejs'

export default {
  computed: {
    ...mapGetters(['todos', 'visibility'])
  },
  methods: {
    ...mapActions(['RECIVE_TODO', 'CHANG_COMPLETED', 'CALL_VALUE', 'CALL_MOVE']),
    onUpdate: function (e) {
      this.CALL_MOVE({newIndex: e.newIndex, oldIndex: e.oldIndex})
    }
  },
  watch: {
    todos: {
      handler (value) {
        this.CALL_VALUE(value)
      },
      deep: true
    }
  },
  mounted () {
    let Checklist = document.getElementById('Checkid')
    Sortable.create(Checklist, {handle: '.handle', onUpdate: this.onUpdate, animation: 150})
  }
}
</script>

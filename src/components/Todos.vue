<template>
  <div>
    <div v-for="(todo, index) in todos" :key="todo.title">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" @input="CHANG_COMPLETED({index: index, value: $event})">
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
      <a @click="RECIVE_TODO" class="delete is-pulled-right"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['todos'])
  },
  methods: {
    ...mapActions(['RECIVE_TODO', 'CHANG_COMPLETED'])
  }
}
</script>

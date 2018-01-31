<template>
  <div>
    <p class="is-pulled-left">{{count}} items left</p>
    <visibility-input/>
  </div>
</template>

<script>
import VisibilityInput from '@/components/VisibilityInput'
import { mapGetters } from 'vuex'
export default {
  components: {
    VisibilityInput
  },
  computed: {
    ...mapGetters(['todos', 'visibility']),
    count () {
      if (this.visibility === 'all') {
        return this.todos.length
      } else if (this.visibility === 'active') {
        return this.todos.filter((todo) => todo.completed === false).length
      } else if (this.visibility === 'completed') {
        return this.todos.filter((todo) => todo.completed === true).length
      }
    }
  }
}
</script>

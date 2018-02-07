<template>
  <div id="app">
    <todos-app/>
  </div>
</template>

<script>
import TodosApp from '@/components/TodosApp'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    TodosApp
  },
  mounted () {
    this.CALL_GET()
  },
  methods: {
    ...mapActions(['CALL_GET'])
  }
}
</script>

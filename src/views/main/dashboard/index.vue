<template>
  <div class="box">
    <basic-template />
    <Charts />
    <Card />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import basicTemplate from './components/basic-template.vue'
import Card from './components/card/index.vue'
import Charts from './components/charts/index.vue'
export default defineComponent({
  components: {
    Card,
    Charts,
    basicTemplate,
  }
})
</script>

<style lang="scss" scoped>
  .box {
    padding: 20px;
  }
</style>
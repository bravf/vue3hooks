<style lang="sass" scoped>
.fullscreen
  background: #fff
</style>
<template lang="pug">
.fullscreen(ref='div')
  h2 fullscreen test
  div {{ fullscreen.state.value }}
  el-button-group
    el-button(@click='fullscreen.setFull()') setFull
    el-button(@click='fullscreen.exitFull()') exitFull
    el-button(@click='fullscreen.toggleFull()') toggleFull
</template>
<script>
import { ref } from 'vue'
import { useFullscreen } from '../index.js'
export default {
  name: 'Fullscreen',
  setup() {
    const div = ref(null)
    const fullscreen = useFullscreen(() => div.value, {
      onFull: () => console.log('full'),
      onExitFull: () => console.log('exit full'),
    })
    return {
      fullscreen,
      div,
    }
  },
}
</script>

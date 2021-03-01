<template lang="pug">
.mouse
  h2 mouse test
  div Mouse Pos: {{ mouse.state }}
  div Finger Mouse Pos: {{ fingerMouse.state }}
</template>
<script>
import { useMouse, useFingerMouse } from '../index.js'
import { onMounted } from 'vue'
export default {
  name: 'Mouse',
  setup() {
    const mouse = useMouse(() => {
      console.log('move')
    })
    const fingerMouse = useFingerMouse()
    mouse.start()
    fingerMouse.start()

    onMounted(() => {
      console.log('mount')
    })

    return {
      mouse,
      fingerMouse,
    }
  },
}
</script>

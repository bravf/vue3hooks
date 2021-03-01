import screenfull from 'screenfull'
import { onBeforeUnmount } from 'vue'
import { getTargetElement } from './_dom'
import { reactive } from 'vue'

const useFullscreen = (target = document.body, options = {}) => {
  const { onExitFull, onFull } = options
  const state = reactive({
    value: false,
  })
  const setFull = () => {
    const el = getTargetElement(target)
    console.log(el)
    if (!el) {
      return
    }
    if (screenfull.isEnabled) {
      try {
        screenfull.request(el)
      } catch (error) {
        console.error(error)
      }
    }
  }
  const exitFull = () => {
    if (!state.value) {
      return
    }
    if (screenfull.isEnabled) {
      screenfull.exit()
    }
  }
  const toggleFull = () => {
    state.value ? exitFull() : setFull()
  }
  const onChange = () => {
    state.value = screenfull.isFullscreen
    const f = state.value ? onFull : onExitFull
    f && f()
  }
  if (screenfull.isEnabled) {
    screenfull.on('change', onChange)
  }
  onBeforeUnmount(() => {
    screenfull.off('change', onChange)
  })

  return {
    state,
    setFull,
    exitFull,
    toggleFull,
  }
}

export default useFullscreen

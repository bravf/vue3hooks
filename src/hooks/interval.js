import { onBeforeUnmount } from 'vue'
import useReactive from './reactive'

const useInterval = (callback = () => {}, delay = 1000, immediate = true) => {
  let timer
  const state = useReactive({
    counter: 0,
    activated: false,
  })

  const clean = () => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }
  const stop = () => {
    state.activated = false
    clean()
  }
  const start = () => {
    state.activated = true
    clean()
    timer = setInterval(() => {
      state.counter++
      callback()
    }, delay)
  }
  const restart = () => {
    state.counter = 0
    start()
  }

  if (immediate) {
    start()
  }
  onBeforeUnmount(stop)

  return { state, start, stop, restart }
}

export default useInterval

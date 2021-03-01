import useReactive from './reactive'
import { watch, onBeforeUnmount } from 'vue'

const useTitle = (title = document.title, restoreOnUnmount = false) => {
  const oldTitle = document.title
  const state = useReactive({
    value: title,
  })
  watch(
    () => state.value,
    () => {
      document.title = state.value
    },
    {
      immediate: true,
    },
  )
  if (restoreOnUnmount) {
    onBeforeUnmount(() => {
      document.title = oldTitle
    })
  }
  return state
}
export default useTitle

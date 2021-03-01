import { watch, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const useRouteQueryChange = (useRouteChangeArgs = {}) => {
  useRouteChangeArgs = {
    immediate: true,
    callback: () => {},
    ...useRouteChangeArgs,
  }
  const { callback, immediate } = useRouteChangeArgs
  const router = useRouter()
  watch(router.currentRoute, (to, from) => {
    if (to.path === from.path) {
      callback()
    }
  })
  onBeforeMount(() => {
    if (immediate) {
      callback()
    }
  })
}

export default useRouteQueryChange

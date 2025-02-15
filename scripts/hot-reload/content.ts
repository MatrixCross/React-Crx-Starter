import type { Plugin } from 'vite'
import WebSocket from 'ws'
import { __DEV__, bgUpdatePort } from '../../const'

function hotReloadContent(): Plugin {
  let wsClient = null
  let isReady = false
  const connectWs = () => {
    try {
      if (wsClient === null) {
        wsClient = new WebSocket(`ws://127.0.0.1:${bgUpdatePort}/`)
        wsClient.onopen = () => {
          isReady = true
        }
      }
    }
    catch {
      setTimeout(connectWs, 1000)
    }
  }

  return {
    name: 'hot-reload-content',
    enforce: 'pre',
    configResolved() {
      if (__DEV__) {
        connectWs()
      }
    },
    writeBundle() {
      // 通过socket触发reload
      if (wsClient && isReady) {
        wsClient.send('UPDATE_CONTENT_SCRIPT')
      }
    },
  }
}

export default hotReloadContent

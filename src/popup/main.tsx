import { createRoot } from 'react-dom/client'
import App from './App.tsx'

export function createMyApp() {
  const container = document.getElementById('root') as HTMLDivElement
  const root = createRoot(container)
  root.render(<App />)
}

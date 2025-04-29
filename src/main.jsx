import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HookApp } from './HookApp'
import { CounterApp } from './01-useState/CounterApp'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>,
)

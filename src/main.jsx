import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HookApp } from './HookApp'
import { CounterApp } from './01-useState/CounterApp'
import './index.css'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayouthEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './06-memos/Padre'
// import { CounterWithCustomHook } from './01-useState/counterWithCustomHook'
// import { SimpleForm } from './02-useEfect/SimpleForm'
//import { FormWhithCustomHook } from './02-useEfect/FormWhithCustomHook'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Padre/>
  // </StrictMode>,
)

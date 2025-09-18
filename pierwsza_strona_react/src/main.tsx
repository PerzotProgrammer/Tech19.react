import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Fibonacci from "./Fibonacci.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Fibonacci></Fibonacci>
  </StrictMode>,
)

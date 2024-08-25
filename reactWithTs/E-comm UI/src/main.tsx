import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import "./Assets/css/main.css"
import LandingPage from './pages/landing'

const Welcome =() =>{
  return(
    <h1>Welcome Home</h1>
  )
  
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)

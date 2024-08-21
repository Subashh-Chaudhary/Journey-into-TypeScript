import React from 'react'
import ReactDom from 'react-dom/client'
import LandingPage from './pages/landing';
// import App from './App.tsx'
import './Assets/css/main.css'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// component

// const Welcome = ():ReactElement =>{
//   return(
//     <>
//     <h1>Hello it's me Subash Tharu.</h1>
//     </>
//   )
// }

const rectElem = ReactDom.createRoot(document.getElementById('root')!);
rectElem.render(
  <React.StrictMode>
    <LandingPage />
    {/* //<Welcome /> */}
  </React.StrictMode>
)

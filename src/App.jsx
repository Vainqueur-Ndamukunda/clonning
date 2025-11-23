// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> <div className=''>and save to test HMR</div>
//         </p>
//       </div>
//       <p className="read-the-docs text-2xl text-blue-500">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import Header from './Header'
import HeroSection from './HeroSection'
import Logobar from './Logobar'
import Navbar from './Navbar'
import Imisanzu from './Imisanzu'
import Transformation from './Transformation'
import Events from './Events'
import Footer from './Footer'
import Body from './Body'

function App() {
 

  return (

    <div >
       <Navbar />
       <Logobar/>
       <Header/>
       <HeroSection/>
         <Body/>
   <Imisanzu/>
  <Transformation/>
  <Events/>
  <Footer/>
    </div>
  

  )
}

export default App

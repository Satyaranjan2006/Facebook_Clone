
import './App.css'
import gsap from 'gsap'
import {useGSAP} from  '@gsap/react'

function App() {
  gsap.registerPlugin(useGSAP)

useGSAP(() => {
gsap.to('html',{
  backgroundColor:'blue'
})
}, [])
  return (
    <main>
      <section id='section-1'>Section 1</section>
      <section id='section-2'>Section 2</section>
      <section id='section-3'>Section 3</section>
      <section id='section-4'>Section 4</section>
    </main>
  )
}

export default App

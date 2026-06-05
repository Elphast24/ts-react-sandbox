import Header from "./components/Header"
import Hero from "./components/Hero"
import Particles from './components/Particles';

function App() {

  return(
  <div className="overall">
   <div style={{ width: '100%', height: '100%', position: 'relative' }}>
    <Particles
    particleColors={["#4f46e5", "#0ea5e9"]}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover
    alphaParticles={false}
    disableRotation={false}
    pixelRatio={1}
    />
    </div>
    <Header text="World"/>
    <Hero/>
  </div>
  )
}

export default App

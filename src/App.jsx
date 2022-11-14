import {Blog, Features, Footer, Header, Possibility, WhatIs} from './containers'
import {Cta, Navbar, Brand} from './components'
import './app.css'

function App() {

  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatIs />
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App

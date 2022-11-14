import {Blog, Features, Footer, Header, Possibility, WhatIs} from './containers'
import {Cta, Navbar, Brand} from './components'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Header/>
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

import './App.css'
import Footer from './components/Footer/Footer'
import Forms from './components/Forms/Forms'
import Header from './components/Header/Header'
import News from './components/News/News'
import Produtos from './components/Produtos/Produtos'

function App() {

  return (
    <div className="App">
      <Header/>
      <Forms/>
      <Produtos/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App

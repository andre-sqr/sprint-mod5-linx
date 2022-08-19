import './App.css'
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
    </div>
  )
}

export default App

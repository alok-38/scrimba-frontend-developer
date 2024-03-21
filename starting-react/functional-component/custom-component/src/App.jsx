import reactLogo from './assets/react.svg'
import './App.css'

function Header() {
  return (
    <header>
      <nav className='flex flex-row justify-between'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1 className='inline-block align-text-bottom mt-10'>Reasons
          I'm excited to learn React</h1>
      </nav>
    </header>
  )
}

function Main() {
  return (
    <main className='mt-12'>
      <p className="text-center">
        Edit <code>src/App.jsx</code> and save to reload.
      </p>
    </main>
  )
}

function Footer() {
  return (
    <footer className='sticky bottom-0'>
      <p>
        &copy; 2024
        <a href="https://react.dev" target="_blank">
          React
        </a>
      </p>
    </footer>
  )
}

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
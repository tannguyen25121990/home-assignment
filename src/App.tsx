import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { ForgottenEmailPage } from './pages/ForgottenEmailPage'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgotten-email" element={<ForgottenEmailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

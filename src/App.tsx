import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import { ForgottenEmailPage } from './pages/ForgottenEmailPage'
import { LanguagePicker } from './components/LanguagePicker'
import './i18n'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      {/* Language picker in top right corner */}
      <div className="fixed top-4 right-4 z-50">
        <LanguagePicker />
      </div>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgotten-email" element={<ForgottenEmailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

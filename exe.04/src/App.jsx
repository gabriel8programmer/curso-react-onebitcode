
import { useState } from 'react'
import './App.css'
import Input from './components/InputPassword'

function App() {

  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)
  const [customSize, setCustomSize] = useState(8)
  const [showPassword, setShowPassword] = useState(false)

  const passwordSize = showPassword ? customSize : 8

  const handleGeneratePassword = () => {

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/`~";

    let password = ''

    for (let c = 0; c < passwordSize; c++) {
      const randIndex = Math.floor(Math.random() * characters.length)
      password += characters[randIndex]
    }

    setPassword(password)
    setCopied(false)
  }

  return (
    <div className='containerGeneratePassword'>
      <h1>Gerador de Senhas</h1>

      <div>
        <label htmlFor="showPassword">Customizar Tamanho:</label>
        <input
          type="checkbox"
          id="showPassword"
          value={showPassword}
          onChange={(e) => setShowPassword(currentValue => !currentValue)}
        />
      </div>

      {showPassword &&
        (
          <div>
            <label htmlFor="passwordSize">Tamanho: </label>
            <Input
              passwordSize={customSize}
              setPasswordSize={setCustomSize}
            />
          </div>
        )
      }

      <div className='containerButtons'>
        <button onClick={handleGeneratePassword}>Gerar senha de {passwordSize} caractere(s)!</button>
        <button onClick={() => {
          window.navigator.clipboard.writeText(password)
          setCopied(true)
        }}>
          {copied ? 'Copiado!' : 'Copiar'}
        </button>
      </div>
      <div className='passwordGenerateText'>{password}</div>
    </div>
  )
}

export default App

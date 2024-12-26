
import { useState } from 'react'
import './App.css'
import Input from './components/InputPassword'

function App() {

  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)
  const [passwordLength, setPasswordLength] = useState(12)

  const handleGeneratePassword = () => {

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/`~";

    let password = ''

    for (let c = 0; c < passwordLength; c++) {
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
        <label htmlFor="passwordLength">Tamanho da Senha: </label>
        <Input
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
      </div>

      <div className='containerButtons'>
        <button onClick={handleGeneratePassword}>Gerar senha de {passwordLength} caractere(s)!</button>
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

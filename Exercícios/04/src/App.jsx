
import { useState } from 'react'
import './App.css'
import useStateCopier from './hooks/useStateCopier'

function App() {

  const { stateCopier, invertState } = useStateCopier()
  const [generatePassword, setGeneratePassword] = useState('')

  const handleGeneratePassword = () => {
    const generatedPassword = 'adlkfj193847987'
    setGeneratePassword(generatedPassword)
  }

  return (
    <div className='containerGeneratePassword'>
      <h1>Gerador de Senhas</h1>
      <div className='containerButtons'>
        <button onClick={handleGeneratePassword}>Gerar!</button>
        <button onClick={invertState}>
          {stateCopier ? 'Copiado!' : 'Copiar'}
        </button>
      </div>
      <div className='passwordGenerateText'>{generatePassword}</div>
    </div>
  )
}

export default App

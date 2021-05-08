import { FormEvent, useRef } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/pages/login.module.css'
import axios from 'axios'
import { schedulingPolicy } from 'cluster'

export default function Login() {
  const router = useRouter()
  
  const inputValue = useRef(null)
  const button = useRef(null)
  
  function isInputValue() {
    if (inputValue.current.value) {
      if (button.current.attributes.disabled) {
        button.current.removeAttribute('disabled')
        
      }
    }
  }
  
  function loginGit(event: FormEvent) {
    event.preventDefault()

    axios.post('/api/login-github', { username: `henriquebazi` })
    console.log('hello')
  }

  function handleClick(event: FormEvent) {
    event.preventDefault()
    router.push('/home')
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/Simbolo.png" alt="Simbolo Moveit"/>
      </div>

      <div className={styles.inputSide}>
        <div>
          <div>
            <img src="/Logo.png" alt="Logo do Moveit"/>
          </div>

          <div className={styles.info}>
            <h1>Bem vindo</h1>
            <p>
              <img src="/icons/github.svg" alt="Logo Github"/>
              Faça login com seu Github para começar
            </p>


          <div>
            <form className={styles.input} onSubmit={handleClick}>
              <input name="inputLogin" type="text" placeholder="Digite seu username" onChange={isInputValue} ref={inputValue}/>

              <button disabled type="submit" ref={button} >
                <img src="/icons/vector.svg" alt="Botão"/>
              </button>
            </form>
          </div>
          </div>
        </div>
      </div>
  </div>
  )
}
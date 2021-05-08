import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'
import { ChallengeBox } from './ChallengeBox'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/henriquebazi.png" alt="Imagem de Perfil" />
      <div>
        <strong>Henrique Bazi</strong>
        <p>
          <img src="icons/level.svg" alt="Icone de Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
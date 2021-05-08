import styles from '../styles/components/SideBar.module.css'

export function SideBar() {
  return (
    <div className={styles.container}>
      <img src="/Logo-side.png" alt="Logo Moveit"/>

      <div>
        <a href="/home"><img src="/House.png" alt="Página Home"/></a>
        <a href="/reanking"><img src="/Reanking.png" alt="Página Reanking"/></a>
      </div>
    </div>
  )
}
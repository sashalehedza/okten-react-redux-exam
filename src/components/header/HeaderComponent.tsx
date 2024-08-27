import { NavLink } from 'react-router-dom'
import styles from './HeaderComponent.module.css'

const HeaderComponent = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <NavLink to={'/'} className={styles.navItem}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/pokemons'} className={styles.navItem}>
            Pokemons
          </NavLink>
        </li>
      </ul>
      <hr className={styles.hr} />
    </div>
  )
}

export default HeaderComponent

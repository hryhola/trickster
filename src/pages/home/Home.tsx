import { FontChanger } from '../../ui/settings/font-changer/FontChanger'
import { ThemeChanger } from '../../ui/settings/theme-changer/ThemeChanger'
import styles from './home.page.module.scss'

export const HomePage = () => {
  return (
    <div className={styles['home-page']}>
      Hello, world!

      <ThemeChanger />
      <FontChanger />
    </div>
  )
}

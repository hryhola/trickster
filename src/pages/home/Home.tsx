import { Sidebar } from '../../ui/layout/sidebar/Sidebar'
import { FontChanger } from '../../ui/settings/font-changer/FontChanger'
import { ThemeChanger } from '../../ui/settings/theme-changer/ThemeChanger'
import styles from './home.page.module.scss'

export const HomePage = () => {
  return (
    <div className={styles['home-page']}>
      <div className={styles['home-page_main']}>
        Hello, world!
      </div>
      <Sidebar>
        <ThemeChanger />
        &nbsp;
        <FontChanger />
      </Sidebar>
    </div>
  )
}

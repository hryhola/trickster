import { Sidebar } from '../../ui/layout/sidebar/Sidebar'
import { FontChanger } from '../../ui/settings/font-changer/FontChanger'
import { ThemeChanger } from '../../ui/settings/theme-changer/ThemeChanger'
import { LanguageChanger } from '../../ui/settings/language-changer/LanguageChanger'
import styles from './app.page.module.scss'

export const AppPage = () => {
  return (<div className={styles['home-page']}>
    <div className={styles['home-page_main']}>
      Hello, world!
    </div>
    <Sidebar>
      <ThemeChanger />
      <FontChanger />
      <LanguageChanger />
    </Sidebar>
  </div>)
}

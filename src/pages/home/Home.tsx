import { useState } from 'react'
import { Sidebar } from '../../ui/layout/sidebar/Sidebar'
import { FontChanger } from '../../ui/settings/font-changer/FontChanger'
import { ThemeChanger } from '../../ui/settings/theme-changer/ThemeChanger'
import styles from './home.page.module.scss'
import { Language, LanguageContext } from '../../ui/settings/language-changer/LanguageContext'
import { LanguageChanger } from '../../ui/settings/language-changer/LanguageChanger'

export const HomePage = () => {
  const [language, setLanguage] = useState<Language>('eng')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className={styles['home-page']}>
        <div className={styles['home-page_main']}>
          Hello, world!
        </div>
        <Sidebar>
          <ThemeChanger />
          <FontChanger />
          <LanguageChanger />
        </Sidebar>
      </div>
    </LanguageContext.Provider>
    )
}

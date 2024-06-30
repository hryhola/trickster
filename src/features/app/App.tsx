import { Chat } from '#ui/communication'
import { Sidebar, Box } from '#ui/layout'
import { ThemeChanger, FontChanger, LanguageChanger } from '#features/index'
import styles from './app.module.scss'

export const App = () => {
  return (<div className={styles.wrapper}>
    <div className={styles.main}>
      Hello, world!
    </div>
    <Sidebar>
      <Box>
        <Chat />
      </Box>
      <ThemeChanger />
      <FontChanger />
      <LanguageChanger />
    </Sidebar>
  </div>)
}

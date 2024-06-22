import { Dropdown } from '../../ui/inputs/dropdown/Dropdown'
import styles from './home.page.module.scss'

export const HomePage = () => {
  return (
    <div className={styles['home-page']}>
      Hello, world!

      <Dropdown
        options={[
          { id: 'dark', displayValue: 'Dark' },
          { id: 'light', displayValue: 'Light' }
        ]}
        onSelect={(id) => {
          document.documentElement.dataset.theme = id
        }}
      />
    </div>
  )
}

import styles from './sidebar.module.scss'

export const Sidebar: React.FC<{ children: React.ReactNode }> = (props) => {
    return <div className={styles.sidebar}>
        {props.children}
    </div>
}
import classNames from 'classnames'

import styles from './sidebar.module.scss'

type Props = {
    children: React.ReactNode
    className?: string
}

export const Sidebar: React.FC<Props> = (props) => {
    return (
        <div className={classNames(styles.sidebar, props.className)}>
            {props.children}
        </div>
    )
}

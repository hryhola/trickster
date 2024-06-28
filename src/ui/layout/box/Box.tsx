import classNames from 'classnames'

import styles from './box.module.scss'

type Props = {
    children: React.ReactNode,
    className?: string
}

export const Box: React.FC<Props> = (props) => {
    return <div className={classNames(styles.box, props.className)}>
        {props.children}
    </div>
}

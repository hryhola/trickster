import { useRef } from 'react'
import styles from './text-field.module.scss'

type Props = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    onEnter?: (text: string, clear: () => void) => void
}

export const TextField: React.FC<Props> = (props) => {
    const ref = useRef<HTMLInputElement>(null)

    const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter' && props.onEnter && ref.current) {
            props.onEnter(ref.current.value, () => {
                if (ref.current) ref.current.value = ''
            })
        }
    }

    return (
        <input
            ref={ref}
            type="text"
            className={styles.input}
            placeholder={props.placeholder}
            onKeyDown={onKeyDown}
        />
    )
}

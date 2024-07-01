import { useRef } from 'react'
import styles from './text-field.module.scss'

type Props = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    onEnter?: (text: string, clear: () => void) => void
    button?: JSX.Element
}

export const TextField: React.FC<Props> = ({
    onEnter,
    button,
    ...rest
}) => {
    const ref = useRef<HTMLInputElement>(null)

    const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter' && onEnter && ref.current) {
            onEnter(ref.current.value, () => {
                if (ref.current) ref.current.value = ''
            })
        }
    }

    return (<>
        <input
            ref={ref}
            type="text"
            className={styles.input}
            onKeyDown={onKeyDown}
            {...rest}
        />
        {button ? button : <></>}
    </>)
}

import { useEffect, useRef, useState } from 'react';
import styles from './dropdown.module.scss';
import { DownArrow } from '../../svg/DownArrow';
import { useOnClickOutside } from 'usehooks-ts'

export interface DropdownProps {
    label?: string
    align?: 'right'
    initial?: string
    options: { id: string; displayValue: string }[],
    onSelect?: (id: string) => void
}

export const Dropdown = (props: DropdownProps) => {
    const isChanged = useRef(false);
    const [selectedId, setSelectedId] = useState(props.initial || props.options[0].id)
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useOnClickOutside(ref, () => {
        setTimeout(() => setIsOpen(false), 50)
    });

    useEffect(() => {
        const initial = props.initial || props.options[0].id;

        if (!isChanged.current && selectedId === initial) {
            return
        } else if (!isChanged.current && selectedId !== initial) {
            isChanged.current = true
        }

        if (props.onSelect) props.onSelect(selectedId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedId])

    const selectedOption = props.options.find(o => o.id === selectedId)

    if (!selectedOption) {
        throw new Error('Cannot get selected option with ID ' + selectedId)
    }

    const onSelect: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const id = (e.target as HTMLDivElement).dataset.value;

        if (!id) throw new Error('Cannot get selected option ID')

        setSelectedId(id);
        setIsOpen(false);
    }


    return <div className={styles.dropdown} data-is-open={isOpen} data-align={props.align || 'left'} ref={ref}>
        <div className={styles.dropdown_current} onClick={() => setIsOpen(true)}>
            {props.align === 'right' ? (<><DownArrow width='11px' height='11px' fill='var(--text)' />&nbsp;</>) : ''}
            {props.label ? props.label + ' ' : ''}{selectedOption.displayValue}
            {props.align !== 'right' ? (<>&nbsp;<DownArrow width='11px' height='11px' fill='var(--text)' /></>) : ''}
        </div>
        <div className={styles.dropdown_options_wrapper}>
            <div className={styles.dropdown_options}>
            {props.options.map(o => <div
                key={o.id}
                className={styles.dropdown_option}
                data-value={o.id}
                onClick={onSelect}
                >
                    {o.displayValue}
                </div>
            )}
            </div>
        </div>
    </div>
}

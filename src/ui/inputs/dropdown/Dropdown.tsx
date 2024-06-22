import { useEffect, useRef, useState } from 'react';
import styles from './dropdown.module.scss';
import { DownArrow } from '../../svg/DownArrow';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export interface DropdownProps {
    options: { id: string; displayValue: string }[],
    onSelect?: (id: string) => void
}

export const Dropdown = (props: DropdownProps) => {
    const [selectedId, setSelectedId] = useState(props.options[0].id)
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useOutsideClick([ref], () => {
        setIsOpen(false);
    });

    useEffect(() => {
        if (props.onSelect) props.onSelect(selectedId)
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

    return <div className={styles.dropdown} data-is-open={isOpen} ref={ref}>
        <div className={styles.dropdown_current} onClick={() => setIsOpen((prev) => !prev)}>
            {selectedOption.displayValue} <DownArrow width='11px' height='11px' fill='var(--text)' />
        </div>
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
}

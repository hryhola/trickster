import { useState } from 'react'
import { TextField } from '#ui/inputs'
import styles from './chat.module.scss'

export const Chat = () => {
    const [messages, setMessages] = useState<string[]>([])

    return (
        <div>
            <div className={styles['messages-wrapper']}>
                {messages.map((m) => (
                    <div>{m}</div>
                ))}
            </div>
            <TextField
                placeholder="message"
                onEnter={(message, clear) => {
                    setMessages((prev) => [message, ...prev])
                    clear()
                }}
            />
        </div>
    )
}

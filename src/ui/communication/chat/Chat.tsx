import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TextField } from '#ui/inputs'
import { ChatMessage, ChatMessageData } from '#ui/communication'
import styles from './chat.module.scss'

export const Chat = () => {
    const messagesDiv = useRef<HTMLDivElement>(null)
    const [messages, setMessages] = useState<ChatMessageData[]>([])

    useEffect(() => {
        if (messagesDiv.current) {
            messagesDiv.current.dataset.scroll = String(messagesDiv.current.scrollHeight > messagesDiv.current.clientHeight)
        }
    }, [messages.length])

    return (
        <div className={styles.chat}>
            <div ref={messagesDiv} className={styles.messages}>
                {messages.map(m => <ChatMessage key={m.id} {...m} />)}
            </div>
            <TextField
                placeholder="message"
                onEnter={(text, clear) => {
                    setMessages((prev) => [{
                        id: uuidv4(),
                        text,
                        author: 'SomeUser12',
                        timestamp: new Date()
                    }, ...prev])

                    clear()
                }}
            />
        </div>
    )
}

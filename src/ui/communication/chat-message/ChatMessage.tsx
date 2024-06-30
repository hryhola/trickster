import numeral from 'numeral'
import styles from './chat-message.module.scss'

export type ChatMessageData = {
    id: string
    text: string
    author: string
    timestamp: Date
}

type Props = ChatMessageData

export const ChatMessage: React.FC<Props> = (props) => {
    const hours = props.timestamp.getHours().toString().padStart(2, '0');
    const minutes = props.timestamp.getMinutes().toString().padStart(2, '0');
    const time = hours + ':' + minutes;

    return <div className={styles.message}>
        <span className={styles.time}>{time}</span>
        <span className={styles.author}>{props.author}</span>
        <span className={styles.text}>{props.text}</span>
    </div>
}

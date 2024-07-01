import { useLanguage } from "#features/index"
import { TextField } from "#ui/inputs"
import { HappyEmoji } from "#ui/svg/HappyEmoji"
import { ChatEmojisButton } from "../chat-emojis-button/ChatEmojisButton"
import text from './chat-input.text.json'

type Props = {
    onSend: (text: string) => void
}

export const ChatInput: React.FC<Props> = (props) => {
    const [language] = useLanguage()

    return <TextField
        placeholder={text.placeholder[language]}
        onEnter={(text, clear) => {
            props.onSend(text)

            clear()
        }}
        // button={<ChatEmojisButton />}
    />
}

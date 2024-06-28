import { useEffect } from "react"
import { Dropdown } from "../../inputs/dropdown/Dropdown"
import { useLocalStorage } from "usehooks-ts"
import { useLanguage } from "../language-changer/LanguageChanger"
import text from './theme-changer.text.json'

type Theme = 'light' | 'dark'

export const ThemeChanger = () => {
    const [ language ] = useLanguage()
    const [current, setCurrent] = useLocalStorage<Theme>('color', 'dark')

    useEffect(() => {
        document.documentElement.dataset.theme = current
    }, [current])

    return <Dropdown
        label={text.label[language]}
        align="right"
        options={[
            { id: 'dark', displayValue: text.dark[language] },
            { id: 'light', displayValue: text.light[language] }
        ]}
        initial={current}
        onSelect={(id) => setCurrent(id as Theme)}
    />
}
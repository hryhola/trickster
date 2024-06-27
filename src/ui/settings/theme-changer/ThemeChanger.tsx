import { useContext } from "react"
import { Dropdown } from "../../inputs/dropdown/Dropdown"
import { LanguageContext } from "../language-changer/LanguageContext"
import text from './theme-changer.text.json'

export const ThemeChanger = () => {
    const { language } = useContext(LanguageContext)

    return <Dropdown
        label={text.label[language]}
        align="right"
        options={[
            { id: 'dark', displayValue: text.dark[language] },
            { id: 'light', displayValue: text.light[language] }
        ]}
        onSelect={(id) => {
            document.documentElement.dataset.theme = id
        }}
    />
}
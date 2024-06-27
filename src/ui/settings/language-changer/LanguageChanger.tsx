import { useContext } from "react"
import { Dropdown } from "../../inputs/dropdown/Dropdown"
import { Language, LanguageContext } from "./LanguageContext"
import text from './language-changer.text.json'

export const LanguageChanger = () => {
    const { language, setLanguage } = useContext(LanguageContext)

    return <Dropdown
        label={text.label[language]}
        align="right"
        options={[
            { id: 'eng', displayValue: text.eng[language] },
            { id: 'ukr', displayValue: text.ukr[language] }
        ]}
        onSelect={(id) => {
            setLanguage(id as Language)
        }}
    />
}
import { Dropdown } from "../../../ui/inputs/dropdown/Dropdown"
import { useLocalStorage } from "usehooks-ts"
import text from './language-changer.text.json'

type Language = 'eng' | 'ukr'

export const useLanguage = () => {
    const [lang] = useLocalStorage<Language>('lang', 'eng')

    return [lang] as [Language]
}

export const LanguageChanger = () => {
    const [language, setLanguage ] = useLocalStorage<Language>('lang', 'eng')

    return <Dropdown
        label={text.label[language]}
        align="right"
        options={[
            { id: 'eng', displayValue: text.eng[language] },
            { id: 'ukr', displayValue: text.ukr[language] }
        ]}
        onSelect={(id) => setLanguage(id as Language)}
    />
}
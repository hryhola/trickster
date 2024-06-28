import { useEffect } from "react"
import { useLocalStorage } from "usehooks-ts"
import WebFont from 'webfontloader'
import { Dropdown } from "../../inputs/dropdown/Dropdown"
import text from './font-change.text.json'
import { useLanguage } from "../language-changer/LanguageChanger"

type FontType = 'normal' | 'silly' | 'retro' | 'fancy' | 'orthodox'

const MAPPING: Record<FontType, string> = {
    normal: 'Inter',
    retro: 'Handjet',
    silly: 'Shantell Sans',
    fancy: 'Gabriela',
    orthodox: 'Cyrillic Old a'
}

export const FontChanger = () => {
    const [ language ] = useLanguage()
    const [current, setCurrent] = useLocalStorage<FontType>('font', 'normal')

    function load(font: FontType) {
        const fontName= MAPPING[font];

        if (font === 'orthodox') {
            WebFont.load({
                custom: {
                    families: [font],
                    urls: ['/trickster/fonts/fonts.css']
                  }
            });
        } else {
            WebFont.load({
                google: {
                    families: [fontName]
                }
            });
        }

        document.documentElement.style.fontFamily = fontName;

        if (font === 'retro') {
            document.documentElement.style.fontSize = '1.3rem';
        } else {
            document.documentElement.style.fontSize = '';
        }
    }

    useEffect(() => {
        load(current)
    }, [current]);

    return <Dropdown
        label={text.label[language]}
        align="right"
        options={[
            { id: 'silly', displayValue: text.silly[language] },
            { id: 'retro', displayValue: text.retro[language] },
            { id: 'fancy', displayValue: text.fancy[language] },
            { id: 'orthodox', displayValue: text.orthodox[language] },
            { id: 'normal', displayValue: text.normal[language] },
        ]}
        initial={current}
        onSelect={(id) =>  setCurrent(() => id as FontType)}
    />
}
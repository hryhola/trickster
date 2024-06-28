import { useContext, useEffect, useState } from "react"
import { Dropdown } from "../../inputs/dropdown/Dropdown"
import WebFont from 'webfontloader'
import text from './font-change.text.json'
import { LanguageContext } from "../language-changer/LanguageContext"

type FontType = 'normal' | 'silly' | 'retro' | 'fancy' | 'orthodox'

const MAPPING: Record<FontType, string> = {
    normal: 'Inter',
    retro: 'Handjet',
    silly: 'Shantell Sans',
    fancy: 'Gabriela',
    orthodox: 'Cyrillic Old a'
}

export const FontChanger = () => {
    const { language } = useContext(LanguageContext)
    const [current, setCurrent] = useState<FontType>('normal');

    useEffect(() => {
        const fontName= MAPPING[current];

        if (current === 'orthodox') {
            WebFont.load({
                custom: {
                    families: [fontName],
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

        if (current === 'retro') {
            document.documentElement.style.fontSize = '1.3rem';
        } else {
            document.documentElement.style.fontSize = '';
        }
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
        onSelect={(id) => {
            setCurrent(id as FontType);
        }}
    />
}
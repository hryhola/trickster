import { useEffect, useState } from "react"
import { Dropdown } from "../../inputs/dropdown/Dropdown"
import WebFont from 'webfontloader'

type FontType = 'normal' | 'silly' | 'retro' | 'fancy' | 'orthodox'

const MAPPING: Record<FontType, string> = {
    normal: 'Inter',
    retro: 'Handjet',
    silly: 'Balsamiq Sans',
    fancy: 'Gabriela',
    orthodox: 'UstavHand'
}

export const FontChanger = () => {
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

        if (current === 'orthodox') {
            document.documentElement.style.lineHeight = '1.6em'
        } else {
            document.documentElement.style.lineHeight = ''
        }
    }, [current]);

    return <Dropdown
        label="Font:"
        align="right"
        options={[
            { id: 'silly', displayValue: 'Silly' },
            { id: 'normal', displayValue: 'Normal' },
            { id: 'retro', displayValue: 'Retro' },
            { id: 'fancy', displayValue: 'Fancy' },
            { id: 'orthodox', displayValue: 'Orthodox' }
        ]}
        onSelect={(id) => {
            setCurrent(id as FontType);
        }}
    />
}
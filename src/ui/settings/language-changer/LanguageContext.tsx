import { createContext } from "react";

export type Language = 'eng' | 'ukr'

export const LanguageContext = createContext({
    language: 'eng' as Language,
    setLanguage: (() => { throw new Error('Too early!') }) as (value: Language) => void
});

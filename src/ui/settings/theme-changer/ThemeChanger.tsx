import { Dropdown } from "../../inputs/dropdown/Dropdown"

export const ThemeChanger = () => <Dropdown
    options={[
        { id: 'dark', displayValue: 'Dark' },
        { id: 'light', displayValue: 'Light' }
    ]}
    onSelect={(id) => {
        document.documentElement.dataset.theme = id
    }}
/>
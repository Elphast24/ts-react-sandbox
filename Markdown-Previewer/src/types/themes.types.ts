export type theme = 'softlight' | 'oled-dark' | 'retro-neon'

export interface themeStyles{
    background: string,
    surface: string,
    text: string,
    textSecondary: string,
    border: string,
    accent: string,
    accentHover: string,
    codeBackground: string,
    codeText: string,
    previewBackground: string,
    editorBackground: string
}

export interface ThemeContextType{
    currentTheme: theme,
    styles: themeStyles,
    toggleTheme: (themeId : theme) => void
}
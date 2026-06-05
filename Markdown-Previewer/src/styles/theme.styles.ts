// styles/themes.ts
import { type theme, type themeStyles } from '../types/themes.types';

export const THEMES: Record<string, theme> = {
  SOFT_LIGHT: 'softlight',
  OLED_DARK: 'oled-dark',
  RETRO_NEON: 'retro-neon',
} as const;

export const themeStyle: Record<theme, themeStyles> = {
  'softlight': {
    background: '#f8f9fa',
    surface: '#ffffff',
    text: '#212529',
    textSecondary: '#6c757d',
    border: '#dee2e6',
    accent: '#0d6efd',
    accentHover: '#0b5ed7',
    codeBackground: '#f1f3f5',
    codeText: '#d63384',
    previewBackground: '#ffffff',
    editorBackground: '#ffffff',
  },
  'oled-dark': {
    background: '#000000',
    surface: '#0a0a0a',
    text: '#e0e0e0',
    textSecondary: '#808080',
    border: '#1a1a1a',
    accent: '#00ff00',
    accentHover: '#00cc00',
    codeBackground: '#0f0f0f',
    codeText: '#00ff00',
    previewBackground: '#000000',
    editorBackground: '#0a0a0a',
  },
  'retro-neon': {
    background: '#1a0b2e',
    surface: '#2d1b4e',
    text: '#ff71ce',
    textSecondary: '#b967ff',
    border: '#01cdfe',
    accent: '#05ffa1',
    accentHover: '#00e68a',
    codeBackground: '#0d0520',
    codeText: '#ff71ce',
    previewBackground: '#2d1b4e',
    editorBackground: '#1a0b2e',
  },
};
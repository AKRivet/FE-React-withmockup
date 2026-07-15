import { createTheme } from '@mantine/core'
import type { MantineColorsTuple } from '@mantine/core'

const brandColors: MantineColorsTuple = [
  '#F5F3FF',
  '#EDE9FE',
  '#DDD6FE',
  '#C4B5FD',
  '#A78BFA',
  '#7C3AED',
  '#6D28D9',
  '#5B21B6',
  '#4C1D95',
  '#312E81',
]

export const theme = createTheme({
  primaryColor: 'brand',
  primaryShade: 6,
  colors: {
    brand: brandColors,
  },
  fontFamily: 'Inter, system-ui, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  defaultRadius: 'md',
  radius: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  shadows: {
    sm: '0px 1px 3px rgba(0,0,0,0.08)',
    md: '0px 4px 12px rgba(0,0,0,0.12)',
    lg: '0px 12px 30px rgba(0,0,0,0.16)',
    xl: '0px 24px 48px rgba(0,0,0,0.20)',
  },
  components: {
    Button: {
      defaultProps: { radius: 'lg' },
      styles: {
        root: {
          fontWeight: 600,
        },
      },
    },
    TextInput: {
      defaultProps: { radius: 'lg' },
      styles: {
        input: { height: '48px' },
      },
    },
    PasswordInput: {
      defaultProps: { radius: 'lg' },
      styles: {
        input: { height: '48px' },
      },
    },
    Card: {
      defaultProps: { radius: 'xl' },
    },
  },
})

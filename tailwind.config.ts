import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [],
  theme: {
    screens: {
      xs: "375px",    // 모바일 소
      sm: "425px",    // 모바일 대
      md: "768px",    // 태블릿
      lg: "1024px",   // 노트북
      xl: "1440px",   // 대형 노트북
      '4k': "2560px" // 4K
    },
    extend: {},
  },
  plugins: [],
} satisfies Config


import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary-background': 'rgb(22, 22, 20)',
      'secondary-background': 'rgba(47, 47, 42, 0)',
      'ml-white': 'rgb(216, 216, 215)',
      'ml-white-hover': 'rgba(216, 216, 215, 0.5)',

      'line-1': 'rgb(122, 180, 228)',
      'line-2': 'rgb(244, 200, 28)',
      'intensity-bar': 'rgb(113, 209, 134)',

      eighteen: 'rgba(216, 216, 215, 0.109)',
      one: 'rgb(74, 74, 66)',
      two: 'rgb(188, 184, 170)',
      eight: 'rgb(198, 194, 180)',
      three: 'rgb(226, 218, 185)',
      seven: 'rgb(178, 172, 146)',
      four: 'rgb(198, 194, 180)',
      seventeen: 'rgb(194, 190, 176)',
      nine: 'rgb(192, 188, 174)',
      five: 'rgb(167, 163, 151)',
      'five-hover': 'rgba(167, 163, 151, 0.5)',
      sixteen: 'rgb(167, 158, 152)',
      eleven: 'rgb(76, 76, 68)',
      six: 'rgb(92, 91, 83)',
      twelve: 'rgba(0, 0, 0, 0.3)',
      fourteen: 'rgba(0, 0, 0, 0.5)',
      thirteen: 'rgb(92, 91, 83)',
      fifteen: 'rgb(71, 68, 59)',
      nineteen: 'rgb(199, 195, 181)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
}
export default config

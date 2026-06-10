import type { Config } from 'tailwindcss'

const config: Config = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add this fontFamily block!
      fontFamily: { sans: ['var(--font-nunito)', 'sans-serif'] },
      colors: {
        farmGreen: '#2e7d32', 
        farmLight: '#e8f5e9',
      },
    },
  },
  plugins: [],
}
export default config
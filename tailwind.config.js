/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                // Override with RGB format for html2canvas compatibility
                slate: {
                    50: 'rgb(248 250 252)',
                    100: 'rgb(241 245 249)',
                    200: 'rgb(226 232 240)',
                    300: 'rgb(203 213 225)',
                    400: 'rgb(148 163 184)',
                    500: 'rgb(100 116 139)',
                    600: 'rgb(71 85 105)',
                    700: 'rgb(51 65 85)',
                    800: 'rgb(30 41 59)',
                    900: 'rgb(15 23 42)',
                },
                blue: {
                    50: 'rgb(239 246 255)',
                    100: 'rgb(219 234 254)',
                    400: 'rgb(96 165 250)',
                    500: 'rgb(59 130 246)',
                    600: 'rgb(37 99 235)',
                    800: 'rgb(30 64 175)',
                    900: 'rgb(30 58 138)',
                },
            },
        },
    },
    plugins: [],
}

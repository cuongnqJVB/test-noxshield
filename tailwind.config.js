/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    important: true,
    theme: {
        screens: {
            'sm': '576px',
            // => @media (min-width: 576px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '992px',
            // => @media (min-width: 992px) { ... }

            'xl': '1200px',
            // => @media (min-width: 1200px) { ... }

            '2xl': '1440px',
            // => @media (min-width: 1400px) { ... }

            '3xl': '1600px',
            // => @media (min-width: 1600px) { ... }
        },
        fontSize: {
            "fs-9": ['9px', '12px'],
            "fs-10": ['10px', '12px'],
            "fs-12": ['12px', '16px'],
            'fs-13': ['13px', '16px'],
            'fs-14': ['14px', '20px'],
            'fs-15': ['15px', '22px'],
            'fs-16': ['16px', '24px'],
            'fs-16.5': ['16.5px', '20px'],
            'fs-17': ['17px', '26px'],
            'fs-18': ['18px', '28px'],
            'fs-19': ['19px', '30px'],
            'fs-20': ['20px', '28px'],
            'fs-21': ['21px', '26px'],
            'fs-22': ['22px', '30px'],
            'fs-24': ['24px', '29px'],
            'fs-26': ['26px', '32px'],
            'fs-27': ['27px', '33px'],
            'fs-28': ['28px', '34px'],
            'fs-32': ['32px', '39px'],
            'fs-36': ['36px', '44px'],
            'fs-40': ['40px', '49px'],
            'fs-42': ['42px', '51px'],
            'fs-50': ['50px', '63px'],
            'fs-60': ['60px', '73px'],
            'fs-63': ['63px', '77px'],
            'fs-186': ['186px', '190px'],
            ...defaultTheme.fontSize
        },
        extend: {},
    },
    plugins: [],
}

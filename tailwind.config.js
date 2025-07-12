/** @type {import('tailwindcss').Config} */
export default {
    content: ['./node_modules/flowbite/**/*.js', "./index.html", "./apartment/apartment.html", "./services/services.html", "./furniture/furniture.html", "./services-two/services-two.html/furniture.html", "./office/office.html", "./calculator/calculator.html"],

    theme: {
        extend: {
            colors: {
                'home': '#52AE32',
                'black-20': '#202020',
                'black-80': '#808080',
                'black-71': '#717171',
                'gold': '#FFE684',

            },
            boxShadow: {
                'custom-card': '0px 0px 25px 5px #0000001A',
                'custom-card-25': '0px 0px 20px 5px #0000001A',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [
        // require('flowbite/plugin')
    ],
}
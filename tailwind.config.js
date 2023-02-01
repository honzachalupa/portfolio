/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    plugins: [require("flowbite/plugin")],
    theme: {
        extend: {
            boxShadow: {
                custom: "0 0 20px 0 rgba(0, 0, 0, 0.4)",
            },
        },
    },
};

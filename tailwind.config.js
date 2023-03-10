/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                custom: "0 0 20px 0 rgba(0, 0, 0, 0.4)",
            },
        },
    },
};

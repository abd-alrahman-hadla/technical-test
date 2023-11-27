module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            container: {
                padding: {
                    DEFAULT: '6%',
                    sm: '8%',
                    md: '8%',
                    lg: 'auto',
                    xl: 'auto',
                    '2xl': 'auto',
                },
                screens: {
                    DEFAULT: '100%',
                    sm: '100%',
                    lg: '100%',
                    xl: '100%',
                },
            },
            colors: {},
            boxShadow: {
                '4xl': '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
            }
        },
        screens: {
            'sm': '576px',
            'md': '991px',
            'lg': '1440px',
        },
        fontSize: {
            sm: '12px',
            md: '16px',
            lg: '24px',
            xl: '48px',
            xxl: '76px',
            "2xl": '128px',
        },
    },
    plugins: [],
};
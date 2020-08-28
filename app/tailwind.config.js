module.exports = {
    theme: {
        fontFamily: {
            cinzel: ['Cinzel', 'serif'],
            playfair: ['Playfair Display', 'serif'],
            poppins: ['Poppins', 'sans-serif']
        },
        extend: {
            inset: {
                '1/2': '50%',
                '1': '0.25rem;',
                '2': '0.5rem;',
                '3': '0.75rem;',
                '4': '1rem;',
                '5': '1.25rem;',
                '6': '1.5rem;',
                '8': '2rem;',
                '10': '2.5rem;',
                '12': '3rem;',
                '16': '4rem;',
                '20': '5rem;',
                '24': '6rem;',
                '32': '8rem;',
                '40': '10rem;',
                '48': '12rem;',
                '56': '14rem;',
                '64': '16rem;',
            },
            colors: {
                mmt: {
                    50: '#FEFEFE',
                    100: '#FDFDFD',
                    200: '#FAF9F9',
                    300: '#F6F6F5',
                    400: '#F0EFEE',
                    500: '#E9E8E6',
                    600: '#D2D1CF',
                    700: '#8C8B8A',
                    800: '#696868',
                    900: '#464645' 
                }
            },
        },
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
};

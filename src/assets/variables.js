// these variables could be implemented as a styled-components theme

const variables = {
  media: {
    sm: '(max-width: 500px)',
    md: '(max-width: 840px)',
    lg: '(max-width: 1250)',
    xlg: '(min-width: 1250px)',
  },

  transition: (properties = 'all', time = '0.2') => `transition: ${properties} ${time}s`,

  colors: {
    black: '#333',
    darkgrey: '#404d5b',
    medgrey: '#868D91',
    lightgrey: '#ccc',
    almostwhite: '#c9cdd0',

    brightblue: '#4495db',
    lightblue: '#78c1ff',
  },
};

export default variables;

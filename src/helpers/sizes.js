// eslint-disable-next-line import/no-anonymous-default-export
export default {
  up() {},
  down(size) {
    const sizes = {
      xxs: '460px',
      xs: '576px',
      // sm: '775px',
      sm: '790px',
      md: '1050px',
      lg: '1280px',
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};

// lg: '1200px',
// md: '992px', md & bellow made scrollable..
// sm: '768px',
// xs: '576px',

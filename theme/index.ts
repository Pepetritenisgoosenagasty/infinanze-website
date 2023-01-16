export const theme: any = {
  globalStyles: (theme: any) => ({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },

    body: {
      ...theme.fn.fontStyles(),
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      lineHeight: theme.lineHeight,
    },

    '.my-prefix-Carousel-indicators': {
      justifyContent: 'start !important',
      bottom: '38px !important',

      '.my-prefix-Carousel-indicator': {
        width: '61px !important',
      },
    },

    '.otp-input': {
      input: {
        border: '1px solid #CED4DA',
        width: '65px !important',
        height: '75px !important',
        borderRadius: 8,
        fontSize: '30px',
        fontWeight: '700',
        marginRight: '37px !important',
      },
    },

    '.my-prefix-Image-image': {
      // height: '600px !important',
      // objectFit: 'fill !important',
      backgroundSize: 'cover !important',
      backgroundRepeat: 'no-repeat !important',
      backgroundPosition: 'center !important',
    },

    ".my-prefix-4ny9bc": {
      "position": "absolute",
      "Zindex": 1,
      "left": "50px !important",
      right: "50px !important",
      top: "calc(50% - 140px) !important",
    },

    ".my-prefix-2yup0d": {
      border: "none !important",
      minWidth: "40px !important",
    "minHeight": "100px !important",
    borderRadius: "0 !important",
    color: "#fff !important",
    backgroundColor: "#D9D9D91A !important"
    },

    '.students': {
      table: {
        'thead tr th': {
          color: '#001844',
          borderBottom: '3px solid #CED4DA',
          // fontSize: '12px',
        },
        'tbody tr td': {
          color: '#001844',
        },
      },
    },

  }),
};

export const theme: any = {
  globalStyles: (theme: any) => ({
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },

    body: {
      ...theme.fn.fontStyles(),
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      lineHeight: theme.lineHeight,
    },

    ".my-prefix-Carousel-indicators": {
      justifyContent: "start !important",
      bottom: "38px !important",

      ".my-prefix-Carousel-indicator": {
        width: "61px !important",
      },
    },

    ".otp-input": {
      input: {
        border: "1px solid #CED4DA",
        width: "65px !important",
        height: "75px !important",
        borderRadius: 8,
        fontSize: "30px",
        fontWeight: "700",
        marginRight: "37px !important",
      },
    },

    '.home': {
      ".my-prefix-Image-image": {
        // height: '600px !important',
        // objectFit: 'fill !important',
        backgroundSize: "cover !important",
        backgroundRepeat: "no-repeat !important",
        backgroundPosition: "center !important",
      },
  
      ".my-prefix-4ny9bc": {
        position: "absolute",
        Zindex: 1,
        left: "50px !important",
        right: "50px !important",
        top: "calc(50% - 140px) !important",
        paddingLeft: "100px !important",
        paddingRight: "100px !important",
      },
  
      ".my-prefix-2yup0d": {
        border: "none !important",
        minWidth: "40px !important",
        minHeight: "100px !important",
        borderRadius: "0 !important",
        color: "#fff !important",
        backgroundColor: "#D9D9D91A !important",
      },
    },

    '.process': {
      ".my-prefix-4ny9bc": {
        left: '-100px !important',
        right: '-100px !important',
        top: 'calc(61% - 13px) !important',
      },
      ".my-prefix-1vplgrr": {
        background: 'transparent !important',
        border: 'none !important',

        'svg': {
          color: 'white !important',
          width: '40px !important',
          height: '40px !important'
        }
      }
    },

    ".students": {
      table: {
        "thead tr th": {
          color: "#001844",
          borderBottom: "3px solid #CED4DA",
          // fontSize: '12px',
        },
        "tbody tr td": {
          color: "#001844",
        },
      },
    },

    ".service-card": {
      boxShadow: "0px 4px 32px rgba(0, 0, 0, 0.1)",
    },
    
    ".consult-card": {
      boxShadow: '0px 4px 34px rgba(0, 0, 0, 0.08)',
      borderRadius: '5px'
    },

    ".review-card": {
      background: "#FFFFFF",
      boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.04)",
      borderRadius: "10px",
    },

    ".my-prefix-p729w7": {
      width: "13.79px !important",
      height: "13.79px !important",
      background: "#D9D9D9 !important",
    },

    ".my-prefix-Carousel-indicators .my-prefix-Carousel-indicator": {
      width: "13.79px !important",
    },

    ".my-prefix-p729w7[data-active]": {
      background: "#0E7CFF !important",
    },

    ".my-prefix-oqtyjo": {
      left: "50% !important",
    },

    ".contact": {
      button: {
        background:
          "linear-gradient(179.08deg, #0E7CFF -2.64%, #4059EC 27.18%, #9320CC 102.93%)",
        borderRadius: "6px",
        width: 130,
        "&:hover": {
          opacity: 0.8,
        },
      },
    },

    ".my-prefix-v4lv9f": {
      borderBottom: "0 !important",

      ".my-prefix-Accordion-control": {
        boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.04)",
        borderRadius: "10px !important",
        backgroundColor: "#FFF !important",
        marginBlock: "15px !important",
        padding: "25px !important",
      },

      ".my-prefix-Accordion-content": {
        boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.04)",
        borderRadius: "10px !important",
        backgroundColor: "#FFF !important",
        padding: "30px !important",
      },
    },

    ".nav-btn": {
      button: {
        background: "#F4ECEC",
        color: "#052D92",
        borderRadius: "6px",
        width: 130,
        "&:hover": {
          background: "#052D92",
          color: "#fff",
        },
      },
    },
    ".mxcontainer": {
      maxWidth: '1320px',
      margin: '0 auto'
    },

    ".choice-card": {
      boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.1)',
      background: "#fff",
      
    },

    '.about': {
      '.my-prefix-16tukyl': {
        border: '0px !important',
        boxShadow: '0px 4px 34px rgba(0, 0, 0, 0.08)',
        fontSize: "16px !important",
      },
      '.my-prefix-1c4piau': {
        right: '60px !important',

        'button': {
          background: '#1974FB !important'
        }
      }
    },
    '.contact-left': {
      background: 'linear-gradient(179.08deg, #0E7CFF -2.64%, #4059EC 64.81%, #9320CC 119.93%)'
    },
    '.ux-card': {
      boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.1)',
borderRadius: '5px'
    },

    '.main-card': {
      
      "&:hover .overlay": {
       bottom: '0px',
       height: '100%',
       transition: 'bottom 0.3s ease-in',
       'p': {
        opacity: 1
       }
      }
    }
  }),
};

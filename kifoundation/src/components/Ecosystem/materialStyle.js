const styles = {
    root: {
        // paddingBottom: 60
    },
    button: {
        color: "#fff",
        outline: "none",
        whiteSpace: 'nowrap',
        textTransform: 'initial',
        padding: '5px 15px',
        fontSize: '1rem',
        fontWeight: 'normal',
        '&:focus': {
          outline: "none"
        },
        backgroundColor: "#043bea",
        // margin: "0 1.5rem",
        position: "relative",
        borderRadius: 0,
        minWidth: 250,
        '&:hover': {
          backgroundColor: "#043bea",
          color: "#fff"
        }
    },
    mailTo: {
        '&:hover': {
          textDecoration: "none"
        }
    },
    subtitle: {
        color: "#3b426c",
        fontWeight: 'normal',
        marginBottom: '1rem'
    },
    title: {
        color: "#3b426c",
        position: "relative",
        marginBottom: '0.6rem'
    },
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
        marginBottom: '2.5rem',
        marginTop: '1rem'
      },
      tabsIndicator: {
        backgroundColor: '#043bea',
      },
      tabRoot: {
        textTransform: 'initial',
        width: '33.333%',
        // marginRight: theme.spacing.unit * 4,
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          color: '#043bea',
          opacity: 1,
        },
        '&$tabSelected': {
          color: '#043bea',
        },
        '&:focus': {
          color: '#043bea',
        },
      },
      tabSelected: {},
      typography: {
        // padding: theme.spacing.unit * 3,
      },
}

export default styles;
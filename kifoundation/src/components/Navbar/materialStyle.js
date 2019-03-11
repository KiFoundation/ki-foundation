const styles = {
    root: {
      flexGrow: 1
    },
    growRight: {
      flexGrow: 1,
      textAlign: "right"
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    navbar: {
      background: "transparent",
      border: 0,
      boxShadow: "none",
      minHeight: 72,
      paddingTop: '0.5rem'
    },
    link: {
      color: "#3b426c",
      margin: "0 1.5rem 0 3rem",
      position: "relative",
      // textTransform: 'uppercase',
      fontSize: 14,
      background: 'none',
      border: 'none',
      '&:hover': {
        backgroundColor: "inherit",
        textDecoration: 'none',
        fontWeight: 600,
        color: '#3b426c'
      },
      '&:before': {
        content: "'__'",
        fontSize: 14,
        fontWeight: 600,
        position: 'absolute',
        left: -21,
        color: 'rgb(4, 59, 234)',
        top: -4
      }
    },
    menuIcon: {
      cursor: 'pointer',
      marginRight: '7px'
    },
    fixedMenu: {
      position: 'absolute',
      top: 0,
      left: 0,
      background: '#fff',
      zIndex: 1000,
      width: '100%',
      height: '100%',
      paddingTop: 72
    },
    fixedMenuContent: {
    }
  };

  export default styles;
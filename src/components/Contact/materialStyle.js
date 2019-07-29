const styles = {
    root: {
        // padding: "100px 0 0 0"
    },
    button: {
        borderRadius: 5,
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
        color: "#fff",
        outline: "none",
        cursor: 'pointer',
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
        color: "#000000",
        marginBottom: '1.5rem',
        fontWeight: 300
    },
    headerTitleText: {
      color: "#000000",
      marginBottom: "2.5rem",
      fontWeight: 300
    },
}

export default styles;
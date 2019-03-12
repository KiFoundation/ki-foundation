const styles = {
    root: {
        // padding: "100px 0 0 0"
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
        marginBottom: '1.5rem',
        fontWeight: 300
    },
    title: {
        color: "#3b426c",
        width: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: "relative",
        marginBottom: '1.5rem'
    }
}

export default styles;
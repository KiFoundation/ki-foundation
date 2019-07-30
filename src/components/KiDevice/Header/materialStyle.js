const styles = {
    card: {
        maxWidth: 250,
        cursor: 'pointer',
        margin: "0 auto",
        backgroundColor: "#f8fbfa",
        // borderRadius: 0,
        boxShadow: "0 9px 50px rgba(0,0,0,0.1)",
        transition: "all 0.1s ease-out",
        '&:hover': {
            boxShadow: "0 9px 50px rgba(0,0,0,0.2)",
        },
        // '&:hover .card-image-wrapper': {
            // background: 'linear-gradient(135deg, #043bea 0%, #043bea 100%)',
            // background: '#043bea',
            // background: 'radial-gradient(#29abe2, #043bea)',
            // transition: "all 0.5s ease-out"
        // },
        '&:hover .card-image': {
            top: -40
        },
        '&:hover .card-button':{
            color: '#043bea'
        },
        '&:hover .ki-device-card': {
            top: '-70px !important'
        },
        '&:hover .ki-blockchain-card': {
            top: '-85px !important'
        },
        '&:hover .ki-ecosystem-card': {
            top: '-75px !important'
        }
    },
    cardContentRoot: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0
    },
    cardImageWrapper: {
        height: 160,
        // background: 'cornflowerblue',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    primaryColor: {
        color: '#000000'
    },
    cardButton: {
        color: "#000000",
        // paddingLeft: 0,
        background: 'none',
        border: 'none',
        fontSize: '12px',
        fontWeight: 500,
        textTransform: 'uppercase',
        cursor: 'pointer',
        padding: '0 15px'
    },
    cardButtonArrow: {
        height: '18px',
        opacity: 0.2,
        marginLeft: '0.2rem'
    },
    cardTitle: {
        color: "#000000",
        padding: '15px 15px 0 15px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    link: {
        textDecoration: 'none !important',
        backgroundColor: 'transparent !important'
    },
    headerTitle: {
        // color: "#000000",
        width: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: "relative",
        fontWeight: 600
    },
    headerTitleText: {
        color: "#000000",
        marginBottom: "2.5rem",
        fontWeight: 300
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
};

export default styles;
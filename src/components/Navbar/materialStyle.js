const styles = {
  root: {
    flexGrow: 1,
    position: 'fixed',
    width: '100%',
    top: 0,
    backgroundColor: '#ffffff',
    zIndex: 1000,
    minHeight: 72
  },
  growRight: {
    flexGrow: 1,
    textAlign: "right",
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'flex-end'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navbar: {
    background: "transparent",
    border: 0,
    boxShadow: "none",
    minHeight: 72
  },
  toolbar: {
    minHeight: 72,
    padding: 0,
    marginRight: 15,
    marginLeft: 15
  },
  menuIcon: {
    cursor: 'pointer'
  },
  fixedMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    background: '#fff',
    zIndex: 1000,
    width: '100%',
    height: '100vh',
    paddingTop: 72
  },
  fixedMenuContent: {
  }
};

export default styles;
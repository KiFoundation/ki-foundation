const styles = {
    card: {
    //   maxWidth: 345,
      margin: '1.2em auto',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
      '&:hover': {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
      },
    },
    media: {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: 'cover',
    },
};

export default styles;
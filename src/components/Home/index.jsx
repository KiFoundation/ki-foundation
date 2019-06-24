// Services
import React from 'react';

// Components
import Header from './Header';
import Partners from './Partners';
import Learn from './Learn';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Learn />
        <Partners />
      </div>
    );
  }
}

export default Home;
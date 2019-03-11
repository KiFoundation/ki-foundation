// Services
import React from 'react';

// Components
import Header from './Header';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Home;
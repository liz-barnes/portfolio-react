// import React from 'react';
// import './App.scss';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
// import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import MyNavbar from '../components/Navbar';
import Routes from '../helpers/routes';

// fbConnection();

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <MyNavbar />
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;

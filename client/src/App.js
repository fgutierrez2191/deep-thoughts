import React from 'react';
//reactr component used to provide data to all the other components
import { ApolloProvider } from '@apollo/react-hooks';
//used to get data from apolloprovider
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Home from './pages/Home';
//establishes a new connection to the graph ql server using apollo
const client = new ApolloClient({
  uri: '/graphql'
})
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile/:username?" component={Profile} />
            <Route exact path="/thought/:id" component={SingleThought} />
            <Route component={NoMatch} />
            </switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );

}

export default App;

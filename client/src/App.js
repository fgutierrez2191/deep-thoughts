import React from 'react';
//reactr component used to provide data to all the other components
import { ApolloProvider } from '@apollo/react-hooks';
//used to get data from apolloprovider
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
//establishes a new connection to the graph ql server using apollo
const client = new ApolloClient({
  uri: '/graphql'
})
function App() {
  return (
    <ApolloProvider client={client}>
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container'>
        <Home />
      </div>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;

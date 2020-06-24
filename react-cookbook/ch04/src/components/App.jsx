import React from 'react';
import Helmet from 'react-helmet';
import { element } from 'prop-types';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
import './App.css';

const App = props => (
  <div className="App">
    <Helmet>
      <title>Routing</title>
      <meta name="title" content="Routing" />
      <meta name="description" content="This recipe talks about React Helmet" />
    </Helmet>
    <Header title="Routing" />

    <Content>
      {props.children}
    </Content>

    <Footer />
  </div>
);

App.propTypes = {
  children: element
};

export default App;

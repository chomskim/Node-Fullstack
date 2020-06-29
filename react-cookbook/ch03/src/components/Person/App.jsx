import React from 'react';
import Popup from 'react-popup';
import Helmet from 'react-helmet';
import Person from './Person';
import Header from '../../shared/components/layout/Header';
import Content from '../../shared/components/layout/Content';
import Footer from '../../shared/components/layout/Footer';
import './App.css';
import './Popup.css';

const App = () => (
  <div className="App">
    <Helmet>
      <title>Person Information</title>
      <meta name="title" content="Person Information" />
      <meta name="description" content="This recipe talks about React Helmet" />
    </Helmet>
    <Header title="Personal Information" />

    <Content>
      <Person />
    </Content>

    <Footer />
    <Popup />
  </div>
);

export default App;

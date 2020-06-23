import React from 'react';
import './App.css';
import Todo from './Todo/Todo';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header title="Todo List" />

      <Content>
        <Todo />
      </Content>

      <Footer />
    </div>
  );
}

export default App;

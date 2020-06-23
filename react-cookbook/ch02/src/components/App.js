import React from 'react';
import './App.css';
//import Todo from './Todo/Todo';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';
//import Timer from './Pomodoro/Timer';
import Coins from './Coins/Coins';

function App() {
  return (
    <div className="App">
      <Header title="Pomodoro Timer" />

      <Content>
      <Coins />
      </Content>

      <Footer />
    </div>
  );
}

export default App;

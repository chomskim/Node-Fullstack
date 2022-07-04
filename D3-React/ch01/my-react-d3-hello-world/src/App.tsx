import React from 'react'
import './App.scss'
import HelloD3 from './components/HelloD3/HelloD3'
import JSXCanvas from './components/JSXCanvas/JSXCanvas'
import HelloSVG from './components/HelloSVG/HelloSVG'
import HelloJSXData from './components/HelloJSXData/HelloJSXData'
import HelloD3Data from './components/HelloD3Data/HelloD3Data'
import SimpleChart from './components/SimpleChart/SimpleChart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <HelloD3 />
        <JSXCanvas />
        <HelloSVG />
        <HelloJSXData data={['one', 'two', 'three', 'four']} />
        <HelloD3Data data={['one', 'two', 'three', 'four']} /> */}
        <SimpleChart />
      </header>
    </div>
  )
}

export default App

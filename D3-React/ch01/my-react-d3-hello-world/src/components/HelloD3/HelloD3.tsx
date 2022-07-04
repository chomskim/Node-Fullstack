/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/HelloD3/HelloD3.tsx

Created with;
$ npx generate-react-cli component HelloD3 --type=d3

*/

import React, { useState, useEffect, RefObject } from 'react'
import './HelloD3.scss'
import * as d3 from 'd3' // yarn add d3 @types/d3

const HelloD3 = () /* or ( props : IHelloD3Props ) */ => {
  const [myState, setMyState] = useState<Boolean>(true)
  const ref: RefObject<HTMLDivElement> = React.createRef()

  useEffect(() => {
    draw()
  })

  const draw = () => {
    d3.select(ref.current).append('p').text('Hello World')
    d3.select('svg').append('g').attr('transform', 'translate(250, 0)').append('rect').attr('width', 500).attr('height', 500).attr('fill', 'tomato')
  }

  return (
    <div className="HelloD3" ref={ref}>
      <svg width="500" height="500">
        <g transform="translate(0, 0)">
          <rect width="500" height="500" fill="green" />
        </g>
      </svg>
    </div>
  )
}

/*
interface IHelloD3Props {
  // TODO
}
*/

export default HelloD3

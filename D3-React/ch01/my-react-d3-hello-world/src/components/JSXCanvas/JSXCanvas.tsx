/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/JSXCanvas/JSXCanvas.tsx

Created with;
$ npx generate-react-cli component JSXCanvas --type=d3

*/

import React, { useRef, useEffect, RefObject } from 'react'
import './JSXCanvas.scss'
//import * as d3 from 'd3' // yarn add d3 @types/d3

const JSXCanvas = () /* or ( props : IJSXCanvasProps ) */ => {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)

  useEffect(() => {
    draw()
  })

  const draw = () => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (context) {
      const { devicePixelRatio: ratio = 1 } = window
      context.scale(ratio, ratio)

      context.fillStyle = 'tomato'
      context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }
  }

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  )
}

/*
interface IJSXCanvasProps {
  // TODO
}
*/

export default JSXCanvas

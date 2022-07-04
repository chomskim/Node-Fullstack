/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/HelloJSXData/HelloJSXData.tsx

Created with;
$ npx generate-react-cli component HelloJSXData --type=d3

*/

import React, { useState, useEffect, RefObject } from 'react'
import './HelloJSXData.scss'
import * as d3 from 'd3' // yarn add d3 @types/d3

const HelloJSXData = (props: IHelloJSXDataProps) => {
  return (
    <div className="HelloJSXData">
      {props.data.map((d, index) => (
        <p key={`key-${d}`}>jsx {d}</p>
      ))}
    </div>
  )
}

interface IHelloJSXDataProps {
  data: string[]
}

export default HelloJSXData

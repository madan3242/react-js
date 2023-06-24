import React, { useState } from 'react'

const HoverIncrease = (props) => {
    const [fontSize, setFontSize] = useState(10);
    const { counter, incrementCounter} = props;
    return (<>
      <div>
          <button onMouseOver={() =>setFontSize((size) => size + 1)}>Increase with click</button>
          <p style={{ fontSize }}>Size of font in onClick: {fontSize}</p>
      </div>
      <div>
        <button onMouseOver={incrementCounter}>Increment counter</button>
        <p>Value of 'counter' in HoverIncrease: {counter}</p>
      </div>
    </>
    )
}

export default HoverIncrease
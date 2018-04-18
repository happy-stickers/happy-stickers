import React from 'react';

const colors = ['DodgerBlue', 'Tomato', 'HotPink', 'MediumSeaGreen', 'SlateBlue', 'Violet', 'Gold', 'Coral', 'Aqua', 'Crimson', 'Wheat', 'Fuchsia']

const Rainbowed = ({children, offset=10, height=30, style={}, ...props}) => {
  var shadows = [];
  var c = 0;
  for(var i = 1; i < height+1; i++) {
    shadows.push(`${(i)*offset}px ${(i)*offset}px 0px ${colors[i % colors.length]}`);
  }
  style['textShadow'] = shadows.join(', ');
  return <div style={style} {...props}>{children}</div>

}


export default Rainbowed

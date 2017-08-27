import * as React from 'react';

function Image(props = {}) {
  let { img } = props;
  console.log("img--->", img);
  return (
    <div>
      <img src={img}/>
    </div>
  )
}

export default Image;
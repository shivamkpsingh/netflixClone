import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card'
import './index.css'
import Sdata from './Sdata'


function ncard(val){
  return(
    <Card
    imgsrc={val.imgsrc}
    title={val.title}
    span={val.span}
    link={val.link} />
  );
}

ReactDom.render(
  <React.Fragment>
    <div className="myCard">
      {Sdata.map(ncard)};
    </div>
    <div className="myCard">
    {Sdata.map(ncard)};
    </div>
  </React.Fragment>,
  document.getElementById('root')
)
import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card'
import './index.css'
import Sdata from './Sdata'


ReactDom.render(
  <React.Fragment>
    <h1 className="heading_style">List of  5 netflix series</h1>
    <div className="myCard">
      <Card
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        span={Sdata[0].span}
        link={Sdata[0].link} />
      <Card
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        span={Sdata[1].span}
        link={Sdata[1].link} />
      <Card
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        span={Sdata[2].span}
        link={Sdata[2].link} />
    </div>
    <div className="myCard">
      <Card
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        span={Sdata[3].span}
        link={Sdata[3].link} />
      <Card
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        span={Sdata[4].span}
        link={Sdata[4].link} />
    </div>
  </React.Fragment>,
  document.getElementById('root')
)
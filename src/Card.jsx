import React from 'react';


function Card(props) {
    return (
        <React.Fragment>
                <div className="card">
                    <img src={props.imgsrc} alt="myimage" className="card__img" />
                    <div className="card__info">
                        <span className="card__category">{props.title}</span>
                        <h3 className="card__title">{props.span}</h3>
                        <a href={props.link} >
                            <button>watch now</button>
                        </a>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Card;
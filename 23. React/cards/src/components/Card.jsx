import React from "react";

function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <p>{props.id}</p>
                    <h2 className="name">{props.name}</h2>
                    <img className="circle-img"
                        src={props.imageSrc}
                        alt="avatar_img"
                    />
                </div>
                <div className="bottom">
                    <p className="info">{props.tel}</p>
                    <p className="info">{props.email}</p>
                </div>
            </div>
        </div>
    );
}

export default Card
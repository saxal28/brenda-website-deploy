import React from 'react';
const colors = ['black','red','darkred','green','limegreen','orange']

const getColor = (color) => color && color.includes(color) ? `${color}` : "";
// const border = border => !border &&

export class Card extends React.Component {

    render() {

        const { image, title, body, color, noBorder } = this.props;

        return (
            <div className={`card ${getColor(color)}`}>
                <div className="card-image">
                    <img src={image} />
                </div>
                <div className="card-content">
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}


// $black: #333;
// $blue: #524fff;
//
// $red: #d82d2d;
// $darkred: #b02121;
//
// $green: #00a950;
// $limegreen: #7ddd4d;
//
// $orange: #e79e43;
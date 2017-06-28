import React from 'react';
const colors = ['black','red','darkred','green','limegreen','orange', 'transparent-black']


export class Card extends React.Component {

    render() {

        const { image, title, body, color, form } = this.props;
        const background = image ? {background: `url(${image})`} : (color ? {background: color} : {})

        return (
            <div className={`card`} style={background}>
                <div className="card-content">
                    {title && <h2>{title}</h2>}
                    {body && <p>{body}</p>}

                    {form && form.map(input => {
                        return (
                            <div key={input.label} className="input-container">
                                <h3>{input.label}</h3>
                                <input
                                    onChange={input.onChange}
                                    value={input.value ? input.value : ""}
                                    type={input.type}
                                />
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}
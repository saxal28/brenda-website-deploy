import React from 'react';
const colors = ['black','red','darkred','green','limegreen','orange']


export class Card extends React.Component {

    render() {

        const { image, title, body, color, form } = this.props;
        const background = image ? {background: `url(${image})`} : (color ? {background: color} : {})

        console.log( !!image, !!color, background, form[0] )

        return (
            <div className={`card`} style={background}>
                <div className="card-content">
                    <h2>{title}</h2>
                    <p>{body}</p>

                    {form && form.map(input => {
                        return (
                            <div key={input.label}>
                                <h3>{input.label}</h3>
                                <input
                                    onChange={input.onChange}
                                    value={input.value ? input.value : ""}
                                />
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}
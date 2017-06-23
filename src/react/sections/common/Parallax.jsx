import React from 'react'

export default class Parallax extends React.Component {
    render() {

        const {image, children} = this.props;
        // const background = {background: `url(${image})`, backgroundAttachment: 'fixed', backgroundSize:'cover'};

        return (
            <div>

                <div className="parallax-container">
                    {children}
                </div>

            </div>
        )
    }
}
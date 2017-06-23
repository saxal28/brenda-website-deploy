import React from 'react'

export default class Slideshow extends React.Component {

    state = { image: images[0] }

    componentWillMount() {
        setTimeout(() => {
            this.setState({image: images[1]})
        }, 5000)

        setTimeout(() => {
            this.setState({image: images[0]})
        }, 10000)

        setTimeout(() => {
            this.setState({image: images[1]})
        }, 15000)
    }

    render() {

        const { image } = this.state;
        const { children } = this.props;
        const background = {background: `url(${image})`, backgroundAttachment: 'fixed', backgroundSize:'cover'};

        return (
            <div>

                <div className="parallax-container animated slideInRight" style={background}>
                    <div className="slide" />
                </div>

            </div>
        )
    }
}

const images = [
    'https://wallpaperscraft.com/image/minimalism_sky_clouds_sun_mountains_lake_landscape_95458_1920x1080.jpg',
    'http://www.androidguys.com/wp-content/uploads/2016/05/Poly-Lakeside.jpg'
]
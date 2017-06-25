import React from "react";
import firebase from "firebase";
import _ from "lodash";
import { observer } from "mobx-react";
import {ImageStore} from "../../stores/ImageStore";
import {UploadButton} from "./common/UploadButton";

const store = new ImageStore();

export default observer(class GalleryView extends React.Component {

    state = { currentImage: 0 }

    componentWillMount() {

        firebase.database().ref("images").on("value", snapshot => {
            store.content = snapshot.val();
        })
    }

    nextImage(values) {

        const { currentImage } = this.state;
        if(currentImage < values.length - 1) {
            let newImageIndex = currentImage + 1;
            this.setState({currentImage: newImageIndex})
        } else {
            this.setState({currentImage: 0})
        }
    }

    previousImage(values) {
        const { currentImage } = this.state;
        if(currentImage > 0) {
            let newImageIndex = currentImage - 1;
            this.setState({currentImage: newImageIndex})
        } else {
            this.setState({currentImage: values.length - 1})
        }
    }

    render() {

      const {currentImage} = this.state;

      let { content } = store;
      const uids = _.keys(content);
      const values = _.values(content);
      values.map((x, index) => {
          x.uid = uids[index];
      })

      const url = values.length > 0 ? values[0].url : "";
        console.log(values)

        return (
            <div className="main-section gallery">

                <div className="main-section half-size ">
                    {/*<h1>Gallery</h1>*/}
                </div>

                <div className="gallery-section">
                    {values.length> 0 && <img src={values[currentImage].url} />}
                    <div className="gallery-button previous" onClick={() => this.previousImage(values)}>-</div>
                    <div className="gallery-button next" onClick={() => this.nextImage(values)}>+</div>
                </div>

            </div>
        )
    }
})


const imageStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}
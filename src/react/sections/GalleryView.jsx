import React from "react";
import firebase from "firebase";
import _ from "lodash";
import { observer } from "mobx-react";
import {ImageStore} from "../../stores/ImageStore";
import {UploadButton} from "./common/UploadButton";

const store = new ImageStore();

export default observer(class GalleryView extends React.Component {

    componentWillMount() {

        firebase.database().ref("images").on("value", snapshot => {
            store.content = snapshot.val();
        })
    }

    render() {

      let { content } = store;
      const uids = _.keys(content);
      const values = _.values(content);
      values.map((x, index) => {
          x.uid = uids[index];
      })

      console.log(values)

        return (
            <div>

                <div className="main-section half-size" >
                    <h1>Gallery</h1>
                    <UploadButton store={store}/>
                </div>

                <div className="gallery-section">
                    {values && values.map(x => <img src={`${x.image.preview}`} />)}
                </div>
            </div>
        )
    }
})
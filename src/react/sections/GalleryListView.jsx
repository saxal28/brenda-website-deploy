import React from "react";
import firebase from "firebase";
import _ from "lodash";
import { observer } from "mobx-react";
import {ImageStore} from "../../stores/ImageStore";
import {UploadButton} from "./common/UploadButton";
import {Card} from "./common/Card";

const store = new ImageStore();

export default observer(class GalleryListView extends React.Component {

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

                <div className="main-section gallery">

                        <div className="card-row">

                            {values && values.map((picture, index) => {
                                return (
                                    <Card
                                        key={index}
                                        image={picture.url}
                                    />
                                )
                            })}

                        </div>

                </div>

                {/*<div className="footer-section">*/}
                    {/*<UploadButton store={store}/>*/}

                    {/*<form onSubmit={(e) => store.addImage(e)}>*/}
                    {/*<input type="text" onChange={(e) => store.updateImage("url", e)}/>*/}
                    {/*</form>*/}
                {/*</div>*/}
            </div>
        )
    }
})


const imageStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}
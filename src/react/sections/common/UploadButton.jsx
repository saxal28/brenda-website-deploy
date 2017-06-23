import React from 'react'
import Dropzone from "../../react-dropzone/src/index.jsx";

export class UploadButton extends React.Component {

    state = { files: [] }

    onDrop(files) {
        const { store } = this.props;
        console.log(files);
        // this.setState({files})
        // store.addImages(files);
    }

    render() {


        return (
            <div>
                <Dropzone onDrop={this.onDrop.bind(this)} />
                {this.state.files.map(x => <p>{x.name} - {x.size} - {x.preview}</p>)}
            </div>
        )
    }
}
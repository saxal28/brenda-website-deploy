import { observable, extendObservable } from "mobx";
import firebase from 'firebase';

export class ImageStore {

    constructor() {
        extendObservable(this, {
            content: []
        })
    }

    addImages(images) {

        images.forEach(image => {
            firebase.database().ref("images").push({
                image,
                category: "default",
                description: ""
            })
        })
    }

}
import { observable, action } from 'mobx';

export class ContactForm {

   constructor() {
       this.store = {
           @observable firstName   : "",
           @observable lastName    : "",
           @observable phoneNumber : "",
           @observable email       : "",
       }
   }

   @action setContactInfo({field, value}) {
       this.store[field] = value;
   }

   @action handleSubmit(e) {
       e.preventDefault();

       console.log(this.store)

   }

}
import { observable, action, extendObservable } from 'mobx';

export class ContactForm {

   constructor() {

       extendObservable(this, {
           firstName   : "test",
           lastName    : "",
           phoneNumber : "",
           email       : "",
       })

   }

   get firstName() { return this.firstName}
   // get lastName() { return this.}
   // get firstName() { return this[field]}
   // get firstName() { return this[field]}

   setContactInfo(field, value) {
       console.log(field)
       this[field] = value;
   }

   handleSubmit(e) {
       e.preventDefault();

       console.log(this.store)

   }

}
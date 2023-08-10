import { Component } from '@angular/core';
import { IContact } from 'src/app/models/contact';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
  selector: 'app-add-contact-page',
  templateUrl: './add-contact-page.component.html',
  styleUrls: ['./add-contact-page.component.less']
})
export class AddContactPageComponent {
  public name: string = '';
  
  public email: string = '';
  
  public phone: string = '';

  constructor(private _addressBookService: AddressBookService) { }

  public save() {
    // Save contact
    const contact: IContact = {
      name: this.name,
      email: this.email,
      phone: this.phone
    };

    this._addressBookService.add(contact, (createdContact) => {
      alert(`Contact ${createdContact.id}`);
    });

    // this._addressBookService
    //   .addAsync(contact)
    //   .subscribe(createdContact => {
    //     alert(`Contact ${createdContact.id}`);
    //   });
  }
}

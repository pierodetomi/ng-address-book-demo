import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/models/contact';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {
  public contacts: IContact[] = [];

  public isLoading = true;

  public highlightedContactId?: number;

  constructor(/*private _router: Router, */private _activatedRoute: ActivatedRoute, private _addressBookService: AddressBookService) { }

  public ngOnInit(): void {
    this._activatedRoute.params
      .subscribe(params => {
        this.highlightedContactId = +params['highlightedContactId'];
      });

    this._loadData();
  }

  public delete(contact: IContact) {
    this._addressBookService.delete(contact.id, () => {
      this._loadData(() => {
        alert('Successfully deleted contact ' + contact.name + '!');
      });
    });
  }

  private _loadData(callback: () => void = null) {
    this.isLoading = true;

    this._addressBookService
      .getAll()
      .subscribe((contacts) => {
        this.contacts = contacts;
        this.isLoading = false;

        if (callback) {
          setTimeout(() => {
            callback();
          }, 0);
        }
      });
  }

  // public addNew() {
  //   // Navigate to /contacts/add route
  //   this._router.navigate(['/contacts/add']);
  // }
}

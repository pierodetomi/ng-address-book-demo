import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IContact } from 'src/app/models/contact';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
  selector: 'app-edit-contact-page',
  templateUrl: './edit-contact-page.component.html',
  styleUrls: ['./edit-contact-page.component.less']
})
export class EditContactPageComponent implements OnInit {
  public id?: number;

  public form: FormGroup;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _addressBookService: AddressBookService
  ) { }

  public ngOnInit(): void {
    this._createFormGroup();
    this._subscribeToRouteParamsChange();
  }

  public save() {
    // Save contact
    const contact = this.form.value as IContact;
    contact.id = this.id;

    const request$: Observable<IContact> = this.id
      ? this._addressBookService.updateAsync(contact)
      : this._addressBookService.addAsync(contact);

    request$.subscribe(addedOrUpdatedContact => {
      this._router.navigate([`/contacts/${addedOrUpdatedContact.id}`]);
    });
  }

  private _createFormGroup() {
    this.form = this._formBuilder.group({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, Validators.required)
    });
  }

  private _subscribeToRouteParamsChange() {
    this._activatedRoute.paramMap
      .subscribe(paramMap => {
        if (paramMap.has('id')) {
          this.id = +paramMap.get('id');

          this._addressBookService.getById(this.id, contact => {
            this.form.setValue(contact, { emitEvent: true });
          });
        }
      });
  }
}

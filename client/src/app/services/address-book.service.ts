import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IContact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  private static _endpoint = 'http://localhost:3000/contacts';

  constructor(private _http: HttpClient) { }

  public getAll(): Observable<IContact[]> {
    return this._http.get<IContact[]>(AddressBookService._endpoint);
  }

  public getById(id: number, callback: (contact: IContact) => void): void {
    this._http
      .get<IContact>(`${AddressBookService._endpoint}/${id}`)
      .subscribe(contact => {
        callback(contact);
      });
  }

  public add(contact: IContact, callback: (contact: IContact) => void): void {
    this._http
      .post<IContact>(AddressBookService._endpoint, contact)
      .subscribe(contact => {
        callback(contact);
      });
  }

  public delete(id: number, callback: () => void): void {
    this._http
      .delete(`${AddressBookService._endpoint}/${id}`)
      .subscribe(callback);
  }

  public addAsync(contact: IContact): Observable<IContact> {
    return this._http.post<IContact>(AddressBookService._endpoint, contact);
  }

  public updateAsync(contact: IContact): Observable<IContact> {
    return this._http.put<IContact>(AddressBookService._endpoint, contact);
  }
}

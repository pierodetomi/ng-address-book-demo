import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuConfigurationService {
  private _mockMenuItems: any[] = [
    { label: 'Home', url: '/' },
    { label: 'Contacts List', url: '/contacts' },
    { label: 'About Us', url: '/about' },
    { label: 'Help', url: '/help' }
  ];

  constructor() { }

  public getConfiguration() {
    return this._mockMenuItems;
  }
}

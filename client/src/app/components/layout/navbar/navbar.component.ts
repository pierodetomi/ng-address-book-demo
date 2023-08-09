import { Component, OnInit } from '@angular/core';
import { MenuConfigurationService } from 'src/app/services/menu-configuration.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  // encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  public menuItems: any[];

  constructor(private _service: MenuConfigurationService) { }

  public ngOnInit(): void {
    this.menuItems = this._service.getConfiguration();
  }
}

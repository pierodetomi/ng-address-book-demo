import { Component, OnInit } from '@angular/core';
import { KeyboardService } from 'src/app/services/keyboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public message: string = null;

  constructor(private _keyboard: KeyboardService) { }

  public ngOnInit(): void {
    this._keyboard.keyPressed$
      .subscribe(keyCode => {
        this.message = `Key ${keyCode} has been pressed!`;
      });
  }
}

import { Injectable } from '@angular/core';
import { Observable, share, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {
  private _keyPressedSubject = new Subject<number>();

  private _keyPressed$: Observable<number>;

  public get keyPressed$(): Observable<number> {
    return this._keyPressed$;
  }

  constructor() {
    this._keyPressed$ = this._keyPressedSubject.asObservable().pipe(share());
  }

  public notifyKeyPressed(keyCode: number) {
    this._keyPressedSubject.next(keyCode);
  }
}

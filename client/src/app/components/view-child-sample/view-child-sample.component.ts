import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { KeyboardService } from 'src/app/services/keyboard.service';

@Component({
  selector: 'app-view-child-sample',
  templateUrl: './view-child-sample.component.html',
  styleUrls: ['./view-child-sample.component.less']
})
export class ViewChildSampleComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, DoCheck {
  private _fakePollingInterval: any;

  @ViewChild('paragraph') public paragraph: ElementRef;

  @ViewChild('confirmButton') public confirmButton: ElementRef;

  @Input() public testInput = 'test value';

  @Input() public otherInput = 'other value';

  constructor(private _keyboard: KeyboardService) {
    this.testInput = 'Let\' try changing this value ...';
    console.log('Component CTOR');

    this._fakePollingInterval = setInterval(() => {
      console.log('POLLING...');
    }, 5000);
  }

  public ngOnInit(): void {
    console.log('Component ngOnInit');
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('Component ngOnChanges');

    const testInputChanges = changes['testInput'];
    const otherInputChanges = changes['otherInput'];

    if (testInputChanges?.currentValue !== testInputChanges?.previousValue) {
      console.log(`Test Input changed. Current Value: ${testInputChanges.currentValue}`);
    }

    if (otherInputChanges?.currentValue !== otherInputChanges?.previousValue) {
      console.log(`Other Input changed. Current Value: ${otherInputChanges.currentValue}`);
    }
  }

  public ngOnDestroy(): void {
    console.log('*** COMPONENT DESTROYED!!!');

    clearInterval(this._fakePollingInterval);
    console.log('*** POLLING TIMER CLEARED!!!');
  }

  public ngAfterContentInit(): void {
    console.log('Component ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    console.log('Component ngAfterContentChecked');
  }

  public ngAfterViewInit(): void {
    console.log('Component ngAfterViewInit');

    this.confirmButton.nativeElement.addEventListener('click', () => {
      this.paragraph.nativeElement.innerHTML = 'Ciao ciao';
    });
  }

  public ngDoCheck(): void {
    console.log('Component ngDoCheck');
  }

  @HostListener('window:keypress', ['$event'])
  public addParagraph(event: KeyboardEvent) {
    this.paragraph.nativeElement.innerHTML += '<br />New line';
    this.testInput = 'Value changed!';

    this._keyboard.notifyKeyPressed(event.which);
  }
}

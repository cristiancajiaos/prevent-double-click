import { Directive, EventEmitter, Input, Output, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[appPreventDoubleClick]'
})
export class PreventDoubleClickDirective implements OnInit, OnDestroy {

  /* Idea taken from: https://stackoverflow.com/questions/51390476/how-to-prevent-double-click-in-angular */

  @Input() throttleTime = 500;

  @Output() throttledClick = new EventEmitter();

  private clicks = new Subject();
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscription = this.clicks.pipe(
      throttleTime(this.throttleTime)
    ).subscribe(event => this.emitThrottledClick(event));
  }

  public emitThrottledClick(event: any): void {
    this.throttledClick.emit(event);
  }

  @HostListener('click', ['$event']) clickEvent(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
